import { useState, useEffect } from 'react';
import { motion, animate, useMotionValue } from 'framer-motion';

export default function AutomationCalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [hoursSpent, setHoursSpent] = useState(6);

  // Computed values
  const yearlyHours = teamSize * hoursSpent * 52;
  const hoursReclaimed = Math.round(yearlyHours * 0.7); // Assume 70% automated
  const financialSavings = Math.round(hoursReclaimed * 45); // Average $45/hour cost

  // Values for display animations
  const displayHours = useMotionValue(0);
  const displaySavings = useMotionValue(0);

  useEffect(() => {
    const controls1 = animate(displayHours, hoursReclaimed, {
      duration: 0.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        const el = document.getElementById('calc-hours-saved');
        if (el) el.textContent = Math.round(v).toLocaleString();
      },
    });

    const controls2 = animate(displaySavings, financialSavings, {
      duration: 0.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        const el = document.getElementById('calc-money-saved');
        if (el) el.textContent = `$${Math.round(v).toLocaleString()}`;
      },
    });

    return () => {
      controls1.stop();
      controls2.stop();
    };
  }, [hoursReclaimed, financialSavings, displayHours, displaySavings]);

  return (
    <section id="roi-calculator" className="py-28 bg-radial-0d relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4f6ef7] mb-4">ROI CALCULATOR</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight">
            Calculate your automation potential.
          </h2>
          <p className="text-[#9a9a9a] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            See how much operational leak can be reclaimed in your company. We typically automate around 70% of highly repetitive tasks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Side: Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-[#111111] border border-[#2a2a2a]/60 rounded-2xl p-8 hover-glow-card"
          >
            {/* Team Size Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-[#f0f0f0]">Team size</label>
                <span className="text-lg font-bold text-[#4f6ef7]">{teamSize} {teamSize === 50 ? '50+' : 'people'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full h-1.5 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-[#4f6ef7]"
                style={{
                  background: `linear-gradient(to right, #4f6ef7 0%, #4f6ef7 ${(teamSize - 1) * 2}%, #1a1a1a ${(teamSize - 1) * 2}%, #1a1a1a 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-[#555] mt-2">
                <span>1 person</span>
                <span>50 people</span>
              </div>
            </div>

            {/* Hours Spent Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium text-[#f0f0f0]">Average manual work / employee / week</label>
                <span className="text-lg font-bold text-[#4f6ef7]">{hoursSpent} hours</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={hoursSpent}
                onChange={(e) => setHoursSpent(parseInt(e.target.value))}
                className="w-full h-1.5 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer accent-[#4f6ef7]"
                style={{
                  background: `linear-gradient(to right, #4f6ef7 0%, #4f6ef7 ${(hoursSpent - 1) * 5.26}%, #1a1a1a ${(hoursSpent - 1) * 5.26}%, #1a1a1a 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-[#555] mt-2">
                <span>1 hour/wk</span>
                <span>20 hours/wk</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Calculated Savings (Glow Card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-[#4f6ef7]/5 border border-[#4f6ef7]/20 rounded-2xl p-8 relative flex flex-col justify-center text-center overflow-hidden min-h-[300px]"
          >
            {/* Card Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4f6ef7]/10 to-transparent pointer-events-none" />

            <p className="text-xs font-semibold tracking-wider text-[#9ac0ff] uppercase mb-4">Estimated Yearly Savings</p>

            <div className="mb-6">
              <span id="calc-hours-saved" className="text-5xl md:text-6xl font-black text-[#f0f0f0] tracking-tight block">
                0
              </span>
              <span className="text-xs font-medium text-[#9a9a9a] uppercase tracking-[0.1em] mt-1 block">Hours Saved / Year</span>
            </div>

            <div className="pt-6 border-t border-[#4f6ef7]/15">
              <span id="calc-money-saved" className="text-3xl sm:text-4xl font-extrabold text-[#4f6ef7] tracking-tight block">
                $0
              </span>
              <span className="text-xs font-medium text-[#9a9a9a] uppercase tracking-[0.1em] mt-1 block">Value Reclaimed</span>
            </div>
            
            <p className="text-[10px] text-[#555] mt-6 leading-relaxed">
              Calculated at an estimated $45/hour average internal team cost.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
