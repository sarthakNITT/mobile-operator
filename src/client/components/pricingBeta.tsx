import React, { useEffect, useRef, useState, useId, useMemo  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, ShieldCheck, ChevronLeft, ChevronRight, Cpu, Cloud, Database, Link, CheckCircle, FileText, ChevronDown, BookOpen, Link as LinkIcon  } from "lucide-react";
const ACCENT = "#65cdb2";

export function PricingBeta(): JSX.Element {
    const [email, setEmail] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement | null>(null);
  
    // useEffect(() => {
    //   emailRef.current?.focus();
    // }, []);
  
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