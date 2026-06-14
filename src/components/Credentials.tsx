"use client";
import { motion } from "framer-motion";

const creds = [
  {icon:"🎓", title:"ACCA Part-Qualified (7/13)", sub:"FR · AA · FM · TX-UK · PM in progress", desc:"Applied Knowledge and Applied Skills levels completed. SBR and SBL next. Deep knowledge of IFRS, IAS, Audit, and Financial Management.", color:"teal"},
  {icon:"📊", title:"QuickBooks ProAdvisor", sub:"Certified by Intuit · Apr 2026 · Exp Oct 2027", desc:"Hands-on QBO Advanced experience — chart of accounts, reconciliation, invoicing, AP/AR, and financial report generation.", color:"teal"},
  {icon:"📈", title:"Power BI Certified", sub:"Microsoft Learn · Jun 2026", desc:"Full certification — Get Data, Transform, DAX, Semantic Model, Report Design, Power BI Service, Row-Level Security, and Copilot.", color:"blue"},
  {icon:"🏢", title:"PwC Audit Simulation", sub:"Forage · Apr 2026 · ID: XWQf67Z2Qpj2aLoEZ", desc:"Purchase process walkthrough, control testing workpapers, risk control matrix, and internal audit communication.", color:"amber"},
  {icon:"🏛️", title:"Deloitte Virtual Programme", sub:"Forage · Personal Branding & Finance", desc:"Professional identity, value communication, and career positioning in a Big 4 accounting context.", color:"amber"},
  {icon:"💻", title:"Diploma in Web Development", sub:"Professional Collegiate · 2023–2024", desc:"Full diploma covering HTML, CSS, JavaScript, WordPress, and digital design. First foundation in code.", color:"purple"},
];

const styles: Record<string, {border:string; icon:string}> = {
  teal:   {border:"border-teal-500/20 hover:border-teal-500/40",   icon:"bg-teal-500/10"},
  blue:   {border:"border-blue-500/20 hover:border-blue-500/40",   icon:"bg-blue-500/10"},
  amber:  {border:"border-amber-500/20 hover:border-amber-500/40", icon:"bg-amber-500/10"},
  purple: {border:"border-purple-500/20 hover:border-purple-500/40",icon:"bg-purple-500/10"},
};

export default function Credentials() {
  return (
    <section id="credentials" className="py-32 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-20">
          <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">Proof of Work</p>
          <h2 className="text-4xl font-bold text-white mb-3">Credentials</h2>
          <p className="text-gray-500 text-lg max-w-xl">Certified, tested, and applied in real projects — not just listed on a CV.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {creds.map((c,i) => (
            <motion.div key={c.title}
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.07}}
              className={`bg-slate-800/30 border rounded-2xl p-6 transition-all duration-300 ${styles[c.color].border}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 ${styles[c.color].icon}`}>{c.icon}</div>
              <h3 className="text-white font-semibold mb-1">{c.title}</h3>
              <p className="text-teal-400 text-xs mb-3 leading-relaxed">{c.sub}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ACCA Papers */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mt-8 bg-slate-800/30 border border-teal-500/20 rounded-2xl p-8">
          <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-6">ACCA Progress</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {paper:"BT / FBT", status:"Pass", note:"Knowledge"},
              {paper:"MA / FMA", status:"Pass", note:"Knowledge"},
              {paper:"FA / FFA", status:"Pass", note:"Knowledge"},
              {paper:"FR", status:"Pass", note:"Skills"},
              {paper:"AA", status:"Pass", note:"Skills"},
              {paper:"FM", status:"Pass", note:"Skills"},
              {paper:"TX-UK", status:"Pass", note:"Skills"},
              {paper:"PM", status:"In Progress", note:"Skills"},
              {paper:"SBR", status:"Preparing", note:"Professional"},
              {paper:"SBL", status:"Preparing", note:"Professional"},
            ].map(p => (
              <div key={p.paper} className={`rounded-xl p-4 border ${p.status === "Pass" ? "bg-teal-500/5 border-teal-500/20" : p.status === "In Progress" ? "bg-amber-500/5 border-amber-500/20" : "bg-slate-700/20 border-slate-700/30"}`}>
                <p className="text-white font-bold text-sm">{p.paper}</p>
                <p className={`text-xs mt-1 font-medium ${p.status === "Pass" ? "text-teal-400" : p.status === "In Progress" ? "text-amber-400" : "text-gray-500"}`}>{p.status}</p>
                <p className="text-gray-600 text-xs mt-0.5">{p.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}