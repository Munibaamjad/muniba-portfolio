"use client";
import { motion } from "framer-motion";
import { BookOpen, Globe, Package } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping & Accounting",
    desc: "Clean, accurate books using QuickBooks or Xero. Monthly P&L reports, bank reconciliation, and financial insights — so you always know where your business stands.",
    features: [
      "Chart of accounts setup",
      "Monthly transaction recording",
      "Bank reconciliation",
      "Profit & Loss report",
      "ACCA-standard accuracy",
    ],
    price: "From $150/mo",
    tag: "Finance",
    tagColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    border: "hover:border-teal-500/50",
    iconBg: "bg-teal-500/10 text-teal-400",
    priceColor: "text-teal-400",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, mobile-friendly websites built with Next.js or WordPress. SEO-optimised and delivered in 5–7 days — no templates, no shortcuts.",
    features: [
      "5-page professional website",
      "Mobile responsive",
      "Contact form included",
      "SEO optimised",
      "Deployed on Vercel",
    ],
    price: "From $250",
    tag: "Technology",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    border: "hover:border-purple-500/50",
    iconBg: "bg-purple-500/10 text-purple-400",
    priceColor: "text-purple-400",
  },
  {
    icon: Package,
    title: "Fintech Bundle",
    desc: "The complete fintech package — professional website AND clean bookkeeping, delivered together. Built for small businesses who want to look good and stay financially organised.",
    features: [
      "Everything in both services",
      "7-day delivery",
      "1 month free bookkeeping",
      "Priority support",
      "$80 bundle discount",
    ],
    price: "From $320",
    tag: "Best Value",
    tagColor: "bg-gradient-to-r from-teal-500/10 to-purple-500/10 text-white border-teal-500/30",
    border: "hover:border-teal-400/70",
    iconBg: "bg-gradient-to-br from-teal-500/20 to-purple-500/20 text-white",
    priceColor: "text-white",
    popular: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Offer</p>
          <h2 className="text-4xl font-bold text-white mb-4">Services</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Finance first. Technology second. Together, unstoppable.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 transition-all duration-300 ${s.border} ${s.popular ? "ring-1 ring-teal-500/50" : ""}`}
              >
                {s.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    BEST VALUE
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.iconBg}`}>
                  <Icon size={22} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${s.tagColor}`}>{s.tag}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-teal-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className={`text-2xl font-bold ${s.priceColor}`}>{s.price}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}