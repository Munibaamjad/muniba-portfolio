"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/muniba.offcial@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Portfolio contact: ${form.type || "General"}` }),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", type: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1.5px solid rgba(255,255,255,0.09)",
    color: "#ffffff",
    borderRadius: "12px",
    outline: "none",
    width: "100%",
    padding: "14px 16px",
    fontSize: "14px",
    transition: "border-color 0.2s",
  };

  const focusStyle = { borderColor: "#63b3ff" };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" style={{ background: "#080d18" }}>
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(99,179,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,255,0.025) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#63b3ff" }}>Say Hello</p>
          <h2 className="text-4xl font-black mb-4" style={{ color: "#ffffff" }}>Let&apos;s Talk</h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
            Whether it&apos;s a project, internship, job, or just a conversation — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5 flex flex-col justify-center"
          >
            {[
              { icon: <Mail size={18} />, label: "Email", value: "muniba.offcial@gmail.com", color: "#63b3ff" },
              { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+92 314 786 9932", color: "#34d399" },
              { icon: <MapPin size={18} />, label: "Location", value: "Karachi, Pakistan · Remote", color: "#a78bfa" },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${c.color}12`, border: `1px solid ${c.color}25`, color: c.color }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>{c.label}</p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{c.value}</p>
                </div>
              </div>
            ))}
            <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                Open to audit trainee, finance analyst, and data analyst roles in Karachi or remote. Also available for freelance web development and bookkeeping worldwide.
              </p>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex flex-col gap-4">
              <input
                suppressHydrationWarning
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Your name"
                style={{ ...inputBase }}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; }}
              />
              <input
                suppressHydrationWarning
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="Your email"
                style={{ ...inputBase }}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; }}
              />
              <select
                suppressHydrationWarning
                name="type" value={form.type} onChange={handleChange}
                style={{ ...inputBase, color: form.type ? "#ffffff" : "rgba(255,255,255,0.35)" }}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; }}
              >
                <option value="" style={{ background: "#0d1525" }}>I&apos;m reaching out about...</option>
                <option style={{ background: "#0d1525" }}>Freelance project (website)</option>
                <option style={{ background: "#0d1525" }}>Freelance project (bookkeeping)</option>
                <option style={{ background: "#0d1525" }}>Internship opportunity</option>
                <option style={{ background: "#0d1525" }}>Job opportunity</option>
                <option style={{ background: "#0d1525" }}>Collaboration</option>
                <option style={{ background: "#0d1525" }}>Something else</option>
              </select>
              <textarea
                suppressHydrationWarning
                name="message" value={form.message} onChange={handleChange}
                placeholder="Tell me more..." rows={5}
                style={{ ...inputBase, resize: "none" }}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.09)"; }}
              />
              <motion.button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-4 rounded-xl text-sm font-bold disabled:opacity-50 transition-all duration-200"
                style={{ background: "#3b82f6", color: "#fff", boxShadow: "0 4px 20px rgba(59,130,246,0.3)" }}
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent! I'll reply within 24 hours ✓"}
                {status === "error" && "Something went wrong. Try again."}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
