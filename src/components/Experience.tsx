'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Freelance & Contract Work',
      period: '2022 - Present',
      description: 'Leading development of enterprise-grade web and mobile applications. Specialized in MERN stack with TypeScript, delivering scalable solutions for diverse clients.',
      achievements: [
        'Delivered 15+ successful client projects',
        'Built complex e-commerce and business management systems',
        'Implemented real-time features with Socket.io',
        'Deployed applications on cloud platforms'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Various Client Projects',
      period: '2021 - 2022',
      description: 'Developed modern web applications using React, Node.js, and MongoDB. Focused on creating responsive, user-friendly interfaces and robust backend systems.',
      achievements: [
        'Mastered MERN stack development',
        'Implemented JWT authentication systems',
        'Created RESTful APIs and database designs',
        'Collaborated with clients on project requirements'
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-400 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}