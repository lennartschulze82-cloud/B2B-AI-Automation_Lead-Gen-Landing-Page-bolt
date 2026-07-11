import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const coverageItems = [
  'Current workflow review',
  'Bottleneck and waste identification',
  'Automation opportunity mapping',
  'Effort vs. impact assessment',
  'Written summary of findings',
];

export default function AuditOffer() {
  return (
    <section className="py-28 bg-radial-0d">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a9a] mb-4">THE OFFER</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight">
            Free Automation Audit
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-[#9a9a9a] text-base leading-relaxed">
              Before any engagement, we offer a no-cost audit of your current workflows. We review how your team operates, where time is lost, and where automation could create real leverage.
            </p>
            <p className="text-[#9a9a9a] text-base leading-relaxed">
              You'll walk away with a clear picture of your automation opportunities — whether or not we work together.
            </p>
            <p className="text-[#9a9a9a] text-base leading-relaxed">
              There's no obligation. No sales process attached to it. Just an honest assessment.
            </p>
            
            {/* Founder Signature Note */}
            <div className="pt-6 border-t border-[#1e1e1e] flex flex-col gap-3 mt-8">
              <p className="text-xs italic text-[#777] leading-relaxed">
                "Our goal is simple: to show you exactly where operations are leaking time, without the standard software sales pitch. You get the blueprint; you choose what to build."
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[10px] font-bold text-[#4f6ef7]">
                  LS
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#f0f0f0]">Lennart Schulze</span>
                  <span className="block text-[10px] text-[#555]">Founder & Principal Operator</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: coverage card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 hover-glow-card"
          >
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#9a9a9a] mb-6">What the audit covers</p>
            <ul className="space-y-4">
              {coverageItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4f6ef7]/10 border border-[#4f6ef7]/30 flex items-center justify-center">
                    <Check size={11} strokeWidth={3} color="#4f6ef7" />
                  </span>
                  <span className="text-[#c8d4f8] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
