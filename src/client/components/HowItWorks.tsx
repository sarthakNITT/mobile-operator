import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
const ACCENT = "#65cdb2";

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
  
  export function HowItWorks() {
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
      <section id="how" className="relative scroll-snap-section text-white py-10 mx-20 rounded-3xl 
      bg-black border border-white/10 backdrop-blur-md transition-all duration-500 
      shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_15px_60px_rgba(255,255,255,0.25)] 
      scale-[1.02]">
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
                              <p className="text-[14px] text-gray-300 mt-2">{STEPS[index].body}</p>
  
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
                <p className="text-gray-400 mb-6 text-[14px]">
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
                <button className="cursor-pointer relative p-2 border border-[#65cdb2] text-[12px] text-[#65cdb2] overflow-hidden group transition-colors duration-300">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Request early access
                  </span>
                  <span className="absolute inset-0 bg-[#65cdb2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </button>
                <button className="cursor-pointer p-2 bg-[#65cdb2] text-black text-[12px] hover:opacity-80 transition-opacity duration-300">
                  See Integrations
                </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }
