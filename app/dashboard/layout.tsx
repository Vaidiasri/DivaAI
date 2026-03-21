import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MobileNav } from "@/components/dashboard/mobile-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500/30">
      {/* LEFT: Dashboard Sidebar (Desktop) */}
      <DashboardSidebar />

      {/* RIGHT: Main Dashboard Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </main>

        {/* MOBILE BOTTOM NAV */}
        <MobileNav />
      </div>
    </div>
  );
}
