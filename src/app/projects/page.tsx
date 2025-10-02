'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AasPas',
      description: 'Full-stack location-based service app with React Native mobile development, real-time GPS tracking, dual-role system (Customer/Worker), JWT authentication, and Socket.io integration.',
      tech: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'MongoDB', 'Socket.io'],
      status: 'Backend Live',
      gradient: 'from-blue-500 to-purple-600',
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
      title: 'Lizz-Shop',
      description: 'Full-featured e-commerce platform with complex shopping cart, payment integration, and admin panel.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      status: 'Live Demo',
      gradient: 'from-green-500 to-teal-600',
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
      title: 'Architect Website',
      description: 'Professional architectural firm website with modern design and portfolio showcase.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'Live Demo',
      gradient: 'from-orange-500 to-red-600',
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
      title: 'MushroomDelight',
      description: 'Modern web application with clean UI/UX and responsive design for food delivery.',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      status: 'Live Demo',
      gradient: 'from-purple-500 to-pink-600',
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
      title: 'EduQuest',
      description: 'Smart India Hackathon project - Educational platform with interactive learning modules.',
      tech: ['MERN Stack', 'TypeScript', 'Tailwind CSS'],
      status: 'Hackathon Project',
      gradient: 'from-cyan-500 to-blue-600',
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
      title: 'Client Projects Portfolio',
      description: 'Multiple confidential client projects including e-commerce platforms, business management systems, and custom web applications with advanced features.',
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
      status: 'Private Work - NDA',
      gradient: 'from-indigo-500 to-purple-600',
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h1>
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
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`h-32 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
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
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}