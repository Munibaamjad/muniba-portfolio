"use client";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/muniba.offcial@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "New enquiry from munibadev.com" }),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", service: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="py-28 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Send me a message — I will reply within 24 hours with a free quote.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-3 text-teal-400"><MessageCircle size={20} /></div>
              <div><p className="font-semibold text-white">WhatsApp</p><p className="text-gray-400 text-sm">+92 314 786 9932</p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-3 text-teal-400"><Mail size={20} /></div>
              <div><p className="font-semibold text-white">Email</p><p className="text-gray-400 text-sm">muniba.offcial@gmail.com</p></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-3 text-teal-400"><Clock size={20} /></div>
              <div><p className="font-semibold text-white">Response Time</p><p className="text-gray-400 text-sm">Within 24 hours</p></div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/10 to-purple-500/10 border border-teal-500/20 rounded-2xl p-6">
              <p className="text-teal-400 text-sm font-semibold mb-2">Fintech Bundle</p>
              <p className="text-white text-2xl font-bold mb-1">Website + Bookkeeping</p>
              <p className="text-gray-400 text-sm">From $320 — delivered in 7 days</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8">
            <div className="flex flex-col gap-4">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="bg-slate-900 border border-slate-600 text-white placeholder-gray-500 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="bg-slate-900 border border-slate-600 text-white placeholder-gray-500 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <select title="Service" name="service" value={form.service} onChange={handleChange} className="bg-slate-900 border border-slate-600 text-gray-400 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option value="">I need...</option>
                <option>Bookkeeping only</option>
                <option>Website only</option>
                <option>Website + Bookkeeping Bundle</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your business..." rows={4} className="bg-slate-900 border border-slate-600 text-white placeholder-gray-500 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none" />
              <button onClick={handleSubmit} disabled={status === "sending" || status === "sent"}
                className="bg-teal-500 text-white py-4 rounded-xl text-sm font-semibold hover:bg-teal-400 transition shadow-lg shadow-teal-500/20 disabled:opacity-60">
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent! I will reply within 24 hours ✓"}
                {status === "error" && "Something went wrong. Try again."}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}