import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'You submit the form',
    body: 'We review your request within one business day.',
  },
  {
    number: '02',
    title: 'Short intro call',
    body: 'A 20-minute call to understand your business and confirm the audit is a good fit. No pitch, no deck.',
  },
  {
    number: '03',
    title: 'The audit',
    body: 'We review your workflows and prepare a clear, written summary of findings and opportunities.',
  },
  {
    number: '04',
    title: 'You decide',
    body: "We walk you through the findings. You decide what, if anything, to do next. There's no pressure and no follow-up sales sequence.",
  },
];

export default function WhatHappensNext() {
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
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a9a] mb-4">NEXT STEPS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight">
            Here's exactly what to expect.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-[#1e1e1e]" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-0">
                  {/* Step dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#111111] border border-[#2a2a2a] flex items-center justify-center mb-0 md:mb-5 hover-glow-card">
                    <span className="text-sm font-bold text-[#4f6ef7]">{step.number}</span>
                  </div>
                  <div className="pt-1 md:pt-0">
                    <h3 className="text-sm font-semibold text-[#f0f0f0] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#9a9a9a] leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
