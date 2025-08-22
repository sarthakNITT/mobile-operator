"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    title: "Crash Detection",
    description: "Advanced AI algorithms detect potential crash scenarios before they impact users. Real-time monitoring across all device configurations.",
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Performance Analytics",
    description: "Deep performance insights with memory usage, CPU optimization, and battery impact analysis. Identify bottlenecks instantly.",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Automated Testing",
    description: "Smart test case generation and execution. Our AI creates comprehensive test scenarios based on user behavior patterns.",
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  },
  {
    title: "Cross-Platform Support",
    description: "Test across iOS, Android, and hybrid platforms simultaneously. Ensure consistent experience across all devices and OS versions.",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
  }
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, features.length - 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-16 relative scroll-snap-section" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Testing Suite</h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Our AI analyzes your mobile app's behavior patterns to deliver comprehensive testing coverage
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Navigation Arrows - Show on both mobile and desktop */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 rounded-full p-2 transition-all duration-300"
            disabled={currentIndex === 0}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 rounded-full p-2 transition-all duration-300"
            disabled={currentIndex >= maxIndex}
            initial={{ opacity: 0, x: 10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Cards Container */}
          <div ref={ref} className="overflow-hidden mx-6 md:mx-12">
            <motion.div 
              className="flex gap-4 md:gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1))}%)`
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  className="feature-card flex-shrink-0 w-full md:w-1/3"
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 h-full hover:border-gray-700 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`w-3 h-3 ${feature.color} rounded-full mr-3`}></div>
                      <h3 className="text-base md:text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400 mb-6">
                      {feature.description}
                    </p>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="rounded-lg w-full h-32 object-cover opacity-80" 
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <motion.div 
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
