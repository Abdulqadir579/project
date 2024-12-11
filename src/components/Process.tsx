import React from 'react';
import { ClipboardCheck, FileText, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-white" />,
    title: 'Document Submission',
    description: 'Submit your educational and professional credentials for initial assessment',
    details: [
      'Educational certificates',
      'Experience letters',
      'License copies',
      'Passport and photos'
    ]
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-white" />,
    title: 'Eligibility Check',
    description: 'We verify your eligibility for your chosen country\'s nursing registration',
    details: [
      'Qualification assessment',
      'Experience verification',
      'Language requirements',
      'Country-specific criteria'
    ]
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-white" />,
    title: 'Exam Preparation',
    description: 'Receive comprehensive preparation support for required licensing exams',
    details: [
      'Study materials access',
      'Practice tests',
      'One-on-one coaching',
      'Exam strategies'
    ]
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: 'License Processing',
    description: 'Complete assistance with final license application and registration',
    details: [
      'Application submission',
      'Document verification',
      'Status tracking',
      'Final registration'
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

export function Process() {
  return (
    <div id="process" className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A streamlined journey to your international nursing career, guided by our expert team every step of the way
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <div className="-rotate-45">{step.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2 w-full bg-white p-6 rounded-xl shadow-lg">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="h-4 w-4 text-primary-500 mr-2" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary-200 -z-10 transform -translate-x-8" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}