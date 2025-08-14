import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import TextHoverEffect from './UI/TextHoverEffect';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 transition-colors duration-300 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <h1 className="text-3xl font-black uppercase text-white">
              <TextHoverEffect>Arsalan</TextHoverEffect>
            </h1>
          </motion.div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg font-bold uppercase tracking-widest text-white cursor-pointer"
              >
                <TextHoverEffect>{item.name}</TextHoverEffect>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
