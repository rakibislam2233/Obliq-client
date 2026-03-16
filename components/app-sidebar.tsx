"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import logo from "@/public/asset/logo/logo.png";
import {
  BarChart3,
  CheckSquare,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Cog,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  PanelRight,
  Plus,
  Settings,
  Target,
  Users,
  Wallet
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface SubItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
  requiredAtom: string;
}

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  requiredAtom: string;
  subItems?: SubItem[];
  badge?: number | string;
  action?: {
    title: string;
    href: string;
    requiredAtom: string;
  };
}

interface NavGroup {
  label?: string;
  links: NavLink[];
}

// ─────────────────────────────────────────────
// Nav Config
// ─────────────────────────────────────────────

const NAV_GROUPS: NavGroup[] = [
  {
    links: [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: <LayoutDashboard size={16} />,
        requiredAtom: "view:dashboard",
      },
      {
        href: "/leads",
        label: "Leads",
        icon: <Target size={16} />,
        requiredAtom: "view:leads",
      },
      {
        href: "/opportunities",
        label: "Opportunities",
        icon: <Wallet size={16} />,
        requiredAtom: "view:opportunities",
      },
      {
        href: "/tasks",
        label: "Tasks",
        icon: <CheckSquare size={16} />,
        requiredAtom: "view:tasks",
        subItems: [
          {
            href: "/tasks/assignments",
            label: "Assignments",
            requiredAtom: "view:tasks",
          },
          {
            href: "/tasks/calendar",
            label: "Calendar",
            requiredAtom: "view:tasks",
          },
          {
            href: "/tasks/reminders",
            label: "Reminders",
            requiredAtom: "view:tasks",
          },
        ],
      },
      {
        href: "/reports",
        label: "Reports",
        icon: <BarChart3 size={16} />,
        requiredAtom: "view:reports",
        subItems: [
          {
            href: "/reports/overview",
            label: "Overview",
            requiredAtom: "view:reports",
          },
        ],
      },
    ],
  },
  {
    label: "Users",
    links: [
      {
        href: "/contacts",
        label: "Contacts",
        icon: <Users size={16} />,
        requiredAtom: "view:contacts",
        action: {
          title: "Add contact",
          href: "/contacts/new",
          requiredAtom: "create:contacts",
        },
      },
      {
        href: "/messages",
        label: "Messages",
        icon: <MessageSquare size={16} />,
        requiredAtom: "view:messages",
        badge: 6,
      },
    ],
  },
  {
    label: "Other",
    links: [
      {
        href: "/configuration",
        label: "Configuration",
        icon: <Cog size={16} />,
        requiredAtom: "view:configuration",
      },
      {
        href: "/invoice",
        label: "Invoice",
        icon: <ClipboardList size={16} />,
        requiredAtom: "view:invoice",
      },
    ],
  },
];

