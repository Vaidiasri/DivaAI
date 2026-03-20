"use client"

import { Calendar, Play, Clock, Rocket, FileText, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const scheduleOptions = [
  { id: "now", title: "Post Now", description: "Generate and publish immediately", icon: Rocket, color: "from-purple-600 to-blue-500" },
  { id: "schedule", title: "Schedule", description: "Choose a custom date and time", icon: Clock, color: "from-blue-500 to-cyan-500" },
  { id: "draft", title: "Save as Draft", description: "Prepare now, decide later", icon: FileText, color: "from-zinc-600 to-zinc-400" },
]

export function ScheduleStep({ formData, setFormData }: any) {
  const handleSelect = (option: string) => {
    setFormData({ ...formData, schedule: option })
  }

  return (
    <div className="space-y-12 pb-10">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
          Ready to shine? <Rocket className="text-purple-500" size={32} />
        </h2>
        <p className="text-zinc-400 text-lg">
          Finalize your video series settings and get ready to go viral.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {scheduleOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={cn(
              "group relative p-8 rounded-3xl bg-zinc-900 border-2 transition-all flex flex-col items-center gap-6 text-center hover:scale-[1.02]",
              formData.schedule === option.id 
              ? "border-purple-600 bg-purple-600/5 shadow-2xl shadow-purple-500/10" 
              : "border-white/5 hover:border-white/10"
            )}
          >
            <div className={cn(
              "h-16 w-16 rounded-2xl flex items-center justify-center transition-all shadow-xl",
              formData.schedule === option.id 
              ? `bg-gradient-to-br ${option.color} text-white` 
              : "bg-white/5 text-zinc-500 group-hover:bg-white/10 group-hover:text-white"
            )}>
              <option.icon size={32} />
            </div>
            
            <div className="space-y-1">
               <h4 className="text-lg font-black tracking-tight text-white">{option.title}</h4>
               <p className="text-[10px] font-medium text-zinc-500 leading-relaxed uppercase tracking-widest">
                  {option.description}
               </p>
            </div>

            {formData.schedule === option.id && (
               <div className="absolute top-4 right-4 text-purple-400">
                  <CheckCircle2 size={24} className="fill-purple-600/20" />
               </div>
            )}
          </button>
        ))}
      </div>

      {formData.schedule === 'schedule' && (
         <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
               <Calendar size={16} /> Select Date & Time
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 text-zinc-400 font-bold justify-between">
                  Saturday, March 21
                  <Calendar size={20} />
               </div>
               <div className="h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 text-zinc-400 font-bold justify-between">
                  09:00 PM
                  <Clock size={20} />
               </div>
            </div>
         </div>
      )}

      {/* Summary / Review */}
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] border-dashed">
         <div className="flex flex-wrap gap-6 items-center opacity-40 grayscale group-hover:opacity-100 transition-opacity">
            <div className="space-y-1">
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Niche</p>
               <p className="text-xs font-bold">{formData.topic || 'Not set'}</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="space-y-1">
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Narrator</p>
               <p className="text-xs font-bold">{formData.voice || 'Not set'}</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="space-y-1">
               <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Style</p>
               <p className="text-xs font-bold">{formData.style || 'Not set'}</p>
            </div>
         </div>
      </div>
    </div>
  )
}
