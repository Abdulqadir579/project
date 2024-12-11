import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="/logo.png" 
        alt="Overseas Nurse Solutions" 
        className="h-16 w-auto object-contain p-2 rounded-lg"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          console.error('Logo failed to load');
        }}
      />
    </div>
  );
}