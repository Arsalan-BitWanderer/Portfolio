import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggleDarkMode}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      className={`rounded-full p-2 ${
        darkMode 
          ? 'bg-yellow-400 text-black' 
          : 'bg-indigo-900 text-white'
      }`}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotateY: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {darkMode ? (
          <FaSun className="h-5 w-5" />
        ) : (
          <FaMoon className="h-5 w-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 