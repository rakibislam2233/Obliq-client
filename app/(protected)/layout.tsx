"use client";

import { usePermissions } from "@/lib/usePermissions";
import {
    BarChart3,
    CheckSquare,
    LayoutDashboard,
    LogOut,
    Menu,
    Settings,
    Shield,
    Target,
    Users,
    X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SidebarLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  requiredAtom: string;
}

const sidebarLinks: SidebarLink[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    requiredAtom: "view:dashboard",
  },
  {
    href: "/users",
    label: "Users",
    icon: <Users size={20} />,
    requiredAtom: "view:users",
  },
  {
    href: "/leads",
    label: "Leads",
    icon: <Target size={20} />,
    requiredAtom: "view:leads",
  },
  {
    href: "/tasks",
    label: "Tasks",
    icon: <CheckSquare size={20} />,
    requiredAtom: "view:tasks",
  },
  {
    href: "/reports",
    label: "Reports",
    icon: <BarChart3 size={20} />,
    requiredAtom: "view:reports",
  },
  {
    href: "/audit",
    label: "Audit Log",
    icon: <Shield size={20} />,
    requiredAtom: "view:audit",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <Settings size={20} />,
    requiredAtom: "view:settings",
  },
];

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const permissions = usePermissions();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (response.ok) {
        router.push("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      router.push("/login");
    }
  };

  // Filter navlinks based on user permissions
  const visibleLinks = sidebarLinks.filter((link) =>
    permissions.hasPermission(link.requiredAtom)
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gray-900 text-white transition-all duration-300 flex flex-col overflow-y-auto`}
      >
        {/* Logo/Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-blue-400">Obliq</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-gray-800 rounded"
          >
            {sidebarOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2">
          {visibleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              title={sidebarOpen ? "" : link.label}
            >
              <span className="flex-shrink-0">{link.icon}</span>
              {sidebarOpen && <span className="text-sm font-medium">{link.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-red-400 hover:text-red-300"
            title={sidebarOpen ? "" : "Logout"}
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-gray-800 font-semibold">Obliq Platform</h2>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">User Name</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
