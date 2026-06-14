"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"/>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-teal-500/6 rounded-full blur-3xl"/>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl"/>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
          className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium px-4 py-2 rounded-full mb-10 tracking-wider">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"/>
          Open to freelance & full-time opportunities
        </motion.div>
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}}
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
          Muniba<span className="text-teal-400">.</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
          className="text-2xl md:text-3xl text-gray-300 font-light mb-4 leading-relaxed">
          Accountant by training.{" "}
          <span className="text-teal-400 font-medium">Developer by passion.</span>
          <br/>Both by choice.
        </motion.p>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.3}}
          className="text-gray-500 text-base md:text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
          ACCA Candidate (7/13) · QuickBooks ProAdvisor · Power BI Certified (Microsoft)
          <br/>Built ExaminerAI — AI-powered ACCA exam marker used by Pakistani students.
        </motion.p>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.35}}
          className="text-gray-600 text-sm mb-12">
          Karachi, Pakistan · Available for remote work worldwide
        </motion.p>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.4}}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a href="#projects" className="bg-teal-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20">
            View My Work
          </a>
          <a href="#contact" className="border border-slate-600 text-gray-300 px-8 py-4 rounded-full text-sm font-medium hover:border-teal-500/40 hover:text-white transition-all">
            Get In Touch
          </a>
        </motion.div>
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
              <p className="text-xl font-bold text-white">{s.value}</p>
              <p className="text-gray-600 text-xs mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-700 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-teal-500/40 to-transparent"/>
      </motion.div>
    </section>
  );
}