const FOOTER_LINKS: NavLink[] = [
  {
    href: "/help",
    label: "Help center",
    icon: <HelpCircle size={16} />,
    requiredAtom: "view:help",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <Settings size={16} />,
    requiredAtom: "view:settings",
  },
];

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  const isActive = (href: string) => pathname === href;
  const isParentActive = (href: string) => pathname?.startsWith(href) ?? false;

  // TODO: replace `true` with `permissions.hasPermission(atom)` when ready
  const can = (_atom: string) => true;

  return (
    <Sidebar collapsible="icon">
      {/* ── Header: Logo + collapse button ── */}
      <SidebarHeader className="flex flex-row items-center justify-between px-3 py-3">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
          <Image src={logo} alt="Logo" className="w-20" />
        </div>

        {/* collapsed state: show only icon */}
        <div
          onClick={toggleSidebar}
          className="hidden group-data-[collapsible=icon]:flex items-center justify-center"
        >
          <div className="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">O</span>
          </div>
        </div>

        <button
          onClick={toggleSidebar}
          className="hidden md:flex items-center justify-center w-6 h-6 rounded-md hover:bg-black/5 transition-colors shrink-0 group-data-[collapsible=icon]:hidden"
          title="Collapse Sidebar (Ctrl+B)"
        >
          <PanelRight size={18} className="text-gray-400" />
        </button>
      </SidebarHeader>

      {/* ── Workspace Card ── */}
      <div className="mx-2 mb-2 group-data-[collapsible=icon]:hidden">
        <button className="w-full flex items-center gap-2.5 rounded-xl px-2.5 py-3 bg-white transition-colors">
          <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
            W
          </div>
          <div className="flex-1 text-left min-w-0">
            <p className="text-xs font-semibold text-gray-700 truncate leading-tight">
              John&apos;s workspace
            </p>
            <p className="text-[10px] text-gray-400 truncate leading-tight">
              #WID12446875
            </p>
          </div>
          <ChevronDown size={13} className="text-gray-400 shrink-0" />
        </button>
      </div>

      {/* ── Nav Groups ── */}
      <SidebarContent className="px-1 overflow-y-auto scrollbar-hide">
        {NAV_GROUPS.map((group, gi) => {
          // show all links (permission check disabled)
          const visibleLinks = group.links.filter(() => true);
          if (visibleLinks.length === 0) return null;

          return (
            <SidebarGroup key={gi} className="py-0.5">
              {group.label && (
                <SidebarGroupLabel className="tracking-widest text-gray-400/80 font-medium px-2 mb-0.5">
                  {group.label}
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu>
                  {visibleLinks.map((link) => {
                    // ── Collapsible nav item ──
                    if (link.subItems && link.subItems.length > 0) {
                      const visibleSubs = link.subItems.filter(() => true);

                      return (
                        <Collapsible
                          key={link.href}
                          defaultOpen={isParentActive(link.href)}
                          className="group/collapsible"
                        >
                          <SidebarMenuItem className="py-0.5">
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton
                                isActive={isParentActive(link.href)}
                                tooltip={link.label}
                                className="py-5 text-gray-600 text-[13px] font-normal data-[active=true]:bg-white/50 data-[active=true]:text-gray-800 data-[active=true]:font-medium hover:bg-black/5 hover:text-gray-800 focus:bg-black/5 focus:outline-none"
                              >
                                {link.icon}
                                <span>{link.label}</span>
                                <ChevronUp
                                  size={13}
                                  className="ml-auto text-gray-400 transition-transform duration-200 group-data-[state=closed]/collapsible:rotate-180"
                                />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>

                            {visibleSubs.length > 0 && (
                              <CollapsibleContent>
                                <SidebarMenuSub className="border-l border-gray-200/60 ml-3">
                                  {visibleSubs.map((sub) => (
                                    <SidebarMenuSubItem key={sub.href} className="py-1">
                                      <SidebarMenuSubButton
                                        asChild
                                        isActive={isActive(sub.href)}
                                        className="py-2.5 text-[13px] text-gray-500 font-normal data-[active=true]:text-gray-800 data-[active=true]:font-medium hover:text-gray-700 hover:bg-black/5 focus:bg-black/5 focus:outline-none"
                                      >
                                        <Link href={sub.href}>
                                          <span>{sub.label}</span>
                                        </Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            )}
                          </SidebarMenuItem>
                        </Collapsible>
                      );
                    }

                    // ── Regular nav item ──
                    return (
                      <SidebarMenuItem key={link.href} className="py-0.5">
                        <SidebarMenuButton
                          asChild
                          isActive={isActive(link.href)}
                          tooltip={link.label}
                          className="py-2 text-gray-600 text-[13px] font-normal data-[active=true]:bg-white/50 data-[active=true]:text-gray-800 data-[active=true]:font-medium hover:bg-black/5 hover:text-gray-800 focus:bg-black/5 focus:outline-none"
                        >
                          <Link href={link.href}>
                            {link.icon}
                            <span>{link.label}</span>
                          </Link>
                        </SidebarMenuButton>

                        {/* Action: e.g. "+" beside Contacts */}
                        {link.action && can(link.action.requiredAtom) && (
                          <SidebarMenuAction
                            showOnHover
                            title={link.action.title}
                            className="text-gray-400 hover:text-gray-600"
                            onClick={() => router.push(link.action!.href)}
                          >
                            <Plus size={13} />
                          </SidebarMenuAction>
                        )}

                        {/* Badge: e.g. "6" beside Messages */}
                        {link.badge !== undefined && (
                          <SidebarMenuBadge className="text-[10px] text-gray-500">
                            {link.badge}
                          </SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      {/* ── Footer: Help + Settings ── */}
      <SidebarFooter className="px-1 pb-3">
        <SidebarSeparator className="mb-2" />
        <SidebarMenu>
          {FOOTER_LINKS.map((link) => (
            <SidebarMenuItem key={link.href} className="py-0.5">
              <SidebarMenuButton
                asChild
                isActive={isActive(link.href)}
                tooltip={link.label}
                className="py-2 text-gray-500 text-[13px] font-normal data-[active=true]:bg-white/50 data-[active=true]:text-gray-800 hover:bg-black/5 hover:text-gray-700 focus:bg-black/5 focus:outline-none"
              >
                <Link href={link.href}>
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
