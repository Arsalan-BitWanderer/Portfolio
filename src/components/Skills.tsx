import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from './UI/Typewriter';
import TextHoverEffect from './UI/TextHoverEffect';

const skills = [
  { name: "JavaScript", icon: "js" },
  { name: "React", icon: "react" },
 // { name: "Vue", icon: "vue" },
  { name: "Node", icon: "node" },
  { name: "WordPress", icon: "wordpress" },
  { name: "PHP", icon: "php" },
  { name: "SASS", icon: "sass" },
  { name: "CSS3", icon: "css3" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "HTML5", icon: "html5" },
  { name: "Git", icon: "git" },
  //{ name: "Super-powers", icon: "superpowers" },
 // { name: "Visual Studio", icon: "visualstudio" },
  { name: "Figma", icon: "figma" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-transparent text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <TextHoverEffect>Skills & Experience</TextHoverEffect>
          </h2>
          <Typewriter
            text="The main area of my expertise is front end development (client side of the web). HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress"
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            delay={1}
          />
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="text-center w-28"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.1, y: -10 }}
            >
              <div className="bg-gray-800 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <i className={`fab fa-${skill.icon} text-5xl text-purple-400`}></i>
              </div>
              <h3 className="mt-4 font-medium">
                <TextHoverEffect>{skill.name}</TextHoverEffect>
              </h3>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-400">
            Visit my{" "}
            <a
              href="https://www.linkedin.com/in/mohd-arsal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              LinkedIn
            </a>{" "}
            for more details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
