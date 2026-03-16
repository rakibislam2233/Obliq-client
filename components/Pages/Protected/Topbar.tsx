"use client";

export default function Topbar() {
  return (
    <div className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between shadow-sm">
      <div className="min-w-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">Obliq Platform</h2>
        <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Welcome back to your dashboard</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 ml-4 sm:ml-0 flex-shrink-0">
        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
          U
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-900">User Name</p>
          <p className="text-xs text-green-600 font-medium">● Online</p>
        </div>
      </div>
    </div>
  );
}
