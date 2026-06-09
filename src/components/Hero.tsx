"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "7/13", label: "ACCA Papers" },
  { value: "QBO", label: "ProAdvisor" },
  { value: "PwC", label: "Audit Sim" },
  { value: "7 Days", label: "Delivery" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Glow blobs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl font-bold text-white leading-tight mb-4"
        >
          Muniba Amjad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-6"
        >
          Where Finance Meets Technology
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          ACCA-qualified accountant and web developer. I combine financial expertise with modern technology to help small businesses manage their books and build their digital presence — in one place.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-teal-500 text-sm mb-10 tracking-wide"
        >
          ACCA (7/13) · QuickBooks ProAdvisor · PwC Audit Simulation · Next.js Developer · Power BI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#services" className="bg-teal-500 text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-teal-400 transition shadow-lg shadow-teal-500/30">
            See My Services
          </a>
          <a href="#calculator" className="border border-teal-500/50 text-teal-400 px-10 py-4 rounded-full text-sm font-semibold hover:bg-teal-500/10 transition">
            Get Instant Quote
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-4 gap-4 max-w-xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-2 text-center">
              <p className="text-teal-400 font-bold text-lg">{s.value}</p>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}