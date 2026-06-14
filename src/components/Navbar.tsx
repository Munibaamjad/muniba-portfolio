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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#0a1f12]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div>
          <span style={{color:"#f5f0e8"}} className="font-bold text-lg">Muniba<span style={{color:"#74c69d"}}>.</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium" style={{color:"#c4b99a"}}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="transition-colors duration-200 hover:text-white"
              style={{color:"#c4b99a"}}
              onMouseEnter={e => (e.currentTarget.style.color="#74c69d")}
              onMouseLeave={e => (e.currentTarget.style.color="#c4b99a")}>
              {l}
            </a>
          ))}
        </div>
        <a href="#contact"
          className="hidden md:block px-5 py-2 rounded-full text-sm font-medium transition-all"
          style={{border:"1px solid #40916c", color:"#74c69d"}}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#40916c20"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="transparent"; }}>
          Hire Me
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden" style={{color:"#c4b99a"}}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      {open && (
        <div className="px-6 pb-6 flex flex-col gap-5 text-sm font-medium" style={{background:"#0a1f12", borderTop:"1px solid #1a3d2b", color:"#c4b99a"}}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="text-center py-2 rounded-full" style={{border:"1px solid #40916c", color:"#74c69d"}}>Hire Me</a>
        </div>
      )}
    </nav>
  );
}