import ResponsiveSidebar from "@/components/Pages/Protected/ResponsiveSidebar";
import Topbar from "@/components/Pages/Protected/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-gray-50">
        <ResponsiveSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar />

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
