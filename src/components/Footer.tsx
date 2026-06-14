"use client";
export default function Footer() {
  const links = ["About","Skills","Projects","Experience","Credentials","Contact"];
  return (
    <footer className="px-6 py-10" style={{background:"#0a1f12", borderTop:"1px solid #1a3d2b"}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-bold" style={{color:"#f5f0e8"}}>Muniba<span style={{color:"#74c69d"}}>.</span></p>
          <p className="text-xs mt-1" style={{color:"#2d6a4f"}}>Accountant by training. Developer by passion.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors duration-200"
              style={{color:"#2d6a4f"}}
              onMouseEnter={e => (e.currentTarget.style.color="#74c69d")}
              onMouseLeave={e => (e.currentTarget.style.color="#2d6a4f")}>
              {l}
            </a>
          ))}
        </div>
        <p className="text-xs" style={{color:"#1a3d2b"}}>© 2026 Muniba Amjad</p>
      </div>
    </footer>
  );
}