import React, { useEffect, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaDatabase, FaRobot } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeContext';

// Import the 3D Model
import Scene3D from './3D/Scene3D';

const Hero = () => {
  const { darkMode } = useTheme();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // GSAP animations
  useEffect(() => {
    if (inView && headingRef.current && textRef.current) {
      const tl = gsap.timeline();
      
      tl.from(headingRef.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
      })
      .from(textRef.current, {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: "power3.out"
      }, "-=0.6"); // Start a bit before the heading animation finishes
    }
  }, [inView]);

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Item variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center pt-16 overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-darkbg to-gray-800' 
          : 'bg-gradient-to-br from-light to-blue-50'
      }`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-20 -left-20 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 top-60 right-20 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bottom-20 left-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 
              ref={headingRef}
              className={`text-4xl md:text-6xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-dark'
              }`}
            >
              Full Stack Developer & UI/UX Designer
            </h1>
            <p 
              ref={textRef}
              className={`text-xl mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Crafting beautiful, responsive, and user-friendly applications with modern technologies
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-all"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className={`border-2 border-primary px-8 py-3 rounded-full font-medium transition-all ${
                  darkMode 
                    ? 'text-white hover:bg-primary' 
                    : 'text-primary hover:bg-primary hover:text-white'
                }`}
              >
                View Projects
              </motion.a>
            </div>
          </div>

          {/* Right Content - Skills Icons */}
          <div className="relative">
            {/* Skills Icons */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 sm:gap-8"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-5 rounded-xl shadow-lg ${
                  darkMode ? 'bg-darkcard text-white' : 'bg-white text-dark'
                }`}
              >
                <FaCode className="text-3xl sm:text-4xl text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Web Development</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>React, .NET, UI/UX</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-5 rounded-xl shadow-lg ${
                  darkMode ? 'bg-darkcard text-white' : 'bg-white text-dark'
                }`}
              >
                <FaMobileAlt className="text-3xl sm:text-4xl text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Mobile Development</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>React Native & Flutter</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-5 rounded-xl shadow-lg ${
                  darkMode ? 'bg-darkcard text-white' : 'bg-white text-dark'
                }`}
              >
                <FaDatabase className="text-3xl sm:text-4xl text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Database</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>SQL & Design</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-5 rounded-xl shadow-lg ${
                  darkMode ? 'bg-darkcard text-white' : 'bg-white text-dark'
                }`}
              >
                <FaRobot className="text-3xl sm:text-4xl text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">AI Development</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>AI Agents & Automation</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={darkMode ? 'text-white' : 'text-dark'}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 