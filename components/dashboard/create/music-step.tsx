"use client"

import { Play, Music2, Search, Volume2 } from "lucide-react"
import { cn } from "@/lib/utils"

const tracks = [
  { id: "epic", name: "Epic Cinematic", artist: "Hanz Z.", duration: "2:45", mood: "Cinematic" },
  { id: "lofi", name: "Midnight Study", artist: "LoFi Girl", duration: "3:12", mood: "Lo-fi Chill" },
  { id: "hype", name: "Viral Energy", artist: "Gym Rat", duration: "1:58", mood: "Hype" },
  { id: "corporate", name: "Modern Business", artist: "Startup Beats", duration: "2:20", mood: "Professional" },
  { id: "nature", name: "Morning Dew", artist: "Ambient Zen", duration: "4:00", mood: "Calm" },
]

export function MusicStep({ formData, setFormData }: any) {
  return (
    <div className="space-y-12 pb-10">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
          Background Music <Music2 className="text-purple-500" size={32} />
        </h2>
        <p className="text-zinc-400 text-lg">
          Set the mood for your vision with a perfect soundtrack.
        </p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input 
            type="text" 
            placeholder="Search moods, genres, or tracks..."
            className="w-full h-12 bg-zinc-900 border border-white/5 rounded-xl pl-12 pr-4 text-sm font-medium outline-none focus:border-purple-600 transition-all"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["Cinematic", "Lo-fi Chill", "Hype", "Professional", "Calm"].map((mood) => (
            <button
               key={mood}
               className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 text-zinc-500 hover:border-white/20 hover:text-white transition-all whitespace-nowrap"
            >
              {mood}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setFormData({ ...formData, music: track.name })}
              className={cn(
                "w-full group p-4 rounded-xl transition-all flex items-center justify-between",
                formData.music === track.name 
                ? "bg-purple-600/10 border border-purple-600/30" 
                : "bg-zinc-900/50 border border-white/5 hover:bg-zinc-900"
              )}
            >
              <div className="flex items-center gap-4">
                 <div className={cn(
                   "h-10 w-10 rounded-lg flex items-center justify-center transition-all",
                   formData.music === track.name ? "bg-purple-600 text-white" : "bg-white/5 text-zinc-500"
                 )}>
                   <Play size={16} className="fill-current" />
                 </div>
                 <div className="text-left">
                    <h4 className="text-sm font-bold">{track.name}</h4>
                    <p className="text-[10px] font-medium text-zinc-500">{track.artist} • {track.mood}</p>
                 </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <span className="text-[10px] font-medium text-zinc-600">{track.duration}</span>
                 {formData.music === track.name && <Volume2 size={14} className="text-purple-400 animate-pulse" />}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
