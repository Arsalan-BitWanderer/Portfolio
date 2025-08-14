import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from './UI/Typewriter';
import TextHoverEffect from './UI/TextHoverEffect';

const About = () => {
  return (
    <section id="about" className="py-28 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
              <TextHoverEffect>Hi, I'm Arsalan</TextHoverEffect>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-8">
              <TextHoverEffect>Web Developer</TextHoverEffect>
            </h3>
            <Typewriter
              text="Full Stack Developer / React JS, Next JS / .Net Core "
              className="text-lg text-gray-400 leading-relaxed"
              delay={2}
            />
          </motion.div>
          <div className="text-lg text-gray-400 leading-relaxed space-y-4">
            <Typewriter
              text="Professionally connected with the web development industry."
              delay={3}
            />
            <Typewriter
              text="Problem solver, well-organised person, loyal employee with high attention to detail."
              delay={4}
            />
            <Typewriter
              text="Fan of Boxing, outdoor activities, video games, and coding of course."
              delay={5}
            />
            <Typewriter
              text="Interested in the entire frontend spectrum and working on ambitious projects with interesting people."
              delay={6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
