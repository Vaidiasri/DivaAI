import Image from "next/image";
import Link from "next/link";
import { 
  Video, 
  Calendar, 
  Share2, 
  PieChart, 
  Zap, 
  Youtube, 
  Instagram, 
  Facebook, 
  Mail, 
  Check,
  ArrowRight,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      {/* --- Progress Bar (Visual Only) --- */}
      <div className="fixed top-0 left-0 z-[60] h-[2px] w-[30%] bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

      {/* --- Navbar --- */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              <Video className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">VidaAI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="#features" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all hover:tracking-[0.2em]">Features</Link>
            <Link href="#how-it-works" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all hover:tracking-[0.2em]">How it Works</Link>
            <Link href="#pricing" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all hover:tracking-[0.2em]">Pricing</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-xs font-bold uppercase tracking-tighter text-zinc-300 hover:text-white hover:bg-white/5">Log in</Button>
            <Button className="hidden min-[400px]:inline-flex rounded-full bg-white text-black hover:bg-zinc-200 px-4 sm:px-6 font-bold shadow-xl shadow-white/10 hover:scale-105 transition-all text-[10px] sm:text-xs">Start Free</Button>
            
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 border border-white/10 rounded-xl hover:bg-white/5 shrink-0">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-zinc-950/98 border-l border-white/10 backdrop-blur-3xl p-0 flex flex-col">
                <SheetHeader className="p-8 border-b border-white/5 bg-white/5">
                  <SheetTitle className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-purple-500/20">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-black text-white tracking-tighter">VidaAI</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col flex-1 p-10 justify-between">
                  <nav className="flex flex-col gap-10">
                    <Link href="#features" className="group flex items-center justify-between text-xl font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all">
                      <span>Features</span>
                      <div className="h-1 w-0 bg-purple-500 transition-all group-hover:w-10" />
                    </Link>
                    <Link href="#how-it-works" className="group flex items-center justify-between text-xl font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all">
                      <span>How it Works</span>
                      <div className="h-1 w-0 bg-purple-500 transition-all group-hover:w-10" />
                    </Link>
                    <Link href="#pricing" className="group flex items-center justify-between text-xl font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all">
                      <span>Pricing</span>
                      <div className="h-1 w-0 bg-purple-500 transition-all group-hover:w-10" />
                    </Link>
                  </nav>
                  
                  <div className="flex flex-col gap-6">
                    <hr className="border-white/5" />
                    <Button variant="outline" className="h-14 rounded-2xl border-white/10 glass text-zinc-300 font-bold uppercase tracking-widest text-xs">Log In</Button>
                    <Button className="h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 font-black tracking-[0.2em] text-xs uppercase shadow-xl shadow-purple-500/20 hover:scale-[1.02] transition-transform">
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden py-24 lg:py-40">
          {/* Advanced Background: Grid + Mesh */}
          <div className="absolute inset-0 z-0 bg-grid-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />
          <div className="absolute top-0 -left-1/4 h-[800px] w-[800px] rounded-full bg-purple-600/10 blur-[160px] animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 h-[800px] w-[800px] rounded-full bg-blue-600/10 blur-[160px] animate-pulse delay-700" />
          
          <div className="container relative z-10 mx-auto px-6 text-center lg:text-left">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-10">
                <div className="inline-flex w-fit items-center rounded-full border border-purple-500/30 bg-purple-500/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-400 backdrop-blur-md">
                  <Zap className="mr-2 h-3.5 w-3.5 fill-current" />
                  <span>The Future of Short-Form Content</span>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                  Go Viral <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">On Autopilot.</span>
                </h1>
                <p className="max-w-xl text-lg text-zinc-400 lg:text-xl leading-relaxed font-medium">
                  One prompt. Four platforms. Infinite growth. Our AI engine generates, edits, and schedules your content while you sleep.
                </p>
                <div className="flex flex-col gap-6 sm:flex-row sm:justify-center lg:justify-start">
                  <Button size="lg" className="h-16 px-10 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] font-bold text-lg transition-all active:scale-95">
                    Generate Free Video
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                  <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-white/10 glass hover:bg-white/10 font-bold transition-all">
                    View Showcase
                  </Button>
                </div>
                <div className="flex items-center gap-8 justify-center lg:justify-start">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                    ))}
                    <div className="h-10 w-10 rounded-full border-2 border-black bg-purple-600 flex items-center justify-center text-[10px] font-bold">+5k</div>
                  </div>
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Trusted by creators worldwide</div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[650px] group transition-all duration-700 hover:rotate-2">
                {/* Visual Halo */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-20 blur-2xl transition duration-1000 group-hover:opacity-40" />
                
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 bg-zinc-950 shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)] glass">
                  <Image
                    src="/hero_preview.png"
                    alt="AI Video Editor Interface"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Glass Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl flex items-center justify-between translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center"><Check className="h-5 w-5 text-emerald-400" /></div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-tighter">Video Optimized</div>
                        <div className="text-[10px] text-zinc-400">Ready for Instagram Reels</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-[10px] font-bold border border-white/10">PREVIEW</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Trusted Brands / Infinite Scroll Feel --- */}
        <section className="py-16 border-y border-white/5 bg-zinc-950/20 glass overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="flex items-center gap-3"><Youtube className="h-8 w-8" /><span className="text-2xl font-black tracking-tighter">YouTube</span></div>
              <div className="flex items-center gap-3"><Instagram className="h-8 w-8" /><span className="text-2xl font-black tracking-tighter">Instagram</span></div>
              <div className="flex items-center gap-3"><Facebook className="h-8 w-8" /><span className="text-2xl font-black tracking-tighter">Facebook</span></div>
              <div className="flex items-center gap-3"><Mail className="h-8 w-8" /><span className="text-2xl font-black tracking-tighter">MailChimp</span></div>
              <div className="flex items-center gap-3 text-purple-400 font-black italic text-2xl">TikTok</div>
            </div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section id="features" className="py-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-dot-white opacity-10 pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-24 text-center max-w-3xl mx-auto flex flex-col items-center gap-6">
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full" />
              <h2 className="text-4xl font-black sm:text-6xl tracking-tighter text-white">Built for <span className="text-purple-400 underline decoration-purple-600/30 underline-offset-8">Growth.</span></h2>
              <p className="text-lg text-zinc-400 font-medium">Our platform isn&apos;t just a tool; it&apos;s your full-time social media team in a browser.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "AI Synthesis Engine",
                  description: "Cinematic quality shorts from a 5-word prompt. No stock footage hunting required.",
                  icon: <Video className="h-6 w-6" />,
                  color: "purple"
                },
                {
                  title: "Omni-Sceduler",
                  description: "Smart scheduling that learns when your audience is awake and ready to engage.",
                  icon: <Calendar className="h-6 w-6" />,
                  color: "blue"
                },
                {
                  title: "Viral Analytics",
                  description: "Real-time heatmaps of viewer retention across all platforms in one view.",
                  icon: <PieChart className="h-6 w-6" />,
                  color: "pink"
                },
                {
                  title: "Auto Captions",
                  description: "Dydnamic, animated captions that keep eyes glued to the screen for longer.",
                  icon: <Zap className="h-6 w-6" />,
                  color: "yellow"
                },
                {
                  title: "Clone Your Voice",
                  description: "Teach the AI your voice to narrate every video with your unique personality.",
                  icon: <Youtube className="h-6 w-6" />,
                  color: "green"
                },
                {
                  title: "Cloud Collaboration",
                  description: "Shared workspaces for agencies to manage hundreds of client accounts.",
                  icon: <Share2 className="h-6 w-6" />,
                  color: "indigo"
                }
              ].map((feature, i) => (
                <Card key={i} className={`group bg-zinc-900/40 border-white/5 glass transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.2)]`}>
                  <CardHeader className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold tracking-tight text-white mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="pricing" className="py-32 bg-zinc-950 relative border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white opacity-5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
          
          <div className="container relative z-10 mx-auto px-6">
             <div className="mb-24 text-center flex flex-col items-center gap-6">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-500">Pick your power</span>
              <h2 className="text-4xl font-black sm:text-6xl tracking-tighter text-white uppercase italic">Investment in reach</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto">
              {/* Starter */}
              <Card className="bg-zinc-950 border-white/10 glass transition-transform hover:-translate-y-2">
                <CardHeader className="p-8 pb-4">
                  <div className="text-xs font-black tracking-widest text-zinc-500 uppercase mb-4">Solo</div>
                  <CardTitle className="text-white text-3xl font-black tracking-tighter transition-all group-hover:text-purple-400">Starter</CardTitle>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">$29</span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-6 grid gap-6">
                  <hr className="border-white/5" />
                  {[
                    "10 AI Video Credits",
                    "Schdule to YT & IG",
                    "Standard Templates",
                    "Basic Reach Analytics"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      <Check className="h-4 w-4 text-purple-500" />
                      {feature}
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-6 h-12 rounded-xl border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-xs">Start Now</Button>
                </CardContent>
              </Card>

              {/* Pro (Highlighted) */}
              <Card className="bg-zinc-900/50 border-purple-500 relative transform lg:scale-110 shadow-[0_0_80px_-20px_rgba(168,85,247,0.4)] glass overflow-hidden transition-transform hover:-translate-y-4">
                <div className="absolute top-0 right-0 rounded-bl-xl bg-purple-600 px-4 py-2 text-[10px] font-black tracking-[0.2em] text-white">ELITE</div>
                <CardHeader className="p-8 pb-4">
                  <div className="text-xs font-black tracking-widest text-purple-400 uppercase mb-4">Growth</div>
                  <CardTitle className="text-white text-3xl font-black tracking-tighter">Pro Plus</CardTitle>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">$79</span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-6 grid gap-6">
                  <hr className="border-white/10" />
                  {[
                    "50 AI Video Credits",
                    "All Social Platforms + Email",
                    "Premium Voice Cloning",
                    "Advanced Viral Forecaster",
                    "Priority Render Queue"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-zinc-200 uppercase tracking-wider">
                      <div className="h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Check className="h-3 w-3 text-purple-400" />
                      </div>
                      {feature}
                    </div>
                  ))}
                  <Button className="w-full mt-6 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 font-black uppercase tracking-widest text-xs shadow-lg shadow-purple-500/20">Become Unstoppable</Button>
                </CardContent>
              </Card>

              {/* Agency */}
              <Card className="bg-zinc-950 border-white/10 glass transition-transform hover:-translate-y-2">
                <CardHeader className="p-8 pb-4">
                  <div className="text-xs font-black tracking-widest text-zinc-500 uppercase mb-4">Team</div>
                  <CardTitle className="text-white text-3xl font-black tracking-tighter">Agency</CardTitle>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">$199</span>
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-6 grid gap-6">
                   <hr className="border-white/5" />
                  {[
                    "Unlimited AI Credits",
                    "White-label Reports",
                    "Dedicated Content Strategist",
                    "Full API Access",
                    "Massive Team Vault"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      <Check className="h-4 w-4 text-purple-500" />
                      {feature}
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-6 h-12 rounded-xl border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-xs">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* --- Social Proof CTA --- */}
        <section className="py-40 relative group overflow-hidden">
           <div className="absolute inset-0 bg-purple-600/5 blur-[120px] group-hover:bg-purple-600/10 transition-colors duration-1000" />
           <div className="container relative z-10 mx-auto px-6 text-center">
             <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
               <h2 className="text-5xl font-black tracking-tighter lg:text-7xl leading-tight">
                Don&apos;t just post. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase italic underline decoration-purple-500/20 underline-offset-8">Dominate.</span>
               </h2>
               <p className="text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
                 Join the elite 1% of creators who use AI to generate consistent, high-impact content every single day.
               </p>
               <div className="flex flex-col sm:flex-row gap-6">
                 <Button size="lg" className="h-20 px-12 rounded-[2rem] bg-white text-black hover:bg-zinc-200 font-black text-xl shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95">
                   START YOUR EMPIRE
                 </Button>
               </div>
               <div className="text-xs font-black tracking-[0.4em] uppercase text-zinc-600">No credit card required • cancel any time</div>
             </div>
           </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-white/5 py-24 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 lg:gap-12">
            <div className="col-span-2 flex flex-col gap-10">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl shadow-purple-500/10">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white tracking-tighter">VidaAI</span>
              </Link>
              <p className="max-w-sm text-sm font-medium text-zinc-500 leading-relaxed">
                The ultimate AI-powered content engine. Architected for peak reach and effortless engagement across the modern social landscape.
              </p>
              <div className="flex items-center gap-2">
                {[Youtube, Instagram, Facebook].map((Icon, i) => (
                  <Link key={i} href="#" className="h-12 w-12 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 transition-all">
                    <Icon size={20} fontWeight={900} />
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Platform</h3>
              <ul className="flex flex-col gap-5 text-sm font-bold text-zinc-500 tracking-tight">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">AI Studio</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Smart Pipeline</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Growth Insights</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Voice Lab</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Resources</h3>
              <ul className="flex flex-col gap-5 text-sm font-bold text-zinc-500 tracking-tight">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Elite</h3>
              <ul className="flex flex-col gap-5 text-sm font-bold text-zinc-500 tracking-tight">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Ambassador</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Strategic</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Affiliate</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Referral</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">© 2026 VidaAI Labs Inc. Built for the modern creator.</p>
            <div className="flex items-center gap-8">
               <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-md">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Global 99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
