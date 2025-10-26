import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Music, Sliders, Layers, Timer, Download, Cloud, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-5 w-5 text-fuchsia-300" />,
    title: 'AI Smart Cuts',
    desc: 'Auto-detect silences, filler words, and jump cuts for rapid editing.'
  },
  {
    icon: <Scissors className="h-5 w-5 text-indigo-300" />,
    title: 'Precision Trimming',
    desc: 'Frame-accurate tools with ripple edits and magnetic timeline.'
  },
  {
    icon: <Music className="h-5 w-5 text-emerald-300" />,
    title: 'Audio Sweetening',
    desc: 'Noise removal, leveling, and auto-ducking for crystal clear sound.'
  },
  {
    icon: <Layers className="h-5 w-5 text-cyan-300" />,
    title: 'Layers & Titles',
    desc: 'Add text, stickers, overlays, and LUTs with non-destructive layers.'
  },
  {
    icon: <Sliders className="h-5 w-5 text-rose-300" />,
    title: 'Color Grading',
    desc: 'Curves, wheels, and presets to match your aesthetic instantly.'
  },
  {
    icon: <Timer className="h-5 w-5 text-amber-300" />,
    title: 'Real-time Preview',
    desc: 'GPU-accelerated playback with background rendering.'
  },
  {
    icon: <Cloud className="h-5 w-5 text-sky-300" />,
    title: 'Cloud Projects',
    desc: 'Edit anywhere. Sync assets and timelines across devices.'
  },
  {
    icon: <Download className="h-5 w-5 text-lime-300" />,
    title: '1-Click Export',
    desc: 'Presets for YouTube, TikTok, Instagram, and ProRes.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold">
            Everything you need to create fast
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-white/70 max-w-2xl mx-auto">
            Powerful editing tools with an intuitive interface and AI assist when you want it.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.03 }} className="group rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition p-5">
              <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-white/70 mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
