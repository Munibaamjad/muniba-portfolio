"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ExaminerAI",
    type: "AI SaaS Application",
    year: "2025–2026",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400 border-green-500/20",
    desc: "AI-powered ACCA exam marking platform. Paste your CRQ answer and receive examiner-style marking, detailed feedback, model answers, performance analytics, and a downloadable PDF report. Supports all 14 ACCA papers.",
    story: "I built this because as an ACCA student, I was frustrated with the lack of real feedback tools. I understood the accounting problem and I could build the technical solution. So I did.",
    stack: ["Next.js 14","TypeScript","Supabase","Mistral AI","Gemini 2.5 Flash","Tailwind CSS","Vercel"],
    link: "https://examinerai.vercel.app/login",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    featured: true,
  },
  {
    title: "Excel Personal Finance Dashboard",
    type: "Financial Tool",
    year: "2025",
    status: "Completed",
    statusColor: "bg-teal-500/20 text-teal-400 border-teal-500/20",
    desc: "Interactive Excel dashboard with budget tracking, variance analysis, surplus/deficit calculations, expense ratio analysis, and automated KPIs. Built using SUMIF, IF, pivot tables, conditional formatting, and interactive slicers.",
    story: "Applied management accounting concepts to a real tool — budget vs actual, variance reporting, and automated calculations that update dynamically.",
    stack: ["Microsoft Excel","Pivot Tables","SUMIF / IF","Conditional Formatting","Financial Modelling"],
    link: "#",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    featured: false,
  },
  {
    title: "Power BI Financial Reports",
    type: "Data Analytics",
    year: "2026",
    status: "Completed",
    statusColor: "bg-teal-500/20 text-teal-400 border-teal-500/20",
    desc: "Financial reporting dashboards in Power BI featuring DAX measures, Power Query transformations, KPI cards, row-level security, and interactive slicers. Published to Power BI Service.",
    story: "Built to apply Microsoft certification knowledge to real financial data scenarios — designed for business intelligence and decision-making.",
    stack: ["Power BI","DAX","Power Query","KPI Cards","Power BI Service","RLS"],
    link: "#",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false,
  },
  {
    title: "Glow Studio Website",
    type: "Web Development",
    year: "2024",
    status: "Live",
    statusColor: "bg-green-500/20 text-green-400 border-green-500/20",
    desc: "Complete 5-page salon website — homepage, services, about, booking form, and footer. Built with Next.js 14 and Tailwind CSS. Fully responsive and deployed on Vercel.",
    story: "Sample client website demonstrating full-stack delivery — design, development, and deployment in one package.",
    stack: ["Next.js","Tailwind CSS","Vercel","Responsive Design"],
    link: "https://glow-studio-cyan.vercel.app",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-20">
          <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">Selected Work</p>
          <h2 className="text-4xl font-bold text-white mb-3">Things I've Built</h2>
          <p className="text-gray-500 text-lg">Real projects. Real problems. Real solutions.</p>
        </motion.div>
        <div className="space-y-6">
          {projects.map((p,i) => (
            <motion.div key={p.title}
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.08}}
              className={`group bg-slate-800/40 border rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 ${p.featured ? "border-teal-500/30" : "border-slate-700/50"}`}>
              {p.featured && (
                <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/10 border-b border-teal-500/20 px-8 py-3 flex items-center gap-3">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"/>
                  <span className="text-teal-400 text-xs font-semibold tracking-wider">FEATURED PROJECT</span>
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="overflow-hidden h-56 lg:h-auto">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{p.type}</span>
                    <span className="text-slate-600 text-xs">{p.year}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${p.statusColor}`}>{p.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <p className="text-gray-600 text-xs italic leading-relaxed mb-5 border-l-2 border-teal-500/20 pl-3">"{p.story}"</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map(t => (
                      <span key={t} className="bg-slate-700/50 text-gray-400 text-xs px-2.5 py-1 rounded-full border border-slate-600/40">{t}</span>
                    ))}
                  </div>
                  {p.link !== "#" && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors group/link w-fit">
                      View Live Project
                      <ArrowUpRight size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"/>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}