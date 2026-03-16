import { AppSidebar } from "@/components/app-sidebar";
import Topbar from "@/components/Pages/Protected/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-[#F8E0D4]">
      <AppSidebar />
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <Topbar />

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 bg-white">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </main>
    </SidebarProvider>
  );
}
