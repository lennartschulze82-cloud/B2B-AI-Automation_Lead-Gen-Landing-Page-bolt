import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Understand',
    body: 'We start by mapping how your business actually operates — the real workflows, not the ideal ones. This means understanding where time goes, what breaks, and what your team works around every day.',
  },
  {
    number: '02',
    title: 'Identify',
    body: "We surface the bottlenecks, redundancies, and manual handoffs that cost the most. Not everything is worth automating — we focus on what creates real leverage.",
  },
  {
    number: '03',
    title: 'Design',
    body: 'We design practical automation systems tailored to your existing operations. No ripping out what works. No over-engineering. Just clear, buildable solutions.',
  },
  {
    number: '04',
    title: 'Decide',
    body: "You get a full picture of what's possible and what it would take. Then you decide what to move forward with — on your timeline, with no pressure.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-28 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a9a] mb-4">PROCESS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight">
            A system, not a service.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[#111111] border border-[#1e1e1e] rounded-2xl p-7 hover:border-[#2a2a2a] transition-colors duration-300"
            >
              <span className="block text-[5rem] font-black leading-none text-[#1a1a1a] select-none mb-4 -mt-2">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-[#f0f0f0] mb-3">{step.title}</h3>
              <p className="text-sm text-[#9a9a9a] leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
