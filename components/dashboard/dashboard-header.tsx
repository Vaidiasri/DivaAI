"use client"

import { Search, Bell, Menu } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { Input } from "@/components/ui/input"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription 
} from "@/components/ui/sheet"
import { SidebarContent } from "@/components/dashboard/sidebar"

export function DashboardHeader() {
  return (
    <header className="h-20 border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl px-4 sm:px-8 lg:px-12 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-2 sm:gap-4 flex-1 max-w-xl">
         {/* Mobile Menu Trigger */}
         <Sheet>
           <SheetTrigger asChild>
             <button className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-zinc-400 hover:text-white transition-all shrink-0">
               <Menu size={20} />
             </button>
           </SheetTrigger>
           <SheetContent side="left" className="bg-zinc-950 border-white/5 p-0 w-72">
             <SheetHeader className="sr-only">
               <SheetTitle>Navigation Menu</SheetTitle>
               <SheetDescription>Access your dashboard links here</SheetDescription>
             </SheetHeader>
             <SidebarContent className="p-8" />
           </SheetContent>
         </Sheet>

         <div className="relative w-full group">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
            <Input 
              placeholder="Search..." 
              className="w-full h-10 sm:h-11 pl-10 sm:pl-12 rounded-2xl border-white/5 bg-white/5 focus:bg-white/10 focus:border-purple-500/30 transition-all font-medium text-sm"
            />
         </div>
      </div>
      
      <div className="flex items-center gap-2 ml-2 sm:gap-6 sm:ml-4">
        <button className="hidden sm:flex h-11 w-11 rounded-2xl border border-white/5 bg-white/5 items-center justify-center text-zinc-400 hover:text-white hover:border-white/10 transition-all">
          <Bell size={20} />
        </button>
        <div className="hidden sm:block h-10 w-[1px] bg-white/10" />
        <div className="hidden sm:block">
          <UserButton appearance={{
            elements: {
              userButtonAvatarBox: "h-9 w-9 sm:h-11 sm:w-11 rounded-2xl border-2 border-purple-500/20"
            }
          }} />
        </div>
      </div>
    </header>
  )
}
