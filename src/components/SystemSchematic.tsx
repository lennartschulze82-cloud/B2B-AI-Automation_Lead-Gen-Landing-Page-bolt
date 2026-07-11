import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Cpu, MessageSquareDot } from 'lucide-react';

export default function SystemSchematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Animate drawing lines
  const line1Progress = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const line2Progress = useTransform(scrollYProgress, [0.45, 0.75], [0, 1]);

  // Animate node glowing states
  const node1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0.3, 1]);
  const node1Glow = useTransform(scrollYProgress, [0.1, 0.25], ['rgba(79, 110, 247, 0)', 'rgba(79, 110, 247, 0.4)']);
  
  const node2Opacity = useTransform(scrollYProgress, [0.4, 0.55], [0.3, 1]);
  const node2Glow = useTransform(scrollYProgress, [0.4, 0.55], ['rgba(79, 110, 247, 0)', 'rgba(79, 110, 247, 0.4)']);

  const node3Opacity = useTransform(scrollYProgress, [0.7, 0.85], [0.3, 1]);
  const node3Glow = useTransform(scrollYProgress, [0.7, 0.85], ['rgba(79, 110, 247, 0)', 'rgba(79, 110, 247, 0.4)']);

  return (
    <section ref={containerRef} className="py-28 bg-radial-0d relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4f6ef7] mb-4">SYSTEM PIPELINE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight">
            How workflows tighten.
          </h2>
          <p className="text-[#9a9a9a] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            As you scroll, watch how raw data ingestion connects to real-time AI agents and automated outcomes.
          </p>
        </motion.div>

        {/* Pipeline Diagram */}
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 p-8 bg-[#111111]/60 border border-[#2a2a2a]/60 rounded-2xl min-h-[350px]">
          
          {/* Connector SVGs — desktop only */}
          <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 800 350" fill="none">
              {/* Path 1: Node 1 to Node 2 */}
              <motion.path
                d="M 230 175 L 430 175"
                stroke="#4f6ef7"
                strokeWidth={3}
                style={{ pathLength: line1Progress }}
                className="opacity-70"
              />
              <path d="M 230 175 L 430 175" stroke="#1f2937" strokeWidth={3} className="opacity-30 z-[-1]" />

              {/* Path 2: Node 2 to Node 3 */}
              <motion.path
                d="M 570 175 L 770 175"
                stroke="#4f6ef7"
                strokeWidth={3}
                style={{ pathLength: line2Progress }}
                className="opacity-70"
              />
              <path d="M 570 175 L 770 175" stroke="#1f2937" strokeWidth={3} className="opacity-30 z-[-1]" />
            </svg>
          </div>

          {/* Node 1: Ingestion */}
          <motion.div
            style={{ opacity: node1Opacity, boxShadow: useTransform(node1Glow, (g) => `0 0 40px ${g}`) }}
            className="relative z-10 w-full md:w-56 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center text-center hover-glow-card transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-[#4f6ef7]/10 flex items-center justify-center text-[#4f6ef7] mb-4 border border-[#4f6ef7]/30">
              <Database size={22} />
            </div>
            <h4 className="text-sm font-semibold text-[#f0f0f0] mb-1">1. Data Ingestion</h4>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              API Webhooks, CSV files, and databases feed raw data into the queue automatically.
            </p>
          </motion.div>

          {/* Node 2: Processing */}
          <motion.div
            style={{ opacity: node2Opacity, boxShadow: useTransform(node2Glow, (g) => `0 0 40px ${g}`) }}
            className="relative z-10 w-full md:w-56 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center text-center hover-glow-card transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-[#4f6ef7]/10 flex items-center justify-center text-[#4f6ef7] mb-4 border border-[#4f6ef7]/30">
              <Cpu size={22} />
            </div>
            <h4 className="text-sm font-semibold text-[#f0f0f0] mb-1">2. Core Processing</h4>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              AI agents analyze, categorize, extract, and match data against your custom operational logic.
            </p>
          </motion.div>

          {/* Node 3: Outgestion */}
          <motion.div
            style={{ opacity: node3Opacity, boxShadow: useTransform(node3Glow, (g) => `0 0 40px ${g}`) }}
            className="relative z-10 w-full md:w-56 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center text-center hover-glow-card transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-[#4f6ef7]/10 flex items-center justify-center text-[#4f6ef7] mb-4 border border-[#4f6ef7]/30">
              <MessageSquareDot size={22} />
            </div>
            <h4 className="text-sm font-semibold text-[#f0f0f0] mb-1">3. Automated Outcomes</h4>
            <p className="text-xs text-[#9a9a9a] leading-relaxed">
              Slack alerts are fired, CRM database records synced, and documents generated instantly.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
