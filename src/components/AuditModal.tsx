import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const bottleneckOptions = [
  "Data Entry & Spreadsheets",
  "CRM Syncing & Updates",
  "Reporting & Data Analysis",
  "Email Routing & Triage",
  "Client Follow-ups",
  "Invoice Processing & Approvals"
];

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    description: '', // Tools & Stack description
    teamSize: '',
    bottlenecks: [] as string[],
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setSubmitted(false), 400);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleBottleneck(option: string) {
    setForm(prev => {
      const exists = prev.bottlenecks.includes(option);
      return {
        ...prev,
        bottlenecks: exists
          ? prev.bottlenecks.filter(b => b !== option)
          : [...prev.bottlenecks, option]
      };
    });
  }

  function handleNext(e: React.MouseEvent) {
    e.preventDefault();
    if (step < 3) setStep(prev => prev + 1);
  }

  function handleBack(e: React.MouseEvent) {
    e.preventDefault();
    if (step > 1) setStep(prev => prev - 1);
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
              className="absolute top-5 right-5 text-[#9a9a9a] hover:text-[#f0f0f0] transition-colors z-20"
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
                <h3 className="text-xl font-semibold text-[#f0f0f0] mb-3">Audit requested.</h3>
                <p className="text-[#9a9a9a] text-sm leading-relaxed">
                  We will analyze your bottlenecks and follow up with a written plan within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#f0f0f0]">Audit Health Check</h3>
                    <p className="text-xs text-[#555] mt-1">Configure your diagnosis summary</p>
                  </div>
                  <span className="text-xs font-semibold text-[#4f6ef7] bg-[#4f6ef7]/10 border border-[#4f6ef7]/20 px-2.5 py-1 rounded">
                    Step {step} of 3
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#1e1e1e] h-1 rounded-full overflow-hidden mb-6">
                  <div
                    className="bg-[#4f6ef7] h-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {/* Step 1: Bottlenecks */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-xs font-medium text-[#9a9a9a] mb-4 uppercase tracking-wide">
                          Where does your team experience the most manual friction?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                          {bottleneckOptions.map(option => {
                            const isSelected = form.bottlenecks.includes(option);
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => toggleBottleneck(option)}
                                className={`px-4 py-2.5 rounded-lg border text-xs font-medium text-left transition-all ${
                                  isSelected
                                    ? 'border-[#4f6ef7] bg-[#4f6ef7]/10 text-[#f0f0f0]'
                                    : 'border-[#2a2a2a] bg-[#0a0a0a] text-[#9a9a9a] hover:border-[#4f6ef7]/40'
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>
                        <button
                          onClick={handleNext}
                          disabled={form.bottlenecks.length === 0}
                          className="w-full bg-[#4f6ef7] hover:bg-[#3d5de6] disabled:opacity-40 disabled:hover:bg-[#4f6ef7] text-white font-semibold py-3 rounded-lg transition-all duration-200 text-sm"
                        >
                          Next Step
                        </button>
                      </motion.div>
                    )}

                    {/* Step 2: Tech Stack / Description */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-xs font-medium text-[#9a9a9a] mb-3 uppercase tracking-wide">
                          What software tools/systems does your team run most?
                        </label>
                        <textarea
                          name="description"
                          required
                          value={form.description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="e.g., CRM (HubSpot), Slack, Gmail, Excel spreadsheets, Salesforce, Notion..."
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-[#f0f0f0] text-sm placeholder-[#444] focus:outline-none focus:border-[#4f6ef7]/60 transition-colors resize-none mb-6"
                        />
                        <div className="flex gap-3">
                          <button
                            onClick={handleBack}
                            className="w-1/3 border border-[#2a2a2a] hover:bg-[#1a1a1a] text-[#f0f0f0] font-semibold py-3 rounded-lg transition-colors text-sm"
                          >
                            Back
                          </button>
                          <button
                            onClick={handleNext}
                            disabled={!form.description.trim()}
                            className="w-2/3 bg-[#4f6ef7] hover:bg-[#3d5de6] disabled:opacity-40 disabled:hover:bg-[#4f6ef7] text-white font-semibold py-3 rounded-lg transition-all duration-200 text-sm"
                          >
                            Next Step
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Contact details */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
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
                        <div className="pb-4">
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

                        <div className="flex gap-3 pt-2">
                          <button
                            onClick={handleBack}
                            className="w-1/3 border border-[#2a2a2a] hover:bg-[#1a1a1a] text-[#f0f0f0] font-semibold py-3 rounded-lg transition-colors text-sm"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={!form.name.trim() || !form.business.trim() || !form.email.trim()}
                            className="w-2/3 bg-[#4f6ef7] hover:bg-[#3d5de6] disabled:opacity-40 disabled:hover:bg-[#4f6ef7] text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                          >
                            Submit Audit
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
