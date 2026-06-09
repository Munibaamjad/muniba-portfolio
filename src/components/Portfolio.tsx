"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ExaminerAI",
    type: "AI Web Application",
    desc: "An AI-powered ACCA exam marker giving real examiner-style marking, detailed feedback, model answers and performance insights. Free for Pakistani students.",
    link: "https://examinerai.vercel.app/login",
    tags: ["Next.js", "AI", "ACCA", "Vercel"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    highlight: true,
    highlightLabel: "FEATURED",
  },
  {
    title: "Glow Studio",
    type: "Website Design",
    desc: "A full 5-page salon website built with Next.js and Tailwind CSS. Booking form, services section, and mobile-responsive design. Live on Vercel.",
    link: "https://glow-studio-cyan.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    highlight: false,
  },
  {
    title: "QuickBooks Setup",
    type: "Bookkeeping",
    desc: "Complete QBO Advanced setup — chart of accounts, transaction recording, bank reconciliation, and monthly P&L report for a small business.",
    link: "#",
    tags: ["QuickBooks", "P&L Report", "Reconciliation"],
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    highlight: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">My Work</p>
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Real projects. Real impact.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-slate-800/50 border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300 group ${p.highlight ? "border-teal-500/50" : "border-slate-700"}`}
            >
              {p.highlight && (
                <div className="bg-gradient-to-r from-teal-500 to-purple-500 text-white text-xs font-bold px-4 py-2 text-center tracking-wider">
                  {p.highlightLabel}
                </div>
              )}
              <div className="overflow-hidden h-44">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-2">{p.type}</p>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                {p.link !== "#" && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold hover:text-teal-300 transition">
                    View Live <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}