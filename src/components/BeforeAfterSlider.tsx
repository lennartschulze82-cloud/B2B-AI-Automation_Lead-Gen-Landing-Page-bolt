import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider() {
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <section className="py-28 bg-radial-0a relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4f6ef7] mb-4">THE TRANSFORMATION</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight">
            Before automation vs. After.
          </h2>
          <p className="text-[#9a9a9a] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Drag the slider to see how manual workflows transform into automated systems.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative w-full max-w-4xl mx-auto h-[400px] rounded-2xl overflow-hidden border border-[#2a2a2a]/60 select-none bg-[#0e0e0e]">
          
          {/* BOTTOM LAYER (BEFORE - MANUAL MESS) */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1a0a0a] to-[#0a0a0a] p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#d97272] bg-[#d97272]/10 border border-[#d97272]/30 px-3 py-1.5 rounded-full uppercase">
                Before: Manual Friction
              </span>
              <h3 className="text-xl font-bold text-[#f0f0f0] mt-5 mb-2">Spreadsheets & Context Switching</h3>
              <p className="text-sm text-[#9a9a9a] max-w-md leading-relaxed">
                Employees manually copy lead data from emails, paste into sheets, type messages by hand, and forget follow-ups.
              </p>
            </div>

            {/* Mock spreadsheet rows */}
            <div className="space-y-3 max-w-xl bg-[#111111]/80 border border-[#4a1e1e]/40 rounded-xl p-4">
              <div className="flex justify-between items-center text-xs border-b border-[#222] pb-2 text-[#555]">
                <span>Timestamp</span>
                <span>Lead Name</span>
                <span>Status</span>
                <span>Action Required</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#9a9a9a]">
                <span>10:42 AM</span>
                <span>Markus K.</span>
                <span className="text-[#d97272] font-semibold bg-[#d97272]/10 px-2 py-0.5 rounded">Unresolved</span>
                <span className="text-xs text-[#777]">Copy data to CRM manually</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#9a9a9a]">
                <span>10:48 AM</span>
                <span>Lennart S.</span>
                <span className="text-[#d97272] font-semibold bg-[#d97272]/10 px-2 py-0.5 rounded">Pending</span>
                <span className="text-xs text-[#777]">Write follow-up email manually</span>
              </div>
            </div>

            <p className="text-xs text-[#555]">
              * Error-prone, delays response time, drains operational resources.
            </p>
          </div>

          {/* TOP LAYER (AFTER - AUTOMATED SYSTEMS) - CLIPPED */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0a1a11] to-[#0a0a0a] p-8 flex flex-col justify-between z-10 pointer-events-none"
            style={{
              clipPath: `inset(0px ${100 - sliderVal}% 0px 0px)`
            }}
          >
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#5ab87a] bg-[#5ab87a]/10 border border-[#5ab87a]/30 px-3 py-1.5 rounded-full uppercase">
                After: Automated Flow
              </span>
              <h3 className="text-xl font-bold text-[#f0f0f0] mt-5 mb-2">Unified & Instant Orchestration</h3>
              <p className="text-sm text-[#9a9a9a] max-w-md leading-relaxed">
                System parses leads, synchronizes CRM records, draft replies instantly, and pings the team in Slack automatically.
              </p>
            </div>

            {/* Mock pipeline steps */}
            <div className="space-y-3 max-w-xl bg-[#111111]/80 border border-[#1e4a30]/40 rounded-xl p-4">
              <div className="flex justify-between items-center text-xs border-b border-[#222] pb-2 text-[#555]">
                <span>Trigger Event</span>
                <span>Workflow Pipeline</span>
                <span>Integrations</span>
                <span>Status</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#c8e8d4]">
                <span>Form Submission</span>
                <span>Lead Parse & CRM Sync</span>
                <span>HubSpot + Slack</span>
                <span className="text-[#5ab87a] font-semibold bg-[#5ab87a]/15 px-2 py-0.5 rounded flex items-center gap-1">
                  Active
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#c8e8d4]">
                <span>CRM Created</span>
                <span>AI Draft Auto-Response</span>
                <span>OpenAI + Gmail</span>
                <span className="text-[#5ab87a] font-semibold bg-[#5ab87a]/15 px-2 py-0.5 rounded flex items-center gap-1">
                  Active
                </span>
              </div>
            </div>

            <p className="text-xs text-[#5ab87a]/80 font-medium">
              ✓ Responses sent in &lt; 2 mins, logs synced automatically, 0 manual data entry.
            </p>
          </div>

          {/* DIVIDER LINE & HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-[#4f6ef7] z-20 pointer-events-none"
            style={{ left: `${sliderVal}%` }}
          >
            {/* Grab handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#4f6ef7] border-4 border-[#0a0a0a] flex items-center justify-center shadow-lg">
              <svg className="w-3.5 h-3.5 text-[#f0f0f0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 4 4 4m8 0l4-4-4-4" />
              </svg>
            </div>
          </div>

          {/* TRANSPARENT SLIDER INPUT */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderVal}
            onChange={(e) => setSliderVal(Number(e.target.value))}
            className="absolute inset-0 opacity-0 w-full h-full cursor-ew-resize z-30"
          />
        </div>
      </div>
    </section>
  );
}
