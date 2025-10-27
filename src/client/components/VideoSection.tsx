"use client";

import React, { useEffect, useRef, useState, useId, useMemo  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, ShieldCheck, ChevronLeft, ChevronRight, Cpu, Cloud, Database, Link, CheckCircle, FileText, ChevronDown, BookOpen, Link as LinkIcon  } from "lucide-react";
const ACCENT = "#65cdb2";

// ---------- Quick Pitch / Key Stats ----------
// QuickPitchSection (themed)
export function QuickPitchSection(): JSX.Element {
  const stats = [
    { label: "Closed beta", value: "Invite only", hint: "Apply" },
    { label: "Integrations", value: "Bank rails & Webhooks", hint: "SDKs" },
    { label: "Audit", value: "Immutable logs", hint: "Exportable" },
  ];

  return (
    <section
      id="quick-pitch"
      className="bg-surface text-white relative overflow-hidden py-16"
      aria-labelledby="quick-pitch-title"
    >
      {/* Decorative faint grid & radial accent using theme vars */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, var(--accent-20) 0px, transparent 160px), linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0))",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: headline + sub + CTAs */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ background: "var(--site-accent)", boxShadow: "0 0 10px rgba(101,205,178,0.33)" }}
                  />
                  <span className="text-muted">YC F25</span>
                </span>

                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "linear-gradient(90deg, var(--accent-20), rgba(101,205,178,0.02))",
                    border: "1px solid var(--accent-12)",
                  }}
                >
                  <span className="text-[13px] text-accent" style={{ fontWeight: 650 }}>
                    Closed beta
                  </span>
                  <span className="text-xs text-muted">Invite only</span>
                </span>
              </div>

              <h3 id="quick-pitch-title" className="text-3xl md:text-4xl font-bold leading-tight">
                We make your agents <span className="text-accent">pay</span>.
              </h3>

              <p className="mt-4 text-muted max-w-2xl text-sm md:text-base leading-relaxed">
                Connect agents to funds with policy-first controls — auditable, secure, and enterprise-ready.
                Give agents identities, attach budgets and approvals, and watch every transaction stay
                traceable and reconciled with your existing finance stack.
              </p>

              {/* CTA row */}
              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <motion.a
                  whileHover={{ translateY: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href="#beta"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-md accent-pill font-medium shadow-sm"
                  aria-label="Request early access"
                >
                  Request early access
                </motion.a>

                <motion.a
                  whileHover={{ opacity: 0.9 }}
                  href="#demo"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md btn-outline text-sm text-muted"
                  style={{ borderColor: "var(--white-12)" }}
                >
                  See demo
                </motion.a>

                <div className="ml-3 text-xs text-muted hidden sm:inline">No credit card required</div>
              </div>
            </motion.div>
          </div>

          {/* Right: glossy stat cards */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.04 }}
            >
              <div className="grid grid-cols-1 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="flex items-center justify-between gap-4 rounded-xl p-4 md:p-5 bg-card border border-card"
                    style={{
                      boxShadow: "0 6px 22px rgba(0,0,0,0.45)",
                    }}
                    aria-hidden={false}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex items-center justify-center rounded-md w-12 h-12 shrink-0"
                        style={{
                          background: "linear-gradient(180deg, var(--accent-20), var(--accent-12))",
                          border: "1px solid var(--white-12)",
                        }}
                      >
                        {/* simple icon — three stacked lines */}
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <rect x="0" y="1" width="26" height="3" rx="1.5" fill="var(--site-accent)" opacity="0.95" />
                          <rect x="0" y="7.5" width="18" height="3" rx="1.5" fill="var(--site-accent)" opacity="0.6" />
                          <rect x="0" y="14" width="10" height="3" rx="1.5" fill="var(--site-accent)" opacity="0.35" />
                        </svg>
                      </div>

                      <div>
                        <div className="text-xs text-muted">{s.label}</div>
                        <div className="mt-1 text-sm md:text-base font-semibold text-accent">{s.value}</div>
                        <div className="mt-1 text-xs text-muted">{s.hint}</div>
                      </div>
                    </div>

                    {/* subtle chevron / affordance */}
                    <div className="text-muted text-xs hidden sm:block">→</div>
                  </motion.div>
                ))}

                {/* small trust line */}
                <div className="mt-2 text-xs text-muted px-2">
                  <span className="text-muted">Trusted by early adopters • </span>
                  <span className="text-accent font-semibold">Closed beta</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* decorative underline / flourish */}
        <div className="mt-8 flex items-center justify-start">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
            className="h-[1px] w-36"
          >
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--site-accent), transparent)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}



