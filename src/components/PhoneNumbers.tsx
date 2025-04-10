import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const phoneNumbers = [
  {
    number: '+971 55 151 0873',
    country: 'UAE',
    flag: '🇦🇪',
    whatsapp: '971551510873',
  },
  {
    number: '+971 6 536 3255',
    country: 'UAE (Landline)',
    flag: '🇦🇪',
    whatsapp: '971551510873',
  },
  {
    number: '+1 (901) 656-4891',
    country: 'USA',
    flag: '🇺🇸',
    whatsapp: '19016564891',
  },
  {
    number: '+1 (706) 523-0031',
    country: 'USA',
    flag: '🇺🇸',
    whatsapp: '17065230031',
  },
];

export function PhoneNumbers() {
  return (
    <div className="space-y-4">
      {phoneNumbers.map((phone) => (
        <div key={phone.number} className="flex items-center justify-between group">
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-primary-600 mr-4" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{phone.country}</span>
                <span className="text-xl">{phone.flag}</span>
              </div>
              <a href={`tel:${phone.number}`} className="text-gray-900 hover:text-primary-600">
                {phone.number}
              </a>
            </div>
          </div>
          <a
            href={`https://wa.me/${phone.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition-colors p-2 rounded-full hover:bg-green-50"
            title="Contact on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      ))}
    </div>
  );
}
