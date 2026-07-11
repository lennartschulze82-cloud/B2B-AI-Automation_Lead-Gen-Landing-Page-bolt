import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    description: '',
    teamSize: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setSubmitted(false), 400);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            className="relative w-full max-w-lg bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#9a9a9a] hover:text-[#f0f0f0] transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#4f6ef7]/10 border border-[#4f6ef7]/30 flex items-center justify-center mx-auto mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f6ef7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#f0f0f0] mb-3">Request received.</h3>
                <p className="text-[#9a9a9a] text-sm leading-relaxed">
                  We've received your request. Expect to hear from us within one business day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-[#f0f0f0] mb-1">Request an Automation Audit</h3>
                <p className="text-[#9a9a9a] text-sm mb-7">No commitment. We'll review and follow up within one business day.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#9a9a9a] mb-1.5 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[#f0f0f0] text-sm placeholder-[#444] focus:outline-none focus:border-[#4f6ef7]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9a9a9a] mb-1.5 uppercase tracking-wide">Business Name</label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[#f0f0f0] text-sm placeholder-[#444] focus:outline-none focus:border-[#4f6ef7]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9a9a9a] mb-1.5 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@acmecorp.com"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[#f0f0f0] text-sm placeholder-[#444] focus:outline-none focus:border-[#4f6ef7]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9a9a9a] mb-1.5 uppercase tracking-wide">
                      What does your team spend the most time on manually?
                    </label>
                    <textarea
                      name="description"
                      required
                      value={form.description}
                      onChange={handleChange}
                      rows={3}
                      placeholder="e.g. manually pulling reports, updating spreadsheets, chasing approvals..."
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[#f0f0f0] text-sm placeholder-[#444] focus:outline-none focus:border-[#4f6ef7]/60 transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9a9a9a] mb-1.5 uppercase tracking-wide">Approximate Team Size (optional)</label>
                    <select
                      name="teamSize"
                      value={form.teamSize}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4f6ef7]/60 transition-colors appearance-none"
                      style={{ color: form.teamSize ? '#f0f0f0' : '#444' }}
                    >
                      <option value="" disabled>Select team size</option>
                      <option value="1-5">1–5</option>
                      <option value="6-20">6–20</option>
                      <option value="21-100">21–100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4f6ef7] hover:bg-[#3d5de6] text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm mt-2"
                  >
                    Send My Audit Request
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
