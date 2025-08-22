"use client"
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative scroll-snap-section" id="hero">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-content"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI-Powered Mobile
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              {' '}Testing Revolution
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 mb-8 max-w-2xl mx-auto">
            Automate your mobile app testing with advanced AI. Detect crashes, optimize performance, 
            and ensure quality across all devices before your users do.
          </p>
          <button className="gradient-bg px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
