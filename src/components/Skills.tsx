import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaDatabase, FaMobile, FaRobot, FaCode, FaPaintBrush } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      skills: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "UI/UX Design"]
    },
    {
      title: "Backend Development",
      icon: <FaCode />,
      skills: [".NET", "C#", "RESTful APIs", "Node.js", "Express.js", "MVC Architecture"]
    },
    {
      title: "Mobile Development",
      icon: <FaMobile />,
      skills: ["React Native", "Flutter", "Dart", "Mobile UI/UX", "Cross-platform Development"]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["SQL", "Database Design", "Data Modeling", "Query Optimization", "Database Management"]
    },
    {
      title: "AI & Automation",
      icon: <FaRobot />,
      skills: ["AI Agents", "Email Automation", "Call Center Automation", "Machine Learning", "AI Integration"]
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush />,
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl text-primary mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="bg-light text-dark px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I continuously update my skill set to stay current with the latest technologies and best practices in software development.
            My diverse expertise allows me to tackle complex projects and deliver high-quality solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 