import React, { useEffect, useRef, useState, useId, useMemo  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, ShieldCheck, ChevronLeft, ChevronRight, Cpu, Cloud, Database, Link, CheckCircle, FileText, ChevronDown, BookOpen, Link as LinkIcon  } from "lucide-react";
const ACCENT = "#65cdb2";

const DEFAULT_QAS = [
    { q: "Is Locus PCI compliant?", a: "We are building towards PCI/SOC2 readiness — reach out for details." },
    { q: "Which SDKs?", a: "Node, Python and Go SDKs are available in beta." },
    { q: "How do I onboard?", a: "Create an account, provision API keys, and connect via our SDKs or raw REST." },
  ];
  
  
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
  
  