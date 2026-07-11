import { motion } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-radial-0a">
      {/* Drifting dot grid background */}
      <motion.div
        className="absolute inset-[-40px] opacity-[0.16] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #9a9a9a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        animate={{
          x: [-16, 16, -16],
          y: [-16, 16, -16],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hero ambient glow blob 1 */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#4f6ef7] rounded-full blur-[140px] opacity-[0.05] pointer-events-none z-0"
        animate={{
          scale: [1, 1.15, 1],
          x: ["-50%", "-45%", "-50%"],
          y: ["-50%", "-55%", "-50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero ambient glow blob 2 (offset size/hue) */}
      <motion.div
        className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#3b82f6] rounded-full blur-[120px] opacity-[0.04] pointer-events-none z-0"
        animate={{
          scale: [1, 1.25, 0.9],
          x: ["-50%", "-58%", "-50%"],
          y: ["-50%", "-42%", "-50%"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none z-0" />

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
          <div className="relative inline-block">
            {/* Outward-expanding ring animation */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-[#4f6ef7] opacity-30 pointer-events-none"
              animate={{
                scale: [1, 1.45],
                opacity: [0.35, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <button
              onClick={onOpenModal}
              className="relative z-10 inline-block bg-[#4f6ef7] hover:bg-[#3d5de6] text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-[#4f6ef7]/10 hover:shadow-[#4f6ef7]/20"
            >
              Request an Automation Audit
            </button>
          </div>
          <p className="mt-5 text-sm text-[#555]">
            No pitch. No pressure. Just a clear look at where automation can help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
