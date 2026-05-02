'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Apps', href: '#apps' },
  { label: 'AI-Native', href: '#ai-native' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const resumeHref = '/resume/Chanchal_Maity_Resume.pdf';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      const next = window.scrollY > 50;
      setScrolled((prev) => (prev === next ? prev : next));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrolled);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrolled();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className={`fixed left-1/2 z-50 w-[95.5%] max-w-7xl -translate-x-1/2 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 transform-gpu origin-top will-change-transform ${
        scrolled
          ? 'top-1 scale-[0.965] border-white/8 bg-slate-950/38 shadow-slate-950/18 md:top-2'
          : 'top-2 scale-100 border-white/15 bg-slate-950/82 shadow-slate-950/45 md:top-4'
      }`}
    >
      <div className={`px-4 transition-all duration-300 sm:px-6 ${scrolled ? 'py-2.5' : 'py-3'}`}>
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="text-xl font-black tracking-tight text-white sm:text-2xl">
            <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Chanchal
            </span>
            <span className="text-cyan-300">.</span>
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.04, duration: 0.35 }}
                whileHover={{ y: -2 }}
                className="rounded-xl px-2.5 py-2 text-xs font-semibold text-slate-300 transition-colors duration-300 hover:bg-cyan-300/10 hover:text-white xl:px-3 xl:text-sm"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={resumeHref}
              download="Chanchal_Maity_Resume.pdf"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + navItems.length * 0.04, duration: 0.35 }}
              whileHover={{ y: -2 }}
              className="ml-2 rounded-xl bg-cyan-300 px-3.5 py-2 text-xs font-black text-slate-950 transition-colors hover:bg-cyan-200 xl:text-sm"
            >
              Download CV
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-xl border border-white/10 bg-white/8 px-4 py-2 text-sm font-bold text-white lg:hidden"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 grid gap-2 border-t border-white/10 pt-4 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-cyan-300/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeHref}
              download="Chanchal_Maity_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950 hover:bg-cyan-200"
            >
              Download My CV
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
