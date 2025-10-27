"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import { FAQ } from "@/components/faq";
import { HowItWorks } from "@/components/HowItWorks";
import { IntegrationsSection } from "@/components/integrations";
import { PricingBeta } from "@/components/pricingBeta";
import QuickPitchSection from "@/components/QuickPitchSection";
import Resources from "@/components/resources";
import SecurityCompliance from "@/components/security";
import Team from "@/components/team";
import Footer from "@/components/Footer";
import Customers from "@/components/customers";

type SectionKey =
  | "heroSpacer"
  | "features"
  | "quickPitch"
  | "howItWorks"
  | "integrations"
  | "pricing"
  | "customers"
  | "faq"
  | "security"
  | "team"
  | "resources"
  | "footer";

const clamp = (v: number, a = -1, b = 1) => Math.max(a, Math.min(b, v));

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = useRef<Record<SectionKey, HTMLElement | null>>({
    heroSpacer: null,
    features: null,
    quickPitch: null,
    howItWorks: null,
    integrations: null,
    pricing: null,
    customers: null,
    faq: null,
    security: null,
    team: null,
    resources: null,
    footer: null,
  });

  const order: SectionKey[] = [
    "heroSpacer",
    "features",
    "howItWorks",
    "quickPitch",
    "integrations",
    "pricing",
    "customers",
    "faq",
    "security",
    "team",
    "resources",
    "footer",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);

  // used for keyboard discrete jumps (kept)
  const animatingRef = useRef(false);
  const ANIM_MS = 700;
  const lastKnownIndexRef = useRef<number>(0);

  // ---- motion-based continuous scroll state ----
  // scrollPosition measured in "viewports" (scrollTop / viewportHeight)
  const scrollPos = useMotionValue(0);

  // For smoothness: spring the scrollPos-derived transforms a bit (avoids micro-jitter)
  const springConfig = { stiffness: 160, damping: 28 };

  // Helper: returns motion-derived style bindings for a section at index `i` (where i = its order index)
  // offset = scrollPos - i  (0 means centered; +1 means one viewport scrolled past; -1 means it is incoming from above)
  const makeSectionTransforms = (index: number) => {
    // limited offset in [-1,1] so transforms only affect near neighbors
    const rawOffset = useTransform(scrollPos, (v) => clamp(v - index, -1, 1));

    // Scale: 1 at center, reduce to 0.96 at ±1
    // stronger enlarge/reduce effect
    const scale = useTransform(rawOffset, [-1, 0, 1], [0.90, 1.045, 0.90]);
    const y = useTransform(rawOffset, [-1, 0, 1], [-60, 0, 60]); // px movement up/down
    const opacity = useTransform(rawOffset, [-1, -0.3, 0, 0.3, 1], [0.9, 0.95, 1, 0.95, 0.9]);

    // spring them slightly for smoothness
    const scaleSpring = useSpring(scale, springConfig);
    const ySpring = useSpring(y, springConfig);
    const opacitySpring = useSpring(opacity, springConfig);

    return { scale: scaleSpring, y: ySpring, opacity: opacitySpring };
  };

  // create transforms for our three overlay sections (we know their indexes in `order`)
  // heroSpacer = index 0, features = index 1, quickPitch = index 2, howItWorks = index 3
  const featuresTransforms = makeSectionTransforms(1);
  const howItWorksTransforms = makeSectionTransforms(2);
  const quickPitchTransforms = makeSectionTransforms(3);

  // ---- update scrollPos on container scroll (rAF) ----
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    const sc = scrollContainerRef.current;
    if (!sc) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const vh = sc.clientHeight || window.innerHeight;
        const val = sc.scrollTop / vh;
        scrollPos.set(val);
      });
    };

    // set initial
    onScroll();

    sc.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      sc.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollPos]);

  // ---- keep activeIndex via IntersectionObserver like before ----
  useEffect(() => {
    const sc = scrollContainerRef.current;
    if (!sc) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((en) => en.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const foundKey = (Object.keys(sectionRefs.current) as SectionKey[]).find(
          (k) => sectionRefs.current[k] === visible.target
        );
        if (!foundKey) return;
        const idx = order.indexOf(foundKey);
        if (idx !== -1) {
          setActiveIndex(idx);
          lastKnownIndexRef.current = idx;
          setShowNav(idx > 0);
        }
      },
      {
        root: sc,
        rootMargin: "0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    order.forEach((k) => {
      const el = sectionRefs.current[k];
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---- keyboard navigation (discrete jumps) kept ----
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (animatingRef.current) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        const base = lastKnownIndexRef.current;
        const next = Math.min(base + 1, order.length - 1);
        animatingRef.current = true;
        // programmatic jump — scrollIntoView to next
        const el = sectionRefs.current[order[next]];
        el?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        lastKnownIndexRef.current = next;
        window.setTimeout(() => (animatingRef.current = false), ANIM_MS + 60);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        const base = lastKnownIndexRef.current;
        const next = Math.max(base - 1, 0);
        animatingRef.current = true;
        const el = sectionRefs.current[order[next]];
        el?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        lastKnownIndexRef.current = next;
        window.setTimeout(() => (animatingRef.current = false), ANIM_MS + 60);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // helper to attach refs from JSX
  const attachRef = (key: SectionKey) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el;
  };

  // Everything else (layout) preserved
  return (
    <div className="w-full h-screen overflow-hidden relative bg-black text-white font-inter">
      <ParticleBackground />

      {/* Navigation */}
      <div
        aria-hidden={!showNav}
        className={`fixed left-0 right-0 top-0 z-50 transform transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showNav ? "translate-y-0 opacity-100 blur-0" : "-translate-y-full opacity-0 blur-sm"
        }`}
      >
        <Navigation />
      </div>

      {/* HERO: fixed under content */}
      <section id="hero" className="fixed inset-0 z-10">
        <HeroSection />
      </section>

      {/* SCROLLABLE CONTENT:
          - removed mandatory scroll-snap so scroll is continuous (we map scroll -> transforms)
          - overscroll-behavior prevents scroll chaining
      */}
      <div
        ref={scrollContainerRef}
        className="absolute inset-0 z-20 overflow-y-auto"
        style={{
          WebkitOverflowScrolling: "touch",
          overscrollBehavior: "none",
          // keep native smooth behavior for programmatic jumps (keyboard)
          scrollBehavior: "smooth",
        }}
      >
        {/* Spacer equals hero height */}
        <div
          ref={attachRef("heroSpacer")}
          className="w-full"
          style={{ height: "100vh" }}
        />

        {/* FEATURES (sticky overlay) */}
        <section
          ref={attachRef("features")}
          id="features"
          className="sticky top-0 z-30 h-screen px-4 md:px-8 flex items-center justify-center"
        >
          <motion.div
            style={{
              y: featuresTransforms.y,
              scale: featuresTransforms.scale,
              opacity: featuresTransforms.opacity,
              transformOrigin: "center center",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="w-full max-w-6xl">
              <FeaturesSection />
            </div>
          </motion.div>
        </section>

        <section
          ref={attachRef("howItWorks")}
          id="howItWorks"
          className="sticky top-0 z-40 h-screen px-4 md:px-8 flex items-center justify-center"
        >
          <motion.div
            style={{
              y: howItWorksTransforms.y,
              scale: howItWorksTransforms.scale,
              opacity: howItWorksTransforms.opacity,
              transformOrigin: "center center",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="w-full max-w-6xl">
              <HowItWorks />
            </div>
          </motion.div>
        </section>

        {/* QUICK PITCH (sticky overlay) - moved after HowItWorks */}
        <section
          ref={attachRef("quickPitch")}
          id="quickPitch"
          className="sticky top-0 z-50 h-screen px-4 md:px-8 flex items-center justify-center"
        >
          <motion.div
            style={{
              y: quickPitchTransforms.y,
              scale: quickPitchTransforms.scale,
              opacity: quickPitchTransforms.opacity,
              transformOrigin: "center center",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="w-full max-w-6xl">
              <QuickPitchSection />
            </div>
          </motion.div>
        </section>

        {/* Remaining normal sections */}
        <section ref={attachRef("integrations")} id="integrations" className="relative z-60">
          <IntegrationsSection />
        </section>

        <section ref={attachRef("pricing")} id="pricing" className="relative z-60">
          <PricingBeta />
        </section>

        <section ref={attachRef("customers")} id="customers" className="relative z-60">
          <Customers />
        </section>

        <section ref={attachRef("faq")} id="faq" className="relative z-60">
          <FAQ />
        </section>

        <section ref={attachRef("team")} id="team" className="relative z-60">
          <Team />
        </section>

        <section ref={attachRef("resources")} id="resources" className="relative z-60">
          <Resources />
        </section>

        <section ref={attachRef("footer")} id="footer" className="relative z-60">
          <Footer />
        </section>
      </div>
    </div>
  );
}
