"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Character-by-character text reveal
function SplitText({ text, className, style, delay = 0 }: { text: string; className?: string; style?: React.CSSProperties; delay?: number }) {
  return (
    <span className={className} style={{ display: "inline-block", ...style }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}

// Magnetic cursor-follow card
function MagneticCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#faf8f5" }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, #d1c9bc 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.5,
      }} />

      {/* Blue glow blob top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-8 mt-24 tracking-widest uppercase"
          style={{ background: "#1a274410", border: "1px solid #1a274430", color: "#1a2744" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#3b82f6" }} />
          Open to opportunities · Karachi, Pakistan
        </motion.div>

        {/* Name — character reveal */}
        {mounted && (
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight leading-none" style={{ color: "#111827" }}>
            <SplitText text="Muniba" delay={0.2} />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.3, type: "spring" }}
              style={{ color: "#3b82f6", display: "inline-block" }}
            >.</motion.span>
          </h1>
        )}

        {/* Tagline — clip path wipe */}
        <div style={{ overflow: "hidden" }}>
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl font-light mb-4"
            style={{ color: "#374151" }}
          >
            Accountant by training.{" "}
            <span className="font-semibold" style={{ color: "#1a2744" }}>Developer by passion.</span>
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#6b7280" }}
        >
          ACCA Candidate (10/13) · QuickBooks ProAdvisor · Power BI Certified
          <br />
          Built ExaminerAI — AI exam marker used by ACCA students across Pakistan.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a href="#projects"
            className="px-8 py-4 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "#1a2744", color: "#fff" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#2d3f6b"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#1a2744"}
          >
            View My Work
          </a>
          <a href="#contact"
            className="px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ border: "1.5px solid #1a2744", color: "#1a2744", background: "transparent" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1a2744"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#1a2744"; }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Stats row — magnetic cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { value: "10/13", label: "ACCA Papers" },
            { value: "SBR+SBL", label: "Sep 2026 Pass" },
            { value: "QBO", label: "ProAdvisor" },
            { value: "PwC+", label: "Big 4 Sims" },
            { value: "Power BI", label: "Certified" },
          ].map((s, i) => (
            <MagneticCard key={s.label}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.07 }}
                className="px-6 py-4 rounded-2xl text-center cursor-default"
                style={{ background: "#fff", border: "1px solid #e5e0d8", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <p className="text-lg font-bold" style={{ color: "#111827" }}>{s.value}</p>
                <p className="text-xs mt-0.5 tracking-wide" style={{ color: "#9ca3af" }}>{s.label}</p>
              </motion.div>
            </MagneticCard>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
          style={{ borderColor: "#d1c9bc" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "#3b82f6" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
