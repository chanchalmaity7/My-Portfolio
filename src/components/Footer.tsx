'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-6 grid gap-6 sm:mb-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Chanchal
              </span>
              <span className="text-purple-400">.</span>
            </h3>
            <p className="mb-3 text-sm text-gray-400 sm:mb-4 sm:text-base">
              Senior Full Stack Developer specializing in modern web and mobile applications.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm text-green-400">Available for new projects</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 transition-colors hover:text-purple-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'React Native', 'Flutter'].map((tech) => (
                <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2026 Chanchal Maity. All rights reserved. Built with Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
