
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download } from 'lucide-react';

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    let triggered = false;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY < 20 && !triggered) {
        triggered = true;
        // Small delay so it feels natural, not instant
        setTimeout(() => setShow(true), 200);
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed]);

  function handleDismiss() {
    setShow(false);
    setDismissed(true);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShow(false);
      setDismissed(true);
    }, 2500);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={handleDismiss}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-[#111111] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.93, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.93, y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Top accent gradient */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#4f6ef7] via-[#7c9ffb] to-[#4f6ef7]" />

            <div className="p-8">
              {/* Close */}
              <button
                onClick={handleDismiss}
                className="absolute top-5 right-5 text-[#9a9a9a] hover:text-[#f0f0f0] transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-[#4f6ef7]/10 border border-[#4f6ef7]/20 flex items-center justify-center mb-5">
                      <FileText size={22} className="text-[#4f6ef7]" />
                    </div>

                    {/* Heading */}
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4f6ef7] mb-2">
                      Free Resource
                    </p>
                    <h3 className="text-xl font-bold text-[#f0f0f0] leading-snug mb-3">
                      Before you go — grab the<br />
                      <span className="text-[#4f6ef7]">Automation Red Flags Checklist</span>
                    </h3>
                    <p className="text-sm text-[#9a9a9a] leading-relaxed mb-6">
                      7 signs your operations are leaking time and money that most businesses don't notice until it's too late. Free PDF, no strings attached.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your work email"
                        id="exit-intent-email"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-[#f0f0f0] text-sm placeholder-[#444] focus:outline-none focus:border-[#4f6ef7]/60 transition-colors"
                      />
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-[#4f6ef7] hover:bg-[#3d5de6] text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm"
                      >
                        <Download size={15} />
                        Send Me the Checklist
                      </button>
                    </form>

                    <p className="text-[10px] text-[#444] mt-4 text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-6 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#4f6ef7]/10 border border-[#4f6ef7]/30 flex items-center justify-center mx-auto mb-4">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f6ef7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">Checklist on its way.</h3>
                    <p className="text-sm text-[#9a9a9a]">Check your inbox — it'll be there in minutes.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
