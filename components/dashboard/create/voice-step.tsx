"use client"

import { Play, Mic2, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const voices = [
  { id: "marcus", name: "Marcus", role: "Energetic & Hype", type: "Male", category: "Energetic" },
  { id: "elena", name: "Elena", role: "Calm & Natural", type: "Female", category: "Calm" },
  { id: "julian", name: "Julian", role: "Sophisticated & Corporate", type: "Male", category: "Cinematic" },
  { id: "sophia", name: "Sophia", role: "Friendly & Warm", type: "Female", category: "Energetic" },
  { id: "arthur", name: "Arthur", role: "Deep & Narrative", type: "Male", category: "Cinematic" },
]

export function VoiceStep({ formData, setFormData }: any) {
  return (
    <div className="space-y-12 pb-10">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
          Narrator Voice <Mic2 className="text-purple-500" size={32} />
        </h2>
        <p className="text-zinc-400 text-lg">
          Select a voice that fits your video category and target audience.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["All", "Energetic", "Calm", "Cinematic"].map((cat) => (
            <button
               key={cat}
               className={cn(
                 "px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap",
                 cat === "All" ? "bg-white text-black border-white" : "bg-transparent text-zinc-500 border-white/10 hover:border-white/20"
               )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {voices.map((voice) => (
            <button
              key={voice.id}
              onClick={() => setFormData({ ...formData, voice: voice.name })}
              className={cn(
                "w-full group relative p-5 rounded-2xl bg-zinc-900 border-2 transition-all flex items-center justify-between",
                formData.voice === voice.name 
                ? "border-purple-600 bg-purple-600/5 shadow-xl shadow-purple-500/10" 
                : "border-white/5 hover:border-white/10"
              )}
            >
              <div className="flex items-center gap-5">
                <div className={cn(
                  "h-12 w-12 rounded-xl flex items-center justify-center transition-all",
                  formData.voice === voice.name ? "bg-purple-600 text-white" : "bg-white/5 text-zinc-500 group-hover:text-white group-hover:bg-white/10"
                )}>
                  <Play size={20} className="fill-current" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-black tracking-tight flex items-center gap-2">
                    {voice.name} 
                    {voice.id === "arthur" && <Sparkles size={14} className="text-purple-400" />}
                  </h4>
                  <p className="text-xs font-medium text-zinc-500">{voice.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                 <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-widest text-zinc-700">
                    {voice.type} • {voice.category}
                 </span>
                 <div className={cn(
                   "h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all",
                   formData.voice === voice.name ? "border-purple-600 bg-purple-600" : "border-white/10 bg-transparent"
                 )}>
                   {formData.voice === voice.name && <div className="h-2 w-2 bg-white rounded-full" />}
                 </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
