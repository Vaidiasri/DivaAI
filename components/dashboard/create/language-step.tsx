"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Globe, Languages } from "lucide-react"

const languages = [
  { id: "en", name: "English", flag: "🇺🇸" },
  { id: "es", name: "Spanish", flag: "🇪🇸" },
  { id: "fr", name: "French", flag: "🇫🇷" },
  { id: "de", name: "German", flag: "🇩🇪" },
  { id: "it", name: "Italian", flag: "🇮🇹" },
  { id: "jp", name: "Japanese", flag: "🇯🇵" },
  { id: "pt", name: "Portuguese", flag: "🇵🇹" },
  { id: "ru", name: "Russian", flag: "🇷🇺" },
]

export function LanguageStep({ formData, setFormData }: any) {
  const handleSelect = (lang: string) => {
    setFormData({ ...formData, language: lang })
  }

  return (
    <div className="space-y-12 pb-10">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-3">
          Which language? <Globe className="text-purple-500" size={32} />
        </h2>
        <p className="text-zinc-400 text-lg">
          Select the primary language for your AI-generated narration.
        </p>
      </div>

      <div className="space-y-8">
        <Tabs defaultValue="language" className="w-full">
          <TabsList className="bg-zinc-900 border border-white/5 p-1 h-12 rounded-xl">
            <TabsTrigger value="language" className="rounded-lg data-[state=active]:bg-purple-600 data-[state=active]:text-white px-6 font-bold text-xs uppercase tracking-widest">
              <Languages size={14} className="mr-2" /> Language
            </TabsTrigger>
            <TabsTrigger value="voice-profile" disabled className="rounded-lg px-6 font-bold text-xs uppercase tracking-widest opacity-30">
              Voice Profile
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => handleSelect(lang.name)}
              className={cn(
                "group relative p-6 rounded-2xl bg-zinc-900 border-2 transition-all flex flex-col items-center gap-4 hover:scale-[1.02] active:scale-[0.98]",
                formData.language === lang.name 
                ? "border-purple-600 bg-purple-600/5 shadow-2xl shadow-purple-500/10" 
                : "border-white/5 hover:border-white/10"
              )}
            >
              <span className="text-4xl group-hover:scale-110 transition-transform">{lang.flag}</span>
              <span className={cn(
                "text-sm font-bold tracking-tight",
                formData.language === lang.name ? "text-purple-400" : "text-zinc-400 group-hover:text-white"
              )}>
                {lang.name}
              </span>

              {formData.language === lang.name && (
                 <div className="absolute top-3 right-3 h-5 w-5 bg-purple-600 rounded-full flex items-center justify-center">
                    <div className="h-2 w-2 bg-white rounded-full" />
                 </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
