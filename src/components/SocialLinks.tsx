import React from 'react';
import { Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@OverseasNurseSolutions',
    icon: <Youtube className="h-5 w-5" />,
    color: 'hover:text-red-600'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@overseasnursesolutions',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    color: 'hover:text-black'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/overseasnursesolutions',
    icon: <Instagram className="h-5 w-5" />,
    color: 'hover:text-pink-600'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/overseasnursesolutions/',
    icon: <Facebook className="h-5 w-5" />,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/OverseasNurseSolutions',
    icon: <ExternalLink className="h-5 w-5" />,
    color: 'hover:text-green-600'
  }
];

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 transition-colors ${link.color}`}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}