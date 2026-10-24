"use client";
import { motion } from "framer-motion";

const projects = [
  {
    tag: "AI × Finance",
    title: "ExaminerAI",
    desc: "ACCA past-paper engine powered by Mistral AI and Gemini 2.5 Flash. Generates model answers, marks scripts, and gives examiner-style feedback. Built end-to-end in Next.js.",
    stack: ["Next.js", "Mistral AI", "Gemini 2.5", "TypeScript"],
    link: "#",
    featured: true,
  },
  {
    tag: "Web Development",
    title: "Qatar Client Website",
    desc: "Responsive business website for an international client based in Qatar. Custom design, mobile-first layout, and SEO optimisation.",
    stack: ["HTML", "CSS", "JavaScript", "WordPress"],
    link: "#",
    featured: false,
  },
  {
    tag: "Data & Analytics",
    title: "Power BI Financial Dashboard",
    desc: "Interactive financial dashboard built for a small business. Tracks KPIs, cash flow trends, and monthly P&L using DAX measures and Power Query transformations.",
    stack: ["Power BI", "DAX", "Power Query", "Excel"],
    link: "#",
    featured: false,
  },
  {
    tag: "Portfolio",
    title: "This Portfolio",
    desc: "Designed and built from scratch — Next.js, Tailwind CSS v4, Framer Motion. Cream and navy theme. Character-by-character text reveals, magnetic 3D card tilt, clip-path wipe animations.",
    stack: ["Next.js", "Tailwind v4", "Framer Motion", "TypeScript"],
    link: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6" style={{ background: "#faf8f5" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>Selected Work</p>
          <h2 className="text-4xl font-black" style={{ color: "#111827" }}>Things I have built.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(26,39,68,0.10)" }}
              className={`rounded-2xl p-7 cursor-pointer transition-shadow ${p.featured ? "" : ""}`}
              style={{
                background: p.featured ? "#1a2744" : "#ffffff",
                border: `1.5px solid ${p.featured ? "transparent" : "#e5e0d8"}`,
              }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-3"
                style={{ color: p.featured ? "#93c5fd" : "#3b82f6" }}>
                {p.tag}
              </p>
              <h3 className="text-xl font-bold mb-3"
                style={{ color: p.featured ? "#fff" : "#111827" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5"
                style={{ color: p.featured ? "#9ca3af" : "#6b7280" }}>
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: p.featured ? "rgba(255,255,255,0.1)" : "#f3f1ed",
                      color: p.featured ? "#e5e7eb" : "#374151",
                    }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
