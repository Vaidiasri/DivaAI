"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Video, Layout, Layers, Settings, History, Plus, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Overview", icon: Layout, href: "/dashboard" },
  { label: "Create Video", icon: Plus, href: "/dashboard/create", highlight: true },
  { label: "Library", icon: Layers, href: "/dashboard/library" },
  { label: "History", icon: History, href: "/dashboard/history" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
]

export function SidebarContent({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <div className={cn("flex flex-col h-full gap-12", className)}>
      {/* Logo Area */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl shadow-purple-500/20 group-hover:scale-110 transition-all">
          <Video className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-black text-white tracking-tighter uppercase italic">VidaAI</span>
      </Link>

      {/* Main Nav */}
      <nav className="flex flex-col gap-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300",
              pathname === item.href
                ? "bg-white text-black shadow-xl shadow-white/5"
                : item.highlight
                ? "border border-purple-500/30 bg-purple-500/5 text-purple-400 hover:bg-purple-500/10"
                : "text-zinc-500 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-black" : "")} />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="mt-auto space-y-4 pt-10 border-t border-white/5">
        <Link href="/support" className="flex items-center gap-4 px-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-all">
          <HelpCircle size={18} />
          Support
        </Link>
      </div>
    </div>
  )
}

export function DashboardSidebar() {
  return (
    <aside className="hidden lg:flex h-screen w-72 border-r border-white/5 bg-zinc-950/80 backdrop-blur-3xl flex-col p-8 sticky top-0 shrink-0">
      <SidebarContent />
    </aside>
  )
}
