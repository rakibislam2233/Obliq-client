"use client";

import { Download, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-2">Analytics and performance metrics</p>
        </div>
        <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          <Download size={20} />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-600 text-sm font-medium">This Month</h3>
            <TrendingUp className="text-green-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">$12,450</p>
          <p className="text-sm text-green-600 font-medium mt-2">+12.5% vs last month</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-gray-600 text-sm font-medium mb-4">Active Users</h3>
          <p className="text-3xl font-bold text-gray-900">2,543</p>
          <p className="text-sm text-orange-600 font-medium mt-2">+8.2% increase</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-gray-600 text-sm font-medium mb-4">Conversion Rate</h3>
          <p className="text-3xl font-bold text-gray-900">3.2%</p>
          <p className="text-sm text-red-600 font-medium mt-2">-1.2% vs avg</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Monthly Revenue</h2>
          <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <p className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
              Chart visualization
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">User Growth</h2>
          <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <p className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
              Chart visualization
            </p>
          </div>
        </div>
      </div>

      {/* Data Tables */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Top Performing Channels</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-4 px-0 text-gray-700 font-semibold text-sm">Channel</th>
                <th className="text-left py-4 px-0 text-gray-700 font-semibold text-sm">Visitors</th>
                <th className="text-left py-4 px-0 text-gray-700 font-semibold text-sm">Conversions</th>
                <th className="text-left py-4 px-0 text-gray-700 font-semibold text-sm">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td colSpan={4} className="py-12 text-center text-gray-500">
                  <p className="text-lg">No report data available</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
