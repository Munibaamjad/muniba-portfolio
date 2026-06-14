"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
            <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-6">About Me</p>
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
              I live at the intersection of
              <span className="text-teal-400"> finance and technology.</span>
            </h2>
            <div className="space-y-5 text-gray-400 leading-relaxed text-base">
              <p>
                I am an ACCA candidate with 7 of 13 papers cleared — including Financial Reporting, Audit and Assurance, Financial Management, and Taxation UK. Performance Management is in progress, with SBR and SBL next on the list.
              </p>
              <p>
                Before moving into accounting, I built websites. That combination is rare — and it is exactly what drives everything I create. I built ExaminerAI using Next.js 14, Mistral AI, and Gemini 2.5 Flash because I understood both the accounting problem and the technical solution.
              </p>
              <p>
                I am Microsoft-certified in Power BI, a QuickBooks ProAdvisor, and have completed virtual experience programmes with both PwC and Deloitte via Forage. I do not just study things — I build them.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Karachi, Pakistan","Remote-Ready","ACCA Skills Level","Finance × Tech"].map(t => (
                <span key={t} className="bg-slate-800 border border-slate-700 text-gray-400 text-xs px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
            <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-6">Timeline</p>
            <div className="relative border-l border-slate-700 pl-8 space-y-8">
              {[
                {year:"2022", title:"I.Com — Khatoon-e-Pakistan College", desc:"Intermediate in Commerce — foundation in business, accounting, and economics.", color:"bg-teal-500"},
                {year:"2023", title:"Diploma in Web Development", desc:"Professional Collegiate — HTML, CSS, JavaScript, WordPress. First real code.", color:"bg-purple-500"},
                {year:"Jun–Sep 2023", title:"Freelance Web Developer", desc:"Developed responsive websites for clients including international projects in Qatar.", color:"bg-purple-500"},
                {year:"2024", title:"ACCA — Tabani School of Accountancy", desc:"FR, AA, FM, TX-UK cleared. PM in progress. SBR and SBL next.", color:"bg-teal-500"},
                {year:"Apr 2026", title:"PwC + Deloitte Simulations (Forage)", desc:"Completed both Big 4 virtual programmes — audit workpapers, risk matrix, financial analysis.", color:"bg-amber-500"},
                {year:"Jun 2026", title:"Microsoft Power BI Certified", desc:"Completed full Power BI learning path — DAX, Power Query, data modelling, reporting.", color:"bg-blue-500"},
              ].map((t,i) => (
                <motion.div key={i} initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.08}} className="relative">
                  <div className={`absolute -left-11 w-4 h-4 rounded-full border-4 border-slate-900 ${t.color}`}/>
                  <p className="text-teal-500 text-xs font-bold tracking-widest mb-1">{t.year}</p>
                  <h4 className="text-white font-semibold mb-1">{t.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}