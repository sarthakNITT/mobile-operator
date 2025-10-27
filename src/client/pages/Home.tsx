"use client"

import React, { useEffect, useRef, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import VideoSection from "@/components/VideoSection";
import AdvancedSection from "@/components/AdvancedSection";
import Footer from "@/components/Footer";

export default function Home() {
  const featuresRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Observe features for 1% visibility
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e && e.intersectionRatio >= 0.01) {
          setShowNav(true);
        }
      },
      { threshold: [0, 0.01] }
    );

    // Observe hero for nearly-full visibility (when user is back at top)
    const heroObserver = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e) {
          if (e.intersectionRatio >= 0.99) {
            setShowNav(false);
          }
        }
      },
      { threshold: [0.5, 0.75, 0.99] }
    );

    if (featuresRef.current) featuresObserver.observe(featuresRef.current);
    if (heroRef.current) heroObserver.observe(heroRef.current);

    return () => {
      featuresObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-black text-white font-inter overflow-x-hidden scroll-snap-container relative">
      <ParticleBackground />

      {/* Navigation with smoother animation and slight delay */}
      <div
        aria-hidden={!showNav}
        className={`fixed left-0 right-0 top-0 z-50 transform transition-all duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          showNav
            ? "translate-y-0 opacity-100 blur-0"
            : "-translate-y-full opacity-0 blur-sm"
        }`}
      >
        <Navigation />
      </div>

      {/* Place refs on wrapper elements so IntersectionObserver can find them */}
      <section ref={heroRef} id="hero" className="min-h-screen snap-start">
        <HeroSection />
      </section>

      <section ref={featuresRef} id="features" className="min-h-screen snap-start">
        <FeaturesSection />
      </section>

      <section id="video" className="">
        <VideoSection />
      </section>

      <Footer />
    </div>
  );
}
