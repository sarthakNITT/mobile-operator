"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const ACCENT = "#65cdb2";

const FEATURES = [
  {
    title: "Autonomous Agent Payments",
    description:
      "Agents evolve into independent actors that need secure access to funds to operate in B2B ecosystems.",
  },
  {
    title: "Current Payment Rails Limitations",
    description:
      "Traditional rails were built for humans — they can’t enforce policies or audit autonomous actors reliably.",
  },
  {
    title: "Policy-Driven Controls",
    description:
      "Tie agents to budgets, permissions, and approval flows so every transaction is auditable and compliant.",
  },
  {
    title: "Safe & Auditable Transactions",
    description:
      "All transactions run through a policy engine for full traceability, reconciliation, and compliance.",
  },
];

export default function FeaturesSection(): JSX.Element {
  const [index, setIndex] = useState(0);
  const maxIndex = FEATURES.length - 1;

  // lazy-play state for video iframe (improves page perf)
  const [videoPlaying, setVideoPlaying] = useState(false);

  // autoplay / pause handling
  const [isPaused, setIsPaused] = useState(false);
  const autoRef = useRef<number | null>(null);

  // swipe support
  const stageRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // auto-advance
  useEffect(() => {
    if (isPaused) return;
    autoRef.current = window.setInterval(() => {
      setIndex((s) => (s >= maxIndex ? 0 : s + 1));
    }, 6000);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [isPaused, maxIndex]);

  // swipe handlers for mobile
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const handleStart = (e: TouchEvent) => (startX.current = e.touches[0].clientX);
    const handleEnd = (e: TouchEvent) => {
      if (startX.current == null) return;
      const dx = e.changedTouches[0].clientX - startX.current;
      startX.current = null;
      if (dx > 40) prev();
      if (dx < -40) next();
    };
    el.addEventListener("touchstart", handleStart);
    el.addEventListener("touchend", handleEnd);
    return () => {
      el.removeEventListener("touchstart", handleStart);
      el.removeEventListener("touchend", handleEnd);
    };
  }, []);

  const next = () => setIndex((s) => (s >= maxIndex ? 0 : s + 1));
  const prev = () => setIndex((s) => (s <= 0 ? maxIndex : s - 1));

  // reactionary progress percentage — used for progress bar animation
  const progress = ((index + 1) / (maxIndex + 1)) * 100;

  return (
    <section id="features" className="relative scroll-snap-section bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Why agents need <span style={{ color: ACCENT }}>Locus</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="text-sm text-gray-400 max-w-xl"
            >
              Built for the next generation of AI agents — secure, auditable, and policy-first.
            </motion.p>
          </div>

          {/* compact header arrows */}
          <div className="ml-auto flex gap-3 items-center">
            <button
              onClick={prev}
              aria-label="previous feature"
              className="hidden md:inline-flex items-center justify-center bg-white/4 hover:bg-white/6 border border-white/8 text-white rounded-full p-2 shadow-sm transition"
              title="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              aria-label="next feature"
              className="hidden md:inline-flex items-center justify-center bg-white/4 hover:bg-white/6 border border-white/8 text-white rounded-full p-2 shadow-sm transition"
              title="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main stage */}
        <div
          ref={stageRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Left: visual panel */}
          <div className="md:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-2xl md:max-w-[720px] h-[420px] md:h-[520px] relative">
              {/* top-left accent circle */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute -left-12 -top-8 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background: `linear-gradient(180deg, ${ACCENT}33 0%, ${ACCENT}14 100%)`,
                  filter: "blur(30px)",
                }}
              />

              {/* device / visual wrapper */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative z-10 mx-auto w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-[rgba(101,205,178,0.10)]"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005))" }}
              >
                {/* VIDEO: aspect-video ensures correct aspect ratio on all screens */}
                <div className="w-full h-full flex items-center justify-center bg-transparent relative">
                  {/* If user hasn't clicked 'play' yet we show a lightweight placeholder + play button */}
                  {!videoPlaying ? (
                    <button
                      onClick={() => setVideoPlaying(true)}
                      aria-label="Play demo"
                      className="absolute inset-0 flex items-center justify-center group"
                      title="Play demo"
                    >
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <div
                          className="rounded-full p-4 md:p-6 flex items-center justify-center"
                          style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.03)` }}
                        >
                          <Play className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div className="text-sm text-gray-200">See Locus in action. Click to play the video</div>
                      </div>
                    </button>
                  ) : (
                    <div className="absolute inset-0">
                      {/* Use aspect-video to preserve 16:9 and ensure iframe covers container */}
                      <div className="w-full h-full aspect-video">
                        <iframe
                          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7386653514535710720?compact=1"
                          title="Embedded demo"
                          className="w-full h-full block border-0"
                          style={{ background: "transparent" }}
                          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Policy chip — compacted and cleaner */}
                <motion.div
                  className="absolute -bottom-7 right-6 w-36 md:w-44 h-12 md:h-14 rounded-md shadow-md flex items-center justify-center gap-3 px-3"
                  initial={{ y: 40, opacity: 0, rotate: -6 }}
                  whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.12 }}
                  style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(255,255,255,0.03)` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENT }} />
                  <span className="text-[11px] text-gray-200">Policy • Budget • Audit</span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right: content card */}
          <div className="md:col-span-6">
            <div className="space-y-6">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-white/3 border border-white/6 rounded-xl p-6 md:p-8"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: ACCENT }}>
                  {FEATURES[index].title}
                </h3>

                <p className="text-sm text-gray-300 mb-6">{FEATURES[index].description}</p>

                <div className="flex items-center gap-4">
                  <a
                    href="#beta"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium shadow-sm transform-gpu hover:-translate-y-0.5 transition"
                  >
                    Get early access
                  </a>

                  <a href="#integrations" className="text-sm text-gray-400 hover:text-white underline-offset-2">
                    Learn more
                  </a>
                </div>
              </motion.div>

              {/* dots + index */}
              <div className="flex items-center gap-3">
                {FEATURES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to feature ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-white" : "bg-white/10"}`}
                  />
                ))}

                <div className="ml-auto text-sm text-gray-400">{index + 1}/{FEATURES.length}</div>
              </div>

              {/* small progress bar to indicate auto-advance */}
              <div className="w-full h-1 bg-white/8 rounded-full overflow-hidden mt-2">
                <div
                  className="h-1 rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                    transition: "width 600ms linear",
                  }}
                />
              </div>
            </div>
          </div>

          {/* large overlay arrows (mobile + desktop) */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <button
              onClick={prev}
              aria-label="previous"
              className="pointer-events-auto ml-2 md:ml-6 bg-white/5 hover:bg-white/8 text-white rounded-full p-3 md:p-4 transition shadow"
              title="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              aria-label="next"
              className="pointer-events-auto mr-2 md:mr-6 bg-white/5 hover:bg-white/8 text-white rounded-full p-3 md:p-4 transition shadow"
              title="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* decorative bottom accent */}
        <div className="mt-12 w-full flex justify-center">
          <div style={{ width: 140, height: 2, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />
        </div>
      </div>
    </section>
  );
}
