import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, AlertTriangle, Zap } from 'lucide-react';

const articles = [
  {
    tag: 'Operations',
    icon: AlertTriangle,
    title: 'Top 3 Workflow Leaks in Professional Services',
    excerpt: 'Most firms lose 12–18 hours per employee per week to copy-paste work, disconnected systems, and manual status chasing. Here\'s where to look first.',
    readTime: '4 min read',
    accent: '#d97272',
  },
  {
    tag: 'AI Automation',
    icon: Zap,
    title: 'Why Your CRM Is Only as Good as the Data Entering It',
    excerpt: 'Manual data entry is the silent killer of CRM ROI. Automated ingestion pipelines fix this at the root — not with more training, but with smarter systems.',
    readTime: '5 min read',
    accent: '#4f6ef7',
  },
  {
    tag: 'Scaling',
    icon: TrendingUp,
    title: 'The 80/20 Rule of Automation: Start With the Boring Stuff',
    excerpt: 'The highest-leverage automations are rarely glamorous. Invoice matching, report generation, and follow-up scheduling deliver outsized returns for minimal risk.',
    readTime: '3 min read',
    accent: '#5ab87a',
  },
];

export default function InsightsPreview() {
  return (
    <section className="py-28 bg-radial-0a relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9a9a9a] mb-4">
            THE AUTOMATION INDEX
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f0f0f0] leading-tight max-w-xl">
              Common friction points,<br />
              <span className="text-[#4f6ef7]">explained plainly.</span>
            </h2>
            <p className="text-sm text-[#555] max-w-xs leading-relaxed">
              Practical notes on where businesses lose time — and what can actually be done about it.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, idx) => {
            const Icon = article.icon;
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                viewport={{ once: true }}
                className="group relative bg-[#111111] border border-[#2a2a2a] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#3a3a3a] transition-colors duration-300 cursor-pointer hover-glow-card"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: article.accent }}
                />

                {/* Tag + icon */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
                    style={{
                      color: article.accent,
                      borderColor: `${article.accent}40`,
                      background: `${article.accent}10`,
                    }}
                  >
                    {article.tag}
                  </span>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center border"
                    style={{
                      background: `${article.accent}10`,
                      borderColor: `${article.accent}30`,
                      color: article.accent,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                </div>

                {/* Title + excerpt */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-sm font-semibold text-[#f0f0f0] leading-snug group-hover:text-white transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#9a9a9a] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1e1e1e]">
                  <span className="text-[11px] text-[#555]">{article.readTime}</span>
                  <span
                    className="flex items-center gap-1 text-[11px] font-semibold opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200"
                    style={{ color: article.accent }}
                  >
                    Read more <ArrowRight size={11} />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
