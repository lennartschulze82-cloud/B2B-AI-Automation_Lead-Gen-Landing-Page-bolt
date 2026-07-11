import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

interface StickyNavbarProps {
  onOpenModal: () => void;
}

export default function StickyNavbar({ onOpenModal }: StickyNavbarProps) {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -56, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -56, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1e1e1e]"
        >
          {/* Scroll progress bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] bg-[#4f6ef7] origin-left"
            style={{ scaleX }}
          />

          <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold text-[#f0f0f0] tracking-tight hidden sm:block">
              AI Automation Agency
              <span className="text-[#4f6ef7] ml-1">·</span>
              <span className="text-[#555] font-normal ml-1">Automate the repetitive. Scale what matters.</span>
            </p>

            <div className="flex items-center gap-4 ml-auto">
              <nav className="hidden md:flex items-center gap-5 text-xs text-[#9a9a9a]">
                <a href="#roi-calculator" className="hover:text-[#f0f0f0] transition-colors">ROI Calculator</a>
                <a href="#how-we-work" className="hover:text-[#f0f0f0] transition-colors">How It Works</a>
              </nav>
              <button
                onClick={onOpenModal}
                id="sticky-nav-cta"
                className="text-xs font-semibold bg-[#4f6ef7] hover:bg-[#3d5de6] text-white px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Book Free Audit
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
