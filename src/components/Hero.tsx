import React, { useEffect, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import the 3D Model
import Scene3D from './3D/Scene3D';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(".hero-bg", // Animate background
      {
        scale: 1.2,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 0.8,
        duration: 2,
        scrollTrigger: {
          trigger: "#home",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    );
    gsap.to(".hero-bg", {
      yPercent: -20,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#home",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero-3d", {
      rotationY: 360,
      duration: 5,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="hero-bg absolute inset-0 bg-image"
          style={{
            backgroundImage: `url('/images/herobg-hd.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
            filter: 'blur(3px)',
            transform: 'scale(1.2)'
          }}
        >
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Full Stack Developer & UI/UX Designer
            </h1>
            <p
              ref={textRef}
              className="text-xl mb-8 text-gray-300"
            >
              Crafting beautiful, responsive, and user-friendly applications with modern technologies
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="border-2 border-primary text-white hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </div>

          {/* Right Content - 3D Model */}
          <div className="relative hero-3d">
            <Suspense fallback={<div>Loading...</div>}>
              <Scene3D />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
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
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;