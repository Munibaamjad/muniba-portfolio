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

function Bar({name, level, isFinance}: {name:string; level:number; isFinance:boolean}) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.4}}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm" style={{color:"#c4b99a"}}>{name}</span>
        <span className="text-xs font-medium" style={{color: isFinance ? "#74c69d" : "#c4b99a"}}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{background:"#1a3d2b"}}>
        <motion.div
          initial={{width:0}}
          whileInView={{width:`${level}%`}}
          viewport={{once:true}}
          transition={{duration:0.9, ease:"easeOut"}}
          className="h-full rounded-full"
          style={{background: isFinance ? "linear-gradient(to right, #2d6a4f, #74c69d)" : "linear-gradient(to right, #40916c, #c4b99a)"}}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6" style={{background:"#0a1f12"}}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-center mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color:"#74c69d"}}>Expertise</p>
          <h2 className="text-4xl font-bold mb-4" style={{color:"#f5f0e8"}}>Skills</h2>
          <p className="text-lg max-w-lg mx-auto" style={{color:"#6b7c6e"}}>Two disciplines. One person. No compromise.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{background:"rgba(116,198,157,0.1)"}}>📊</div>
              <h3 className="text-xl font-bold" style={{color:"#f5f0e8"}}>Finance & Accounting</h3>
            </div>
            <div className="space-y-5">
              {finance.map(s => <Bar key={s.name} name={s.name} level={s.level} isFinance={true}/>)}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{background:"rgba(196,185,154,0.1)"}}>💻</div>
              <h3 className="text-xl font-bold" style={{color:"#f5f0e8"}}>Technology & Data</h3>
            </div>
            <div className="space-y-5">
              {tech.map(s => <Bar key={s.name} name={s.name} level={s.level} isFinance={false}/>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}