import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaMobile, FaBrain } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Experience {
  icon: JSX.Element;
  title: string;
  description: string;
}

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Reset the refs array
  cardsRef.current = [];

  // Add elements to the refs array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // GSAP animations
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });

    // Animate cards with stagger
    gsap.from(cardsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      delay: 0.5
    });
  }, []);

  useEffect(() => {
    gsap.to("#about", {
      yPercent: -20,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.from(".card", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".card-container",
        start: "top center",
        end: "bottom bottom",
        scrub: true
      }
    });
  }, []);

  const experiences: Experience[] = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description: "Expert in building scalable web applications using React.js and .NET framework. Specialized in creating robust backend systems and intuitive frontend interfaces."
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Certified UI/UX designer with a keen eye for creating beautiful, user-friendly interfaces. Focus on modern design principles and user-centered development."
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Certified app developer with expertise in React Native and Flutter. Creating cross-platform mobile applications with native-like performance."
    },
    {
      icon: <FaBrain />,
      title: "AI & Automation",
      description: "Working on cutting-edge AI projects including email responders, call agents, and automation solutions. Leveraging AI to create intelligent systems."
    }
  ];

  // Parallax effect for cards
  const parallaxEffect = (e: React.MouseEvent<HTMLElement>) => {
    const cards = cardsRef.current;
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    cards.forEach((card, index) => {
      const depth = 20 * (index + 1);
      const moveX = mouseX * depth;
      const moveY = mouseY * depth;

      gsap.to(card, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: "power2.out"
      });
    });
  };

  return (
    <section
      id="about"
      onMouseMove={parallaxEffect}
      className="py-20 bg-darkbg text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            About Me
          </h2>
          <p
            ref={textRef}
            className="text-xl max-w-3xl mx-auto text-gray-300"
          >
            I'm a passionate full-stack developer with expertise in web development, mobile applications, and AI solutions.
            My journey in software development has equipped me with a diverse skill set that allows me to create comprehensive solutions.
          </p>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 card-container">
      {experiences.map((exp, index) => (
        <div
          key={index}
          ref={addToRefs}
          className="card p-6 rounded-xl shadow-lg transition-all card-hover transform bg-darkcard text-white hover:glow"
        >
              <div className="text-4xl text-primary mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
              <p className="text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            With a strong foundation in both frontend and backend development, I bring a holistic approach to every project.
            My experience in UI/UX design ensures that the applications I build are not only functional but also provide an exceptional user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;