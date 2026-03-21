"use client"

import Link from "next/link"
import { Plus, Layout, History, Settings } from "lucide-react"
import { UserButton } from "@clerk/nextjs"

export function MobileNav() {
  return (
    <div className="lg:hidden fixed bottom-6 left-6 right-6 h-16 rounded-[2rem] bg-zinc-900 border border-white/10 flex items-center justify-between px-6 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-center w-10">
          <UserButton appearance={{
            elements: {
              userButtonAvatarBox: "h-8 w-8 rounded-full border border-white/10"
            }
          }} />
        </div>

        <Link href="/dashboard" className="text-zinc-500 hover:text-purple-400 transition-colors w-10 flex justify-center" aria-label="Overview">
          <Layout size={20} />
        </Link>

        {/* Center Prompt / Action */}
        <div className="relative h-full flex items-center justify-center">
          <Link 
            href="/dashboard/create"
            className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center -translate-y-6 shadow-2xl shadow-purple-500/40 border-4 border-zinc-950 hover:scale-110 active:scale-95 transition-all"
            role="button"
            aria-label="New Production"
          >
            <Plus className="text-white size-6" />
          </Link>
        </div>

        <Link href="/dashboard/history" className="text-zinc-500 hover:text-white transition-colors w-10 flex justify-center" aria-label="History">
          <History size={20} />
        </Link>

        <Link href="/dashboard/settings" className="text-zinc-500 hover:text-white transition-colors w-10 flex justify-center" aria-label="Settings">
          <Settings size={20} />
        </Link>
    </div>
  )
}
