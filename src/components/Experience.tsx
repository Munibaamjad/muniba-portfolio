"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Finance & Technology Projects",
    company: "Independent",
    period: "Jan 2025 – Present",
    type: "Self-Directed",
    color: "border-teal-500/30",
    tagColor: "bg-teal-500/10 text-teal-400",
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
    color: "border-amber-500/30",
    tagColor: "bg-amber-500/10 text-amber-400",
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
    color: "border-green-500/30",
    tagColor: "bg-green-500/10 text-green-400",
    points: [
      "Certified in QuickBooks Online covering bookkeeping, invoicing, accounts payable/receivable, and bank reconciliation",
      "Capable of setting up and managing accounts for small businesses including chart of accounts and period-end closing",
      "Experienced in generating Profit & Loss statements, Balance Sheets, and Cash Flow reports within QBO Advanced",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "Jun – Sep 2023",
    type: "Freelance",
    color: "border-purple-500/30",
    tagColor: "bg-purple-500/10 text-purple-400",
    points: [
      "Developed responsive websites using HTML5, CSS3, and JavaScript",
      "Delivered projects for international clients including work in Qatar",
      "Integrated third-party APIs and delivered complete client-ready websites",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-20">
          <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">Background</p>
          <h2 className="text-4xl font-bold text-white mb-3">Experience</h2>
          <p className="text-gray-500 text-lg">Not just theory — applied in real projects and professional simulations.</p>
        </motion.div>
        <div className="space-y-6">
          {experiences.map((e,i) => (
            <motion.div key={e.role}
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.08}}
              className={`bg-slate-800/30 border rounded-2xl p-8 ${e.color}`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{e.role}</h3>
                  <p className="text-gray-400 text-sm">{e.company}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-xs px-3 py-1 rounded-full ${e.tagColor}`}>{e.type}</span>
                  <span className="text-gray-600 text-xs">{e.period}</span>
                </div>
              </div>
              <ul className="space-y-2.5">
                {e.points.map((pt,j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-teal-500 mt-1 flex-shrink-0">→</span>
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