import React from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  overlayOpacity?: string;
}

export function VideoBackground({ overlayOpacity = "95" }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br from-primary-900/${overlayOpacity} via-primary-800/90 to-primary-700/85 z-10`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80"
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/855111120/rendition/720p/file.mp4?loc=external&signature=4f0368b1b3f3ef5f76f4fac2c3c0c19f4c7a834c3157f32da92ad7b015b76ddd"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}