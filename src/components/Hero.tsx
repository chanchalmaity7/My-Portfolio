'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Chanchal <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Maity</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Tech Icons */}
            <div className="flex items-center gap-3">
              <motion.div 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              >
                R
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              >
                RN
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              >
                JS
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              >
                TS
              </motion.div>
            </div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Senior Full Stack Developer
            </motion.p>
            
            <div className="flex items-center gap-3">
              <motion.div 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              >
                EX
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              >
                M
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
                className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs"
              >
                NX
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Senior Full Stack Developer with <span className="text-purple-400 font-bold">3+ years</span> of experience delivering enterprise-grade solutions. 
              Specialized in TypeScript, React ecosystem, and modern cloud architectures.
            </p>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">3+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-400">Tech Stack</div>
              </div>
            </div>
            
            {/* Floating Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'JavaScript', color: 'bg-yellow-500', icon: 'JS' },
                { name: 'TypeScript', color: 'bg-blue-600', icon: 'TS' },
                { name: 'HTML5', color: 'bg-orange-500', icon: 'H5' },
                { name: 'MongoDB', color: 'bg-green-500', icon: 'M' },
                { name: 'Express', color: 'bg-gray-600', icon: 'E' },
                { name: 'React', color: 'bg-blue-500', icon: 'R' },
                { name: 'React Native', color: 'bg-cyan-500', icon: 'RN' },
                { name: 'Flutter', color: 'bg-sky-500', icon: 'FL' },
                { name: 'Node.js', color: 'bg-green-600', icon: 'N' },
                { name: 'Next.js', color: 'bg-black', icon: 'NX' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`${tech.color} text-white px-3 py-1 rounded-full text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/projects">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
              >
                View Projects
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}