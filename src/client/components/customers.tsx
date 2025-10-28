import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  
  function LogoTile({ name } : {name: string}) {
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

export default function Customers() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
      return () => clearInterval(t);
    }, []);
  
    return (
      <section id="customers" className="relative overflow-hidden bg-gradient-to-tr from-black via-[#65cdb2]-900 to-zinc-900  text-white py-24">
        {/* Decorative blobs */}
  
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
                    className="text-[14px] md:text-xl text-[#65cdb2] leading-relaxed"
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
                className="rounded-2xl p-6 border border-white/6"
              >
                <h4 className="text-lg font-semibold text-white">Join these teams</h4>
                <p className="mt-2 text-sm text-white/70">Start a trial, get a demo, or build with our SDKs.</p>
                <div className="mt-4 flex gap-3">
                <button className="cursor-pointer relative p-2 border border-[#65cdb2] text-[14px] text-[#65cdb2] overflow-hidden group transition-colors duration-300">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Join our beta
                  </span>
                  <span className="absolute inset-0 bg-[#65cdb2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                </button>
                <button className="cursor-pointer p-2 bg-[#65cdb2] text-black text-[14px] hover:opacity-80 transition-opacity duration-300">
                  Chat with the team
                </button>
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