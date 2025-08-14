import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from './UI/Typewriter';
import TextHoverEffect from './UI/TextHoverEffect';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="relative z-10 text-left text-white max-w-4xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase">
          <TextHoverEffect>Full-Stack Software Developer</TextHoverEffect>
        </h1>
        <Typewriter
          text="Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences."
          className="text-lg md:text-xl mt-4 max-w-2xl"
          delay={2}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
