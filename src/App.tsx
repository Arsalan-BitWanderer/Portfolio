import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './index.css';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.8,
        class: 'is-reveal'
      });

      // Refresh Locomotive Scroll when the component unmounts
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    
      <div
        className="transition-colors duration-300 min-h-screen bg-darkbg text-dark text-white"
        data-scroll-container
        ref={scrollRef}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    
  );
}

export default App;