"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022–2024",
    title: "I.Com — Khatoon e Pakistan Girls College",
    desc: "Intermediate in Commerce — foundation in business, accounting, and economics.",
    color: "bg-teal-500",
  },
  {
    year: "2023–2024",
    title: "Diploma in Web Development",
    desc: "Full diploma in web development and digital design from Professional Collegiate.",
    color: "bg-purple-500",
  },
  {
    year: "Jun–Sep 2023",
    title: "Freelance Web Developer",
    desc: "Built client websites — first real-world experience combining design and delivery.",
    color: "bg-purple-500",
  },
  {
    year: "2024–Present",
    title: "ACCA — Tabani School of Accountancy",
    desc: "7 of 13 ACCA papers cleared. Deep knowledge of IAS, IFRS, Financial Accounting, and Audit.",
    color: "bg-teal-500",
  },
];

const certs = [
  { name: "QuickBooks ProAdvisor", org: "Intuit", color: "border-teal-500/30 bg-teal-500/5" },
  { name: "PwC US Audit Simulation", org: "PwC", color: "border-purple-500/30 bg-purple-500/5" },
  { name: "Power BI: Prepare & Visualize", org: "Microsoft", color: "border-blue-500/30 bg-blue-500/5" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">My Story</p>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Finance + Technology — not a coincidence</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am an ACCA student based in Karachi with 7 of 13 papers cleared. Before moving into accounting, I built websites — and that combination is exactly what makes my work unique.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Most accountants cannot build a website. Most web developers cannot read a balance sheet. I can do both — and I built tools that prove it, including an AI-powered ACCA exam marker used by students across Pakistan.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I hold a QuickBooks ProAdvisor certification, a PwC Audit Simulation certificate, and a Power BI data visualisation certification — all grounded in real, practical work.
            </p>

            <div className="space-y-3">
              {certs.map((c) => (
                <div key={c.name} className={`flex items-center justify-between p-4 rounded-xl border ${c.color}`}>
                  <p className="text-white text-sm font-semibold">{c.name}</p>
                  <span className="text-gray-400 text-xs">{c.org}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-8">Education & Experience</h3>
            <div className="relative border-l-2 border-slate-700 pl-8 space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -left-11 w-4 h-4 ${t.color} rounded-full border-4 border-slate-950 shadow`} />
                  <p className="text-teal-500 text-xs font-semibold uppercase tracking-wider mb-1">{t.year}</p>
                  <h4 className="font-bold text-white mb-1">{t.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}