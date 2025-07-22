import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaMobile, FaRobot, FaShoppingCart, FaCut } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Invoice Management System",
      description: "A comprehensive invoice management solution built with .NET and React. Features include invoice generation, payment tracking, and financial reporting.",
      icon: <FaDesktop />,
      technologies: [".NET", "React", "SQL", "REST API"],
      category: "Web Application"
    },
    {
      title: "Salon Management App",
      description: "A mobile application for salon management with features like appointment booking, customer management, and service tracking.",
      icon: <FaMobile />,
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      category: "Mobile App"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      icon: <FaShoppingCart />,
      technologies: [".NET", "React", "SQL", "Stripe"],
      category: "Web Application"
    },
    {
      title: "AI Email Responder",
      description: "An intelligent email automation system that uses AI to analyze and respond to customer inquiries automatically.",
      icon: <FaRobot />,
      technologies: ["Python", "AI/ML", "Email API", "NLP"],
      category: "AI Project"
    },
    {
      title: "Salon Website UI/UX",
      description: "Modern and responsive website design for a salon business, focusing on user experience and conversion optimization.",
      icon: <FaCut />,
      technologies: ["UI/UX Design", "React", "Tailwind CSS", "Figma"],
      category: "UI/UX Design"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and projects across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-4xl text-primary mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-dark px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-primary font-medium">{project.category}</span>
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
            Each project represents a unique challenge and solution, showcasing my ability to work across different technologies
            and domains while maintaining high standards of quality and user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 