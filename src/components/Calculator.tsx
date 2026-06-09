"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Calculator() {
  const [website, setWebsite] = useState(false);
  const [pages, setPages] = useState(5);
  const [bookkeeping, setBookkeeping] = useState(false);
  const [transactions, setTransactions] = useState("low");
  const [reports, setReports] = useState(false);

  const websitePrice = website ? (pages <= 3 ? 250 : pages <= 5 ? 350 : 450) : 0;
  const bookkeepingPrice = bookkeeping ? (transactions === "low" ? 150 : transactions === "medium" ? 220 : 300) : 0;
  const reportsPrice = reports && bookkeeping ? 50 : 0;
  const bundleDiscount = website && bookkeeping ? 80 : 0;
  const total = websitePrice + bookkeepingPrice + reportsPrice - bundleDiscount;

  return (
    <section id="calculator" className="py-28 bg-slate-900 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Transparent Pricing</p>
          <h2 className="text-4xl font-bold text-white mb-4">Price Calculator</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Build your package and see the price instantly. No hidden fees.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Bookkeeping first — finance leads */}
            <div
              className={`rounded-2xl border-2 p-6 transition-all duration-300 cursor-pointer ${bookkeeping ? "border-teal-500 bg-teal-500/5" : "border-slate-700 bg-slate-800/50"}`}
              onClick={() => setBookkeeping(!bookkeeping)}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📒</span>
                  <div>
                    <p className="font-bold text-white">Bookkeeping Setup</p>
                    <p className="text-gray-400 text-sm">QuickBooks / Xero — monthly</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full transition-all duration-300 flex items-center px-1 ${bookkeeping ? "bg-teal-500" : "bg-slate-600"}`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${bookkeeping ? "translate-x-6" : "translate-x-0"}`} />
                </div>
              </div>
              {bookkeeping && (
                <div className="mt-4 pt-4 border-t border-teal-500/20 space-y-3">
                  <p className="text-sm font-medium text-gray-300">Monthly transactions:</p>
                  <div className="flex gap-2">
                    {[["low", "Under 50"], ["medium", "50–150"], ["high", "150+"]].map(([val, label]) => (
                      <button key={val} onClick={(e) => { e.stopPropagation(); setTransactions(val); }}
                        className={`flex-1 py-2 rounded-xl text-xs font-semibold transition ${transactions === val ? "bg-teal-500 text-white" : "bg-slate-700 text-gray-300 border border-slate-600"}`}>
                        {label}
                      </button>
                    ))}
                  </div>
                  <div
                    className={`flex justify-between items-center p-3 rounded-xl cursor-pointer border transition ${reports ? "bg-teal-500/10 border-teal-500/30" : "bg-slate-700 border-slate-600"}`}
                    onClick={(e) => { e.stopPropagation(); setReports(!reports); }}
                  >
                    <p className="text-sm text-gray-300">Add monthly P&L report</p>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${reports ? "bg-teal-500 text-white" : "bg-slate-600 text-gray-400"}`}>+$50</span>
                  </div>
                </div>
              )}
            </div>

            {/* Website second */}
            <div
              className={`rounded-2xl border-2 p-6 transition-all duration-300 cursor-pointer ${website ? "border-purple-500 bg-purple-500/5" : "border-slate-700 bg-slate-800/50"}`}
              onClick={() => setWebsite(!website)}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-bold text-white">Website Development</p>
                    <p className="text-gray-400 text-sm">Next.js or WordPress</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full transition-all duration-300 flex items-center px-1 ${website ? "bg-purple-500" : "bg-slate-600"}`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${website ? "translate-x-6" : "translate-x-0"}`} />
                </div>
              </div>
              {website && (
                <div className="mt-4 pt-4 border-t border-purple-500/20">
                  <p className="text-sm font-medium text-gray-300 mb-3">Number of pages:</p>
                  <div className="flex gap-2">
                    {[3, 5, 7].map((p) => (
                      <button key={p} onClick={(e) => { e.stopPropagation(); setPages(p); }}
                        className={`flex-1 py-2 rounded-xl text-sm font-semibold transition ${pages === p ? "bg-purple-500 text-white" : "bg-slate-700 text-gray-300 border border-slate-600"}`}>
                        {p} pages
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Price Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-950 border border-slate-700 rounded-2xl p-8 sticky top-8"
          >
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-6">Your Quote</p>
            <div className="space-y-3 mb-6">
              {bookkeeping && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Bookkeeping / month</span>
                  <span className="text-white font-semibold">${bookkeepingPrice}</span>
                </div>
              )}
              {reports && bookkeeping && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">P&L Report / month</span>
                  <span className="text-white font-semibold">${reportsPrice}</span>
                </div>
              )}
              {website && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Website ({pages} pages)</span>
                  <span className="text-white font-semibold">${websitePrice}</span>
                </div>
              )}
              {bundleDiscount > 0 && (
                <div className="flex justify-between text-sm text-teal-400">
                  <span>Bundle discount 🎉</span>
                  <span>-${bundleDiscount}</span>
                </div>
              )}
              {!website && !bookkeeping && (
                <p className="text-gray-500 text-sm">Select services to see your quote.</p>
              )}
            </div>
            {(website || bookkeeping) && (
              <>
                <div className="border-t border-slate-700 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total</span>
                    <span className="text-4xl font-bold text-white">${total}</span>
                  </div>
                  {bookkeeping && <p className="text-gray-500 text-xs mt-1">* Bookkeeping billed monthly</p>}
                </div>
                <a href="#contact" className="block w-full bg-teal-500 hover:bg-teal-400 text-white text-center py-4 rounded-xl font-semibold transition shadow-lg shadow-teal-500/20">
                  Get This Package →
                </a>
              </>
            )}
            {website && bookkeeping && (
              <div className="mt-4 bg-teal-500/10 border border-teal-500/20 rounded-xl p-3 text-center">
                <p className="text-teal-400 text-xs font-semibold">Bundle deal! You saved $80 🎉</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}