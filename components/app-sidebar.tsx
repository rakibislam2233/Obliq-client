"use client";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from "@/components/ui/sidebar";
import { usePermissions } from "@/lib/usePermissions";
import logo from "@/public/asset/logo/logo.png";
import {
    BarChart3,
    CheckSquare,
    ChevronLeft,
    LayoutDashboard,
    LogOut,
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

export function AppSidebar() {
  const router = useRouter();
  const permissions = usePermissions();
  const { toggleSidebar } = useSidebar();

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
    <Sidebar collapsible="icon">
      {/* Sidebar Header - Logo & Toggle */}
      <SidebarHeader className="border-b border-gray-200 flex items-center justify-between px-2 py-4">
        <Image 
          src={logo} 
          alt="Obliq" 
          className="h-8 w-auto group-data-[collapsible=icon]:h-6"
          priority 
        />
        <button
          onClick={toggleSidebar}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors shrink-0 group-data-[collapsible=icon]:hidden"
          title="Toggle Sidebar (Ctrl+B)"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      </SidebarHeader>

      {/* Sidebar Content - Navigation */}
      <SidebarContent className="flex flex-col flex-1">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {visibleLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton asChild>
                    <Link href={link.href}>
                      {link.icon}
                      <span className="group-data-[collapsible=icon]:hidden">
                        {link.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer - Logout */}
      <SidebarFooter className="border-t border-gray-200">
        <SidebarMenuButton asChild>
          <button
            onClick={handleLogout}
            className="w-full hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut />
            <span className="group-data-[collapsible=icon]:hidden">Logout</span>
          </button>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
