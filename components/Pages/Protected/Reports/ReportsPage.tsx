"use client";

import { Download, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">Analytics and performance metrics</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-3 sm:px-6 sm:py-3 rounded-lg transition-colors text-xs sm:text-sm whitespace-nowrap">
          <Download size={18} className="sm:block hidden" />
          <Download size={16} className="sm:hidden block" />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 text-xs sm:text-sm font-medium">This Month</h3>
            <TrendingUp className="text-green-600" size={16} />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">$12,450</p>
          <p className="text-xs sm:text-sm text-green-600 font-medium mt-2">+12.5% vs last month</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm">
          <h3 className="text-gray-600 text-xs sm:text-sm font-medium mb-4">Active Users</h3>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">2,543</p>
          <p className="text-xs sm:text-sm text-orange-600 font-medium mt-2">+8.2% increase</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm">
          <h3 className="text-gray-600 text-xs sm:text-sm font-medium mb-4">Conversion Rate</h3>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">3.2%</p>
          <p className="text-xs sm:text-sm text-red-600 font-medium mt-2">-1.2% vs avg</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Monthly Revenue</h2>
          <div className="h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <p className="text-center text-sm sm:text-base">
              <TrendingUp className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 opacity-50" />
              Chart visualization
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">User Growth</h2>
          <div className="h-48 sm:h-64 lg:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <p className="text-center text-sm sm:text-base">
              <TrendingUp className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 opacity-50" />
              Chart visualization
            </p>
          </div>
        </div>
      </div>

      {/* Data Tables */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Top Performing Channels</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 sm:py-4 px-3 sm:px-0 text-gray-700 font-semibold text-xs sm:text-sm">Channel</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-0 text-gray-700 font-semibold text-xs sm:text-sm">Visitors</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-0 text-gray-700 font-semibold text-xs sm:text-sm hidden sm:table-cell">Conversions</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-0 text-gray-700 font-semibold text-xs sm:text-sm">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td colSpan={4} className="py-8 sm:py-12 text-center text-gray-500">
                  <p className="text-sm sm:text-lg">No report data available</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
