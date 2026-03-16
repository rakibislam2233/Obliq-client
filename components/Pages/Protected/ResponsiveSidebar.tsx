"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
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
    Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

function SidebarNav() {
  const router = useRouter();
  const permissions = usePermissions();

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
    <>
      <SidebarContent>
        {/* Logo */}
        <div className="px-2 py-4 border-b border-gray-200">
          <Image src={logo} alt="Obliq" className="h-8 w-auto" priority />
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {visibleLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton asChild>
                    <Link href={link.href} className="flex items-center gap-3">
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Logout Button */}
      <div className="border-t border-gray-200 px-4 py-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
}

export default function ResponsiveSidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex h-screen w-72 flex-col bg-white border-r border-gray-200 shadow-sm">
        <SidebarNav />
      </div>

      {/* Mobile/Tablet Sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="fixed bottom-6 right-6 p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-lg z-40 lg:hidden">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <div className="h-full bg-white flex flex-col">
              <SidebarNav />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
