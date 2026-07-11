import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  { value: 8, suffix: '+ Years', label: 'Working with operational systems and business data' },
  { value: 40, suffix: '+ Automations', label: 'Running in production across client businesses' },
  { value: 6, suffix: ' Industries', label: 'From logistics to professional services to e-commerce' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latestValue) {
          node.textContent = Math.round(latestValue).toString();
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}


const sectors = [
  "Logistics & Operations",
  "FinTech & Finance",
  "E-Commerce & Retail",
  "Professional Services",
  "Healthcare & Life Sciences",
  "Real Estate & Development",
];

const caseStudies = [
  {
    metric: "80% Time Saved",
    description: "Automated invoice ingestion and system matching for a national freight forwarder.",
  },
  {
    metric: "90% Response Speedup",
    description: "Implemented AI quote generation, decreasing client response time to under two minutes.",
  },
  {
    metric: "100% Data Accuracy",
    description: "Engineered automatic validation syncing data across double-ledger ERP systems.",
  },
];

export default function Credibility() {
  return (
    <section className="py-28 bg-radial-0a">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a9a] mb-4">CREDIBILITY</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight">
            Experience with real systems.
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1e1e1e] rounded-2xl overflow-hidden mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] px-10 py-12 text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-[#f0f0f0] mb-3 tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-[#9a9a9a] leading-relaxed max-w-[180px] mx-auto">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Snapshots of Success (Case Studies) */}
        <div className="mb-24">
          <p className="text-xs text-[#555] tracking-widest uppercase mb-10 text-center">Snapshots of success</p>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111111]/40 border border-[#2a2a2a]/60 rounded-xl p-6 hover-glow-card"
              >
                <span className="block text-2xl font-black text-[#4f6ef7] mb-2 tracking-tight">
                  {study.metric}
                </span>
                <p className="text-xs text-[#9a9a9a] leading-relaxed">
                  {study.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sector infinite ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden py-4 border-y border-[#1e1e1e] bg-[#0a0a0a]"
        >
          {/* Gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex whitespace-nowrap gap-16 text-[10px] font-bold tracking-[0.2em] text-[#333] uppercase"
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* Repeated lists for smooth infinite loop scroll */}
            {Array.from({ length: 3 }).flatMap(() => sectors).map((sector, idx) => (
              <span key={idx} className="flex items-center gap-3 hover:text-[#4f6ef7] transition-colors duration-200">
                ✦ {sector}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