// ---------- How it works (3 steps) ----------
const STEPS = [
  {
    id: "identity",
    title: "Give agents identities",
    body: "Create cryptographic identities for autonomous actors — unique keys, roles, metadata, and scoped credentials.",
    Icon: User,
  },
  {
    id: "policy",
    title: "Attach policies & budgets",
    body: "Bind agents to policy groups with budgets, destination controls and approval flows — enforceable in runtime.",
    Icon: Wallet,
  },
  {
    id: "execute",
    title: "Execute & audit",
    body: "Every transaction is authorized by policy, recorded immutably, and reconciled with your ledger.",
    Icon: ShieldCheck,
  },
];

export function HowItWorks(): JSX.Element {
  const [index, setIndex] = useState(0);
  const maxIndex = STEPS.length - 1;
  const autoRef = useRef<number | null>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((s) => (s <= 0 ? maxIndex : s - 1));
      if (e.key === "ArrowRight") setIndex((s) => (s >= maxIndex ? 0 : s + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [maxIndex]);

  useEffect(() => {
    // auto-advance unless hovered
    if (autoRef.current) window.clearInterval(autoRef.current);
    autoRef.current = window.setInterval(() => {
      if (!isHovering.current) setIndex((s) => (s >= maxIndex ? 0 : s + 1));
    }, 6000);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [maxIndex]);

  const go = (i: number) => setIndex(i);
  const next = () => setIndex((s) => (s >= maxIndex ? 0 : s + 1));
  const prev = () => setIndex((s) => (s <= 0 ? maxIndex : s - 1));

  // motion variants
  const cardVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.4 } },
  };

  return (
    <section id="how" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: visual + timeline */}
          <div className="lg:col-span-6 w-full lg:w-1/2 relative">
            <div
              className="rounded-2xl overflow-hidden border border-[rgba(101,205,178,0.08)] shadow-2xl"
              onMouseEnter={() => (isHovering.current = true)}
              onMouseLeave={() => (isHovering.current = false)}
            >
              <div className="relative bg-black/70 p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-6">
                {/* Left vertical timeline */}
                <div className="flex-none flex flex-col items-center md:items-start md:pr-6">
                  <div className="flex flex-col items-center space-y-6">
                    {STEPS.map((s, i) => {
                      // extract Icon for this iteration
                      const Icon = s.Icon;
                      return (
                        <div key={s.id} className="flex items-center flex-col md:flex-row gap-3">
                          <button
                            onClick={() => go(i)}
                            aria-label={`Go to ${s.title}`}
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform ${i === index ? "scale-105 shadow-lg" : "opacity-80"}`}
                            style={{
                              background: i === index ? ACCENT : "rgba(255,255,255,0.03)",
                              border: i === index ? `1px solid rgba(0,0,0,0.06)` : "1px solid rgba(255,255,255,0.03)",
                            }}
                          >
                            <Icon className="w-5 h-5 text-black" />
                          </button>

                          {/* vertical connector */}
                          <div className="hidden md:block h-12 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-2" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: live mock / visual */}
                <div className="flex-1 flex items-center justify-center">
                  <div
                    className="w-full max-w-[520px] h-[320px] md:h-[360px] relative rounded-xl overflow-hidden"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.006))",
                      border: `1px solid rgba(101,205,178,0.06)`,
                    }}
                  >
                    {/* subtle animated background shapes */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="absolute inset-0" aria-hidden>
                      <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                        <defs>
                          <linearGradient id="lg" x1="0" x2="1">
                            <stop offset="0" stopColor="rgba(101,205,178,0.08)" />
                            <stop offset="1" stopColor="rgba(101,205,178,0.02)" />
                          </linearGradient>
                        </defs>
                        <rect x="0" y="0" width="800" height="600" fill="transparent" />

                        {/* Animated blobs */}
                        <motion.circle
                          cx="140"
                          cy="120"
                          r="90"
                          style={{ fill: "url(#lg)" }}
                          initial={{ r: 50 }}
                          animate={{ r: 110 }}
                          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.circle
                          cx="520"
                          cy="420"
                          r="60"
                          style={{ fill: "rgba(255,255,255,0.02)" }}
                          initial={{ r: 40 }}
                          animate={{ r: 72 }}
                          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
                        />
                      </svg>
                    </motion.div>

                    {/* content that changes per step */}
                    <div className="relative z-10 w-full h-full p-6 flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div key={STEPS[index].id} variants={cardVariant} initial="hidden" animate="visible" exit="exit" className="w-full h-full flex flex-col md:flex-row items-center gap-4">
                          {/* extract current Icon into a local variable and use it */}
                          <div className="flex-none w-20 h-20 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.02)" }}>
                            {(() => {
                              const CurrentIcon = STEPS[index].Icon;
                              return <CurrentIcon className="w-8 h-8 text-white/90" />;
                            })()}
                          </div>

                          <div className="flex-1">
                            <h4 className="text-lg font-semibold" style={{ color: ACCENT }}>
                              {STEPS[index].title}
                            </h4>
                            <p className="text-sm text-gray-300 mt-2">{STEPS[index].body}</p>

                            {/* miniature timeline / badges */}
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="text-xs bg-white/3 px-3 py-1 rounded-full">SDKs: Node · Python</span>
                              <span className="text-xs bg-white/3 px-3 py-1 rounded-full">Webhooks</span>
                              <span className="text-xs bg-white/3 px-3 py-1 rounded-full">Audit logs</span>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* small controls under visual */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={prev} aria-label="previous" className="bg-white/4 px-3 py-2 rounded-md">
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button onClick={next} aria-label="next" className="bg-white/4 px-3 py-2 rounded-md">
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="text-sm text-gray-400 ml-3">
                  {index + 1}/{STEPS.length}
                </div>
              </div>

              <div className="w-48 md:w-64 h-2 bg-white/6 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${((index + 1) / STEPS.length) * 100}%`,
                    background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: expanded content & CTA */}
          <div className="lg:col-span-6 w-full lg:w-1/2">
            <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-3xl font-bold mb-4">How Locus connects agents to funds</h3>
              <p className="text-gray-400 mb-6">
                From identity to execution, Locus provides a policy-first control plane for agentic payments. Define what agents can do — and be confident every payment is auditable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STEPS.map((s, i) => {
                  const BtnIcon = s.Icon;
                  return (
                    <motion.button
                      key={s.id}
                      onClick={() => go(i)}
                      className={`flex items-start gap-4 p-4 rounded-xl text-left transition-shadow ${i === index ? "bg-white/6 shadow-lg border border-white/8" : "bg-white/3"}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ background: i === index ? ACCENT : "rgba(255,255,255,0.02)" }}>
                        <BtnIcon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{s.title}</div>
                        <div className="text-xs text-gray-300 mt-1">{s.body}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-4">
                <a href="#beta" className="px-5 py-3 rounded-md bg-white text-black font-semibold">
                  Request early access
                </a>
                <a href="#integrations" className="px-5 py-3 rounded-md border border-white/8 text-white">
                  See integrations
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



// ---------- Integrations & Architecture ----------
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


// ---------- Security & Compliance ----------

const headingVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const listContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const listItem = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 14 } },
};

export function SecurityCompliance() {
  const items = [
    {
      title: "End-to-end encryption",
      desc: "AES-256 + TLS 1.3 across transport and at rest",
    },
    { title: "Immutable audit logs", desc: "Append-only storage with export tooling" },
    { title: "Role-based access & approvals", desc: "Fine-grained RBAC + approval flows" },
    { title: "Enterprise SSO (SAML / OIDC)", desc: "Just-in-time provisioning & SCIM" },
  ];

  return (
    <section id="security" className="relative overflow-hidden bg-gradient-to-br from-[#030311] via-[#071027] to-[#081023] text-white py-20">
      {/* Decorative blurred blobs */}
      <div className="pointer-events-none absolute -right-20 -top-16 w-96 h-96 opacity-20 blur-3xl" style={{ background: `radial-gradient(circle at 30% 30%, ${ACCENT}, transparent 30%)` }} />
      <div className="pointer-events-none absolute -left-28 bottom-0 w-80 h-80 opacity-10 blur-2xl" style={{ background: `radial-gradient(circle at 70% 70%, #7C83FF, transparent 30%)` }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.header initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
          <motion.h3 variants={headingVariant} className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            Security & Compliance
          </motion.h3>

          <motion.h2 variants={headingVariant} className="text-3xl md:text-4xl font-extrabold leading-tight">
            Enterprise-grade security, built for founders who sleep at night.
            <span className="block text-sm mt-3 font-medium text-gray-300">Audit-ready controls, cryptographic protections, and compliance tooling.</span>
          </motion.h2>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <motion.div className="lg:col-span-2 bg-white/6 backdrop-blur-sm border border-white/6 rounded-2xl p-8 shadow-lg relative overflow-hidden" initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="absolute -left-10 -top-10 w-32 h-32 rounded-full opacity-5" style={{ background: `conic-gradient(${ACCENT}, transparent 40%)` }} />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-md bg-black/40 border border-white/8">
                <ShieldCheck size={28} />
              </div>

              <div>
                <h4 className="text-lg font-semibold">Built for enterprise risk teams</h4>
                <p className="text-sm text-gray-300 mt-2">Policies, approvals, and immutable logs keep your business in control of automated spend. We partner on SOC2 & PCI onboarding when you need it.</p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.ul variants={listContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
                    {items.map((it, idx) => (
                      <motion.li key={it.title} variants={listItem} className="flex items-start gap-3 bg-black/30 rounded-lg p-3 border border-white/4">
                        <div className="flex-shrink-0 mt-1">
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0.8 }}
                            animate={{ scale: [1, 1.08, 1], rotate: [0, -6, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3 }}
                            className="w-9 h-9 rounded-md bg-gradient-to-tr from-white/6 to-white/12 flex items-center justify-center"
                            aria-hidden
                          >
                            <CheckCircle size={18} className="text-white/90" />
                          </motion.div>
                        </div>

                        <div>
                          <div className="font-medium">{it.title}</div>
                          <div className="text-xs text-gray-400 mt-1">{it.desc}</div>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 text-xs bg-white/6 border border-white/6 rounded-full py-1.5 px-3">
                    <FileText size={14} />
                    SOC 2 ready
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs bg-white/6 border border-white/6 rounded-full py-1.5 px-3">PCI-DSS</span>
                  <span className="inline-flex items-center gap-2 text-xs bg-white/6 border border-white/6 rounded-full py-1.5 px-3">ISO 27001</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-400">Retention, export tooling, and policy templates included for enterprise plans.</div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-gradient-to-br from-black/60 to-white/4 border border-white/6 flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-400">Audit-ready</div>
                <div className="text-3xl font-bold" style={{ color: ACCENT }}>Full logs</div>
                <div className="text-xs text-gray-400 mt-1">Retention & export tooling included</div>
              </div>

              <div className="ml-4">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, ease: "linear", duration: 18 }} className="w-20 h-20 rounded-full bg-gradient-to-tr from-white/6 to-white/12 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/6">
                    <ShieldCheck size={22} />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="w-full mt-4 grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="text-xs text-gray-400">Retention</div>
                <div className="font-semibold">7 years</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-400">Exports</div>
                <div className="font-semibold">CSV / JSON</div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Small callout */}
        <div className="mt-8 flex items-center gap-3 text-sm text-gray-300">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
          <div>Need a custom compliance pack? Our enterprise success team helps with SOC2 & PCI onboarding.</div>
        </div>

        {/* Respect reduced motion */}
        <AnimatePresence>
          {/* empty - framer motion used above; presence wrapper allows graceful unmount if used in app-level transitions */}
        </AnimatePresence>
      </div>
    </section>
  );
}


// ---------- Pricing / Beta Access (lead capture) ----------
export function PricingBeta(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const validateEmail = (value: string) => {
    // Simple but practical email check
    const re = /^(?:[^@\s]+)@(?:[^@\s]+)\.[^@\s]+$/;
    return re.test(value.trim());
  };

  const submit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      emailRef.current?.focus();
      return;
    }

    try {
      setIsSubmitting(true);

      // placeholder: integrate with your API/analytics here
      // await fetch('/api/beta', { method: 'POST', body: JSON.stringify({ email, company }) })
      console.log("beta sign up", { email, company });

      // simulate network
      await new Promise((r) => setTimeout(r, 650));

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong — please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const confettiPieces = Array.from({ length: 18 }).map((_, i) => ({ id: i }));

  return (
    <section id="beta" className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-zinc-900 text-white py-24">
      {/* decorative gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.05, x: -40 }}
          animate={{ scale: 1.05, opacity: 0.14, x: 0 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute left-[-10%] top-[-10%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-400 blur-3xl opacity-60"
        />

        <motion.div
          initial={{ scale: 1.05, opacity: 0.05, x: 40 }}
          animate={{ scale: 0.95, opacity: 0.12, x: 10 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute right-[-8%] bottom-[-12%] w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-cyan-400 via-sky-600 to-indigo-700 blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Closed beta — priority access for builders</h2>
            <p className="text-gray-300 max-w-2xl text-lg">
              We’re inviting product teams building infra, tools, and platform primitives. Apply for early access — approved teams get hands-on onboarding,
              priority support, and a dedicated channel with the team.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/10">✓</span>
                <span>Priority onboarding with a product engineer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/10">✓</span>
                <span>Early feature flags & feedback channel</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <div className="relative">
              <motion.form
                onSubmit={submit}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/6 backdrop-blur-sm border border-white/8 rounded-2xl p-5 shadow-lg"
                aria-labelledby="beta-form-heading"
              >
                <h3 id="beta-form-heading" className="text-lg font-semibold mb-1">
                  Request an invite
                </h3>
                <p className="text-xs text-gray-300 mb-3">We’ll only use your email to contact you about the beta.</p>

                <div className="flex flex-col gap-3">
                  <label className="sr-only" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    ref={emailRef}
                    type="email"
                    inputMode="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={!!error}
                    aria-describedby={error ? "email-error" : undefined}
                    required
                    className="w-full px-3 py-3 rounded-md bg-white/5 border border-white/8 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-offset-0 focus:ring-indigo-400"
                  />

                  <label className="sr-only" htmlFor="company">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company (optional)"
                    className="w-full px-3 py-3 rounded-md bg-white/5 border border-white/8 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-offset-0 focus:ring-indigo-400"
                  />

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 text-black shadow-md hover:scale-[1.02] active:scale-100 transition-transform"
                    >
                      <motion.span whileTap={{ scale: 0.96 }}>Request invite</motion.span>
                    </button>
                  </div>

                  <div className="min-h-[1.4rem]">
                    {error && (
                      <div id="email-error" className="text-xs text-rose-400">
                        {error}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 text-xs text-gray-400">By applying you agree to our terms. We review every application manually.</div>
              </motion.form>

              {/* success state overlay */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center bg-gradient-to-br from-white/8 to-white/4 border border-white/6"
                    role="status"
                    aria-live="polite"
                  >
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black font-bold">
                        ✓
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white">Thanks — we received your request.</div>
                        <div className="text-sm text-gray-200">We’ll reach out if Locus is a fit for your team.</div>
                      </div>
                    </motion.div>

                    {/* confetti */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                      {confettiPieces.map((p, i) => (
                        <motion.div
                          key={p.id}
                          initial={{ y: -20, x: 0, opacity: 0 }}
                          animate={{ y: 220 + Math.random() * 80, x: (Math.random() - 0.5) * 160, opacity: 1, rotate: 360 }}
                          transition={{ delay: i * 0.03, duration: 0.9 + Math.random() * 0.6 }}
                          className={`absolute left-[50%] top-0 w-2 h-3 rounded-sm bg-gradient-to-r from-indigo-300 to-pink-300`}
                          style={{ transform: "translateX(-50%)" }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-center text-xs text-gray-500">Approved teams may be asked for a short onboarding call.</div>
      </div>
    </section>
  );
}


// ---------- Customers / Testimonials ----------
const logos2 = [
  { id: "acme", name: "Acme Inc" },
  { id: "fincorp", name: "FinCorp" },
  { id: "ledgerwise", name: "Ledgerwise" },
  { id: "marketx", name: "MarketX" },
];

const testimonials = [
  {
    quote: "Locus made it trivial to automate reimbursements securely. Our audits got simpler and faster.",
    who: "Finance Lead, Acme",
  },
  {
    quote: "Policy controls saved us weeks during our last compliance audit — outstanding UX and reliability.",
    who: "CTO, FinCorp",
  },
  {
    quote: "Integration was painless and the developer experience was delightful. Highly recommended.",
    who: "Head of Engineering, Ledgerwise",
  },
];

function LogoTile({ name }) {
  // simple SVG monogram for each partner (keeps the layout robust without assets)
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/6 backdrop-blur-sm border border-white/8 shadow-sm"
      title={name}
      aria-label={name}
    >
      <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-xs font-bold uppercase text-white/90">
        {name
          .split(" ")
          .map((s) => s[0])
          .slice(0, 2)
          .join("")}
      </div>
      <div className="text-sm font-medium text-white/90">{name}</div>
    </motion.div>
  );
}

export function Customers() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="customers" className="relative overflow-hidden py-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 opacity-30 blur-3xl transform -rotate-12" />
      <div className="pointer-events-none absolute right-[-120px] top-28 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-rose-500 to-yellow-400 opacity-20 blur-2xl" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Trusted by fast-moving teams
            </h3>
            <p className="mt-2 text-sm text-white/70 max-w-xl">
              From security-conscious finance teams to developer-first startups — used in production by
              compliant organisations around the world.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-white/60">As seen in</div>
            <div className="flex items-center gap-3">
              <div className="text-[10px] uppercase px-3 py-1 rounded-full bg-white/6 border border-white/8">Forbes</div>
              <div className="text-[10px] uppercase px-3 py-1 rounded-full bg-white/6 border border-white/8">TechCrunch</div>
            </div>
          </div>
        </motion.div>

        {/* Logo strip (responsive marquee) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mb-10"
        >
          <div className="overflow-hidden rounded-3xl py-3">
            <div className="flex gap-6 animate-marquee">
              {logos2.concat(logos2).map((l, idx) => (
                <div key={`${l.id}-${idx}`} className="min-w-[180px]">
                  <LogoTile name={l.name} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 text-xs text-white/50">Companies using Locus</div>
        </motion.div>

        {/* Testimonials + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <div className="relative bg-gradient-to-br from-white/4 to-white/2 rounded-2xl p-6 md:p-8 border border-white/6 shadow-lg">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.45 }}
                  className="text-lg md:text-xl text-white/90 leading-relaxed"
                  aria-live="polite"
                >
                  “{testimonials[index].quote}”
                  <footer className="mt-4 text-sm text-white/60">— {testimonials[index].who}</footer>
                </motion.blockquote>
              </AnimatePresence>

              {/* controls */}
              <div className="absolute right-5 bottom-5 flex items-center gap-2">
                <button
                  onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center border border-white/8 hover:scale-105"
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center border border-white/8 hover:scale-105"
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>
            </div>

            {/* dots */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/20"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right column CTA */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-indigo-600/30 to-violet-600/20 border border-white/6"
            >
              <h4 className="text-lg font-semibold text-white">Join these teams</h4>
              <p className="mt-2 text-sm text-white/70">Start a trial, get a demo, or build with our SDKs.</p>
              <div className="mt-4 flex gap-3">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-semibold shadow hover:scale-[1.02]"
                  href="#demo"
                >
                  Request demo
                </a>
                <a href="#signup" className="px-4 py-2 rounded-xl border border-white/8 text-sm text-white/90">
                  Start trial
                </a>
              </div>

              <div className="mt-4 text-xs text-white/50">Or try our quickstart in <span className="font-medium">5 minutes</span>.</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* small styles for marquee keyframes (keeps tailwind clean) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { display: flex; animation: marquee 18s linear infinite; }
      `}</style>
    </section>
  );
}


// ---------- Team & Advisors ----------
const members = [
  {
    name: "Founder 1",
    role: "CEO — ex-payments, YC F25",
    bio: "Product-led founder, previously built infra for consumer payments at scale.",
    link: "#",
  },
  {
    name: "Founder 2",
    role: "CTO — distributed systems",
    bio: "Systems-first engineer who loves low-latency, fault-tolerant architectures.",
    link: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

const float = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 3.6, ease: "easeInOut", repeat: Infinity },
  },
};

export function Team() {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section id="team" className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20">
      {/* decorative blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06, rotate: 10 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute left-[-8%] top-0 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-400 blur-3xl"
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03, rotate: -6 }}
        transition={{ duration: 1.6 }}
        className="pointer-events-none absolute right-[-10%] bottom-6 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-sky-500 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.header
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h3 className="text-sm uppercase tracking-widest text-emerald-300">Our team</h3>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">Founders driving the product</h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-zinc-300">We build with an engineering-first mindset — shipping secure, scalable systems to real customers.</p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {members.map((m) => {
            const initials = m.name
              .split(" ")
              .map((s) => s[0])
              .slice(0, 2)
              .join("");

            return (
              <motion.article
                variants={card}
                key={m.name}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg flex flex-col items-center text-center"
                aria-label={`${m.name} — ${m.role}`}
              >
                <motion.div
                  className="mb-4"
                  {...(prefersReducedMotion ? {} : float)}
                >
                  <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/6">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-400/25 to-indigo-400/20 blur-sm opacity-60" />
                    <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-zinc-800/50 to-black/50 text-2xl font-bold">{initials}</div>
                  </div>
                </motion.div>

                <div className="mt-2 font-semibold text-lg">{m.name}</div>
                <div className="mt-1 text-xs text-zinc-300">{m.role}</div>

                <p className="mt-4 text-sm text-zinc-300 line-clamp-3">{m.bio}</p>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={m.link}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-emerald-500/20 to-cyan-400/10 border border-white/6"
                    aria-label={`Open ${m.name} profile`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                    </svg>
                    View
                  </a>

                  <button
                    type="button"
                    className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-white/6 bg-white/3"
                  >
                    <span className="mr-2 text-emerald-300">●</span>
                    Available to chat
                  </button>
                </div>

                {/* subtle bottom accent */}
                <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[70%] h-6 bg-gradient-to-t from-transparent to-white/3 blur-sm" />
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <a href="#careers" className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold bg-gradient-to-r from-indigo-600 to-pink-500 shadow-md">Join us — we're hiring</a>
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
const DEFAULT_QAS = [
  { q: "Is Locus PCI compliant?", a: "We are building towards PCI/SOC2 readiness — reach out for details." },
  { q: "Which SDKs?", a: "Node, Python and Go SDKs are available in beta." },
  { q: "How do I onboard?", a: "Create an account, provision API keys, and connect via our SDKs or raw REST." },
];

const DEFAULT_RESOURCES = [
  { title: "API docs", href: "#", desc: "Reference for REST endpoints, examples and SDK usage.", icon: "api" },
  { title: "Developer guide", href: "#", desc: "Step-by-step integration tutorials and code samples.", icon: "book" },
  { title: "Security brief", href: "#", desc: "High-level security, compliance and data handling guide.", icon: "shield" },
];

function Icon({ name }) {
  switch (name) {
    case "book":
      return <BookOpen className="w-5 h-5" />;
    case "shield":
      return <ShieldCheck className="w-5 h-5" />;
    default:
      return <LinkIcon className="w-5 h-5" />;
  }
}

export function FAQ({ qas = DEFAULT_QAS, initialOpen = 0 }) {
  const [open, setOpen] = useState<number | null>(initialOpen);
  const id = useId();

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-6 mb-8">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Frequently asked</h3>
          <p className="text-sm text-gray-400 max-w-xl">Everything engineers and founders ask when evaluating an infra partner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {qas.map((qa, i) => (
            <motion.article
              key={i}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group bg-white/3 border border-white/6 rounded-2xl p-4 md:p-6 backdrop-blur-sm"
            >
              <button
                aria-expanded={open === i}
                aria-controls={`${id}-panel-${i}`}
                onClick={() => toggle(i)}
                className="w-full text-left flex items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-lg md:text-xl">
                      {qa.q}
                    </div>
                    <motion.span
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="ml-4 flex items-center text-gray-300"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    id={`${id}-panel-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.36, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 text-sm text-gray-300 leading-relaxed">
                      {qa.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-4 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500/80 shadow-sm"
                >
                  Contact sales
                </a>

                <button
                  onClick={() => navigator.clipboard?.writeText(qa.a)}
                  className="ml-auto text-xs text-gray-300 underline-offset-2 hover:underline"
                >
                  Copy answer
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Resources({ items = DEFAULT_RESOURCES }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => items.filter((it) => it.title.toLowerCase().includes(query.toLowerCase()) || it.desc.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  return (
    <section id="resources" className="bg-black/80 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-6 mb-6">
          <h3 className="text-3xl font-extrabold">Resources & docs</h3>
          <div className="text-sm text-gray-400">Search, filter and jump into docs instantly.</div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search docs, guides, security..."
              className="w-full rounded-full bg-white/5 placeholder:text-gray-400 px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">{filtered.length} results</span>
            <a href="#explore" className="text-sm font-medium underline">Explore all</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map((it, idx) => (
            <motion.a
              key={it.title}
              href={it.href}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group block rounded-2xl p-5 bg-gradient-to-br from-white/3 to-white/6 border border-white/6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/6">
                  <Icon name={it.icon} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="font-semibold">{it.title}</div>
                    <div className="text-xs text-gray-400">{idx === 0 ? "Recommended" : ""}</div>
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{it.desc}</div>
                </div>

                <div className="ml-3 flex items-center text-gray-300">
                  <ChevronDown className="w-4 h-4 transform rotate-90" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQResourcesSection(props) {
  return (
    <div>
      <FAQ {...props} />
      <Resources {...props} />
    </div>
  );
}


// ---------- Helper: AllSections (renders all new sections in order) ----------
export default function LocusAdditionalSections() {
  return (
    <>
      <QuickPitchSection />
      <HowItWorks />
      <IntegrationsSection/>
      <SecurityCompliance />
      <PricingBeta />
      <Customers />
      <Team />
      <FAQ />
      <Resources />
    </>
  );
}
