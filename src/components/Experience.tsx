'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Founder & Lead Product Engineer',
    company: 'AasPas India',
    period: 'Sep 2025 - Present',
    description:
      'Building AasPas as a full-stack service marketplace with native Android calling, live tracking, payments, sockets, AI booking support, worker operations, and admin-ready backend logic.',
    achievements: [
      'Designed booking, tracking, payment, wallet, review, and support workflows',
      'Built native Android modules for call screens, notifications, location, and background behavior',
      'Implemented Socket.IO architecture for customer, worker, booking, and admin rooms',
      'Solved edge cases around active jobs, weak networks, recovery, and realtime state consistency',
    ],
  },
  {
    title: 'Technical Integration Specialist',
    company: 'Brightex Solutions P Ltd',
    period: 'Jul 2023 - May 2024',
    description:
      'Worked on device performance optimization and component-level software-hardware integration workflows.',
    achievements: [
      'Optimized device performance across technical integration workflows',
      'Managed software-hardware synergy at component and device-behavior level',
      'Strengthened practical debugging, system diagnosis, and reliability-focused engineering habits',
      'Built hardware-aware foundations useful for native Android, IoT, and real-device product work',
    ],
  },
  {
    title: 'TRC Engineer, QC Department',
    company: 'Aforeserve.Com Ltd - Lenovo service workflow',
    period: 'Jul 2022 - Jun 2023',
    description:
      'Worked in Lenovo service workflows around device quality checks, diagnosis, and hardware-aware debugging.',
    achievements: [
      'Diagnosed Lenovo device quality issues across service workflows',
      'Built practical troubleshooting and quality-control discipline',
      'Developed hardware-aware debugging foundations for device reliability',
      'Improved real-device diagnosis habits that now support mobile and IoT product work',
    ],
  },
];

export default function Experience() {
  return (
    <section className="bg-[#07111f] py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Experience</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Building history</h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="relative mb-8 last:mb-0"
            >
              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-slate-950/15 backdrop-blur-sm sm:p-8 md:backdrop-blur-md">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white">{exp.title}</h3>
                    <p className="mt-2 font-semibold text-cyan-200">{exp.company}</p>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm font-bold text-slate-200">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-5 text-base leading-8 text-slate-300">{exp.description}</p>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {exp.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-start gap-3 rounded-2xl bg-slate-950/35 p-4">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span className="text-sm leading-7 text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
