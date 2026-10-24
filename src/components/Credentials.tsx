"use client";
import { motion } from "framer-motion";

const acca = [
  { paper: "BT / FBT", status: "Pass", note: "Knowledge" },
  { paper: "MA / FMA", status: "Pass", note: "Knowledge" },
  { paper: "FA / FFA", status: "Pass", note: "Knowledge" },
  { paper: "FR",       status: "Pass", note: "Skills" },
  { paper: "AA",       status: "Pass", note: "Skills" },
  { paper: "FM",       status: "Pass", note: "Skills" },
  { paper: "TX-UK",    status: "Pass", note: "Skills" },
  { paper: "PM",       status: "Pass", note: "Skills" },
  { paper: "SBR",      status: "Pass", note: "Prof. Essentials" },
  { paper: "SBL",      status: "Pass", note: "Prof. Essentials" },
  { paper: "AFM",      status: "In Progress", note: "Prof. Options" },
  { paper: "AAA",      status: "In Progress", note: "Prof. Options" },
  { paper: "LW (Eng)", status: "In Progress", note: "Essentials" },
];

const certs = [
  { title: "QuickBooks ProAdvisor", issuer: "Intuit", year: "2026", color: "#3b82f6" },
  { title: "Power BI Data Analyst", issuer: "Microsoft", year: "2026", color: "#1a2744" },
  { title: "PwC Audit Virtual Experience", issuer: "PwC via Forage", year: "2026", color: "#374151" },
  { title: "Deloitte Finance Virtual Experience", issuer: "Deloitte via Forage", year: "2026", color: "#374151" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "Pass")
    return <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#dcfce7", color: "#16a34a" }}>✓ Pass</span>;
  if (status === "In Progress")
    return <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#fef3c7", color: "#d97706" }}>⏳ In Progress</span>;
  return <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#f3f4f6", color: "#6b7280" }}>Exempt</span>;
}

export default function Credentials() {
  return (
    <section id="credentials" className="py-32 px-6" style={{ background: "#f3f1ed" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>Qualifications</p>
          <h2 className="text-4xl font-black mb-3" style={{ color: "#111827" }}>Credentials</h2>
          <p className="text-lg" style={{ color: "#6b7280" }}>ACCA in progress, certifications earned, simulations completed.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ACCA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: "#fff", border: "1px solid #e5e0d8" }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#111827" }}>ACCA Part-Qualified (10/13)</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>Association of Chartered Certified Accountants</p>
              </div>
              <div className="text-center px-4 py-2 rounded-xl" style={{ background: "#1a274410", border: "1px solid #1a274420" }}>
                <p className="text-2xl font-black" style={{ color: "#1a2744" }}>10</p>
                <p className="text-xs" style={{ color: "#6b7280" }}>/ 13</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-2" style={{ color: "#9ca3af" }}>
                <span>Progress</span>
                <span>10 / 13 Complete</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "#e5e0d8" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "76.9%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #1a2744, #3b82f6)" }}
                />
              </div>
            </div>

            <div className="space-y-2">
              {acca.map((item, i) => (
                <motion.div
                  key={item.paper}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-center justify-between py-2 px-3 rounded-lg"
                  style={{ background: i % 2 === 0 ? "#f9f8f6" : "transparent" }}
                >
                  <div>
                    <span className="text-sm font-semibold" style={{ color: "#111827" }}>{item.paper}</span>
                    <span className="text-xs ml-2" style={{ color: "#9ca3af" }}>{item.note}</span>
                  </div>
                  <StatusBadge status={item.status} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Certs */}
          <div className="space-y-4">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                className="rounded-2xl p-6 flex items-center gap-5 transition-shadow duration-300"
                style={{ background: "#fff", border: "1px solid #e5e0d8" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-black text-white"
                  style={{ background: c.color }}>
                  {c.title.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#111827" }}>{c.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{c.issuer} · {c.year}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#dcfce7", color: "#16a34a" }}>✓ Earned</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
