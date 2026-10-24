"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const finance = [
  { name: "Financial Reporting (IFRS)", level: 90 },
  { name: "Audit & Assurance (AA)", level: 85 },
  { name: "Financial Management (FM)", level: 88 },
  { name: "Management Accounting (MA)", level: 90 },
  { name: "QuickBooks Online", level: 95 },
  { name: "Bank Reconciliation", level: 92 },
  { name: "Variance Analysis", level: 85 },
  { name: "Taxation (TX-UK)", level: 80 },
];

const tech = [
  { name: "Next.js / React", level: 88 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Power BI", level: 85 },
  { name: "Excel (Advanced)", level: 90 },
  { name: "Supabase / SQL", level: 75 },
  { name: "Git & GitHub", level: 88 },
  { name: "AI Tools / Prompting", level: 82 },
];

function Bar({ name, level, accent, delay }: { name: string; level: number; accent: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-semibold" style={{ color: "#374151" }}>{name}</span>
        <span className="text-xs font-bold" style={{ color: accent }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "#f3f1ed" }}>
        <motion.div
          className="h-1.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `linear-gradient(90deg, ${accent}cc, ${accent})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{ background: "#f3f1ed" }}>

      <div className="max-w-6xl mx-auto px-8">

        {/* Editorial header */}
        <div className="flex items-end gap-6 mb-16" style={{ borderBottom: "2px solid #111827", paddingBottom: "20px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#3b82f6", minWidth: "fit-content" }}
          >
            Issue 03
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black flex-1"
            style={{ color: "#111827" }}
          >
            Two Worlds, One Person
          </motion.h2>
        </div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl max-w-2xl mb-16 leading-relaxed"
          style={{ color: "#6b7280" }}
        >
          I didn&apos;t plan to know both. Finance came first. Then I needed to build something. Then I needed to report the data properly. So I learned whatever the problem required.
        </motion.p>

        {/* Two-column skill grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Finance */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}
          >
            <div className="px-7 py-5" style={{ background: "#1a2744" }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#93c5fd" }}>Finance</p>
                  <p className="text-lg font-bold" style={{ color: "#fff" }}>ACCA · Bookkeeping · Reporting</p>
                </div>
              </div>
            </div>
            <div className="p-7" style={{ background: "#ffffff" }}>
              {finance.map((s, i) => (
                <Bar key={s.name} name={s.name} level={s.level} accent="#1a2744" delay={0.08 * i} />
              ))}
              <p className="text-xs mt-5 leading-relaxed" style={{ color: "#9ca3af" }}>
                ACCA 10/13 · SBR + SBL passed Sep 2026 · QuickBooks ProAdvisor · Freelancing since 2021
              </p>
            </div>
          </motion.div>

          {/* Tech */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.09)" }}
          >
            <div className="px-7 py-5" style={{ background: "#2563eb" }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#bfdbfe" }}>Technology</p>
                  <p className="text-lg font-bold" style={{ color: "#fff" }}>Next.js · Power BI · AI</p>
                </div>
              </div>
            </div>
            <div className="p-7" style={{ background: "#ffffff" }}>
              {tech.map((s, i) => (
                <Bar key={s.name} name={s.name} level={s.level} accent="#3b82f6" delay={0.08 * i} />
              ))}
              <p className="text-xs mt-5 leading-relaxed" style={{ color: "#9ca3af" }}>
                Microsoft Power BI Certified · Built ExaminerAI + 3 live projects · Freelance dev since 2022
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-8 rounded-2xl text-center"
          style={{ background: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
          <p className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#111827" }}>
            The intersection is where I actually work.
          </p>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6b7280" }}>
            Financial dashboards that tell the actual story. Tools that automate the boring parts of reporting. Systems that make sense of messy data. That&apos;s the work I care about.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
