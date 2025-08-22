"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "API Docs", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Changelog", href: "#" }
    ]
  },
  {
    title: "Resources", 
    links: [
      { name: "Documentation", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Support", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" }
    ]
  }
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MO</span>
              </div>
              <span className="ml-3 text-sm font-semibold">Mobile Operator</span>
            </div>
            <p className="text-xs text-gray-400 mb-6">
              Revolutionizing mobile app testing with AI-powered automation and intelligent quality assurance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xs">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xs">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xs">GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2024 Mobile Operator. All rights reserved.</p>
            <p className="text-xs text-gray-400 mt-4 md:mt-0">Built for mobile development teams worldwide</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
