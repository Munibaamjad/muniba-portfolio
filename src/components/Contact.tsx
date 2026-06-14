"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({name:"",email:"",type:"",message:""});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = async () => {
    if (!form.name||!form.email||!form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/muniba.offcial@gmail.com",{
        method:"POST",
        headers:{"Content-Type":"application/json",Accept:"application/json"},
        body:JSON.stringify({...form,_subject:`Portfolio contact: ${form.type||"General"}`}),
      });
      if(res.ok){setStatus("sent");setForm({name:"",email:"",type:"",message:""});}
      else setStatus("error");
    } catch{setStatus("error");}
  };
  return (
    <section id="contact" className="py-32 bg-slate-950 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-center mb-16">
          <p className="text-teal-400 text-xs font-semibold tracking-widest uppercase mb-4">Say Hello</p>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Talk</h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">Whether it's a project, an internship, a job opportunity, or just a conversation — I'd love to hear from you.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="lg:col-span-2 space-y-5 flex flex-col justify-center">
            {[
              {icon:<Mail size={18}/>, label:"Email", value:"muniba.offcial@gmail.com"},
              {icon:<MessageCircle size={18}/>, label:"WhatsApp", value:"+92 314 786 9932"},
              {icon:<MapPin size={18}/>, label:"Location", value:"Karachi, Pakistan · Remote"},
            ].map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">{c.icon}</div>
                <div>
                  <p className="text-white text-sm font-medium">{c.label}</p>
                  <p className="text-gray-500 text-sm">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-slate-800">
              <p className="text-gray-600 text-sm leading-relaxed">Open to audit trainee, finance analyst, and data analyst roles in Karachi or remote. Also available for freelance web development and bookkeeping projects worldwide.</p>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="lg:col-span-3 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex flex-col gap-4">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                className="bg-slate-900/60 border border-slate-700 text-white placeholder-gray-600 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500/40 transition-colors"/>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email"
                className="bg-slate-900/60 border border-slate-700 text-white placeholder-gray-600 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500/40 transition-colors"/>
              <select title="no" name="type" value={form.type} onChange={handleChange}
                className="bg-slate-900/60 border border-slate-700 text-gray-400 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500/40 transition-colors">
                <option value="">I'm reaching out about...</option>
                <option>Freelance project (website)</option>
                <option>Freelance project (bookkeeping)</option>
                <option>Freelance project (website + bookkeeping)</option>
                <option>Internship opportunity</option>
                <option>Job opportunity</option>
                <option>Collaboration</option>
                <option>Something else</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me more..." rows={5}
                className="bg-slate-900/60 border border-slate-700 text-white placeholder-gray-600 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-teal-500/40 transition-colors resize-none"/>
              <button onClick={handleSubmit} disabled={status==="sending"||status==="sent"}
                className="bg-teal-500 text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-teal-400 transition-all duration-200 disabled:opacity-50">
                {status==="idle"&&"Send Message"}
                {status==="sending"&&"Sending..."}
                {status==="sent"&&"Message Sent! I'll reply within 24 hours ✓"}
                {status==="error"&&"Something went wrong. Try again."}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}