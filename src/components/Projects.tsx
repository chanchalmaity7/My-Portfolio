'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'AasPas',
      description: 'Full-stack location-based service app with React Native mobile development, real-time GPS tracking, dual-role system (Customer/Worker), JWT authentication, and Socket.io integration.',
      tech: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'MongoDB', 'Socket.io'],
      status: 'Backend Live',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Lizz-Shop',
      description: 'Full-featured e-commerce platform with complex shopping cart, payment integration, and admin panel.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      status: 'Live Demo',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Architect Website',
      description: 'Professional architectural firm website with modern design and portfolio showcase.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'Live Demo',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'MushroomDelight',
      description: 'Modern web application with clean UI/UX and responsive design for food delivery.',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      status: 'Live Demo',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'EduQuest',
      description: 'Smart India Hackathon project - Educational platform with interactive learning modules.',
      tech: ['MERN Stack', 'TypeScript', 'Tailwind CSS'],
      status: 'Hackathon Project',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Client Projects Portfolio',
      description: 'Multiple confidential client projects including e-commerce platforms, business management systems, and custom web applications with advanced features.',
      tech: ['React', 'Next.js', 'Flutter', 'Node.js', 'MongoDB', 'TypeScript'],
      status: 'Private Work - NDA',
      gradient: 'from-indigo-500 to-purple-600'
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className={`h-32 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <span className="text-green-400 text-sm font-semibold">{project.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}