"use client";

import { BarChart3, CheckSquare, Target, Users } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      label: "Total Users",
      value: "2,543",
      change: "+12.5%",
      icon: Users,
      color: "orange",
    },
    {
      label: "Active Leads",
      value: "1,429",
      change: "+8.2%",
      icon: Target,
      color: "blue",
    },
    {
      label: "Pending Tasks",
      value: "324",
      change: "-5.3%",
      icon: CheckSquare,
      color: "green",
    },
    {
      label: "Total Revenue",
      value: "$182,400",
      change: "+23.1%",
      icon: BarChart3,
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
      },
    };
    return colors[color] || colors.orange;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your business metrics and performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colors = getColorClasses(stat.color);
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-600 text-sm font-medium">{stat.label}</h3>
                <div className={`${colors.bg} p-3 rounded-lg`}>
                  <Icon className={`${colors.text} w-5 h-5`} />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm font-semibold ${
                  stat.change.startsWith("+") ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900">Revenue Trend</h2>
            <p className="text-sm text-gray-600 mt-1">Last 12 months performance</p>
          </div>
          <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <p className="text-center">
              <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
              Chart visualization
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="pb-4 border-b border-gray-100 last:border-b-0">
                <p className="text-sm font-medium text-gray-900">New user registered</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Quick Actions</h3>
          <p className="text-orange-100 text-sm mb-6">Get started with these common tasks</p>
          <div className="space-y-2">
            <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm text-left">
              → Create New User
            </button>
            <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm text-left">
              → Add New Lead
            </button>
            <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm text-left">
              → Create Task
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-600 text-sm mb-6">Check our documentation or contact support</p>
          <div className="space-y-2">
            <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors text-sm text-left">
              → View Documentation
            </button>
            <button className="w-full border border-gray-200 hover:bg-gray-50 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors text-sm text-left">
              → Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
