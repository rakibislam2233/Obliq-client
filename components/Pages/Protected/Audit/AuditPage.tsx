"use client";

import { Search } from "lucide-react";

export default function AuditPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Audit Log</h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">Monitor system activity and track all changes</p>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search activity..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-xs sm:text-sm"
            />
          </div>
          <select className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-xs sm:text-sm">
            <option>All Actions</option>
            <option>Create</option>
            <option>Update</option>
            <option>Delete</option>
            <option>Login</option>
          </select>
        </div>
      </div>

      {/* Audit Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm">User</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm">Action</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm hidden sm:table-cell">Resource</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm hidden md:table-cell">IP Address</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm hidden lg:table-cell">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td colSpan={5} className="py-8 sm:py-12 text-center text-gray-500">
                  <p className="text-sm sm:text-lg">No activities found</p>
                  <p className="text-xs sm:text-sm mt-1">Activity logs will appear here</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
