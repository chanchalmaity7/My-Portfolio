'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AppShowcase() {
  const [currentApp, setCurrentApp] = useState(0);
  
  const apps = [
    {
      name: 'AasPas - Service App',
      description: 'Location-based service platform with dual-role system'
    },
    {
      name: 'Food Delivery App',
      description: 'Modern food delivery application with real-time tracking'
    },
    {
      name: 'E-Commerce App',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Mobile App Showcase</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interactive preview of mobile applications built with React Native and modern technologies
          </p>
        </motion.div>

        {/* 3D iPhone 12 Carousel */}
        <div className="relative my-24 h-[400px] flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-full" style={{ perspective: '500px' }}>
            <div 
              className="relative w-full h-full transition-transform duration-700 ease-out preserve-3d"
              style={{ 
                transformStyle: 'preserve-3d',
                transform: `rotateY(${currentApp * -120}deg)`
              }}
            >
              {/* iPhone 1 - Service App */}
              <div 
                className="absolute top-1/2 left-1/2 transition-all duration-700"
                style={{
                  transform: 'translate(-50%, -50%) rotateY(0deg) translateZ(200px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-48 h-[360px] bg-black rounded-[2rem] p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl z-10"></div>
                    <div className="h-full overflow-y-auto pt-5">
                      <div className="bg-teal-600 h-12 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Service App</span>
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="bg-pink-100 rounded-lg p-2 flex items-center gap-2">
                          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">+</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-800">Add Money</div>
                            <div className="text-xs text-gray-600">Top up</div>
                          </div>
                        </div>
                        <div className="bg-blue-100 rounded-lg p-2 flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">↑</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-800">Request</div>
                            <div className="text-xs text-gray-600">Money</div>
                          </div>
                        </div>
                        <div className="bg-teal-600 text-white rounded-lg p-3 text-center">
                          <div className="text-sm font-bold">JOIN AS AGENT</div>
                          <div className="text-xs">EARN MONEY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone 2 - Food App */}
              <div 
                className="absolute top-1/2 left-1/2 transition-all duration-700"
                style={{
                  transform: 'translate(-50%, -50%) rotateY(120deg) translateZ(200px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-48 h-[360px] bg-black rounded-[2rem] p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl z-10"></div>
                    <div className="h-full overflow-y-auto pt-5">
                      <div className="bg-green-500 h-14 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-white font-bold text-sm">Fresh Vegetable</div>
                          <div className="text-white text-xs">Free Home Delivery</div>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="text-sm font-bold mb-3">Popular Categories</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-orange-100 rounded-lg p-2 text-center">
                            <div className="w-8 h-8 bg-orange-300 rounded-lg mx-auto mb-1"></div>
                            <div className="text-xs font-semibold">Fruits an...</div>
                          </div>
                          <div className="bg-blue-100 rounded-lg p-2 text-center">
                            <div className="w-8 h-8 bg-blue-300 rounded-lg mx-auto mb-1"></div>
                            <div className="text-xs font-semibold">Breakfast</div>
                          </div>
                          <div className="bg-purple-100 rounded-lg p-2 text-center">
                            <div className="w-8 h-8 bg-purple-300 rounded-lg mx-auto mb-1"></div>
                            <div className="text-xs font-semibold">Beverag...</div>
                          </div>
                          <div className="bg-green-100 rounded-lg p-2 text-center">
                            <div className="w-8 h-8 bg-green-300 rounded-lg mx-auto mb-1"></div>
                            <div className="text-xs font-semibold">Health C...</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <div className="text-sm font-bold">Daily Needs</div>
                          <div className="text-xs text-blue-500">View All</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* iPhone 3 - Real Estate */}
              <div 
                className="absolute top-1/2 left-1/2 transition-all duration-700"
                style={{
                  transform: 'translate(-50%, -50%) rotateY(240deg) translateZ(200px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-48 h-[360px] bg-black rounded-[2rem] p-2 shadow-xl">
                  <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl z-10"></div>
                    <div className="h-full overflow-y-auto pt-5">
                      <div className="bg-gray-200 h-12 flex items-center justify-center">
                        <span className="text-gray-700 font-semibold text-sm">Location</span>
                      </div>
                      <div className="p-3">
                        <div className="bg-blue-100 rounded-lg p-2 mb-3">
                          <div className="text-blue-800 font-semibold text-sm">Gurgaon, India</div>
                        </div>
                        <div className="text-sm font-bold mb-3">Nearby properties(Bhuj)</div>
                        <div className="space-y-2 mb-3">
                          <div className="bg-gray-100 rounded-lg p-2">
                            <div className="w-full h-12 bg-gray-300 rounded mb-1"></div>
                            <div className="text-xs font-semibold">Villa</div>
                            <div className="text-xs text-gray-600">Premium location</div>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-2">
                            <div className="w-full h-12 bg-gray-300 rounded mb-1"></div>
                            <div className="text-xs font-semibold">Penthouse</div>
                            <div className="text-xs text-gray-600">Luxury living</div>
                          </div>
                        </div>
                        <div className="text-sm font-bold mb-2">Featured Properties</div>
                        <div className="bg-teal-100 rounded-lg p-2">
                          <div className="text-teal-800 font-bold text-sm">₹2.3M</div>
                          <div className="text-teal-600 font-semibold text-xs">Tropical Paradise Villa</div>
                          <div className="w-full h-8 bg-teal-200 rounded mt-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {apps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentApp(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentApp === index ? 'bg-purple-500' : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* App Info Section */}
        <div className="max-w-2xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {apps[currentApp].name}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              {apps[currentApp].description}
            </p>

            {/* Tech Stack */}
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {['React Native', 'TypeScript', 'Node.js', 'MongoDB'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full text-xs"
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