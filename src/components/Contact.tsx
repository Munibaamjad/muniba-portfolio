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

  const inputStyle = {background:"#0a1f12", border:"1px solid #1a3d2b", color:"#f5f0e8"};

  return (
    <section id="contact" className="py-32 px-6" style={{background:"#0a1f12"}}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color:"#74c69d"}}>Say Hello</p>
          <h2 className="text-4xl font-bold mb-4" style={{color:"#f5f0e8"}}>Let's Talk</h2>
          <p className="text-lg max-w-lg mx-auto" style={{color:"#6b7c6e"}}>Whether it's a project, an internship, a job opportunity, or just a conversation — I'd love to hear from you.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="lg:col-span-2 space-y-5 flex flex-col justify-center">
            {[
              {icon:<Mail size={18}/>, label:"Email", value:"muniba.offcial@gmail.com"},
              {icon:<MessageCircle size={18}/>, label:"WhatsApp", value:"+92 314 786 9932"},
              {icon:<MapPin size={18}/>, label:"Location", value:"Karachi, Pakistan · Remote"},
            ].map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:"rgba(45,106,79,0.2)", border:"1px solid #2d6a4f", color:"#74c69d"}}>{c.icon}</div>
                <div>
                  <p className="text-sm font-medium" style={{color:"#f5f0e8"}}>{c.label}</p>
                  <p className="text-sm" style={{color:"#6b7c6e"}}>{c.value}</p>
                </div>
              </div>
            ))}
            <div className="pt-4" style={{borderTop:"1px solid #1a3d2b"}}>
              <p className="text-sm leading-relaxed" style={{color:"#2d6a4f"}}>Open to audit trainee, finance analyst, and data analyst roles in Karachi or remote. Also available for freelance web development and bookkeeping projects worldwide.</p>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="lg:col-span-3 rounded-2xl p-8" style={{background:"#0f2d1a", border:"1px solid #1a3d2b"}}>
            <div className="flex flex-col gap-4">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="rounded-xl px-4 py-3.5 text-sm outline-none" style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor="#40916c"} onBlur={e => (e.target as HTMLInputElement).style.borderColor="#1a3d2b"}/>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="rounded-xl px-4 py-3.5 text-sm outline-none" style={inputStyle} onFocus={e => (e.target as HTMLInputElement).style.borderColor="#40916c"} onBlur={e => (e.target as HTMLInputElement).style.borderColor="#1a3d2b"}/>
              <select title="Select a category" name="type" value={form.type} onChange={handleChange} className="rounded-xl px-4 py-3.5 text-sm outline-none" style={{...inputStyle, color: form.type ? "#f5f0e8" : "#6b7c6e"}}>
                <option value="">I'm reaching out about...</option>
                <option>Freelance project (website)</option>
                <option>Freelance project (bookkeeping)</option>
                <option>Freelance project (website + bookkeeping)</option>
                <option>Internship opportunity</option>
                <option>Job opportunity</option>
                <option>Collaboration</option>
                <option>Something else</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me more..." rows={5} className="rounded-xl px-4 py-3.5 text-sm outline-none resize-none" style={inputStyle} onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor="#40916c"} onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor="#1a3d2b"}/>
              <button onClick={handleSubmit} disabled={status==="sending"||status==="sent"}
                className="py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-50"
                style={{background:"#2d6a4f", color:"#f5f0e8"}}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background="#40916c"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background="#2d6a4f"}>
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