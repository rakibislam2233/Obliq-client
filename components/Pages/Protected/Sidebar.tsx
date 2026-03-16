"use client";

import { usePermissions } from "@/lib/usePermissions";
import logo from "@/public/asset/logo/logo.png";
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
import Image from "next/image";
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

export default function Sidebar() {
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
    permissions.hasPermission(link.requiredAtom),
  );

  return (
    <div
      className={`${
        sidebarOpen ? "w-72" : "w-24"
      } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col overflow-y-auto shadow-sm`}
    >
      {/* Logo/Header */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between gap-3">
        {sidebarOpen && (
          <Image src={logo} alt="Obliq" className="h-8 w-auto" priority />
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        {visibleLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors group"
            title={sidebarOpen ? "" : link.label}
          >
            <span className="flex-shrink-0 text-gray-400 group-hover:text-orange-600">
              {link.icon}
            </span>
            {sidebarOpen && (
              <span className="text-sm font-medium">{link.label}</span>
            )}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors group"
          title={sidebarOpen ? "" : "Logout"}
        >
          <LogOut
            size={20}
            className="text-gray-400 group-hover:text-red-600"
          />
          {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}
