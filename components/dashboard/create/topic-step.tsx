"use client"

import { Search, Sparkles, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { StepProps } from "@/types/dashboard"

const trendingNiches = [
  { 
    id: "tech", 
    title: "AI & Future Tech", 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    description: "Latest in AI and robotics"
  },
  { 
    id: "cooking", 
    title: "Quick Gourmet", 
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    description: "Fast recipes for foodies"
  },
  { 
    id: "fitness", 
    title: "Modern Workout", 
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    description: "Minimalist home routines"
  },
  { 
    id: "finance", 
    title: "Smart Money", 
    image: "https://images.unsplash.com/photo-1611974714024-462cd497ae7e?w=800&q=80",
    description: "Investing and crypto tips"
  },
]

export function TopicStep({ formData, setFormData, onNext }: StepProps) {
  const handleSelect = (niche: string) => {
    setFormData({ ...formData, topic: niche })
  }

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
          What&apos;s the vision? <Sparkles className="text-purple-500 fill-purple-500/20" size={32} />
        </h2>
        <p className="text-zinc-400 text-lg">
          Describe your video idea or select a trending niche to start.
        </p>
      </div>

      {/* SEARCH / INPUT */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-20 group-focus-within:opacity-40 transition-opacity blur" />
        <div className="relative flex h-14 bg-zinc-900 rounded-2xl border border-white/10 px-6 items-center gap-4 transition-all">
          <Search className="text-zinc-500" size={20} />
          <input 
            type="text" 
            placeholder="e.g. AI-driven productivity hacks..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-zinc-600 font-medium"
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            onKeyDown={(e) => e.key === 'Enter' && onNext?.()}
          />
          <button 
            onClick={onNext}
            className="px-6 py-2 rounded-xl bg-purple-600 text-white text-xs font-black uppercase tracking-widest hover:bg-purple-500 transition-colors"
          >
            Create
          </button>
        </div>
      </div>

      {/* TRENDING NICHES */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
             <TrendingUp size={14} /> Trending Niches
           </h3>
           <button className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 hover:text-purple-300">
             Show All
           </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trendingNiches.map((niche) => (
            <button
              key={niche.id}
              onClick={() => handleSelect(niche.title)}
              className={cn(
                "group relative h-40 rounded-2xl overflow-hidden border-2 transition-all text-left",
                formData.topic === niche.title ? "border-purple-600 ring-4 ring-purple-600/20 scale-[0.98]" : "border-white/5 hover:border-white/20"
              )}
            >
              <Image 
                src={niche.image} 
                fill
                className={cn(
                  "object-cover transition-transform duration-700 group-hover:scale-110",
                  formData.topic === niche.title ? "brightness-50" : "brightness-[0.4]"
                )}
                alt={niche.title}
              />
              <div className="relative h-full flex flex-col justify-end p-5">
                 <h4 className="text-lg font-black text-white">{niche.title}</h4>
                 <p className="text-xs text-white/60 font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                   {niche.description}
                 </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
