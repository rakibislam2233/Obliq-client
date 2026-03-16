import { AppSidebar } from "@/components/app-sidebar";
import Topbar from "@/components/Pages/Protected/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="w-full bg-linear-to-br from-[#F8E0D4] to-[#E0F2F1] min-h-screen">
      <AppSidebar />
      <main className="flex-1 flex flex-col overflow-hidden w-full p-2 space-y-3">
        <Topbar />

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
