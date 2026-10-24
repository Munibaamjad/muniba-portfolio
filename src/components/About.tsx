"use client";
import { motion } from "framer-motion";

const timeline = [
  { year: "2022", title: "I.Com — Khatoon-e-Pakistan College", desc: "Intermediate in Commerce — foundation in business, accounting, and economics." },
  { year: "2023", title: "Diploma in Web Development", desc: "Professional Collegiate — HTML, CSS, JavaScript, WordPress. First real code." },
  { year: "Jun 2023", title: "Freelance Web Developer", desc: "Developed responsive websites for clients including international projects in Qatar." },
  { year: "2024", title: "ACCA — Tabani School of Accountancy", desc: "FR, AA, FM, TX-UK, PM all cleared. SBR and SBL passed Sep 2026." },
  { year: "Apr 2026", title: "PwC + Deloitte Simulations (Forage)", desc: "Completed both Big 4 virtual programmes — audit workpapers, risk matrix, financial analysis." },
  { year: "Jun 2026", title: "Microsoft Power BI Certified", desc: "Completed full Power BI learning path — DAX, Power Query, data modelling, reporting." },
  { year: "Sep 2026", title: "SBR + SBL — Passed", desc: "Strategic Professional Essentials complete. AFM, AAA, and LW remaining." },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6" style={{ background: "#f3f1ed" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#3b82f6" }}>About Me</p>
            <h2 className="text-4xl font-black mb-8 leading-tight" style={{ color: "#111827" }}>
              I live at the intersection of{" "}
              <span style={{ color: "#1a2744" }}>finance and technology.</span>
            </h2>
            <div className="space-y-5 leading-relaxed text-base" style={{ color: "#4b5563" }}>
              <p>I am an ACCA candidate with <strong style={{ color: "#111827" }}>10 of 13 papers cleared</strong> — including Financial Reporting, Audit & Assurance, Financial Management, Taxation UK, Performance Management, SBR and SBL (passed Sep 2026). AFM, AAA, and LW remaining.</p>
              <p>Before moving into accounting, I built websites. That combination is rare — and it is exactly what drives everything I create. I built ExaminerAI using Next.js, Mistral AI, and Gemini 2.5 Flash because I understood both the accounting problem and the technical solution.</p>
              <p>I am Microsoft-certified in Power BI, a QuickBooks ProAdvisor, and have completed virtual experience programmes with both PwC and Deloitte via Forage. I do not just study things — I build them.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Karachi, Pakistan", "Remote-Ready", "ACCA Strategic Professional", "Finance × Tech"].map(t => (
                <span key={t} className="text-xs px-4 py-2 rounded-full font-medium"
                  style={{ background: "#fff", border: "1.5px solid #e5e0d8", color: "#374151" }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: "#3b82f6" }}>Timeline</p>
            <div className="relative pl-8 space-y-7" style={{ borderLeft: "2px solid #e5e0d8" }}>
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative"
                >
                  <div className="absolute -left-[37px] w-3.5 h-3.5 rounded-full border-4"
                    style={{ background: i >= 5 ? "#3b82f6" : "#fff", borderColor: i >= 5 ? "#3b82f6" : "#1a2744" }} />
                  <p className="text-xs font-bold tracking-widest mb-1" style={{ color: "#3b82f6" }}>{t.year}</p>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "#111827" }}>{t.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
