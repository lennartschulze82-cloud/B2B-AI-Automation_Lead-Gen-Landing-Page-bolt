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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1e1e1e] rounded-2xl overflow-hidden mb-16">
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

        {/* Client placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-[#555] text-center mb-6 tracking-widest uppercase">Trusted by operators across industries</p>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-10 rounded-lg bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center"
              >
                <span className="text-xs text-[#333] font-medium tracking-wide">Client</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
