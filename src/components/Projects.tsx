'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'AasPas - Local Services Aggregator App',
      image: '/img/aaspas.jpeg',
      shortDescription: 'Advanced React Native app with TypeScript, dual-role system (Customer/Worker), real-time GPS tracking, and Socket.io integration.',
      fullDescription: 'Advanced React Native app with TypeScript, Expo platform, dual-role system (Customer/Worker), geospatial matching engine using MongoDB 2dsphere indexes, real-time GPS tracking, Socket.io live updates, JWT authentication, OTP verification, 3-step worker profile setup, earnings tracking, complex animations with Animated API, AsyncStorage persistence, role-based access control, push notifications (FCM), aggregation pipelines, microservices architecture, and Vercel deployment.',
      tech: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'bcryptjs', 'Mongoose', 'Vercel'],
      status: 'Backend Live - Production Ready',
      gradient: 'from-blue-500 to-purple-600',
      liveUrl: null
    },
    {
      title: 'Lizz-Shop - Full Stack E-commerce Platform',
      image: '/project/Lizz-Shop.png',
      shortDescription: 'Enterprise-grade e-commerce platform built with Next.js 15 & TypeScript. Complete shopping experience with user authentication, shopping cart, and wishlist.',
      fullDescription: 'Enterprise-grade e-commerce platform built with Next.js 15 & TypeScript. Complete shopping experience with user authentication, shopping cart, wishlist, product search, and admin panel. Features glassmorphism design, mobile-responsive UI, Context API state management, MongoDB Atlas database, JWT authentication, password encryption, real-time updates, 18+ products catalog, BOGO offers, inventory management, order tracking, and Vercel deployment. Demonstrates full-stack development skills with modern tech stack.',
      tech: ['Next.js 15', 'TypeScript', 'MongoDB Atlas', 'JWT Auth', 'Tailwind CSS', 'Context API', 'Mongoose', 'bcryptjs', 'React Icons', 'Vercel'],
      status: 'Live Demo - Production Ready',
      gradient: 'from-green-500 to-teal-600',
      liveUrl: 'https://lizz-shop.vercel.app/'
    },
    {
      title: 'Building Junction - Premium Architectural Consultancy Website',
      image: '/project/Building Junction.png',
      shortDescription: 'Professional architectural firm website for West Bengal\'s premier consultancy with modern design, portfolio showcase, and client management.',
      fullDescription: 'Complete architectural consultancy website for Building Junction - West Bengal\'s #1 architectural firm. Features: Next.js 15 with TypeScript, responsive glassmorphism design, animated hero sections, service showcase with pricing, portfolio gallery, contact forms, mobile-first approach, intersection observer animations, gradient themes, professional branding, client testimonials, project statistics (300+ projects, 98% satisfaction), multi-page architecture (Home, About, Services, Portfolio, Contact), SEO optimized, and production-ready deployment.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS 4', 'Intersection Observer API', 'Responsive Design', 'Glassmorphism UI', 'Animation Effects', 'SEO Optimization'],
      status: 'Live Demo - Production Ready',
      gradient: 'from-orange-500 to-red-600',
      liveUrl: 'https://architect-website-teal.vercel.app/'
    },
    {
      title: 'Mushdelight - Premium Food Delivery Platform',
      image: '/project/Mushdelight.png',
      shortDescription: 'Full-stack organic mushroom e-commerce platform with modern UI/UX, payment gateway integration, and comprehensive order management.',
      fullDescription: 'Complete organic mushroom e-commerce platform built with Next.js 15 & TypeScript. Features: Razorpay payment gateway integration, MongoDB database with Mongoose ODM, user authentication with JWT & bcryptjs, shopping cart & checkout system, order tracking & management, admin dashboard for products & settings, email notifications with Nodemailer, responsive design with Framer Motion animations, floating particles & cursor effects, product catalog with dynamic pricing, COD & online payment options, delivery charge calculations, user profiles & order history, contact forms & newsletter subscription, SEO optimized pages, and production-ready deployment.',
      tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'Mongoose', 'Razorpay Gateway', 'JWT Auth', 'bcryptjs', 'Nodemailer', 'Framer Motion', 'Tailwind CSS', 'React Icons'],
      status: 'Live Demo - Production Ready',
      gradient: 'from-purple-500 to-pink-600',
      liveUrl: 'https://mushdelight.vercel.app/'
    },
    {
      title: 'EduQuest - Gamified Learning Platform',
      image: '/project/EduQuest .png',
      shortDescription: 'Smart India Hackathon project - Gamified educational platform with interactive learning, 3D quiz arena, and comprehensive analytics.',
      fullDescription: 'Smart India Hackathon 2024 project - Complete gamified learning platform built with React 18 & TypeScript. Features: XP & leveling system with achievements, interactive 3D quiz arena using React Three Fiber, student & teacher dashboards, quiz builder with multiple question types, real-time leaderboards & analytics, offline PWA support with service workers, Capacitor mobile app integration, local storage client for data persistence, progress tracking & milestone system, learning games & memory challenges, badge collection system, responsive design with Radix UI components, and comprehensive student performance analytics.',
      tech: ['React 18', 'TypeScript', 'Vite', 'React Three Fiber', 'Radix UI', 'Tailwind CSS', 'Capacitor', 'PWA', 'Service Workers', 'Local Storage', 'Lucide Icons'],
      status: 'Smart India Hackathon Project',
      gradient: 'from-cyan-500 to-blue-600',
      liveUrl: 'https://edu-quest-beta.vercel.app/'
    },
    {
      title: 'Enterprise Client Projects Portfolio',
      image: null,
      shortDescription: '10+ confidential enterprise projects including e-commerce platforms, business management systems, and custom web applications.',
      fullDescription: 'Comprehensive portfolio of 10+ enterprise-grade client projects delivered under NDA agreements. Includes: full-stack e-commerce platforms with payment gateways (Razorpay, Stripe), business management systems with role-based access control, custom CRM & ERP solutions, real-time chat applications with Socket.io, inventory management systems, restaurant POS systems, healthcare management platforms, educational portals with video streaming, multi-tenant SaaS applications, API integrations with third-party services, cloud deployment on AWS/Vercel, database optimization & scaling, and mobile-responsive progressive web apps. All projects feature modern UI/UX, secure authentication, performance optimization, and production-ready deployment.',
      tech: ['React', 'Next.js', 'Flutter', 'Node.js', 'MongoDB', 'TypeScript', 'Socket.io', 'Payment Gateways', 'AWS', 'PostgreSQL', 'Redis'],
      status: 'Private Enterprise Work - NDA Protected',
      gradient: 'from-indigo-500 to-purple-600',
      liveUrl: null
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Projects</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              }}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
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
              
              <div className="p-4">
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-xs leading-relaxed">
                  {expandedProject === index ? project.fullDescription : project.shortDescription}
                </p>
                
                {project.shortDescription !== project.fullDescription && (
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="text-purple-400 hover:text-purple-300 text-xs mb-3 flex items-center gap-1 transition-colors duration-200"
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
                )}
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <span className="text-green-400 text-xs font-semibold">{project.status}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}