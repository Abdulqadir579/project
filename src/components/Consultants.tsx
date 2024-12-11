import React from 'react';
import { motion } from 'framer-motion';
import { ConsultantCard } from './ConsultantCard';
import { consultants } from '../data/consultants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export function Consultants() {
  return (
    <div id="consultants" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Consultants</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of qualified nurses and healthcare professionals are here to guide you through your international nursing journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {consultants.map((consultant, index) => (
            <ConsultantCard key={consultant.name} consultant={consultant} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}