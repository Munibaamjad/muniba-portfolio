"use client";
import { motion } from "framer-motion";

const finance = [
  "Financial Reporting (IFRS)", "Audit & Assurance", "Financial Management",
  "Management Accounting", "QuickBooks Online (QBO)", "Bank Reconciliation",
  "Variance Analysis", "Taxation (UK)",
];

const tech = [
  "Next.js / React", "TypeScript", "Tailwind CSS", "Power BI + DAX",
  "Microsoft Excel (Advanced)", "Supabase / Databases", "Git / GitHub / Vercel",
  "AI Integration (Mistral, Gemini)",
];

function Tag({ name, accent }: { name: string; accent?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, y: -2, transition: { duration: 0.15 } }}
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-default select-none"
      style={accent
        ? { background: "#1a274412", border: "1.5px solid #1a274430", color: "#1a2744" }
        : { background: "#3b82f610", border: "1.5px solid #3b82f630", color: "#2563eb" }
      }
    >
      {name}
    </motion.span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6" style={{ background: "#f3f1ed" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>What I Know</p>
          <h2 className="text-4xl font-black mb-3" style={{ color: "#111827" }}>Skills</h2>
          <p className="text-lg" style={{ color: "#6b7280" }}>Finance, accounting, and technology — combined.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Finance */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#9ca3af" }}
            >
              Finance & Accounting
            </motion.p>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2.5">
              {finance.map(n => <Tag key={n} name={n} accent />)}
            </motion.div>
          </div>

          {/* Tech */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-bold tracking-widest uppercase mb-5"
              style={{ color: "#9ca3af" }}
            >
              Technology & Data
            </motion.p>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2.5">
              {tech.map(n => <Tag key={n} name={n} />)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
