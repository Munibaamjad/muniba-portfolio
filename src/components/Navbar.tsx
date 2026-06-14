"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["About","Skills","Projects","Experience","Credentials","Contact"];
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div>
          <span className="text-white font-bold text-lg">Muniba<span className="text-teal-400">.</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-teal-400 transition-colors duration-200">{l}</a>)}
        </div>
        <a href="#contact" className="hidden md:block border border-teal-500/40 text-teal-400 px-5 py-2 rounded-full text-sm hover:bg-teal-500/10 transition-all">
          Hire Me
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5 text-sm text-gray-300 bg-slate-950 border-t border-slate-800">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="border border-teal-500/40 text-teal-400 px-5 py-2 rounded-full text-center">Hire Me</a>
        </div>
      )}
    </nav>
  );
}