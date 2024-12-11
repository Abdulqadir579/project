import React, { useState } from 'react';
import { Award, BookOpen, GraduationCap, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Consultant } from '../types/consultant';
import { ConsultantModal } from './ConsultantModal';
import { ImageWithFallback } from './ImageWithFallback';

interface ConsultantCardProps {
  consultant: Consultant;
  index: number;
}

export function ConsultantCard({ consultant, index }: ConsultantCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`https://wa.me/${consultant.whatsappNumber}`, '_blank');
  };

  // Center the middle card on desktop
  const isMiddleCard = index === 1;
  const marginClass = isMiddleCard ? 'lg:mx-auto' : '';

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
        className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer max-w-md ${marginClass}`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-[400px] overflow-hidden">
          <ImageWithFallback
            src={consultant.image}
            alt={consultant.name}
            className="w-full h-full object-contain bg-gray-50"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4">
            <div className="px-4 text-white">
              <h3 className="text-2xl font-bold">{consultant.name}</h3>
              <p className="text-sm text-gray-200">{consultant.role}</p>
              <div className="flex items-center space-x-2 mt-1">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm">{consultant.qualifications.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-primary-600">
            <Award className="h-5 w-5" />
            <h4 className="font-semibold">Specializations</h4>
          </div>
          <ul className="space-y-2">
            {consultant.specialties.map((specialty) => (
              <li key={specialty} className="flex items-center space-x-2 text-gray-600">
                <BookOpen className="h-4 w-4" />
                <span>{specialty}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={handleContactClick}
            className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact for Guidance
          </button>
        </div>
      </motion.div>

      <ConsultantModal
        consultant={consultant}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}