import { syncUserWithSupabase } from "@/app/actions/user";
import { UserButton } from "@clerk/nextjs";
import { Video, Layout, Settings, History, Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  // Sync user data on every visit to ensure Supabase is up to date
  await syncUserWithSupabase();

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col p-6 gap-8">
        <Link href="/" className="flex items-center gap-2 group mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-purple-500/20">
            <Video className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">VidaAI</span>
        </Link>

        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 text-purple-400 font-bold border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <Layout className="h-5 w-5" />
            Overview
          </Link>
          <Link href="/dashboard/create" className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-all">
            <Plus className="h-5 w-5" />
            Create Video
          </Link>
          <Link href="/dashboard/history" className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-all">
            <History className="h-5 w-5" />
            History
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-all">
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <UserButton showName />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-12">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">My Videos</h1>
            <p className="text-zinc-400">Manage and schedule your AI-generated shorts.</p>
          </div>
          <button className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-purple-500/20">
            + New Production
          </button>
        </header>

        {/* Empty State / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video rounded-3xl bg-zinc-900 border border-white/5 flex flex-col items-center justify-center gap-4 text-zinc-600 group hover:border-purple-500/30 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Video className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">Draft #{i}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
