'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'Mushdelight - Premium Food Delivery Platform',
      image: '/project/Mushdelight.png',
      description: 'Modern web application with clean UI/UX and responsive design for food delivery.',
      tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'Mongoose', 'Razorpay Gateway', 'JWT Auth', 'bcryptjs', 'Nodemailer', 'Framer Motion', 'Tailwind CSS', 'React Icons'],
      status: 'Live Demo',
      gradient: 'from-purple-500 to-pink-600',
      liveUrl: 'https://mushdelight.vercel.app/',
      features: [
        'Food delivery platform',
        'Menu browsing and ordering',
        'Responsive design for all devices',
        'Clean and modern UI/UX',
        'Fast and intuitive user experience',
        'Order management system'
      ]
    },
    {
      title: 'Lizz-Shop - Full Stack E-commerce Platform',
      image: '/project/Lizz-Shop.png',
      description: 'Full-featured e-commerce platform with complex shopping cart, payment integration, and admin panel.',
      tech: ['Next.js 15', 'TypeScript', 'MongoDB Atlas', 'JWT Auth', 'Tailwind CSS', 'Context API', 'Mongoose', 'bcryptjs', 'React Icons', 'Vercel'],
      status: 'Live Demo',
      gradient: 'from-green-500 to-teal-600',
      liveUrl: 'https://lizz-shop.vercel.app/',
      features: [
        'Complete e-commerce functionality',
        'Shopping cart and wishlist',
        'Payment gateway integration',
        'Admin dashboard for inventory management',
        'User authentication and profiles',
        'Order tracking and management'
      ]
    },
    {
      title: 'Building Junction - Premium Architectural Consultancy Website',
      image: '/project/Building Junction.png',
      description: 'Professional architectural firm website with modern design and portfolio showcase.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS 4', 'Intersection Observer API', 'Responsive Design', 'Glassmorphism UI', 'Animation Effects', 'SEO Optimization'],
      status: 'Live Demo',
      gradient: 'from-orange-500 to-red-600',
      liveUrl: 'https://architect-website-teal.vercel.app/',
      features: [
        'Modern responsive design',
        'Portfolio gallery with lightbox',
        'Contact forms and inquiry system',
        'SEO optimized with Next.js',
        'Fast loading and performance optimized',
        'Professional business presentation'
      ]
    },
    {
      title: 'AasPas - Local Services Aggregator App',
      image: '/img/aaspas.jpeg',
      description: 'Full-stack location-based service app with React Native mobile development, real-time GPS tracking, dual-role system (Customer/Worker), JWT authentication, and Socket.io integration.',
      tech: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'bcryptjs', 'Mongoose', 'Vercel'],
      status: 'Backend Live',
      gradient: 'from-blue-500 to-purple-600',
      liveUrl: null,
      features: [
        'Real-time GPS tracking and geospatial queries',
        'Dual-role system (Customer/Worker modes)',
        'JWT authentication with OTP verification',
        'Socket.io for live updates and notifications',
        'Complex animations using Animated API',
        'MongoDB 2dsphere indexes for location queries'
      ]
    },
    {
      title: 'EduQuest - Gamified Learning Platform',
      image: '/project/EduQuest .png',
      description: 'Smart India Hackathon project - Educational platform with interactive learning modules.',
      tech: ['React 18', 'TypeScript', 'Vite', 'React Three Fiber', 'Radix UI', 'Tailwind CSS', 'Capacitor', 'PWA', 'Service Workers', 'Local Storage', 'Lucide Icons'],
      status: 'Hackathon Project',
      gradient: 'from-cyan-500 to-blue-600',
      liveUrl: 'https://edu-quest-beta.vercel.app/',
      features: [
        'Interactive learning modules',
        'Student progress tracking',
        'Quiz and assessment system',
        'Teacher dashboard and tools',
        'Real-time collaboration features',
        'Smart India Hackathon winner'
      ]
    },
    {
      title: 'Enterprise Client Projects Portfolio',
      image: null,
      description: 'Multiple confidential client projects including e-commerce platforms, business management systems, and custom web applications with advanced features.',
      tech: ['React', 'Next.js', 'Flutter', 'Node.js', 'MongoDB', 'TypeScript', 'Socket.io', 'Payment Gateways', 'AWS', 'PostgreSQL', 'Redis'],
      status: 'Private Work - NDA',
      gradient: 'from-indigo-500 to-purple-600',
      liveUrl: null,
      features: [
        'Enterprise-grade applications',
        'Custom business solutions',
        'E-commerce platforms',
        'Management systems',
        'API integrations',
        'Confidential client work under NDA'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link 
              href="/"
              className="inline-block mb-6 text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive showcase of my professional work, featuring full-stack applications, 
              mobile apps, and enterprise solutions built with modern technologies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden cursor-pointer group">
                  {project.image ? (
                    <div 
                      onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}
                      className={`relative w-full h-full ${project.liveUrl ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <Image
                        src={project.image} 
                        alt={project.title}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {project.liveUrl && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">Visit Website</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={`h-full bg-gradient-to-r ${project.gradient}`}></div>
                  )}
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {expandedProject === index ? project.description : project.description.slice(0, 120) + '...'}
                  </p>
                  
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="text-purple-400 hover:text-purple-300 text-xs mb-4 flex items-center gap-1 transition-colors duration-200"
                  >
                    {expandedProject === index ? (
                      <>
                        <span>Show Less</span>
                        <span className="transform rotate-180 transition-transform duration-200">▼</span>
                      </>
                    ) : (
                      <>
                        <span>See More</span>
                        <span className="transition-transform duration-200">▼</span>
                      </>
                    )}
                  </button>
                  
                  {expandedProject === index && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Additional Details:</h4>
                      <div className="bg-slate-700/30 rounded-lg p-3">
                        <p className="text-gray-400 text-xs leading-relaxed">
                          This project demonstrates advanced full-stack development skills with modern technologies, 
                          responsive design principles, and production-ready deployment strategies.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.liveUrl && (
                    <div className="flex justify-center">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
