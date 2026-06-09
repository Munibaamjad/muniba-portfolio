export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-bold text-lg">Muniba <span className="text-teal-400">Amjad</span></p>
          <p className="text-teal-500 text-xs tracking-widest mt-1">WHERE FINANCE MEETS TECHNOLOGY</p>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#services" className="hover:text-teal-400 transition">Services</a>
          <a href="#portfolio" className="hover:text-teal-400 transition">Portfolio</a>
          <a href="#credentials" className="hover:text-teal-400 transition">Credentials</a>
          <a href="#calculator" className="hover:text-teal-400 transition">Pricing</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
        </div>
        <p className="text-sm">© 2026 Muniba Amjad.</p>
      </div>
    </footer>
  );
}