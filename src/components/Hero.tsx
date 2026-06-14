"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background:"#0a1f12"}}>
      {/* Subtle grid */}
      <div className="absolute inset-0" style={{backgroundImage:"linear-gradient(rgba(116,198,157,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(116,198,157,0.03) 1px, transparent 1px)", backgroundSize:"60px 60px"}}/>
      {/* Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl" style={{background:"rgba(45,106,79,0.15)"}}/>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{background:"rgba(26,61,43,0.3)"}}/>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full mt-24 mb-6 tracking-wider"
          style={{background:"rgba(116,198,157,0.08)", border:"1px solid rgba(116,198,157,0.2)", color:"#74c69d"}}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:"#74c69d"}}/>
          Open to freelance & full-time opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}}
          className="text-7xl md:text-8xl font-bold mb-6 tracking-tight leading-none"
          style={{color:"#f5f0e8"}}>
          Muniba<span style={{color:"#74c69d"}}>.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
          className="text-2xl md:text-3xl font-light mb-4 leading-relaxed"
          style={{color:"#e8e0d0"}}>
          Accountant by training.{" "}
          <span className="font-medium" style={{color:"#74c69d"}}>Developer by passion.</span>
          <br/>Both by choice.
        </motion.p>

        {/* Sub */}
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.3}}
          className="text-base md:text-lg mb-4 max-w-2xl mx-auto leading-relaxed"
          style={{color:"#c4b99a"}}>
          ACCA Candidate (7/13) · QuickBooks ProAdvisor · Power BI Certified (Microsoft)
          <br/>Built ExaminerAI — AI-powered ACCA exam marker used by Pakistani students.
        </motion.p>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.35}}
          className="text-sm mb-12" style={{color:"#6b7c6e"}}>
          Karachi, Pakistan · Available for remote work worldwide
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.4}}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a href="#projects"
            className="px-8 py-4 rounded-full text-sm font-semibold transition-all"
            style={{background:"#2d6a4f", color:"#f5f0e8"}}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background="#40916c"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background="#2d6a4f"}>
            View My Work
          </a>
          <a href="#contact"
            className="px-8 py-4 rounded-full text-sm font-medium transition-all"
            style={{border:"1px solid #2d6a4f", color:"#c4b99a"}}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="#74c69d"; (e.currentTarget as HTMLElement).style.color="#f5f0e8"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="#2d6a4f"; (e.currentTarget as HTMLElement).style.color="#c4b99a"; }}>
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,delay:0.6}}
          className="flex flex-wrap justify-center gap-10">
          {[
            {value:"7/13", label:"ACCA Papers"},
            {value:"F3 Pass", label:"Knowledge Module"},
            {value:"QBO", label:"ProAdvisor"},
            {value:"PwC+", label:"Big 4 Sims"},
            {value:"Power BI", label:"Microsoft Certified"},
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="text-xl font-bold" style={{color:"#f5f0e8"}}>{s.value}</p>
              <p className="text-xs mt-1 tracking-wide" style={{color:"#6b7c6e"}}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest" style={{color:"#2d6a4f"}}>SCROLL</span>
        <div className="w-px h-10" style={{background:"linear-gradient(to bottom, #40916c60, transparent)"}}/>
      </motion.div>
    </section>
  );
}