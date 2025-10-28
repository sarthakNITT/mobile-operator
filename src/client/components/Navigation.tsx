"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LocusLogo from "../../../public/locusLogo.svg"
import Image from 'next/image';

export default function Navigation({ onNavigate }: { onNavigate?: (id: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Features', href: '#' },
    { name: 'How It Works', href: '#howItWorks' },
    { name: 'Pitch', href: '#quickPitch' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Customers', href: '#customers' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Team', href: '#team' }
  ];

  return (
    <motion.nav 
      className="flex items-center justify-center top-0 w-full z-50 glass-effect"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <a href='#hero'><Image src={LocusLogo}  alt='locus logo' width={120} /></a>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="text-xs text-gray-300 hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
              <button className="cursor-pointer relative p-2 border border-[#65cdb2] text-[12px] text-[#65cdb2] overflow-hidden group transition-colors duration-300">
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Join our beta
                </span>
                <span className="absolute inset-0 bg-[#65cdb2] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              </button>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  onNavigate?.(item.href);
                }}
                className="text-xs ..."
              >
                {item.name}
              </a>
            ))}
              <button 
                className="w-full mt-2 gradient-bg px-4 py-2 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
