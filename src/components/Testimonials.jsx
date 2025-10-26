import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maya Chen',
    role: 'YouTuber, 1.2M subs',
    quote:
      'NovaCut cut my editing time in half. The AI cut detection and captions feel like magic.',
  },
  {
    name: 'Jordan Rivera',
    role: 'Agency Editor',
    quote:
      'Finally an editor that is both powerful and fast. Client revisions are a breeze now.',
  },
  {
    name: 'Sam Patel',
    role: 'Indie Filmmaker',
    quote:
      'The color tools and real-time preview rival desktop suites—and it runs in my browser.',
  },
];

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
  return (
    <div className="h-10 w-10 rounded-full bg-white/10 grid place-items-center text-sm font-semibold">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold">
              Loved by creators
            </motion.h2>
            <p className="text-white/70 mt-2">Editors, filmmakers, and teams are switching to NovaCut.</p>
          </div>
          <div className="hidden md:flex items-center text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
