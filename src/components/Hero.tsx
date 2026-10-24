"use client";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Custom cursor dot
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });
  const trailX = useSpring(x, { stiffness: 120, damping: 20 });
  const trailY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      {/* Trail ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border"
        style={{
          width: 36, height: 36,
          x: trailX, y: trailY,
          translateX: "-50%", translateY: "-50%",
          borderColor: "rgba(99,179,255,0.35)",
          background: "transparent",
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: 7, height: 7,
          x: springX, y: springY,
          translateX: "-50%", translateY: "-50%",
          background: "#63b3ff",
        }}
      />
    </>
  );
}

// Marquee ticker
const ticker = ["ACCA · 10/13 ·", "Web Developer ·", "Power BI Certified ·", "Karachi, Pakistan ·", "Open to Work ·", "ExaminerAI Builder ·"];

function Marquee() {
  const items = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex gap-0 whitespace-nowrap py-3"
      >
        {items.map((t, i) => (
          <span key={i} className="text-xs font-bold tracking-widest uppercase px-6" style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.5)" : "#63b3ff" }}>
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const roles = ["ACCA Student", "Web Developer", "Power BI Analyst", "Problem Solver", "AI Builder"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <CustomCursor />

      <section className="relative min-h-screen overflow-hidden" style={{ background: "#060b14" }}>

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(99,179,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Blue glow — top right */}
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 65%)" }}
        />

        {/* Secondary glow — bottom left */}
        <motion.div
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,179,255,0.08) 0%, transparent 65%)" }}
        />

        {/* ── EDITORIAL LAYOUT ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 pt-36 pb-0">

          {/* Top label row */}
          <div className="flex items-center justify-between mb-10">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Portfolio · 2026
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full block"
                style={{ background: "#4ade80" }}
              />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
                Open to opportunities
              </span>
            </motion.div>
          </div>

          {/* ── ASYMMETRIC HERO ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-0 items-end mb-0">

            {/* LEFT — giant name */}
            <div>
              {mounted && (
                <>
                  {/* Finance × Technology label */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                    style={{ color: "#63b3ff" }}
                  >
                    Finance × Technology
                  </motion.p>

                  {/* GIANT NAME */}
                  <h1 className="font-black leading-[0.88] tracking-tight mb-0 select-none"
                    style={{ fontSize: "clamp(88px, 14vw, 180px)", color: "#ffffff" }}>
                    {["M","u","n","i","b","a"].map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 60, rotateX: -70 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.65, delay: 0.35 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: "inline-block", transformOrigin: "bottom" }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, type: "spring", stiffness: 400 }}
                      style={{ color: "#63b3ff", display: "inline-block" }}
                    >.</motion.span>
                  </h1>

                  {/* Italic subtitle under name */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.6 }}
                    className="text-xl md:text-2xl font-light italic mt-4 mb-8"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    I&apos;m an ACCA student.{" "}
                    <span className="font-semibold not-italic" style={{ color: "rgba(255,255,255,0.75)" }}>
                      I also build things.
                    </span>
                  </motion.p>
                </>
              )}

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="flex gap-4 flex-wrap mb-12"
              >
                <motion.a href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full text-sm font-semibold"
                  style={{ background: "#3b82f6", color: "#fff", boxShadow: "0 4px 24px rgba(59,130,246,0.4)" }}
                >
                  View Work →
                </motion.a>
                <motion.a href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full text-sm font-medium transition-colors duration-200"
                  style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(59,130,246,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.background = "transparent"; }}
                >
                  Let&apos;s Talk
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT — editorial info column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pb-16 lg:pl-8 lg:border-l"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {/* Rotating role */}
              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>Currently</p>
                <div className="h-7 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={roleIndex}
                      initial={{ y: 28, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -28, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="text-base font-bold"
                      style={{ color: "#63b3ff" }}
                    >
                      {roles[roleIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Stats — editorial numbered list */}
              <div className="space-y-3 mb-6">
                {[
                  { num: "10/13", label: "ACCA Papers" },
                  { num: "Sep '26", label: "SBR + SBL Passed" },
                  { num: "3+", label: "Years Freelancing" },
                  { num: "Power BI", label: "Microsoft Certified" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    className="flex items-center justify-between py-2"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span className="text-xs font-bold" style={{ color: "#ffffff" }}>{s.num}</span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{s.label}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
                Karachi, Pakistan<br />
                Available for remote work
              </p>
            </motion.div>
          </div>
        </div>

        {/* MARQUEE TICKER — bottom of hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Marquee />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-16 left-8 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          >
            <div className="w-1 h-1.5 rounded-full" style={{ background: "#63b3ff" }} />
          </motion.div>
          <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>scroll</p>
        </motion.div>

      </section>
    </>
  );
}
