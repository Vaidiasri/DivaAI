"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MoreVertical, Play, Clock, CheckCircle2 } from "lucide-react"

interface VideoCardProps {
  title: string
  thumbnail: string
  status: "rendering" | "completed" | "draft"
  progress?: number
  timestamp: string
}

export function VideoCard({ title, thumbnail, status, progress, timestamp }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]">
      {/* Thumbnail Area */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        
        {/* Overlay for Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40">
           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 shadow-xl shadow-purple-500/40">
             <Play className="ml-1 h-6 w-6 text-white fill-current" />
           </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          {status === "rendering" ? (
            <Badge className="bg-purple-600/90 hover:bg-purple-600 text-[10px] font-black tracking-widest uppercase border-0 backdrop-blur-md py-1">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Rendering {progress}%
            </Badge>
          ) : status === "completed" ? (
            <Badge className="bg-emerald-500/90 hover:bg-emerald-500 text-[10px] font-black tracking-widest uppercase border-0 backdrop-blur-md py-1">
              <CheckCircle2 className="mr-1.5 h-3 w-3" />
              Completed
            </Badge>
          ) : (
            <Badge className="bg-zinc-700/90 hover:bg-zinc-700 text-[10px] font-black tracking-widest uppercase border-0 backdrop-blur-md py-1">
              <Clock className="mr-1.5 h-3 w-3" />
              Draft
            </Badge>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors uppercase truncate max-w-[200px]">{title}</h3>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">{timestamp}</p>
          </div>
          <button className="h-8 w-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all">
            <MoreVertical size={18} />
          </button>
        </div>

        {/* Progress Bar (Visible only when rendering) */}
        {status === "rendering" && (
          <div className="space-y-2">
            <Progress value={progress} className="h-1.5 bg-zinc-800" indicatorClassName="bg-gradient-to-r from-purple-600 to-blue-500" />
          </div>
        )}
      </div>
    </div>
  )
}
