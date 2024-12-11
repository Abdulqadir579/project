import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative pt-16 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-700/85" />
        <img
          src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80"
          alt="Nursing Professional"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary-100">
                Transform Your Nursing Career
              </span>
              <br />
              <span className="text-white">
                Go Global with Confidence
              </span>
            </h1>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              Expert assistance in processing nursing licenses for USA NCLEX, UK NMC, Dubai DHA, Abu Dhabi DOH, Australia & New Zealand. Your dream of an international nursing career is within reach.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button 
                onClick={scrollToServices}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-900 bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a 
                href="#process" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hidden md:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-4">
              <img 
                src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80"
                alt="Nursing Professional"
                className="rounded-lg shadow-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
                alt="Healthcare Team"
                className="absolute -bottom-12 -right-12 w-2/3 rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}