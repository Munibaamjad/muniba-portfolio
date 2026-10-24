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
  { title: "QuickBooks ProAdvisor", issuer: "Intuit", year: "2026", color: "#63b3ff" },
  { title: "Power BI Data Analyst", issuer: "Microsoft", year: "2026", color: "#a78bfa" },
  { title: "PwC Audit Virtual Experience", issuer: "PwC via Forage", year: "2026", color: "#34d399" },
  { title: "Deloitte Finance Virtual Experience", issuer: "Deloitte via Forage", year: "2026", color: "#f59e0b" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "Pass")
    return <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(52,211,153,0.12)", color: "#34d399", border: "1px solid rgba(52,211,153,0.2)" }}>✓ Pass</span>;
  if (status === "In Progress")
    return <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}>⏳ In Progress</span>;
  return <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>Exempt</span>;
}

export default function Credentials() {
  return (
    <section id="credentials" className="py-32 px-6 relative overflow-hidden" style={{ background: "#060b14" }}>
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(99,179,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#63b3ff" }}>Qualifications</p>
          <h2 className="text-4xl font-black mb-3" style={{ color: "#ffffff" }}>Credentials</h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.35)" }}>ACCA in progress, certifications earned, simulations completed.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ACCA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-black mb-1" style={{ color: "#ffffff" }}>ACCA Part-Qualified (10/13)</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Association of Chartered Certified Accountants</p>
              </div>
              <div className="text-center px-4 py-2 rounded-xl" style={{ background: "rgba(99,179,255,0.1)", border: "1px solid rgba(99,179,255,0.2)" }}>
                <p className="text-2xl font-black" style={{ color: "#63b3ff" }}>10</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>/ 13</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
                <span>Progress</span>
                <span>10 / 13 Complete</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "76.9%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #3b82f6, #63b3ff)" }}
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
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "transparent" }}
                >
                  <div>
                    <span className="text-sm font-semibold" style={{ color: "#ffffff" }}>{item.paper}</span>
                    <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.25)" }}>{item.note}</span>
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
                whileHover={{ y: -3, boxShadow: `0 8px 32px ${c.color}15` }}
                className="rounded-2xl p-6 flex items-center gap-5 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-lg font-black"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}25`, color: c.color }}>
                  {c.title.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#ffffff" }}>{c.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{c.issuer} · {c.year}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(52,211,153,0.1)", color: "#34d399", border: "1px solid rgba(52,211,153,0.2)" }}>✓ Earned</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
