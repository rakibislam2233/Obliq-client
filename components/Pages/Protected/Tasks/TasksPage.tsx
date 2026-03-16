"use client";

import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function TasksPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Tasks</h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">Manage your team tasks and projects</p>
        </div>
        <Link
          href="/tasks/create"
          className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-3 sm:px-6 sm:py-3 rounded-lg transition-colors text-xs sm:text-sm whitespace-nowrap"
        >
          <Plus size={18} className="sm:block hidden" />
          <Plus size={16} className="sm:hidden block" />
          Create Task
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-xs sm:text-sm"
            />
          </div>
          <select className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-xs sm:text-sm">
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm">Title</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm hidden sm:table-cell">Assigned To</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm">Priority</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm hidden md:table-cell">Due Date</th>
                <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm hidden lg:table-cell">Status</th>
                <th className="text-center py-3 sm:py-4 px-3 sm:px-6 text-gray-700 font-semibold text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td colSpan={6} className="py-8 sm:py-12 text-center text-gray-500">
                  <p className="text-sm sm:text-lg">No tasks found</p>
                  <p className="text-xs sm:text-sm mt-1">Create your first task to get started</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
