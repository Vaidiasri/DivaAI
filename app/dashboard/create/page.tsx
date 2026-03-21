"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// Step Components
import { TopicStep } from "@/components/dashboard/create/topic-step"
import { LanguageStep } from "@/components/dashboard/create/language-step"
import { VoiceStep } from "@/components/dashboard/create/voice-step"
import { MusicStep } from "@/components/dashboard/create/music-step"
import { StyleStep } from "@/components/dashboard/create/style-step"
import { CaptionStep } from "@/components/dashboard/create/caption-step"
import { ScheduleStep } from "@/components/dashboard/create/schedule-step"
import { VideoFormData } from "@/types/dashboard"

const steps = [
  { id: "topic", title: "Vision", component: TopicStep },
  { id: "language", title: "Language", component: LanguageStep },
  { id: "voice", title: "Voice", component: VoiceStep },
  { id: "music", title: "Music", component: MusicStep },
  { id: "style", title: "Style", component: StyleStep },
  { id: "captions", title: "Captions", component: CaptionStep },
  { id: "schedule", title: "Schedule", component: ScheduleStep },
]

export default function CreateVideoPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<VideoFormData>({
    topic: "",
    language: "en",
    voice: "",
    music: "",
    style: "",
    captionStyle: "",
    schedule: "now",
    scheduleDate: "",
    scheduleTime: "",
  })

  const progress = ((currentStep + 1) / steps.length) * 100
  const CurrentStepComponent = steps[currentStep].component

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-40">
      {/* Progress Section */}
      <div className="mb-10 sm:mb-12">
        <div className="flex justify-between items-end mb-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-medium text-white/60">
            {steps[currentStep].title}
          </span>
        </div>
        <Progress value={progress} className="h-1.5 bg-white/5" indicatorClassName="bg-gradient-to-r from-purple-600 to-blue-500" />
      </div>

      {/* Main Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CurrentStepComponent 
              formData={formData} 
              setFormData={setFormData}
              onNext={nextStep}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-12 flex items-center justify-between gap-4">
        {currentStep > 0 ? (
           <Button 
              variant="outline" 
              onClick={prevStep}
              className="h-14 px-8 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold"
           >
             Back
           </Button>
        ) : <div />}
        
        <Button 
          onClick={nextStep}
          className={cn(
              "h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex-1 max-w-[300px]",
              currentStep === steps.length - 1 
              ? "bg-gradient-to-r from-purple-600 to-blue-500 shadow-2xl shadow-purple-500/40" 
              : "bg-white text-black hover:bg-zinc-200"
          )}
        >
          {currentStep === steps.length - 1 ? (
              <>Generate Video <Play size={16} className="ml-2 fill-current" /></>
          ) : (
              <>Continue <ChevronRight size={16} className="ml-2" /></>
          )}
        </Button>
      </div>
    </div>
  )
}
