"use client";
import { motion } from "framer-motion";

const creds = [
  {icon:"🎓", title:"ACCA Part-Qualified (7/13)", sub:"FR · AA · FM · TX-UK · PM in progress", desc:"Applied Knowledge and Applied Skills levels completed. SBR and SBL next. Deep knowledge of IFRS, IAS, Audit, and Financial Management.", borderColor:"#2d6a4f"},
  {icon:"📊", title:"QuickBooks ProAdvisor", sub:"Certified by Intuit · Apr 2026 · Exp Oct 2027", desc:"Hands-on QBO Advanced experience — chart of accounts, reconciliation, invoicing, AP/AR, and financial report generation.", borderColor:"#2d6a4f"},
  {icon:"📈", title:"Power BI Certified", sub:"Microsoft Learn · Jun 2026", desc:"Full certification — Get Data, Transform, DAX, Semantic Model, Report Design, Power BI Service, Row-Level Security, and Copilot.", borderColor:"#40916c"},
  {icon:"🏢", title:"PwC Audit Simulation", sub:"Forage · Apr 2026 · ID: XWQf67Z2Qpj2aLoEZ", desc:"Purchase process walkthrough, control testing workpapers, risk control matrix, and internal audit communication.", borderColor:"#c4b99a40"},
  {icon:"🏛️", title:"Deloitte Virtual Programme", sub:"Forage · Personal Branding & Finance", desc:"Professional identity, value communication, and career positioning in a Big 4 accounting context.", borderColor:"#c4b99a40"},
  {icon:"💻", title:"Diploma in Web Development", sub:"Professional Collegiate · 2023–2024", desc:"Full diploma covering HTML, CSS, JavaScript, WordPress, and digital design. First foundation in code.", borderColor:"#1a3d2b"},
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-32 px-6" style={{background:"#0f2d1a"}}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color:"#74c69d"}}>Proof of Work</p>
          <h2 className="text-4xl font-bold mb-3" style={{color:"#f5f0e8"}}>Credentials</h2>
          <p className="text-lg max-w-xl" style={{color:"#6b7c6e"}}>Certified, tested, and applied in real projects — not just listed on a CV.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {creds.map((c,i) => (
            <motion.div key={c.title}
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.07}}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{background:"#0a1f12", border:`1px solid ${c.borderColor}`}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4" style={{background:"rgba(45,106,79,0.2)"}}>{c.icon}</div>
              <h3 className="font-semibold mb-1" style={{color:"#f5f0e8"}}>{c.title}</h3>
              <p className="text-xs mb-3 leading-relaxed" style={{color:"#74c69d"}}>{c.sub}</p>
              <p className="text-sm leading-relaxed" style={{color:"#6b7c6e"}}>{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ACCA Progress */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          className="rounded-2xl p-8" style={{background:"#0a1f12", border:"1px solid #2d6a4f"}}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{color:"#74c69d"}}>ACCA Progress</p>
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
              <div key={p.paper} className="rounded-xl p-4" style={{
                background: p.status === "Pass" ? "rgba(45,106,79,0.15)" : p.status === "In Progress" ? "rgba(196,185,154,0.08)" : "rgba(26,61,43,0.3)",
                border: p.status === "Pass" ? "1px solid #2d6a4f" : p.status === "In Progress" ? "1px solid #c4b99a40" : "1px solid #1a3d2b"
              }}>
                <p className="font-bold text-sm" style={{color:"#f5f0e8"}}>{p.paper}</p>
                <p className="text-xs mt-1 font-medium" style={{color: p.status === "Pass" ? "#74c69d" : p.status === "In Progress" ? "#c4b99a" : "#2d6a4f"}}>{p.status}</p>
                <p className="text-xs mt-0.5" style={{color:"#2d6a4f"}}>{p.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}