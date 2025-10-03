'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-8 sm:pt-16 relative overflow-hidden">
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
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-1 sm:mb-2 relative z-0"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 p-1 bg-gradient-to-r from-purple-400 to-pink-400 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                <img 
                  src="/img/chanchal.jpg" 
                  alt="Chanchal Maity" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="160" height="160" fill="#374151"/>
                        <circle cx="80" cy="60" r="25" fill="#9CA3AF"/>
                        <path d="M40 140c0-22.091 17.909-40 40-40s40 17.909 40 40" fill="#9CA3AF"/>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Chanchal <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Maity</span>
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center gap-4 mb-2 sm:mb-3"
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
              className="text-lg sm:text-xl md:text-2xl text-gray-300"
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
            className="mb-3 sm:mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-1 sm:mb-3 leading-relaxed px-4 sm:px-0">
              Senior Full Stack Developer with <span className="text-purple-400 font-bold">3+ years</span> of experience delivering enterprise-grade solutions.<br className="hidden lg:block" /> 
              Specialized in TypeScript, React ecosystem, and modern cloud architectures.
            </p>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-2 sm:mb-4 max-w-xs sm:max-w-lg mx-auto px-4 sm:px-0">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-purple-400">15+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-pink-400">3+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-cyan-400">5+</div>
                <div className="text-xs sm:text-sm text-gray-400">Tech Stack</div>
              </div>
            </div>
            
            {/* Floating Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0">
              {[
                { name: 'JavaScript', color: 'bg-yellow-500' },
                { name: 'TypeScript', color: 'bg-blue-600' },
                { name: 'React', color: 'bg-blue-500' },
                { name: 'Node.js', color: 'bg-green-600' },
                { name: 'MongoDB', color: 'bg-green-500' },
                { name: 'Next.js', color: 'bg-black' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`${tech.color} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold cursor-pointer`}
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