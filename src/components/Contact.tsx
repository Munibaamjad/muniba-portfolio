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

  const inputBase = {
    background: "#fff",
    border: "1.5px solid #e5e0d8",
    color: "#111827",
    borderRadius: "12px",
    outline: "none",
    width: "100%",
    padding: "14px 16px",
    fontSize: "14px",
    transition: "border-color 0.2s",
  };

  const focusStyle = { borderColor: "#3b82f6" };

  return (
    <section id="contact" className="py-32 px-6" style={{ background: "#faf8f5" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#3b82f6" }}>Say Hello</p>
          <h2 className="text-4xl font-black mb-4" style={{ color: "#111827" }}>Let's Talk</h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: "#6b7280" }}>
            Whether it's a project, internship, job, or just a conversation — I'd love to hear from you.
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
              { icon: <Mail size={18} />, label: "Email", value: "muniba.offcial@gmail.com" },
              { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+92 314 786 9932" },
              { icon: <MapPin size={18} />, label: "Location", value: "Karachi, Pakistan · Remote" },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#1a274410", border: "1px solid #1a274420", color: "#1a2744" }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#111827" }}>{c.label}</p>
                  <p className="text-sm" style={{ color: "#6b7280" }}>{c.value}</p>
                </div>
              </div>
            ))}
            <div className="pt-4" style={{ borderTop: "1px solid #e5e0d8" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
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
            style={{ background: "#fff", border: "1px solid #e5e0d8" }}
          >
            <div className="flex flex-col gap-4">
              <input
                suppressHydrationWarning
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Your name" style={inputBase}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = "#e5e0d8"; }}
              />
              <input
                suppressHydrationWarning
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="Your email" style={inputBase}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = "#e5e0d8"; }}
              />
              <select
                suppressHydrationWarning
                name="type" value={form.type} onChange={handleChange}
                style={{ ...inputBase, color: form.type ? "#111827" : "#9ca3af" }}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = "#e5e0d8"; }}
              >
                <option value="">I'm reaching out about...</option>
                <option>Freelance project (website)</option>
                <option>Freelance project (bookkeeping)</option>
                <option>Internship opportunity</option>
                <option>Job opportunity</option>
                <option>Collaboration</option>
                <option>Something else</option>
              </select>
              <textarea
                suppressHydrationWarning
                name="message" value={form.message} onChange={handleChange}
                placeholder="Tell me more..." rows={5}
                style={{ ...inputBase, resize: "none" }}
                onFocus={e => Object.assign(e.target.style, focusStyle)}
                onBlur={e => { e.target.style.borderColor = "#e5e0d8"; }}
              />
              <motion.button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-4 rounded-xl text-sm font-bold disabled:opacity-50 transition-all duration-200"
                style={{ background: "#1a2744", color: "#fff" }}
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
