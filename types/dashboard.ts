export interface VideoFormData {
  topic: string
  language: string
  voice: string
  music: string
  style: string
  captionStyle: string
  schedule: string | null
  scheduleDate?: string
  scheduleTime?: string
}

export interface StepProps {
  formData: VideoFormData
  setFormData: (data: VideoFormData) => void
  onNext?: () => void
}
