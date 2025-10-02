'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'MongoDB', level: 90, color: 'bg-green-500' },
    { name: 'Express.js', level: 85, color: 'bg-gray-500' },
    { name: 'React.js', level: 95, color: 'bg-blue-500' },
    { name: 'React Native', level: 80, color: 'bg-cyan-500' },
    { name: 'Node.js', level: 90, color: 'bg-green-600' },
    { name: 'Next.js', level: 92, color: 'bg-black' },
    { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-teal-500' },
    { name: 'REST API', level: 85, color: 'bg-orange-500' },
    { name: 'Git & GitHub', level: 90, color: 'bg-purple-500' }
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <span className="text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <motion.div
                  className={`h-3 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}