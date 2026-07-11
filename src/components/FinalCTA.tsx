import { motion } from 'framer-motion';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="py-32 bg-radial-11">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f0f0f0] leading-tight mb-6">
            Ready to see where automation can help?
          </h2>
          <p className="text-[#9a9a9a] text-lg mb-10">
            Start with the audit. It costs nothing and commits you to nothing.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-block bg-[#4f6ef7] hover:bg-[#3d5de6] text-white font-semibold px-10 py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-[#4f6ef7]/10 hover:shadow-[#4f6ef7]/20"
          >
            Request an Automation Audit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
