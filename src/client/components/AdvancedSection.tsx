"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  { title: "Machine Learning Test Generation", color: "bg-red-500" },
  { title: "Predictive Issue Detection", color: "bg-blue-500" },
  { title: "Automated Regression Testing", color: "bg-green-500" },
  { title: "Intelligent Test Prioritization", color: "bg-purple-500" }
];

export default function AdvancedSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 relative scroll-snap-section" id="advanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="advanced-content"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced AI Testing</h2>
            <p className="text-sm text-gray-400 mb-8">
              Our machine learning models continuously learn from your app's behavior, 
              creating smarter test cases and identifying edge cases that traditional testing misses.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="flex items-center"
                >
                  <div className={`w-2 h-2 ${feature.color} rounded-full mr-4`}></div>
                  <span className="text-sm">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="advanced-image"
          >
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="AI neural network visualization" 
              className="rounded-xl w-full opacity-80" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
