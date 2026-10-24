"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const timeline = [
  { year: "2020", label: "Started ACCA", icon: "🎓", detail: "Enrolled, chose finance with no idea what was ahead." },
  { year: "2021", label: "First Freelance Client", icon: "💼", detail: "Bookkeeping from home. Paid. Actual work." },
  { year: "2022", label: "Started Learning Web Dev", icon: "💻", detail: "Was frustrated during exam prep. Built something instead." },
  { year: "2023", label: "First Remote Client (Qatar)", icon: "🌐", detail: "QuickBooks + financial reporting. Real business, real pressure." },
  { year: "2024", label: "Power BI Certified", icon: "📊", detail: "Microsoft cert. Finance data, properly visualized." },
  { year: "Sep '26", label: "SBR + SBL Passed", icon: "✅", detail: "The hardest ACCA papers. Done." },
];

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="about" className="py-28 relative overflow-hidden" style={{ background: "#080d18" }}>

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(99,179,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)" }}
      />

      <div className="max-w-6xl mx-auto px-8 relative z-10">

        {/* Editorial header */}
        <div className="flex items-end gap-6 mb-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "20px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#63b3ff", minWidth: "fit-content" }}
          >
            Issue 02
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl font-black leading-tight flex-1"
            style={{ color: "#ffffff" }}
          >
            The Story Behind the CV
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm hidden md:block"
            style={{ color: "rgba(255,255,255,0.25)", minWidth: "120px", textAlign: "right" }}
          >
            Karachi, PK
          </motion.p>
        </div>

        {/* Main editorial two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 mb-20">

          {/* LEFT — full narrative */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold leading-snug mb-6"
              style={{ color: "#ffffff" }}
            >
              I get frustrated.{" "}
              <span style={{
                background: "linear-gradient(135deg, #63b3ff, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Then I build.
              </span>
            </motion.p>

            <div className="space-y-5">
              {[
                "I didn't set out to be both a finance person and a developer. I started ACCA because I wanted to understand business properly. Then I got frustrated — with studying, with slow tools, with the gap between what I was learning and what I was actually doing.",
                "So I built something. And then again. And again. That's the pattern. Every tool I know now — Next.js, Power BI, Supabase — exists because I needed it for a real problem.",
                "ExaminerAI happened on a frustrated day. I was tired of not trusting my own ACCA answers. So I built a tool that helped me feel confident before sitting in the real exam. People said \"don't rely on AI\" — but that was never the point. The point was: can I feel certain about what I know?",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="my-10 pl-6 relative"
              style={{ borderLeft: "3px solid #63b3ff" }}
            >
              <p className="text-xl md:text-2xl font-bold italic leading-snug" style={{ color: "rgba(255,255,255,0.85)" }}>
                &ldquo;I didn&apos;t plan to know both Finance and Tech. I just kept solving the next problem.&rdquo;
              </p>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Now I&apos;m 10 papers through ACCA and still building. The finance brain and the developer habit ended up being the same thing: I look at broken systems and I fix them.
            </motion.p>
          </div>

          {/* RIGHT — stats + timeline */}
          <div className="space-y-6">

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: 10, suffix: "/13", label: "ACCA Papers", sub: "3 remaining" },
                { n: 3, suffix: "+", label: "Years Freelance", sub: "Remote clients" },
                { n: 4, suffix: "", label: "Live Projects", sub: "Built from scratch" },
                { n: 2, suffix: "", label: "Certifications", sub: "QuickBooks · Power BI" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="p-5 rounded-xl"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #1d4ed8, #2563eb)"
                      : "rgba(255,255,255,0.04)",
                    border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: i === 0 ? "0 4px 24px rgba(37,99,235,0.3)" : "none",
                  }}
                >
                  <p className="text-3xl font-black mb-1" style={{ color: "#ffffff" }}>
                    <Counter target={s.n} suffix={s.suffix} />
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: i === 0 ? "#bfdbfe" : "#63b3ff" }}>{s.label}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>Timeline</p>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-base">{item.icon}</span>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 mt-1" style={{ background: "linear-gradient(to bottom, rgba(99,179,255,0.2), transparent)", minHeight: "20px" }} />
                      )}
                    </div>
                    <div className="pb-2">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold" style={{ color: "#63b3ff" }}>{item.year}</span>
                        <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>{item.label}</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
