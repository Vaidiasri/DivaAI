import { syncUserWithSupabase } from "@/app/actions/user";
import { UserButton } from "@clerk/nextjs";
import { Search, Bell, Plus, Layout, History } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { VideoCard } from "@/components/dashboard/video-card";
import { Input } from "@/components/ui/input";

// Mock data for the dashboard to match the Stitch design
const recentVideos = [
  {
    title: "Cyberpunk Odyssey",
    thumbnail: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
    status: "rendering" as const,
    progress: 84,
    timestamp: "2 minutes ago"
  },
  {
    title: "Neon Nights Trailer",
    thumbnail: "https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=800",
    status: "completed" as const,
    timestamp: "1 hour ago"
  },
  {
    title: "Vaporwave Aesthetic",
    thumbnail: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    status: "draft" as const,
    timestamp: "Yesterday"
  }
];

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  // Sync user data to Supabase
  await syncUserWithSupabase();

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500/30">
      {/* LEFT: Dashboard Sidebar */}
      <DashboardSidebar />

      {/* RIGHT: Main Dashboard Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* TOP: Search and Actions Header */}
        <header className="h-20 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl px-12 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4 w-full max-w-xl">
             <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
                <Input 
                  placeholder="Search productions..." 
                  className="w-full h-11 pl-12 rounded-2xl border-white/5 bg-white/5 focus:bg-white/10 focus:border-purple-500/30 transition-all font-medium text-sm"
                />
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="h-11 w-11 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/10 transition-all">
              <Bell size={20} />
            </button>
            <div className="h-10 w-[1px] bg-white/10" />
            <UserButton appearance={{
              elements: {
                userButtonAvatarBox: "h-11 w-11 rounded-2xl border-2 border-purple-500/20"
              }
            }} />
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <main className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          
          {/* Dashboard Hero / CTA Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <h1 className="text-5xl font-black tracking-tighter mb-4 italic uppercase">My Videos</h1>
                <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px]">Manage and schedule your AI-generated shorts.</p>
              </div>
              
              <button className="group flex items-center gap-3 px-10 py-5 rounded-[2rem] bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]">
                <Plus className="h-5 w-5" />
                New Production
              </button>
            </div>
          </div>

          {/* Section: Recently Created */}
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Recently Created</h2>
              <button className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 hover:text-purple-300 transition-colors">View All Archive</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {recentVideos.map((video, idx) => (
                <VideoCard 
                  key={idx}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  status={video.status}
                  progress={video.progress}
                  timestamp={video.timestamp}
                />
              ))}

              {/* Empty / Add New Trigger */}
              <button className="aspect-video rounded-3xl border-2 border-dashed border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-4 text-zinc-600 group hover:border-purple-500/30 hover:bg-white/[0.04] transition-all cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                  <Plus className="h-8 w-8" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Start New Drift</span>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* MOBILE BOTTOM NAV (Visible only on mobile) */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 h-20 rounded-[2.5rem] glass border border-white/10 flex items-center justify-around px-8 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Link href="/dashboard" className="text-purple-400"><Layout size={24} /></Link>
          <button className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center -translate-y-8 shadow-2xl shadow-purple-500/40 border-4 border-zinc-950">
            <Plus className="text-white" size={28} />
          </button>
          <Link href="/dashboard/history" className="text-zinc-500"><History size={24} /></Link>
      </div>
    </div>
  );
}
