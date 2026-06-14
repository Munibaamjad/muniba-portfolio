"use client";
import { motion } from "framer-motion";

const finance = [
  {name:"Financial Reporting (IFRS)", level:88},
  {name:"Audit & Assurance", level:82},
  {name:"Financial Management", level:80},
  {name:"Management Accounting", level:85},
  {name:"QuickBooks Online (QBO)", level:92},
  {name:"Bank Reconciliation", level:90},
  {name:"Variance Analysis", level:84},
  {name:"Taxation (UK)", level:78},
];

const tech = [
  {name:"Next.js / React", level:88},
  {name:"TypeScript", level:80},
  {name:"Tailwind CSS", level:90},
  {name:"Power BI + DAX", level:85},
  {name:"Microsoft Excel (Advanced)", level:88},
  {name:"Supabase / Databases", level:75},
  {name:"Git / GitHub / Vercel", level:85},
  {name:"AI Integration (Mistral, Gemini)", level:78},
];

function Bar({name, level, color}: {name:string; level:number; color:string}) {
  return (
    <motion.div initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.4}}>
      <div className="flex justify-between mb-1.5">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className={`text-xs font-medium ${color}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{width:0}}
          whileInView={{width:`${level}%`}}
          viewport={{once:true}}
          transition={{duration:0.9, ease:"easeOut"}}
          className={`h-full rounded-full ${color === "text-teal-400" ? "bg-gradient-to-r from-teal-600 to-teal-400" : "bg-gradient-to-r from-purple-600 to-purple-400"}`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-center mb-20">
          <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">Expertise</p>
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">Two disciplines. One person. No compromise.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-teal-500/15 rounded-xl flex items-center justify-center text-lg">📊</div>
              <h3 className="text-xl font-bold text-white">Finance & Accounting</h3>
            </div>
            <div className="space-y-5">
              {finance.map(s => <Bar key={s.name} name={s.name} level={s.level} color="text-teal-400"/>)}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 bg-purple-500/15 rounded-xl flex items-center justify-center text-lg">💻</div>
              <h3 className="text-xl font-bold text-white">Technology & Data</h3>
            </div>
            <div className="space-y-5">
              {tech.map(s => <Bar key={s.name} name={s.name} level={s.level} color="text-purple-400"/>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}