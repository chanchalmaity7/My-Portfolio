'use client';

import { motion } from 'framer-motion';
import aiCollaborationAnimation from '@/animations/ai-collaboration.json';
import OptimizedLottie from '@/components/OptimizedLottie';

const capabilityCards = [
  {
    title: 'AI-native productivity',
    badge: 'Execution speed',
    detail:
      'I do not use AI as a novelty tool. I use it as an execution multiplier. When a problem is well-scoped, work that can take a conventional workflow ten hours can often be compressed into a focused thirty-minute delivery cycle through structured collaboration with GPT, Claude, and Gemini.',
  },
  {
    title: 'Hallucination control',
    badge: 'Reliability layer',
    detail:
      'My advantage is not only generating output fast, but knowing when AI is wrong. I actively detect hallucinations, challenge weak logic, and drive the model toward production-ready behavior for complex flows such as native Android calling, payment correctness, recovery logic, and realtime state handling.',
  },
  {
    title: 'Prompt orchestration',
    badge: 'Accuracy discipline',
    detail:
      'For architecture and system design, I use multi-step prompts, verification loops, constraint framing, and logic re-checks so the final output is not just fast but dependable enough to ship.',
  },
  {
    title: 'Force multiplier on flagship products',
    badge: 'Applied in real projects',
    detail:
      'I built major systems such as AasPas Marketplace, AasPas Smart Box, and AasPas Private Theater through deep AI collaboration while still owning the technical decisions, debugging, validation, and final production behavior myself.',
  },
];

const orchestrationStack = [
  'GPT',
  'Claude',
  'Gemini',
  'Prompt decomposition',
  'Verification loops',
  'Architecture prompting',
  'Hallucination detection',
  'Spec refinement',
  'Diff review',
  'Logic validation',
];

export default function AINativeDeveloper() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_84%_14%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,#0b1220_0%,#07111f_100%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Elite skills</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">AI-native developer with high-control prompt engineering</h2>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            I work with AI the way strong engineers work with powerful infrastructure: with control,
            structure, and accountability. My edge is not simply using AI faster than others. It is
            using AI to accelerate complex engineering without losing correctness.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-5 py-2 text-sm font-bold text-emerald-200">
            Visible portfolio strength: speed, control, verification, and production judgment
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-slate-950/25 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-6 grid gap-4 sm:grid-cols-[1.18fr_0.82fr]">
              <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_28%),linear-gradient(180deg,#07111f_0%,#0c1730_100%)]">
                <div className="h-52 w-full">
                  <OptimizedLottie
                    animationData={aiCollaborationAnimation}
                    wrapperClassName="h-full w-full"
                    className="h-full w-full scale-[1.02]"
                  />
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/10 p-4">
                <div className="flex h-28 w-full items-center justify-center rounded-[1.2rem] border border-emerald-300/15 bg-slate-950/28">
                  <div className="text-center">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-2xl border border-emerald-300/25 bg-emerald-300/12 shadow-[0_0_24px_rgba(110,231,183,0.16)]" />
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-100">Verified logic</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-emerald-100">
                  Verified delivery
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Speed matters, but trust matters more. I use verification loops so AI-assisted output can still hold up in real production logic.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
                AI as a force multiplier
              </span>
              <span className="rounded-full bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
                Speed with verification
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-black text-white">How I collaborate with AI at a serious engineering level</h3>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I use AI to reduce execution time dramatically, but never by blindly accepting output.
              I break systems into stages, set constraints, verify logic, and keep the final judgment
              on architecture, edge cases, and production readiness in my own hands.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              This is how I ship large solo builds with unusual depth. AasPas Marketplace, Smart Box,
              and Private Theater were not created through copy-paste prompting. They were built through
              guided AI collaboration, repeated validation, and engineering decisions strong enough for
              complex mobile, backend, realtime, and device workflows.
            </p>

            <div className="mt-7 rounded-[1.7rem] border border-emerald-300/20 bg-emerald-300/10 p-5">
              <p className="text-sm leading-8 text-emerald-100">
                International teams and startups care about leverage. My leverage is that I can move
                with AI-level speed while still protecting correctness, system quality, and production
                behavior on real products.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {orchestrationStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {capabilityCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-black text-white">{card.title}</h3>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                    {card.badge}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
