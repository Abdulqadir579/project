import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const countries = [
  {
    name: 'United States',
    license: 'NCLEX',
    description: 'Complete NCLEX-RN examination and state board licensing support',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80',
    features: [
      'NCLEX-RN Exam Preparation',
      'State Board Application',
      'Credential Evaluation',
      'CGFNs Processing'
    ]
  },
  {
    name: 'United Kingdom',
    license: 'NMC',
    description: 'UK Nursing and Midwifery Council registration assistance',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80',
    features: [
      'CBT & OSCE Training',
      'NMC Registration',
      'English Language Test',
      'Adaptation Program'
    ]
  },
  {
    name: 'UAE - Dubai',
    license: 'DHA',
    description: 'Dubai Health Authority licensing and registration process',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
    features: [
      'DHA Assessment',
      'Prometric Exam Prep',
      'License Processing',
      'DataFlow Verification'
    ]
  },
  {
    name: 'UAE - Abu Dhabi',
    license: 'DOH',
    description: 'Department of Health Abu Dhabi registration support',
    image: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?auto=format&fit=crop&q=80',
    features: [
      'DOH Registration',
      'Pearson Vue Exam',
      'Document Attestation',
      'Good Standing Certificate'
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Countries() {
  return (
    <div id="countries" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Countries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert guidance for nursing registration across major healthcare destinations, ensuring your successful transition to international practice
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {countries.map((country, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                <img 
                  src={country.image} 
                  alt={country.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-primary-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">{country.name}</h3>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-500 text-white">
                    {country.license}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{country.description}</p>
                <ul className="space-y-2">
                  {country.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}