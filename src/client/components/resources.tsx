import React, { useEffect, useRef, useState, useId, useMemo  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, ShieldCheck, ChevronLeft, ChevronRight, Cpu, Cloud, Database, Link, CheckCircle, FileText, ChevronDown, BookOpen, Link as LinkIcon  } from "lucide-react";
const ACCENT = "#65cdb2";

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

export default function Resources({ items = DEFAULT_RESOURCES }) {
    const [query, setQuery] = useState("");
    const filtered = useMemo(
      () => items.filter((it) => it.title.toLowerCase().includes(query.toLowerCase()) || it.desc.toLowerCase().includes(query.toLowerCase())),
      [items, query]
    );
  
    return (
      <section id="resources" className="bg-black text-white py-20">
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
