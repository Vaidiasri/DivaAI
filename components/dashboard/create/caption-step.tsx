"use client"

import { Type, Sparkles, Layout } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { StepProps } from "@/types/dashboard"

const captionStyles = [
  { id: "bold", name: "Bold Cinematic", class: "font-black italic uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]" },
  { id: "neon", name: "Neon Glow", class: "font-bold text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" },
  { id: "minimal", name: "Modern Minimal", class: "font-medium text-white/90 tracking-widest" },
  { id: "gradient", name: "Vibrant Gradient", class: "font-black bg-gradient-to-br from-purple-400 to-blue-400 bg-clip-text text-transparent" },
]

export function CaptionStep({ formData, setFormData }: StepProps) {
  const selectedStyle = captionStyles.find(s => s.id === formData.captionStyle) || captionStyles[0]

  return (
    <div className="space-y-12 pb-10">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
          Caption Style <Type className="text-purple-500" size={32} />
        </h2>
        <p className="text-zinc-400 text-lg">
          Choose how your message appears on screen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Style Selection */}
        <div className="space-y-3">
          {captionStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setFormData({ ...formData, captionStyle: style.id })}
              className={cn(
                "w-full p-6 bg-zinc-900 border-2 rounded-2xl transition-all flex items-center justify-between group",
                formData.captionStyle === style.id 
                ? "border-purple-600 bg-purple-600/5 shadow-xl shadow-purple-500/10" 
                : "border-white/5 hover:border-white/10"
              )}
            >
              <div className="text-left font-bold tracking-tight">
                 {style.name}
              </div>
              <div className={cn(
                "h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all",
                formData.captionStyle === style.id ? "border-purple-600 bg-purple-600" : "border-white/10"
              )}>
                 {formData.captionStyle === style.id && <div className="h-2 w-2 bg-white rounded-full" />}
              </div>
            </button>
          ))}
        </div>

        {/* Live Preview */}
        <div className="space-y-6">
           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
             <Layout size={14} /> Live Preview
           </h3>
           <div className="aspect-video rounded-3xl overflow-hidden relative border border-white/10 bg-zinc-900 group">
              <Image 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80" 
                fill
                className="object-cover brightness-[0.4] blur-[2px] transition-transform duration-1000 group-hover:scale-105"
                alt="Preview"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                 <p className={cn(
                   "text-2xl sm:text-4xl transition-all duration-500",
                   selectedStyle.class
                 )}>
                   &quot;This is how your AI-generated story begins...&quot;
                 </p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-4">
                 <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden mr-4">
                    <div className="h-full bg-purple-600 w-1/3" />
                 </div>
                 <Sparkles size={14} className="text-purple-400" />
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
