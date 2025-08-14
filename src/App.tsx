import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import PageSlider from './components/Projects/PageSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scene3D from './components/3D/Scene3D';
import { Box } from './components/UI/motion';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="transition-colors duration-300 min-h-screen bg-transparent text-dark text-white">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }} camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene3D scrollYProgress={scrollYProgress} />
        </Suspense>
      </Canvas>
      <div className="relative z-10">
        <Navbar />
        <div id="home">
          <Box>
            <Hero />
          </Box>
        </div>
        <div id="about">
          <Box>
            <About />
          </Box>
        </div>
        <div id="skills">
          <Box>
            <Skills />
          </Box>
        </div>
        <div id="projects">
          <Box>
            <PageSlider />
          </Box>
        </div>
        <div id="contact">
          <Box>
            <Contact />
          </Box>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
