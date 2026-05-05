'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Mobile engineering',
    summary: 'React Native and Flutter apps with native Android, maps, notifications, payments, and real device behavior.',
    items: ['React Native', 'Expo', 'Flutter', 'Native Android modules', 'Firebase FCM', 'Google Maps', 'Agora calls'],
  },
  {
    title: 'Backend systems',
    summary: 'APIs, realtime state, database models, auth, payments, and operational flows for product backends.',
    items: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.IO', 'Redis patterns', 'Django', 'Flask'],
  },
  {
    title: 'Web products',
    summary: 'Next.js and React websites, dashboards, SEO structure, responsive UI, and deployment-ready frontend work.',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'SEO structure', 'HTML5', 'CSS3'],
  },
  {
    title: 'Product architecture',
    summary: 'Reliable booking, payment, tracking, recovery, role-based UX, and admin workflows.',
    items: ['Payment flows', 'Role-based UX', 'Realtime rooms', 'Recovery logic', 'i18n', 'Admin tooling'],
  },
  {
    title: 'Problem solving and debugging',
    summary: 'DSA-style thinking for edge cases, state correctness, recovery paths, and hard production bugs.',
    items: ['Problem solving', 'Data structures', 'Algorithms', 'Debugging', 'Edge cases', 'State consistency', 'Race conditions'],
  },
  {
    title: 'Tooling and delivery',
    summary: 'Version control, API testing, package workflows, and deployment tools used across full-stack projects.',
    items: ['Git', 'GitHub', 'Postman', 'API testing', 'npm', 'Vercel', 'Render', 'Deployment workflows'],
  },
  {
    title: 'Languages and foundations',
    summary: 'Comfort across product languages, lower-level foundations, markup, styling, and application logic.',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C', 'C++', 'HTML5', 'CSS3', 'Bootstrap', 'SQL'],
  },
  {
    title: 'GenAI workflows and prompt engineering',
    summary: 'Self-directed GenAI-assisted learning with documentation, GPT, Claude, and Gemini for architecture breakdown, review loops, debugging, and faster delivery.',
    items: ['GenAI-assisted development', 'Self-directed learning', 'Documentation reading', 'Prompt orchestration', 'Hallucination control', 'Multi-step verification', 'Architecture prompting', 'GenAI-assisted debugging', 'Spec refinement'],
  },
];

export default function Skills() {
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Skill map</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Engineering range</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            A compact map of the tools and systems I use to ship complete products.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-slate-950/15 backdrop-blur-sm md:backdrop-blur-md"
            >
              <h3 className="text-2xl font-black text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{group.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
