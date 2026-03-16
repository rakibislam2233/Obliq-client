import { PUBLIC_ROUTES, ROUTE_PERMISSION_MAP } from '@/utils/permissions';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if route is public
  const isPublic = PUBLIC_ROUTES.some(route => pathname.startsWith(route));
  if (isPublic) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  const accessToken = request.cookies.get('accessToken');
  
  if (!accessToken) {
    // No token, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check if user has required permission for this route
  const requiredPermission = ROUTE_PERMISSION_MAP[pathname];
  
  if (requiredPermission) {
    const permissionsCookie = request.cookies.get('userPermissions')?.value;
    
    if (!permissionsCookie) {
      // No permissions stored, redirect to login to refresh
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const userPermissions = JSON.parse(permissionsCookie) as string[];
      
      if (!userPermissions.includes(requiredPermission)) {
        // User doesn't have required permission, redirect to 403
        return NextResponse.redirect(new URL('/403', request.url));
      }
    } catch {
      // Failed to parse permissions, redirect to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
