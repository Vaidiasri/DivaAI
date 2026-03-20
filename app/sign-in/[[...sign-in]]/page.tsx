import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-25 blur transition duration-1000 group-hover:opacity-100"></div>
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-sm normal-case',
              card: 'bg-zinc-900 border border-white/10 shadow-2xl',
              headerTitle: 'text-white',
              headerSubtitle: 'text-zinc-400',
              socialButtonsBlockButton: 'bg-zinc-800 border-white/5 hover:bg-zinc-700 text-white',
              socialButtonsBlockButtonText: 'text-white',
              dividerLine: 'bg-white/10',
              dividerText: 'text-zinc-500',
              formFieldLabel: 'text-zinc-300',
              formFieldInput: 'bg-zinc-800 border-white/10 text-white',
              footerActionLink: 'text-purple-400 hover:text-purple-300'
            }
          }}
        />
      </div>
    </div>
  );
}
