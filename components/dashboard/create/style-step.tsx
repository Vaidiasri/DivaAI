"use client"

import { Palette, Sparkles, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { StepProps } from "@/types/dashboard"

const visualStyles = [
  { 
    id: "cinematic", 
    title: "Cinematic", 
    description: "Dramatic lighting & professional shots",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"
  },
  { 
    id: "realistic", 
    title: "Realistic", 
    description: "Natural colors & life-like details",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
  },
  { 
    id: "3d", 
    title: "3D Animation", 
    description: "Stylized characters & vibrant worlds",
    image: "https://images.unsplash.com/photo-1616467333461-122e20560a0a?w=800&q=80"
  },
  { 
    id: "hand-drawn", 
    title: "Hand-drawn", 
    description: "Sketch style & artistic touch",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
  },
]

export function StyleStep({ formData, setFormData }: StepProps) {
  return (
    <div className="space-y-12 pb-10">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
          Visual Style <Palette className="text-purple-500" size={32} />
        </h2>
        <p className="text-zinc-400 text-lg">
          Choose the artistic direction for your AI video generation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visualStyles.map((style) => (
          <button
            key={style.id}
            onClick={() => setFormData({ ...formData, style: style.id })}
            className={cn(
              "group relative h-56 rounded-3xl overflow-hidden border-2 transition-all text-left",
              formData.style === style.id 
              ? "border-purple-600 ring-4 ring-purple-600/20" 
              : "border-white/5 hover:border-white/20"
            )}
          >
            <Image 
              src={style.image} 
              fill
              className={cn(
                "object-cover transition-transform duration-1000 group-hover:scale-110",
                formData.style === style.id ? "brightness-50" : "brightness-[0.4]"
              )}
              alt={style.title}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

            <div className="relative h-full flex flex-col justify-end p-6">
               <div className="flex items-center justify-between">
                 <div>
                    <h4 className="text-xl font-black text-white flex items-center gap-2">
                       {style.title} 
                       {style.id === "cinematic" && <Sparkles size={16} className="text-purple-400" />}
                    </h4>
                    <p className="text-xs text-white/60 font-medium mt-1">
                       {style.description}
                    </p>
                 </div>
                 {formData.style === style.id && (
                    <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/40 border-2 border-white/20 scale-110 transition-transform">
                       <Check size={16} className="text-white" />
                    </div>
                 )}
               </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
