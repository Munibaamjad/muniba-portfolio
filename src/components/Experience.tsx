"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Finance & Technology Projects",
    company: "Independent",
    period: "Jan 2025 – Present",
    type: "Self-Directed",
    typeStyle: { background: "#3b82f615", color: "#2563eb", border: "1px solid #3b82f630" },
    points: [
      "Built ExaminerAI — production AI application (Next.js, TypeScript, Supabase, Mistral AI, Gemini 2.5 Flash) used by ACCA students across Pakistan",
      "Developed Excel Personal Finance Dashboard with budget tracking, variance analysis, and automated KPI calculations",
      "Built Power BI financial reports with DAX measures, Power Query transformations, and published to Power BI Service",
    ],
  },
  {
    role: "Virtual Experience — Audit & Finance",
    company: "PwC & Deloitte via Forage",
    period: "Apr 2026",
    type: "Big 4 Simulation",
    typeStyle: { background: "#1a274412", color: "#1a2744", border: "1px solid #1a274430" },
    points: [
      "PwC Audit Simulation: purchase process walkthrough, control testing workpapers, risk control matrix, and internal audit communication",
      "Deloitte: professional identity, value communication, and career positioning in a Big 4 accounting context",
      "Gained practical exposure to real audit workflows used at two of the world's largest accounting firms",
    ],
  },
  {
    role: "QuickBooks ProAdvisor",
    company: "Intuit",
    period: "Apr 2026 – Present",
    type: "Certified",
    typeStyle: { background: "#3b82f615", color: "#2563eb", border: "1px solid #3b82f630" },
    points: [
      "Certified in QuickBooks Online covering bookkeeping, invoicing, accounts payable/receivable, and bank reconciliation",
      "Capable of setting up and managing accounts for small businesses including chart of accounts and period-end closing",
      "Experienced in generating Profit & Loss statements, Balance Sheets, and Cash Flow reports within QBO Advanced",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "Jun 2023 – Present",
    type: "Freelance",
    typeStyle: { background: "#6b728015", color: "#4b5563", border: "1px solid #6b728030" },
    points: [
      "Developed responsive websites using Next.js, HTML5, CSS3, Tailwind CSS, and JavaScript",
      "Delivered projects for international clients including work in Qatar",
      "Integrated third-party APIs and delivered complete client-ready websites",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6" style={{ background: "#faf8f5" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>Background</p>
          <h2 className="text-4xl font-black mb-3" style={{ color: "#111827" }}>Experience</h2>
          <p className="text-lg" style={{ color: "#6b7280" }}>Not just theory — applied in real projects and professional simulations.</p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
              className="rounded-2xl p-8 transition-shadow duration-300"
              style={{ background: "#fff", border: "1px solid #e5e0d8" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#111827" }}>{e.role}</h3>
                  <p className="text-sm" style={{ color: "#6b7280" }}>{e.company}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs px-3 py-1.5 rounded-full font-medium" style={e.typeStyle}>{e.type}</span>
                  <span className="text-xs font-medium" style={{ color: "#9ca3af" }}>{e.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {e.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#3b82f6" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
