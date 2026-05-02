'use client';

import { motion } from 'framer-motion';

const resumeHref = '/resume/Chanchal_Maity_Resume.pdf';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-6 grid gap-6 sm:mb-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Chanchal
              </span>
              <span className="text-cyan-300">.</span>
            </h3>
            <p className="mb-3 text-sm text-gray-400 sm:mb-4 sm:text-base">
              AI-native full-stack and mobile product engineer building real app systems across mobile, backend,
              realtime, payments, maps, and IoT.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm text-green-400">Available for product engineering roles</span>
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
              {['Home', 'Apps', 'Projects', 'About', 'Experience', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 transition-colors hover:text-cyan-300"
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
              {['React Native', 'Next.js', 'Node.js', 'MongoDB', 'Socket.IO', 'Python', 'Flutter', 'Bootstrap'].map((tech) => (
                <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-3 text-base font-semibold text-white sm:mb-4 sm:text-lg">Resume</h4>
            <p className="mb-4 text-sm leading-6 text-gray-400">
              Download my latest CV with experience, education, best-fit roles, and flagship product work.
            </p>
            <a
              href={resumeHref}
              download="Chanchal_Maity_Resume.pdf"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Download My CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            Copyright 2026 Chanchal Maity. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
