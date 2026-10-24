"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Credentials", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,248,245,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e0d8" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-lg font-black tracking-tight"
          style={{ color: "#111827" }}
          whileHover={{ scale: 1.05 }}
        >
          M<span style={{ color: "#3b82f6" }}>.</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: "#374151" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#111827"; (e.currentTarget as HTMLElement).style.background = "#1a274410"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#374151"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              {link}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="ml-2 px-5 py-2 rounded-full text-sm font-semibold"
            style={{ background: "#1a2744", color: "#fff" }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-5 h-0.5" style={{ background: "#111827" }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-0.5" style={{ background: "#111827" }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-5 h-0.5" style={{ background: "#111827" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pb-4 rounded-2xl p-4"
          style={{ background: "#fff", border: "1px solid #e5e0d8" }}
        >
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium rounded-lg"
              style={{ color: "#374151" }}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
