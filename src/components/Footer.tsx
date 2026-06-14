export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-white font-bold">Muniba<span className="text-teal-400">.</span></p>
          <p className="text-gray-600 text-xs mt-1">Accountant by training. Developer by passion.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          {["About","Skills","Projects","Experience","Credentials","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-teal-400 transition-colors">{l}</a>
          ))}
        </div>
        <p className="text-gray-700 text-xs">© 2026 Muniba Amjad</p>
      </div>
    </footer>
  );
}