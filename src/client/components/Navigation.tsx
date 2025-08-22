"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Testing Suite', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'AI Testing', href: '#advanced' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 glass-effect"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MO</span>
            </div>
            <span className="ml-3 text-sm font-semibold">Mobile Operator</span>
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
              <button className="gradient-bg px-4 py-2 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity">
                Get Started
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
                  className="block px-3 py-2 text-xs text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
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
