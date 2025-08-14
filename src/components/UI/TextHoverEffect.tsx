import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TextHoverEffectProps {
  children: React.ReactNode;
}

const TextHoverEffect: React.FC<TextHoverEffectProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block cursor-pointer overflow-hidden"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isHovered ? '-100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex flex-col"
      >
        <span className="block transition-opacity duration-300">{children}</span>
        <span className="absolute top-full left-0 w-full transition-opacity duration-300">
          {children}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default TextHoverEffect;
