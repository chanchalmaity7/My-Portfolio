'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AppShowcase() {
  const [currentApp, setCurrentApp] = useState(0);
  
  const apps = [
    {
      name: 'AasPas - Service App',
      screens: [
        '/api/placeholder/300/600?text=AasPas+Login',
        '/api/placeholder/300/600?text=AasPas+Home',
        '/api/placeholder/300/600?text=AasPas+Services',
        '/api/placeholder/300/600?text=AasPas+Map',
        '/api/placeholder/300/600?text=AasPas+Profile'
      ],
      description: 'Location-based service platform with dual-role system'
    },
    {
      name: 'Food Delivery App',
      screens: [
        '/api/placeholder/300/600?text=Food+Home',
        '/api/placeholder/300/600?text=Food+Menu',
        '/api/placeholder/300/600?text=Food+Cart',
        '/api/placeholder/300/600?text=Food+Order',
        '/api/placeholder/300/600?text=Food+Track'
      ],
      description: 'Modern food delivery application with real-time tracking'
    },
    {
      name: 'E-Commerce App',
      screens: [
        '/api/placeholder/300/600?text=Shop+Home',
        '/api/placeholder/300/600?text=Shop+Products',
        '/api/placeholder/300/600?text=Shop+Details',
        '/api/placeholder/300/600?text=Shop+Cart',
        '/api/placeholder/300/600?text=Shop+Checkout'
      ],
      description: 'Full-featured e-commerce platform with payment integration'
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Mobile App Showcase</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interactive preview of mobile applications built with React Native and modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="h-full overflow-hidden">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out h-full"
                      style={{ transform: `translateX(-${currentApp * 100}%)` }}
                    >
                      {apps.map((app, appIndex) => (
                        <div key={appIndex} className="min-w-full h-full">
                          <div className="h-full overflow-y-auto scrollbar-hide">
                            <div className="space-y-4 p-4">
                              {app.screens.map((screen, screenIndex) => (
                                <motion.div
                                  key={screenIndex}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: screenIndex * 0.1 }}
                                  className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 min-h-[120px] flex items-center justify-center"
                                >
                                  <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                                      <span className="text-white font-bold text-lg">
                                        {screenIndex + 1}
                                      </span>
                                    </div>
                                    <h4 className="font-semibold text-gray-800 mb-1">
                                      Screen {screenIndex + 1}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      {app.name.split(' ')[0]} Feature
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* App Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              {apps[currentApp].name}
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {apps[currentApp].description}
            </p>

            {/* App Selector */}
            <div className="space-y-4 mb-8">
              {apps.map((app, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentApp(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    currentApp === index
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  <div className="font-semibold mb-1">{app.name}</div>
                  <div className="text-sm opacity-80">{app.description}</div>
                </motion.button>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-white font-semibold mb-4">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Flutter', 'TypeScript', 'Expo', 'Node.js', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}