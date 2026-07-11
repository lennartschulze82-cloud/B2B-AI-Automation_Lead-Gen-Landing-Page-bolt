import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

interface HeroProps {
  onOpenModal: () => void;
}

const words = ["data entry", "CRM syncing", "email sorting", "invoice processing"];

export default function Hero({ onOpenModal }: HeroProps) {
  const [index, setIndex] = useState(0);
  const mouseX = useMotionValue(-1000); // Start far off-screen
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x - 225); // Offset by half of blob size (450px)
    mouseY.set(y - 225);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-radial-0a"
    >
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

      {/* Interactive Cursor-Follow Glow Blob */}
      <motion.div
        className="absolute w-[450px] h-[450px] bg-[#4f6ef7] rounded-full blur-[120px] opacity-[0.07] pointer-events-none z-0"
        style={{
          left: springX,
          top: springY,
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f0f0f0] leading-[1.2] tracking-tight mb-7">
            Your team is spending hours on{' '}
            <span className="text-[#4f6ef7] inline-block relative h-[1.12em] w-[260px] sm:w-[410px] md:w-[500px] text-left align-bottom overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-0 bottom-0"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            that shouldn't require a human.
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
