import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function ContactButtons() {
  const whatsappNumber = "971551510873"; // International format without the + symbol
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="flex items-center space-x-4">
      <a 
        href="tel:+971551510873" 
        className="flex items-center text-white hover:text-green-400 transition-colors duration-300"
      >
        <Phone className="w-4 h-4 mr-2" />
        <span className="hidden lg:inline">Contact Now</span>
      </a>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-white hover:text-green-400 transition-colors duration-300"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        <span className="hidden lg:inline">WhatsApp</span>
      </a>
    </div>
  );
}