"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

function MagneticCard({ children, className = "", style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ ...style, rotateX: springX, rotateY: springY, transformStyle: "preserve-3d", perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const codeSnippet = `// ExaminerAI — ACCA MCQ checker
const examiner = async (question, userAnswer) => {
  const prompt = \`ACCA examiner perspective:
Q: \${question}
Student answered: \${userAnswer}
Is this correct? Why?\`;
  
  const result = await openai.chat({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }]
  });
  return result.choices[0].message.content;
};`;

const otherProjects = [
  {
    num: "02",
    title: "Qatar Client Accounts",
    tag: "Finance · QuickBooks",
    desc: "Full-cycle bookkeeping and monthly financial reports for a Qatar-based business. Remote, recurring, real P&Ls.",
    year: "2023–Present",
  },
  {
    num: "03",
    title: "Power BI Dashboard",
    tag: "Data Viz · Reporting",
    desc: "Interactive variance analysis dashboard for SME. Excel → Power BI → shareable report. Finance made readable.",
    year: "2024",
  },
  {
    num: "04",
    title: "This Portfolio",
    tag: "Next.js · TypeScript",
    desc: "Built to stop relying on templates. Custom animations, editorial layout, actually written by a human.",
    year: "2026",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 overflow-hidden" style={{ background: "#faf8f5" }}>
      <div className="max-w-6xl mx-auto px-8">

        {/* Editorial header */}
        <div className="flex items-end gap-6 mb-16" style={{ borderBottom: "2px solid #111827", paddingBottom: "20px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#3b82f6", minWidth: "fit-content" }}
          >
            Issue 04
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black flex-1"
            style={{ color: "#111827" }}
          >
            Things I Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm hidden md:block"
            style={{ color: "#9ca3af" }}
          >
            4 projects
          </motion.p>
        </div>

        {/* Featured — ExaminerAI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 8px 48px rgba(26,39,68,0.18)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]" style={{ background: "#1a2744" }}>

            {/* LEFT — description */}
            <div className="p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ background: "rgba(59,130,246,0.2)", color: "#93c5fd" }}>
                    Featured Project
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>2025</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-2" style={{ color: "#ffffff" }}>
                  ExaminerAI
                </h3>
                <p className="text-sm font-medium mb-6" style={{ color: "#60a5fa" }}>
                  AI-powered ACCA exam practice tool
                </p>
                <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
                  I built this on a frustrated day. People said &ldquo;don&apos;t trust AI for ACCA&rdquo; — but that was never the point. I built it so I could feel confident in my own answers before the real exam. Not to replace the examiner. To replace the doubt.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Next.js", "OpenAI API", "Supabase", "Tailwind CSS", "TypeScript"].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <motion.a
                  href="https://examinerai.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full text-sm font-semibold"
                  style={{ background: "#3b82f6", color: "#fff" }}
                >
                  Live Site →
                </motion.a>
                <motion.a
                  href="https://github.com/Munibaamjad"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full text-sm font-medium"
                  style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.75)" }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>

            {/* RIGHT — fake code terminal */}
            <div className="p-8 flex items-center" style={{ background: "rgba(0,0,0,0.25)" }}>
              <div className="w-full rounded-xl overflow-hidden" style={{ background: "#0d1117", boxShadow: "0 4px 32px rgba(0,0,0,0.4)" }}>
                {/* Terminal bar */}
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#161b22", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                  <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.3)" }}>examiner.ts</span>
                </div>
                <pre className="p-5 text-xs leading-relaxed overflow-x-auto" style={{ fontFamily: "monospace", color: "#e6edf3" }}>
                  <code>
                    {codeSnippet.split('\n').map((line, i) => {
                      const colored = line
                        .replace(/(\/\/.*)/g, '<span style="color:#8b949e">$1</span>')
                        .replace(/\b(const|async|return|await)\b/g, '<span style="color:#ff7b72">$1</span>')
                        .replace(/\b(model|role|content|messages)\b/g, '<span style="color:#79c0ff">$1</span>')
                        .replace(/(".*?")/g, '<span style="color:#a5d6ff">$1</span>')
                        .replace(/(`[^`]*`)/g, '<span style="color:#a5d6ff">$1</span>');
                      return <div key={i} dangerouslySetInnerHTML={{ __html: colored || '&nbsp;' }} />;
                    })}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other 3 projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((p, i) => (
            <MagneticCard
              key={p.num}
              className="rounded-2xl p-7 cursor-default"
              style={{ background: "#ffffff", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 * i }}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl font-black" style={{ color: "#f3f1ed" }}>{p.num}</span>
                  <span className="text-xs" style={{ color: "#9ca3af" }}>{p.year}</span>
                </div>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3" style={{ background: "#eff6ff", color: "#3b82f6" }}>
                  {p.tag}
                </span>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#111827" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{p.desc}</p>
              </motion.div>
            </MagneticCard>
          ))}
        </div>

      </div>
    </section>
  );
}
