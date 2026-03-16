"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowDown, Bell, ChevronDown, Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-white px-4 lg:px-8 py-2 flex items-center justify-between rounded-full">
      {/* Task List */}
      <h1>Tasks</h1>
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
        <input
          type="text"
          placeholder="Search tasks..."
          className="pl-10 pr-4 py-2 border rounded-full focus:outline-none"
        />
      </div>
      {/* User Profile */}
      <div className="flex items-center gap-3">
        <Bell className="text-gray-600" />
        <div className="flex gap-1 bg-gray-100 rounded px-2 py-1 items-center">
          <div>
            <h1 className="text-xs">Category</h1>
            <p className="text-sm">Client Unit</p>
          </div>
          <ChevronDown className="text-gray-600 size-4" />
        </div>
      </div>
    </div>
  );
}
