import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, #9a9a9a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4f6ef7] mb-6">
            AI Automation Agency
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f0f0f0] leading-[1.12] tracking-tight mb-7">
            Your team is spending time on work that shouldn't require a human.
          </h1>
          <p className="text-lg sm:text-xl text-[#9a9a9a] max-w-2xl mx-auto leading-relaxed mb-10">
            We design automation systems that remove operational friction — built around how your business actually works, not how a software vendor wants it to.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-block bg-[#4f6ef7] hover:bg-[#3d5de6] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-[#4f6ef7]/10 hover:shadow-[#4f6ef7]/20"
          >
            Request an Automation Audit
          </button>
          <p className="mt-5 text-sm text-[#555]">
            No pitch. No pressure. Just a clear look at where automation can help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
