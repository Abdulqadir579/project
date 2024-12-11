import React from 'react';
import { X, Award, Clock, Star, BookOpen, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Consultant } from '../types/consultant';

interface ConsultantModalProps {
  consultant: Consultant;
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultantModal({ consultant, isOpen, onClose }: ConsultantModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[10%] bottom-[10%] md:inset-x-auto md:left-1/2 md:right-auto md:top-[10%] md:-translate-x-1/2 md:w-[600px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="relative h-48 bg-primary-600">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="absolute -bottom-16 left-6 w-32 h-32">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-full h-full object-cover rounded-xl border-4 border-white shadow-lg"
                  />
                </div>
              </div>

              <div className="flex-1 px-6 pt-20 pb-6 overflow-y-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{consultant.name}</h2>
                  <p className="text-primary-600 font-medium">{consultant.role}</p>
                  <div className="flex items-center mt-2 text-gray-600">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    <span>{consultant.qualifications.join(', ')}</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                      <Award className="h-5 w-5 text-primary-600 mr-2" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {consultant.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-1" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                      <Clock className="h-5 w-5 text-primary-600 mr-2" />
                      Experience ({consultant.experience.years}+ years)
                    </h3>
                    <ul className="space-y-2">
                      {consultant.experience.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-primary-600 mt-2 mr-3" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                      <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {consultant.expertise.map((item, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}