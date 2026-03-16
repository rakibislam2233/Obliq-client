"use client";

export default function Topbar() {
  return (
    <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Obliq Platform</h2>
        <p className="text-sm text-gray-500">Welcome back to your dashboard</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
          U
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900">User Name</p>
          <p className="text-xs text-green-600 font-medium">● Online</p>
        </div>
      </div>
    </div>
  );
}
