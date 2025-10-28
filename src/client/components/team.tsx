
import { motion } from "framer-motion";
import Image from "next/image";
import Founder1 from "../../../public/Founder1.jpg"
import Founder2 from "../../../public/Founder2.jpg"

  const members = [
    {
      name: "Cole Dermott",
      role: "Founder",
      bio: "I like moving money.",
      link: "#",
      image: Founder1
    },
    {
      name: "Eliot Lee",
      role: "Founder",
      bio: "I like building agents.",
      link: "#",
      image: Founder2
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
  
  export default function Team() {
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
    return (
      <section id="team" className="relative overflow-hidden bg-black text-white py-20">
        {/* decorative blobs */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06, rotate: 10 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute left-[-8%] top-0 w-[420px] h-[420px] rounded-full bg-black blur-3xl"
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center"
          >
            {members.map((m) => {
              m.name
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
                      <div className="absolute -inset-0.5 rounded-full blur-sm opacity-60" />
                      {/* <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-zinc-800/50 to-black/50 text-2xl font-bold">{initials}</div> */}
                      <Image src={m.image} className="rounded-[100]" alt="founder image"/>
                    </div>
                  </motion.div>
  
                  <div className="mt-2 font-semibold text-lg">{m.name}</div>
                  <div className="text-xs text-zinc-300">{m.role}</div>
  
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
            <button className="cursor-pointer relative p-2 border border-[#65cdb2] text-[12px] text-[#65cdb2] overflow-hidden group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Join our beta
              </span>
              <span className="absolute inset-0 bg-[#65cdb2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            </button>
          </div>
        </div>
      </section>
    );
  }
