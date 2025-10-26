import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl bg-fuchsia-600/40" />
        <div className="absolute top-20 right-0 h-[460px] w-[460px] rounded-full blur-3xl bg-indigo-600/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between py-5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-white text-neutral-900 grid place-items-center font-black">N</div>
            <span className="font-semibold tracking-tight">NovaCut</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a className="hover:text-white transition" href="#features">Features</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="#">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex px-4 py-2 text-sm rounded-md border border-white/15 hover:border-white/30 transition">Sign in</button>
            <button className="inline-flex px-4 py-2 text-sm rounded-md bg-white text-neutral-900 hover:bg-neutral-100 transition">Get started</button>
          </div>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center pt-8 md:pt-16 pb-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles className="h-4 w-4 text-fuchsia-300" />
              New: AI-powered smart cuts and captions
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Edit videos at the speed of thought
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-white/70 text-lg">
              NovaCut is a modern, AI-assisted video editor that helps creators cut, polish, and publish in minutes—not hours.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-100 transition">
                <Play className="h-4 w-4" />
                Try it free
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 hover:border-white/30 transition">
                Watch demo
              </button>
            </motion.div>
            <div className="mt-6 text-white/50 text-sm">
              No credit card required • Works in your browser
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-fuchsia-600/40 to-indigo-600/40 blur-xl opacity-60" />
            <div className="relative rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-neutral-900">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <div className="ml-3 text-xs text-white/50">MyProject.mp4</div>
              </div>
              <div className="grid grid-rows-[1fr_auto] md:grid-cols-[200px_1fr]">
                <aside className="hidden md:block border-r border-white/10 p-3 space-y-2 bg-neutral-900/40">
                  {['Media','Audio','Titles','Effects','Exports'].map((t,i)=> (
                    <div key={i} className="text-xs px-2 py-2 rounded-md hover:bg-white/5 text-white/70">{t}</div>
                  ))}
                </aside>
                <div className="p-3">
                  <div className="aspect-video rounded-lg bg-gradient-to-tr from-neutral-800 to-neutral-900 grid place-items-center text-white/60 text-sm">
                    Preview
                  </div>
                  <div className="mt-3 h-20 rounded-md bg-neutral-900/60 border border-white/10" />
                </div>
                <div className="md:col-span-2 border-t border-white/10 bg-neutral-900/40 p-3">
                  <div className="h-16 rounded-md bg-neutral-800/80 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-24 bg-fuchsia-500/50" />
                    <div className="absolute inset-y-0 left-28 w-40 bg-indigo-500/50" />
                    <div className="absolute inset-y-0 left-80 w-24 bg-emerald-500/50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
