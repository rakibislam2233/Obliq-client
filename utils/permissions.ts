import { deleteCookie, getCookie, setCookie } from "./tokenHandlers";

// Permission management utilities
export async function storeUserPermissions(
  permissions: string[],
): Promise<void> {
  const isProduction = process.env.NODE_ENV === "production";

  await setCookie("userPermissions", JSON.stringify(permissions), {
    secure: isProduction,
    httpOnly: false,
    maxAge: 3600 * 24,
    path: "/",
    sameSite: "lax",
  });
}

//Retrieve stored user permissions
export async function getUserPermissions(): Promise<string[]> {
  try {
    const permissionsCookie = await getCookie("userPermissions");
    if (!permissionsCookie) {
      return [];
    }
    return JSON.parse(permissionsCookie) as string[];
  } catch {
    return [];
  }
}

//Check if user has a specific permission atom
export async function hasPermission(requiredAtom: string): Promise<boolean> {
  const permissions = await getUserPermissions();
  return permissions.includes(requiredAtom);
}

//Check multiple permissions (user needs ALL of them)
export async function hasAllPermissions(atoms: string[]): Promise<boolean> {
  const permissions = await getUserPermissions();
  return atoms.every((atom) => permissions.includes(atom));
}

/**
 * Check multiple permissions (user needs ANY of them)
 */
export async function hasAnyPermission(atoms: string[]): Promise<boolean> {
  const permissions = await getUserPermissions();
  return atoms.some((atom) => permissions.includes(atom));
}

/**
 * Clear user permissions (on logout)
 */
export async function clearUserPermissions(): Promise<void> {
  await deleteCookie("userPermissions");
}

/**
 * Route to permission atom mapping
 */
export const ROUTE_PERMISSION_MAP: Record<string, string> = {
  "/dashboard": "view:dashboard",
  "/users": "view:users",
  "/users/create": "create:users",
  "/leads": "view:leads",
  "/leads/create": "create:leads",
  "/tasks": "view:tasks",
  "/tasks/create": "create:tasks",
  "/reports": "view:reports",
  "/audit": "view:audit",
  "/settings": "manage:settings",
};

/**
 * Get required permission for a route
 */
export function getRequiredPermissionForRoute(pathname: string): string | null {
  return ROUTE_PERMISSION_MAP[pathname] || null;
}

/**
 * Public routes that don't require authentication
 */
export const PUBLIC_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/verify-otp",
  "/",
];

/**
 * Check if a route is public
 */
export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some((route) => pathname.startsWith(route));
}
