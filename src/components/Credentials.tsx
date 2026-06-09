"use client";
import { motion } from "framer-motion";

const credentials = [
  { icon: "🎓", title: "ACCA Part-Qualified (7/13)", body: "7 of 13 ACCA papers cleared. Strong foundation in Financial Accounting, Audit, IAS and IFRS international standards.", tag: "Accounting", color: "border-teal-500/30 bg-teal-500/5 text-teal-400" },
  { icon: "📊", title: "QuickBooks ProAdvisor", body: "Certified QuickBooks Online ProAdvisor with hands-on QBO Advanced experience — accounts setup, reconciliation, P&L reports.", tag: "Certified", color: "border-teal-500/30 bg-teal-500/5 text-teal-400" },
  { icon: "🏢", title: "PwC US Audit Simulation", body: "Completed PwC US Audit Job Simulation — practical exposure to real audit workflows from a Big 4 firm.", tag: "Certified", color: "border-purple-500/30 bg-purple-500/5 text-purple-400" },
  { icon: "📈", title: "Power BI — Data Visualization", body: "Certified in Power BI: Prepare and Visualize Data. Experience in Microsoft Power BI and data analytics for business reporting.", tag: "Data", color: "border-purple-500/30 bg-purple-500/5 text-purple-400" },
  { icon: "💻", title: "Next.js + Tailwind Developer", body: "Diploma in Web Development. Builds modern, fast websites using Next.js, Tailwind CSS, and Framer Motion on Vercel.", tag: "Technology", color: "border-slate-500/30 bg-slate-500/5 text-gray-400" },
  { icon: "🌍", title: "Remote-Ready Worldwide", body: "Works with clients in UK, UAE, Canada, and Australia. Payments via Payoneer. Communication via WhatsApp or Zoom.", tag: "Availability", color: "border-slate-500/30 bg-slate-500/5 text-gray-400" },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-28 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Why Hire Me</p>
          <h2 className="text-4xl font-bold text-white mb-4">Credentials</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Qualified, certified, and ready to deliver real results.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border p-6 ${c.color.split(" ").slice(0, 2).join(" ")}`}
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.color}`}>{c.tag}</span>
              <h3 className="text-lg font-bold text-white mt-3 mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}