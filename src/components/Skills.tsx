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
        <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>{name}</span>
        <span className="text-xs font-bold" style={{ color: accent }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
        <motion.div
          className="h-1.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `linear-gradient(90deg, ${accent}88, ${accent})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{ background: "#060b14" }}>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(99,179,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-6xl mx-auto px-8 relative z-10">

        {/* Editorial header */}
        <div className="flex items-end gap-6 mb-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "20px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#63b3ff", minWidth: "fit-content" }}
          >
            Issue 03
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black flex-1"
            style={{ color: "#ffffff" }}
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
          style={{ color: "rgba(255,255,255,0.4)" }}
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
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="px-7 py-5" style={{ background: "rgba(99,179,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#63b3ff" }}>Finance</p>
                  <p className="text-lg font-bold" style={{ color: "#fff" }}>ACCA · Bookkeeping · Reporting</p>
                </div>
              </div>
            </div>
            <div className="p-7" style={{ background: "rgba(255,255,255,0.02)" }}>
              {finance.map((s, i) => (
                <Bar key={s.name} name={s.name} level={s.level} accent="#63b3ff" delay={0.08 * i} />
              ))}
              <p className="text-xs mt-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
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
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="px-7 py-5" style={{ background: "rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#a78bfa" }}>Technology</p>
                  <p className="text-lg font-bold" style={{ color: "#fff" }}>Next.js · Power BI · AI</p>
                </div>
              </div>
            </div>
            <div className="p-7" style={{ background: "rgba(255,255,255,0.02)" }}>
              {tech.map((s, i) => (
                <Bar key={s.name} name={s.name} level={s.level} accent="#a78bfa" delay={0.08 * i} />
              ))}
              <p className="text-xs mt-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
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
          style={{
            background: "linear-gradient(135deg, rgba(99,179,255,0.08), rgba(167,139,250,0.08))",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
            The intersection is where I actually work.
          </p>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
            Financial dashboards that tell the actual story. Tools that automate the boring parts of reporting. Systems that make sense of messy data. That&apos;s the work I care about.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
