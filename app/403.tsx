import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Forbidden() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-md w-full mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Status Code */}
          <div>
            <h1 className="text-7xl font-bold text-gray-900">403</h1>
            <p className="text-sm text-gray-500 mt-1 tracking-widest uppercase">
              Access Forbidden
            </p>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Access Denied
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You do not have permission to access this resource. Contact your 
              manager or administrator if you believe this is incorrect.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-4">
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">
                Back to Dashboard
              </Button>
            </Link>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full">
                Go Home
              </Button>
            </Link>
          </div>

          {/* Divider */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Error Code: FORBIDDEN_403
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
