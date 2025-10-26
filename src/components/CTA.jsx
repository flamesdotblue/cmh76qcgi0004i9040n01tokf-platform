import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-72 bg-gradient-to-t from-fuchsia-600/20 to-transparent blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold">
            Simple pricing, powerful results
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-white/70">
            Start free. Upgrade when you need more exports, storage, and team features.
          </motion.p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Plan name="Free" price="$0" tagline="Get started" features={["Basic editor","Watermarked exports","Up to 720p","1 GB cloud storage"]} cta="Start free" highlighted={false} />
          <Plan name="Creator" price="$19/mo" tagline="Most popular" features={["Full editor + AI cuts","No watermark","Up to 4K","100 GB cloud storage"]} cta="Go Creator" highlighted />
          <Plan name="Team" price="$49/mo" tagline="Collaborate" features={["Shared projects","Review links","Brand kit & templates","1 TB cloud storage"]} cta="Start Team" highlighted={false} />
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, tagline, features, cta, highlighted }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className={`relative rounded-2xl p-6 border ${highlighted ? 'border-fuchsia-400/40 bg-white/[0.06]' : 'border-white/10 bg-white/[0.03]'} overflow-hidden`}>
      {highlighted && (
        <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-fuchsia-500/20 to-transparent blur-2xl" />
      )}
      <div className="relative">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-sm uppercase tracking-wider text-white/60">{name}</div>
            <div className="mt-1 text-3xl font-extrabold">{price}</div>
          </div>
          <span className="text-xs text-white/60">{tagline}</span>
        </div>
        <ul className="mt-6 space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400/80" />
              <span className="text-white/80">{f}</span>
            </li>
          ))}
        </ul>
        <button className={`mt-6 w-full rounded-md px-4 py-3 font-medium transition ${highlighted ? 'bg-white text-neutral-900 hover:bg-neutral-100' : 'border border-white/15 hover:border-white/30'}`}>
          {cta}
        </button>
        <div className="mt-3 text-xs text-white/50">Cancel anytime • 14-day money-back guarantee</div>
      </div>
    </motion.div>
  );
}
