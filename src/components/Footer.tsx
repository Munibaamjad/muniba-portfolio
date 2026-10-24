"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-20" style={{ background: "#1a2744" }}>
      {/* Grid texture overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />
      {/* Blue glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        {/* Top border with label */}
        <div className="flex items-center gap-6 mb-14" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
            End of Issue
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-black mb-4 leading-tight"
              style={{ color: "#ffffff" }}
            >
              Let&apos;s Work<br />
              <span style={{ color: "#3b82f6" }}>Together.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base mb-8 max-w-md"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Open to freelance finance work, web development projects, and remote roles. Karachi-based, available worldwide.
            </motion.p>
            <motion.a
              href="mailto:muniba.offcial@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-block px-8 py-4 rounded-full font-semibold text-sm"
              style={{ background: "#3b82f6", color: "#fff", boxShadow: "0 4px 24px rgba(59,130,246,0.35)" }}
            >
              muniba.offcial@gmail.com →
            </motion.a>
          </div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/munibaamjad" },
              { label: "GitHub", href: "https://github.com/Munibaamjad" },
              { label: "Email", href: "mailto:muniba.offcial@gmail.com" },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="text-lg font-semibold flex items-center gap-2 group"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#3b82f6", display: "inline-block",
                  opacity: 0, transition: "opacity 0.2s"
                }}
                  className="group-hover:opacity-100"
                />
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-16 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Designed & coded by Muniba Amjad · Karachi 2026
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Next.js · Framer Motion · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
