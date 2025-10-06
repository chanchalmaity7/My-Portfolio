'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function AppShowcase() {
  const [currentApp, setCurrentApp] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  const apps = [
    {
      name: 'AasPas - Service App',
      icon: '📱📍',
      color: 'from-blue-500 to-purple-600',
      description: 'Location-based service platform with dual-role system',
      features: ['Real-time Location', 'Service Booking', 'Dual User Roles', 'Payment Gateway'],
      image: '/mobileapp/img1.png'
    },
    {
      name: 'Food Delivery App',
      icon: '📱🍔',
      color: 'from-orange-500 to-red-600',
      description: 'Modern food delivery application with real-time tracking',
      features: ['Live Tracking', 'Multiple Restaurants', 'Quick Delivery', 'Rating System'],
      image: '/mobileapp/img2.png'
    },
    {
      name: 'E-Commerce App',
      icon: '📱🛍️',
      color: 'from-green-500 to-teal-600',
      description: 'Full-featured e-commerce platform with payment integration',
      features: ['Product Catalog', 'Secure Payments', 'Order Management', 'User Reviews'],
      image: '/mobileapp/img3.png'
    },
    {
      name: 'EduQuest Learning',
      icon: '📱📚',
      color: 'from-indigo-500 to-purple-600',
      description: 'Smart India Hackathon educational platform',
      features: ['Interactive Learning', 'Progress Tracking', 'Quizzes & Tests', 'Certificates'],
      image: '/mobileapp/img4.png'
    },
    {
      name: 'Social Chat App',
      icon: '📱💬',
      color: 'from-purple-500 to-pink-600',
      description: 'Real-time messaging application with modern UI',
      features: ['Real-time Chat', 'Group Messages', 'Media Sharing', 'Push Notifications'],
      image: '/mobileapp/img5.png'
    },
    {
      name: 'Business App',
      icon: '📱💼',
      color: 'from-teal-500 to-blue-600',
      description: 'Professional business management application',
      features: ['Task Management', 'Team Collaboration', 'Analytics', 'Reports'],
      image: '/mobileapp/img6.png'
    },
    {
      name: 'Fitness Tracker',
      icon: '📱💪',
      color: 'from-red-500 to-orange-600',
      description: 'Health and fitness tracking mobile application',
      features: ['Workout Plans', 'Progress Tracking', 'Nutrition Guide', 'Social Features'],
      image: '/mobileapp/aaspas.jpeg'
    },
    {
      name: 'Travel Guide',
      icon: '📱✈️',
      color: 'from-cyan-500 to-blue-600',
      description: 'Complete travel companion and guide application',
      features: ['Trip Planning', 'Local Guides', 'Booking System', 'Offline Maps'],
      image: '/mobileapp/img8.png'
    },
    {
      name: 'Music Player',
      icon: '📱🎵',
      color: 'from-pink-500 to-purple-600',
      description: 'Modern music streaming and player application',
      features: ['Streaming', 'Playlists', 'Offline Mode', 'Social Sharing'],
      image: '/mobileapp/img7.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentApp((prev) => (prev + 1) % apps.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [apps.length, isDragging]);

  const handleTouchStart = (e: React.TouchEvent) => {
    // Only handle horizontal swipes on desktop
    if (window.innerWidth >= 768) {
      touchStartX.current = e.touches[0].clientX;
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) {
      touchEndX.current = e.touches[0].clientX;
      // Prevent default only for horizontal swipes
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartX.current);
      if (deltaX > deltaY) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (window.innerWidth >= 768) {
      const swipeDistance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50;
      
      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          setCurrentApp((prev) => (prev + 1) % apps.length);
        } else {
          setCurrentApp((prev) => (prev - 1 + apps.length) % apps.length);
        }
      }
      
      setTimeout(() => setIsDragging(false), 100);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Mobile App Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Interactive 3D carousel showcasing mobile applications built with modern technologies
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div 
          className="relative h-[400px] sm:h-[500px] flex items-center justify-center mb-16"
        >
          <div className="relative w-full max-w-6xl">
            {apps.map((app, index) => {
              const offset = index - currentApp;
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;
              const isVisible = absOffset <= 3;
              
              if (!isVisible) return null;
              
              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offset * (window.innerWidth < 768 ? 200 : 280)}px) scale(${isActive ? (window.innerWidth < 768 ? 0.9 : 1) : (window.innerWidth < 768 ? 0.7 : 0.8)}) rotateY(${offset * -15}deg)`,
                    zIndex: isActive ? 10 : 5 - absOffset,
                    opacity: isActive ? 1 : 0.6
                  }}
                  animate={{
                    transform: `translate(-50%, -50%) translateX(${offset * (window.innerWidth < 768 ? 200 : 280)}px) scale(${isActive ? (window.innerWidth < 768 ? 0.9 : 1) : (window.innerWidth < 768 ? 0.7 : 0.8)}) rotateY(${offset * -15}deg)`,
                    opacity: isActive ? 1 : 0.6
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onClick={() => setCurrentApp(index)}
                  whileHover={{ scale: isActive ? 1.05 : 0.85 }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Phone Frame */}
                  <div className={`w-64 h-[450px] bg-gradient-to-br ${app.color} p-1 rounded-[2.5rem] shadow-2xl`}>
                    <div className="w-full h-full bg-black rounded-[2.2rem] p-2">
                      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-b-2xl z-10"></div>
                        
                        {/* Screen Content */}
                        <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
                          {/* App Screenshot */}
                          <div className="absolute inset-0">
                            <img 
                              src={app.image} 
                              alt={`${app.name} Screenshot`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/mobileapp/aaspas.jpeg';
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* App Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentApp}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {apps[currentApp].name}
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {apps[currentApp].description}
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {apps[currentApp].features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50"
                >
                  <div className="text-purple-400 font-semibold text-sm">
                    {feature}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-8">
          {apps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentApp(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentApp === index
                  ? 'bg-purple-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-white font-semibold mb-6 text-lg">Technologies Used</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['React Native', 'Flutter', 'TypeScript', 'Expo', 'Node.js', 'MongoDB', 'Firebase', 'Redux'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30 backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}