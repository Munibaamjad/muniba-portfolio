"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-teal-900/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <span className="text-xl font-bold text-white tracking-tight">Muniba <span className="text-teal-400">Amjad</span></span>
          <p className="text-teal-500 text-xs tracking-widest">FINTECH FREELANCER</p>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#services" className="hover:text-teal-400 transition">Services</a>
          <a href="#portfolio" className="hover:text-teal-400 transition">Portfolio</a>
          <a href="#credentials" className="hover:text-teal-400 transition">Credentials</a>
          <a href="#calculator" className="hover:text-teal-400 transition">Pricing</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
        </div>
        <a href="#contact" className="hidden md:block bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-400 transition shadow-lg shadow-teal-500/30">
          Hire Me
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm font-medium text-gray-300 bg-slate-950 border-t border-slate-800">
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#credentials" onClick={() => setOpen(false)}>Credentials</a>
          <a href="#calculator" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-teal-500 text-white px-5 py-2 rounded-full text-center">Hire Me</a>
        </div>
      )}
    </nav>
  );
}