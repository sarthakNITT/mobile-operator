import React, { useEffect, useRef, useState, useId, useMemo  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, ShieldCheck, ChevronLeft, ChevronRight, Cpu, Cloud, Database, Link, CheckCircle, FileText, ChevronDown, BookOpen, Link as LinkIcon  } from "lucide-react";
const ACCENT = "#65cdb2";

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
  
  export default function SecurityCompliance() {
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
                              <CheckCircle size={16} className="text-white/90" />
                            </motion.div>
                          </div>
  
                          <div>
                            <div className="font-medium text-[13px]">{it.title}</div>
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