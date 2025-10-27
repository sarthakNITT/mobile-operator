import React, { useEffect, useRef, useState, useId, useMemo  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, ShieldCheck, ChevronLeft, ChevronRight, Cpu, Cloud, Database, Link, CheckCircle, FileText, ChevronDown, BookOpen, Link as LinkIcon  } from "lucide-react";
const ACCENT = "#65cdb2";

const integrations = [
    { title: "Node SDK", desc: "Install & go — server-side helpers.", icon: <Cpu className="w-5 h-5" /> },
    { title: "Python SDK", desc: "Batteries-included client for Python apps.", icon: <Cloud className="w-5 h-5" /> },
    { title: "Webhooks", desc: "Real-time event delivery to your endpoints.", icon: <Link className="w-5 h-5" /> },
    { title: "Reconciliation API", desc: "Programmatic exports & audit queries.", icon: <Database className="w-5 h-5" /> },
  ];
  
  const logos = ["Acme", "FinCorp", "Ledgerwise", "MarketX", "Nimbus", "BlueBank"];
  
  export function IntegrationsSection(): JSX.Element {
    const [modalOpen, setModalOpen] = useState(false);
    const [focused, setFocused] = useState<number | null>(null);
  
    // Motion variants
    const card = {
      hidden: { opacity: 0, y: 14 },
      show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.6, ease: "easeOut" } }),
    };
  
    const diagramDraw = {
      hidden: { pathLength: 0, opacity: 0 },
      show: (i = 0) => ({ pathLength: 1, opacity: 1, transition: { delay: 0.15 * i, duration: 0.9, ease: "easeOut" } }),
    };
  
    return (
      <section id="integrations" className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Integrations & Architecture</h3>
            <p className="text-sm text-gray-400 max-w-2xl">
              Plug Locus into your stack — on-chain or off-chain rails, SDKs, webhooks, and reconciliation tools you already
              use. Built for engineers and finance teams.
            </p>
          </motion.div>
  
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: architecture card (big) */}
            <div className="lg:col-span-7">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border"
                style={{ borderColor: "rgba(101,205,178,0.08)", background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005))" }}
              >
                {/* header inside the card */}
                <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                  <div>
                    <div className="text-sm text-gray-300">Architecture</div>
                    <div className="text-lg font-semibold" style={{ color: ACCENT }}>
                      Secure connector — on/off-chain & ledgers
                    </div>
                  </div>
  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/8 transition"
                      aria-label="Open architecture diagram"
                    >
                      View diagram
                    </button>
                  </div>
                </div>
  
                {/* main diagram area */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    {/* Left small explanation */}
                    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="md:w-2/5">
                      <motion.h4 variants={card} className="text-base font-semibold mb-2" custom={0}>
                        How it fits in your stack
                      </motion.h4>
                      <motion.p variants={card} className="text-sm text-gray-300 mb-4" custom={1}>
                        Locus sits between your agents and payment rails: provide identities, attach policies, and reconcile with your
                        ledgers. Everything is logged for full auditability.
                      </motion.p>
  
                      <motion.div variants={card} custom={2} className="grid gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2.5 h-2.5 rounded-md" style={{ background: ACCENT }} />
                          <div className="text-sm text-gray-300">Policy engine for approvals & budgets</div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2.5 h-2.5 rounded-md" style={{ background: ACCENT }} />
                          <div className="text-sm text-gray-300">Connectors for on/off-chain providers</div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2.5 h-2.5 rounded-md" style={{ background: ACCENT }} />
                          <div className="text-sm text-gray-300">Reconciliation & export APIs</div>
                        </div>
                      </motion.div>
                    </motion.div>
  
                    {/* Right: animated svg diagram */}
                    <div className="md:w-3/5">
                      <div className="relative w-full h-56 md:h-64 lg:h-72 bg-gradient-to-b from-black/60 to-black/40 rounded-lg border border-[rgba(101,205,178,0.04)] overflow-hidden">
                        {/* SVG with nodes + animated paths */}
                        <svg viewBox="0 0 600 360" className="w-full h-full" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                          {/* background subtle grid */}
                          <defs>
                            <linearGradient id="gradAccent" x1="0" x2="1">
                              <stop offset="0%" stopColor={`${ACCENT}`} stopOpacity="0.08" />
                              <stop offset="100%" stopColor={`${ACCENT}`} stopOpacity="0.02" />
                            </linearGradient>
                          </defs>
  
                          {/* connectors (animated) */}
                          <motion.path
                            d="M120 60 C 200 20, 360 20, 460 60"
                            stroke="url(#gradAccent)"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            initial="hidden"
                            animate="show"
                            variants={diagramDraw}
                            custom={0}
                          />
                          <motion.path
                            d="M120 160 C 200 200, 360 200, 460 160"
                            stroke="url(#gradAccent)"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            initial="hidden"
                            animate="show"
                            variants={diagramDraw}
                            custom={1}
                          />
                          <motion.path
                            d="M300 80 L 300 160"
                            stroke="url(#gradAccent)"
                            strokeWidth={1.5}
                            fill="none"
                            strokeLinecap="round"
                            initial="hidden"
                            animate="show"
                            variants={diagramDraw}
                            custom={2}
                          />
  
                          {/* nodes: left (Agents) */}
                          <g>
                            <rect x="80" y="40" rx="10" ry="10" width="80" height="40" fill="rgba(255,255,255,0.02)" />
                            <text x="120" y="66" textAnchor="middle" fontSize="12" fill="white">Agents</text>
  
                            <motion.circle
                              cx="120"
                              cy="30"
                              r="5"
                              fill={ACCENT}
                              initial={{ scale: 0.8, opacity: 0.7 }}
                              animate={{ scale: [0.8, 1.15, 0.9], opacity: [0.7, 1, 0.8] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </g>
  
                          {/* center (Locus) */}
                          <g>
                            <rect x="270" y="70" rx="14" ry="14" width="120" height="80" fill="rgba(255,255,255,0.02)" stroke="rgba(101,205,178,0.06)" />
                            <text x="330" y="110" textAnchor="middle" fontSize="14" fill={ACCENT} fontWeight={600}>Locus</text>
  
                            <motion.circle
                              cx="330"
                              cy="70"
                              r="6"
                              fill={ACCENT}
                              initial={{ scale: 0.9, opacity: 0.8 }}
                              animate={{ scale: [0.9, 1.25, 1], opacity: [0.8, 1, 0.85] }}
                              transition={{ duration: 2.2, repeat: Infinity }}
                            />
                          </g>
  
                          {/* right (Payments) */}
                          <g>
                            <rect x="440" y="40" rx="10" ry="10" width="100" height="40" fill="rgba(255,255,255,0.02)" />
                            <text x="490" y="66" textAnchor="middle" fontSize="12" fill="white">Banks / On-chain</text>
  
                            <motion.circle
                              cx="490"
                              cy="30"
                              r="5"
                              fill={ACCENT}
                              initial={{ scale: 0.8, opacity: 0.7 }}
                              animate={{ scale: [0.8, 1.15, 0.9], opacity: [0.7, 1, 0.8] }}
                              transition={{ duration: 2.4, repeat: Infinity }}
                            />
                          </g>
  
                          {/* small data flow dots */}
                          <motion.circle cx="200" cy="80" r="3" fill={ACCENT} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
                          <motion.circle cx="260" cy="120" r="2.5" fill={ACCENT} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
                        </svg>
                      </div>
  
                      {/* micro caption */}
                      <div className="mt-3 text-xs text-gray-400">Connectors, adapters, and reconciliation flows — open APIs for engineering teams.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right: integrations list & logos */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* integration tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {integrations.map((it, i) => (
                  <motion.div
                    key={it.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={card}
                    custom={i}
                    onMouseEnter={() => setFocused(i)}
                    onMouseLeave={() => setFocused(null)}
                    className={`p-4 rounded-xl border bg-white/3 transition-shadow hover:shadow-xl`}
                    style={{ borderColor: "rgba(255,255,255,0.04)", backdropFilter: "blur(6px)" }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(101,205,178,0.06)" }}>
                        {it.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{it.title}</div>
                        <div className="text-xs text-gray-300">{it.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              {/* logos strip */}
              <div className="pt-2">
                <div className="text-xs text-gray-400 mb-3">Trusted by</div>
                <div className="flex flex-wrap gap-3 items-center">
                  {logos.map((l, i) => (
                    <motion.div
                      key={l}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="px-3 py-2 rounded-md bg-white/3 border border-white/6 text-sm text-gray-100"
                      style={{ backdropFilter: "blur(6px)" }}
                    >
                      {l}
                    </motion.div>
                  ))}
                </div>
              </div>
  
              {/* CTA & small note */}
              <div className="mt-auto">
                <div className="rounded-xl p-4 border bg-white/4" style={{ borderColor: "rgba(255,255,255,0.03)" }}>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: ACCENT }}>
                      <Cloud className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Ready to integrate?</div>
                      <div className="text-xs text-gray-300">Request an integration pilot or get a technical walkthrough.</div>
                    </div>
                  </div>
  
                  <div className="mt-4 flex gap-3">
                    <a href="#beta" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium">
                      Request pilot
                    </a>
                    <a href="#resources" className="text-sm text-gray-400 underline-offset-2">See docs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Modal: full-screen architecture */}
          <AnimatePresence>
            {modalOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-modal="true"
                role="dialog"
              >
                <div className="absolute inset-0 bg-black/70" onClick={() => setModalOpen(false)} />
  
                <motion.div
                  className="relative w-[95%] md:w-3/4 lg:w-2/3 rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ y: 20, opacity: 0, scale: 0.98 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.95))", border: `1px solid rgba(101,205,178,0.08)` }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xs text-gray-400">Architecture</div>
                        <div className="text-lg font-semibold" style={{ color: ACCENT }}>Locus architecture (expanded)</div>
                      </div>
                      <button onClick={() => setModalOpen(false)} className="text-sm px-3 py-1 rounded-md bg-white/5">Close</button>
                    </div>
  
                    <div className="w-full h-[480px] rounded-md border border-[rgba(255,255,255,0.03)] overflow-hidden">
                      {/* Large, more detailed svg or an image can be inserted here. For now we repeat the same lightweight diagram scaled up. */}
                      <svg viewBox="0 0 900 540" className="w-full h-full" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="gA" x1="0" x2="1">
                            <stop offset="0%" stopColor={`${ACCENT}`} stopOpacity="0.08" />
                            <stop offset="100%" stopColor={`${ACCENT}`} stopOpacity="0.02" />
                          </linearGradient>
                        </defs>
  
                        <motion.path d="M140 120 C 260 60, 540 60, 760 120" stroke="url(#gA)" strokeWidth={3} fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9 }} />
                        <motion.path d="M140 260 C 260 320, 540 320, 760 260" stroke="url(#gA)" strokeWidth={3} fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.12 }} />
  
                        <rect x="120" y="90" width="140" height="60" rx="10" fill="rgba(255,255,255,0.02)" />
                        <text x="190" y="130" textAnchor="middle" fill="white">Agents</text>
  
                        <rect x="370" y="140" width="180" height="100" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(101,205,178,0.06)" />
                        <text x="460" y="200" textAnchor="middle" fill={ACCENT} fontWeight="600">Locus</text>
  
                        <rect x="700" y="90" width="140" height="60" rx="10" fill="rgba(255,255,255,0.02)" />
                        <text x="770" y="130" textAnchor="middle" fill="white">Banks</text>
  
                        {/* small animated circles */}
                        <motion.circle cx="200" cy="70" r="6" fill={ACCENT} initial={{ scale: 0.8 }} animate={{ scale: [0.8, 1.25, 0.9] }} transition={{ duration: 2, repeat: Infinity }} />
                        <motion.circle cx="460" cy="120" r="6" fill={ACCENT} initial={{ scale: 0.9 }} animate={{ scale: [0.9, 1.15, 1] }} transition={{ duration: 2.2, repeat: Infinity }} />
                        <motion.circle cx="760" cy="70" r="6" fill={ACCENT} initial={{ scale: 0.8 }} animate={{ scale: [0.8, 1.2, 1] }} transition={{ duration: 2.4, repeat: Infinity }} />
                      </svg>
                    </div>
  
                    <div className="mt-4 text-sm text-gray-300">
                      This view is intentionally simplified — when you’re ready we’ll create a detailed diagram of the exact connectors we will provision for your pilot (bank integrations, on-chain nodes, reconciliation exports).
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
  }
