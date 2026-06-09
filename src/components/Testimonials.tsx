"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Salon Owner, London",
    text: "Muniba built our website and set up our QuickBooks in one week. We now have a professional online presence and can finally see where our money is going. Incredible value.",
    rating: 5,
    avatar: "SM",
    color: "bg-teal-500",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Boutique Owner, Dubai",
    text: "I was struggling to find someone who understood both web design and accounting. Muniba handled everything — the site looks amazing and the books are finally clean.",
    rating: 5,
    avatar: "AA",
    color: "bg-purple-500",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Consultant, Toronto",
    text: "Fast, professional, and genuinely cares about delivering quality. My website was live in 6 days and the QuickBooks setup saved me hours every month.",
    rating: 5,
    avatar: "PS",
    color: "bg-teal-600",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-28 bg-slate-950 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Client Reviews</p>
          <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
          <p className="text-gray-400 text-lg">What clients say about working with me.</p>
        </motion.div>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-800/50 border border-slate-700 rounded-3xl p-10 text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            {[...Array(testimonials[active].rating)].map((_, i) => (
              <span key={i} className="text-teal-400 text-xl">★</span>
            ))}
          </div>
          <p className="text-gray-300 text-xl leading-relaxed mb-8 italic">"{testimonials[active].text}"</p>
          <div className="flex items-center justify-center gap-4">
            <div className={`w-12 h-12 rounded-full ${testimonials[active].color} flex items-center justify-center text-white font-bold`}>
              {testimonials[active].avatar}
            </div>
            <div className="text-left">
              <p className="text-white font-bold">{testimonials[active].name}</p>
              <p className="text-gray-400 text-sm">{testimonials[active].role}</p>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button title="no" key={i} onClick={() => setActive(i)}
              className={`h-3 rounded-full transition-all duration-300 ${i === active ? "bg-teal-400 w-8" : "bg-slate-600 w-3"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}