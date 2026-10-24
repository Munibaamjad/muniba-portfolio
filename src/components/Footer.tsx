"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ background: "#1a2744" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl font-black mb-1" style={{ color: "#fff" }}>
              Muniba<span style={{ color: "#3b82f6" }}>.</span>
            </p>
            <p className="text-sm" style={{ color: "#6b7280" }}>Finance × Technology — Karachi, Pakistan</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-6"
          >
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/muniba-amjad" },
              { label: "GitHub", href: "https://github.com/Munibaamjad" },
              { label: "Email", href: "mailto:muniba.offcial@gmail.com" },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium transition-colors"
                style={{ color: "#9ca3af" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#3b82f6")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-center text-xs" style={{ color: "#4b5563" }}>
            © 2026 Muniba Amjad · Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
