'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.9]);
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.9, 0.7]);
  const navbarPadding = useTransform(scrollY, [0, 100], [16, 8]);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ 
        scale: navbarScale,
        opacity: navbarOpacity
      }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl backdrop-blur-lg z-50 rounded-2xl border shadow-2xl transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/60 border-slate-700/30' 
          : 'bg-slate-900/90 border-slate-700/50'
      }`}
    >
      <motion.div 
        style={{ padding: navbarPadding }}
        className="px-6"
      >
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`font-bold text-white transition-all duration-300 ${
              scrolled ? 'text-xl' : 'text-2xl'
            }`}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ChaNchaL
            </span>
            <span className="text-purple-400">.</span>
          </motion.div>

          <div className="hidden md:flex space-x-1">
            {['Home', 'Apps', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (0.1 * index), duration: 0.6 }}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 rounded-xl group ${
                  scrolled ? 'px-3 py-1 text-sm' : 'px-4 py-2'
                }`}
              >
                <span className="relative z-10">{item}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`md:hidden text-white bg-purple-600/20 rounded-lg backdrop-blur-sm transition-all duration-300 ${
              scrolled ? 'p-1.5' : 'p-2'
            }`}
          >
            <div className="transition-transform duration-300">
              {isOpen ? '✕' : '☰'}
            </div>
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden mt-4 space-y-2 border-t border-slate-700/50 pt-4"
          >
            {['Home', 'Apps', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-purple-600/20 transition-all duration-300"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}