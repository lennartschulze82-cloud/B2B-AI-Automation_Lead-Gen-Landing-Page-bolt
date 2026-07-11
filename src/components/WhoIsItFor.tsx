import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const forItems = [
  'Businesses with real, established operations',
  'Teams doing repetitive manual work across tools',
  'Founders who want clarity and a plan before committing budget',
  'Companies where time and accuracy actually matter',
];

const notForItems = [
  "You're looking for a magic button or instant results",
  "It's a hobby project or early-stage experiment with no real workflows",
  'You want a vendor to tell you what you need',
  "You're not open to changing how your team works",
];

export default function WhoIsItFor() {
  return (
    <section className="py-28 bg-radial-0a">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a9a] mb-4">FIT</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight">
            Built for operators.<br />Not for everyone.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* For you */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-[#0d1a14] p-8 hover-glow-card"
            style={{ borderColor: '#1e4a30' }}
          >
            <h3 className="text-base font-semibold text-[#5ab87a] mb-6 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#5ab87a]/10 border border-[#5ab87a]/30 flex items-center justify-center">
                <Check size={11} strokeWidth={3} color="#5ab87a" />
              </span>
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {forItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#5ab87a]/10 flex items-center justify-center">
                    <Check size={11} strokeWidth={3} color="#5ab87a" />
                  </span>
                  <span className="text-[#c8e8d4] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-[#1a0d0d] p-8 hover-glow-card"
            style={{ borderColor: '#4a1e1e' }}
          >
            <h3 className="text-base font-semibold text-[#d97272] mb-6 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#d97272]/10 border border-[#d97272]/30 flex items-center justify-center">
                <X size={11} strokeWidth={3} color="#d97272" />
              </span>
              This probably isn't for you if...
            </h3>
            <ul className="space-y-4">
              {notForItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#d97272]/10 flex items-center justify-center">
                    <X size={11} strokeWidth={3} color="#d97272" />
                  </span>
                  <span className="text-[#e8c8c8] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
