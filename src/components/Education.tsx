'use client';

import { motion } from 'framer-motion';

const educationItems = [
  {
    title: 'Full-Stack Software Engineering Certificate',
    institute: 'Meta / Coursera',
    period: '2023',
    detail: 'Professional certification covering advanced JavaScript, React, backend development, and production-style full-stack workflows.',
  },
  {
    title: 'Diploma in Computer Hardware & Networking',
    institute: 'The George Telegraph Training Institute',
    period: '2020 - 2022',
    detail: 'Hardware, networking, troubleshooting, device behavior, and component-level foundations that support my software-hardware product work.',
  },
  {
    title: 'Higher Secondary Board Examination',
    institute: 'Nachinda Jibankrishna High School',
    period: '2020',
    detail: 'Completed HS board examination with 85.4%, building the academic base before moving into hardware, networking, and software engineering.',
  },
];

const proofTags = ['Board examination', 'Hardware + networking', 'Full-stack certificate', 'Product engineering'];

export default function Education() {
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Education</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Academic proof and certificates</h2>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Hardware, networking, board examination, and full-stack certification background behind my product work.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            {educationItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-slate-950/16 backdrop-blur-sm md:backdrop-blur-md"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 font-semibold text-cyan-200">{item.institute}</p>
                  </div>
                  <span className="w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{item.detail}</p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[1.7rem] border border-cyan-300/15 bg-slate-950/55 p-6 shadow-xl shadow-slate-950/20"
          >
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-0 h-1 w-1/3 bg-cyan-300/80"
              animate={{ x: ['-100%', '320%'] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Resume</p>
              <h3 className="mt-4 text-3xl font-black text-white">Download my CV</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                One-page premium developer resume with photo, best-fit roles, experience, education, and selected product work.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {proofTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/resume/Chanchal_Maity_Resume.pdf"
              download="Chanchal_Maity_Resume.pdf"
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-300 px-5 py-4 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Download My CV
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
