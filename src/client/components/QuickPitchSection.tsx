"use client";

import { motion } from "framer-motion";
const ACCENT = "#65cdb2";

// ---------- Quick Pitch / Key Stats ----------
export default function QuickPitchSection() {
  const stats = [
    { label: "Closed beta", value: "Invite only", hint: "Apply" },
    { label: "Integrations", value: "Bank rails & Webhooks", hint: "SDKs" },
    { label: "Audit", value: "Immutable logs", hint: "Exportable" },
  ];

  return (
    <section
      id="quick-pitch"
      className="relative scroll-snap-section text-white py-10 mx-20 rounded-3xl 
      bg-black border border-white/10 backdrop-blur-md transition-all duration-500 
      shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_15px_60px_rgba(255,255,255,0.25)] 
      scale-[1.02]"
      aria-labelledby="quick-pitch-title"
    >
      {/* Decorative faint grid & radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(101,205,178,0.06) 0px, transparent 160px), linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0))",
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
                    style={{ background: ACCENT, boxShadow: `0 0 10px ${ACCENT}55` }}
                  />
                  <span className="text-gray-300">YC F25</span>
                </span>

                <span
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "linear-gradient(90deg, rgba(101,205,178,0.06), rgba(101,205,178,0.02))",
                    border: "1px solid rgba(101,205,178,0.08)",
                  }}
                >
                  <span className="text-[13px]" style={{ color: ACCENT, fontWeight: 650 }}>
                    Closed beta
                  </span>
                  <span className="text-xs text-gray-400">Invite only</span>
                </span>
              </div>

              <h3 id="quick-pitch-title" className="text-3xl md:text-4xl font-bold leading-tight">
                We make your agents <span style={{ color: ACCENT }}>pay</span>.
              </h3>

              <p className="mt-4 text-gray-300 max-w-2xl text-[14px] md:text-base leading-relaxed">
                Connect agents to funds with policy-first controls — auditable, secure, and enterprise-ready.
                Give agents identities, attach budgets and approvals, and watch every transaction stay
                traceable and reconciled with your existing finance stack.
              </p>

              {/* CTA row */}
              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <button className="cursor-pointer relative p-2 border border-[#65cdb2] text-[14px] text-[#65cdb2] overflow-hidden group transition-colors duration-300">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Request early access
                  </span>
                  <span className="absolute inset-0 bg-[#65cdb2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </button>
                <button className="cursor-pointer p-2 bg-[#65cdb2] text-black text-[14px] hover:opacity-80 transition-opacity duration-300">
                  Request demo
                </button>

                <div className="ml-3 text-xs text-gray-400 hidden sm:inline">No credit card required</div>
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
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="flex items-center justify-between gap-4 rounded-xl p-4 md:p-5"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                      border: "1px solid rgba(255,255,255,0.04)",
                      boxShadow: "0 6px 22px rgba(0,0,0,0.6)",
                    }}
                    aria-hidden={false}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex items-center justify-center rounded-md w-12 h-12 shrink-0"
                        style={{
                          background: `linear-gradient(180deg, ${ACCENT}20, ${ACCENT}08)`,
                          border: `1px solid rgba(101,205,178,0.12)`,
                        }}
                      >
                        {/* simple icon — three stacked lines */}
                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <rect x="0" y="1" width="26" height="3" rx="1.5" fill={ACCENT} opacity="0.95" />
                          <rect x="0" y="7.5" width="18" height="3" rx="1.5" fill={ACCENT} opacity="0.6" />
                          <rect x="0" y="14" width="10" height="3" rx="1.5" fill={ACCENT} opacity="0.35" />
                        </svg>
                      </div>

                      <div>
                        <div className="text-xs text-gray-400">{s.label}</div>
                        <div className="mt-1 text-sm md:text-base font-semibold" style={{ color: ACCENT }}>
                          {s.value}
                        </div>
                        <div className="mt-1 text-xs text-gray-400">{s.hint}</div>
                      </div>
                    </div>

                    {/* subtle chevron / affordance */}
                    <div className="text-gray-400 text-xs hidden sm:block">→</div>
                  </motion.div>
                ))}

                {/* small trust line */}
                <div className="mt-2 text-xs text-gray-400 px-2">
                  <span className="text-gray-400">Trusted by early adopters • </span>
                  <span style={{ color: ACCENT, fontWeight: 600 }}>Closed beta</span>
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
            className="h-[1px] bg-gradient-to-r from-transparent to-[rgba(101,205,178,0.9)] via-[rgba(101,205,178,0.6)] w-36"
          />
        </div>
      </div>
    </section>
  );
}