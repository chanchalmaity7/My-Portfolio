'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">About Me</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-purple-600">CM</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Senior Full Stack Developer</h3>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-green-400 font-semibold">Available for Freelance Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span className="text-blue-400 font-semibold">3+ Years Professional Experience</span>
              </div>
            </div>
            <p className="text-lg mb-6">
              Hi! I&apos;m Chanchal Maity, a seasoned Full Stack Developer with <span className="text-purple-400 font-semibold">3+ years</span> of professional experience. 
              I specialize in building enterprise-grade web and mobile applications using the MERN stack with TypeScript.
            </p>
            <p className="text-lg mb-6">
              My expertise lies in architecting scalable, high-performance applications with clean code practices. 
              I have successfully delivered <span className="text-purple-400 font-semibold">15+ client projects</span> ranging from e-commerce platforms to complex business management systems.
            </p>
            <p className="text-lg mb-6">
              Proficient in modern development workflows including CI/CD, cloud deployment, and agile methodologies. 
              I excel at translating business requirements into robust technical solutions.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="bg-purple-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">Senior Developer</span>
              <span className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">MERN Expert</span>
              <span className="bg-green-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">React Native</span>
              <span className="bg-orange-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">TypeScript Pro</span>
              <span className="bg-indigo-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">Cloud Deploy</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}