import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextHoverEffect from '../UI/TextHoverEffect';
import './projects.css';

const PageSlider = () => {
  const [[active, direction], setActive] = useState([0, 0]);

  const slides = [
    {
      content: (
        <div style={{ width: '100%', maxWidth: 900, textAlign: 'center', margin: '0 auto' }}>
          <h3 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1, color: '#fff' }}>
            <TextHoverEffect>Portfolio &<br />Previous Projects</TextHoverEffect>
          </h3>
          <p style={{ fontSize: '1.5rem', marginBottom: '36px', color: '#e5e7eb', fontWeight: 500 }}>
            I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site, please{' '}
            <a
              href="#contact"
              style={{ color: '#ffb347', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid #ffb347', transition: 'text-decoration 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              contact me!
            </a>
            .
          </p>
          <button
            style={{
              margin: '0 auto',
              display: 'block',
              background: 'none',
              color: '#a020f0',
              fontWeight: 700,
              fontSize: '1.5rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: 'none',
              outline: 'none',
              padding: 0,
              transition: 'color 0.2s',
              textAlign: 'center',
            }}
            onClick={() => goTo(1)}
          >
            See Projects <span style={{ fontWeight: 900, fontSize: '1.7rem', verticalAlign: 'middle', marginLeft: '8px' }}>&#8594;</span>
          </button>
        </div>
      ),
      bg: 'transparent',
    },
    {
      content: (
        <div className="project-slide">
          <div className="project-content">
            <h2><TextHoverEffect>Financial Services Website</TextHoverEffect></h2>
            <h1><TextHoverEffect>DafinIT</TextHoverEffect></h1>
            <p>Professional financial services site with responsive design and Vite optimization.</p>
            <p>Built with: React, TypeScript, Tailwind CSS, Vite. Deployed on Vercel (CI).</p>
            <p>Features: Service pages (Fund Accounts, Fund Administration, GP Accounts), Leadership/Careers/Contact, type-safe architecture, proprietary financial content management, built-in chatbot integration.</p>
            <div className="project-links">
              <a href="https://github.com/Arsalan-BitWanderer" target="_blank" rel="noopener noreferrer">View the code</a>
              <a href="https://github.com/Arsalan-BitWanderer" target="_blank" rel="noopener noreferrer">Visit the app</a>
            </div>
          </div>
          <div className="project-mockup">
            <video
              src="/videos/dafinit.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
              aria-hidden="true"
            />
          </div>
        </div>
      ),
      bg: 'transparent',
    },
    {
      content: (
        <div className="project-slide">
          <div className="project-content">
            <h2><TextHoverEffect>Food Delivery WebApp</TextHoverEffect></h2>
            <h1><TextHoverEffect>React.js · Node.js · MongoDB</TextHoverEffect></h1>
            <p>Full‑stack app with restaurant browsing, cart, and real‑time order tracking. Frontend in React (Vite), backend in Node/Express with MongoDB.</p>
            <p>Auth: Secure JWT plus OAuth2 social login.</p>
            <p>Features: Responsive UI (Tailwind CSS, Framer Motion), admin dashboard for restaurants/menus, payment & order processing, MongoDB schemas for restaurants/menus/orders.</p>
            <div className="project-links">
              <a href="https://github.com/Arsalan-BitWanderer" target="_blank" rel="noopener noreferrer">View the code</a>
              <a href="https://github.com/Arsalan-BitWanderer" target="_blank" rel="noopener noreferrer">Visit the app</a>
            </div>
          </div>
          <div className="project-mockup">
            <video
              src="/videos/food-delivery.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
              aria-hidden="true"
            />
          </div>
        </div>
      ),
      bg: 'transparent',
    },
  ];

  const goTo = (idx: number) => {
    setActive([idx, idx > active ? 1 : -1]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="expo-slider">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={active}
          className="expo-slide"
          style={{ background: slides[active].bg }}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        >
          {slides[active].content}
        </motion.div>
      </AnimatePresence>
      <div className="expo-pagination">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`expo-dot${i === active ? ' active' : ''}`}
            onClick={() => goTo(i)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default PageSlider;
