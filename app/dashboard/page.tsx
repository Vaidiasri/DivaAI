import { syncUserWithSupabase } from "@/app/actions/user";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { VideoCard } from "@/components/dashboard/video-card";

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
  try {
    await syncUserWithSupabase();
  } catch (error) {
    console.error("Failed to sync user with Supabase:", error);
  }

  return (
    <div className="p-3 sm:p-8 lg:p-12 pb-32 lg:pb-12">
      {/* Dashboard Hero / CTA Section */}
      <div className="mb-10 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tighter mb-2 sm:mb-4 italic uppercase bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">My Videos</h1>
            <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[8px] sm:text-[10px]">Manage and schedule your AI-generated shorts.</p>
          </div>
          
          <Link 
            href="/dashboard/create"
            className="group flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-5 rounded-2xl sm:rounded-[2rem] bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] w-full sm:w-auto"
            role="button"
            aria-label="New Production"
          >
            <Plus className="h-5 w-5" />
            New Production
          </Link>
        </div>
      </div>

      {/* Section: Recently Created */}
      <div className="space-y-8 sm:space-y-10">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <h2 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Recently Created</h2>
          <Link href="/dashboard/library" className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 hover:text-purple-300 transition-colors">View All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
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
          <Link href="/dashboard/create" className="aspect-video rounded-3xl border-2 border-dashed border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-4 text-zinc-600 group hover:border-purple-500/30 hover:bg-white/[0.4] transition-all cursor-pointer">
            <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
              <Plus className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
            </div>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em]">Start New Drift</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
