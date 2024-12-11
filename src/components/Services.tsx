import React from 'react';
import { Stethoscope, GraduationCap, FileCheck, Globe2, Award, Users, BookOpen, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Stethoscope className="h-8 w-8 text-primary-600" />,
    title: 'License Processing',
    description: 'Complete assistance with nursing license applications for multiple countries',
    features: ['Document Verification', 'Application Support', 'Status Tracking']
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary-600" />,
    title: 'Exam Preparation',
    description: 'Comprehensive preparation support for NCLEX, NMC, DHA, and other nursing exams',
    features: ['Study Materials', 'Mock Tests', 'One-on-One Coaching']
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary-600" />,
    title: 'Document Verification',
    description: 'Professional handling of document verification and attestation processes',
    features: ['Authentication', 'Translation', 'Legal Verification']
  },
  {
    icon: <Globe2 className="h-8 w-8 text-primary-600" />,
    title: 'Global Placement',
    description: 'Assistance in finding nursing positions in your desired country',
    features: ['Job Search', 'Interview Prep', 'Visa Support']
  },
  {
    icon: <Award className="h-8 w-8 text-primary-600" />,
    title: 'Career Development',
    description: 'Ongoing support for your nursing career growth and advancement',
    features: ['Skills Assessment', 'Career Planning', 'Professional Development']
  },
  {
    icon: <Users className="h-8 w-8 text-primary-600" />,
    title: 'Community Support',
    description: 'Connect with other nurses and build your professional network',
    features: ['Peer Network', 'Success Stories', 'Knowledge Sharing']
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary-600" />,
    title: 'Language Training',
    description: 'Specialized language courses for healthcare professionals',
    features: ['Medical Terminology', 'Communication Skills', 'Country-Specific Training']
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary-600" />,
    title: 'Settlement Services',
    description: 'Comprehensive support for your relocation and settlement needs',
    features: ['Housing Assistance', 'Banking Setup', 'Local Registration']
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  return (
    <div id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support for your international nursing career journey, from license processing to successful placement
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent transform group-hover:scale-95 transition-transform duration-300" />
              <div className="relative p-8">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2" />
                      {feature}
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