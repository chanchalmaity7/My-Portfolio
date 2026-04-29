'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const principles = [
  'I prefer shipping complete user journeys, not isolated screens.',
  'I design backend truth first for payments, booking state, and recovery.',
  'I use native mobile code when React Native alone cannot deliver the right UX.',
  'I care about reliability on real Android devices, poor networks, and background app states.',
];

export default function About() {
  return (
    <section className="bg-[#0b1220] py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">About me</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">A builder who connects product and engineering</h2>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/10 shadow-xl shadow-slate-950/28">
              <Image src="/img/chanchal.jpg" alt="Chanchal Maity" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-slate-950/18 backdrop-blur-sm sm:p-8 md:backdrop-blur-md">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
                Available for remote roles
              </span>
              <span className="rounded-full bg-violet-300/10 px-4 py-2 text-sm font-bold text-violet-200">
                Three-plus years building products
              </span>
              <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
                Full-stack + mobile + AI-native
              </span>
            </div>

            <h3 className="text-3xl font-black text-white">Chanchal Maity</h3>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I build applications where mobile UX, backend correctness, realtime state, and business workflows all need
              to work together. My strongest work is AasPas, a full-stack service marketplace that includes native Android
              call screens, live tracking, booking workflows, payments, worker earnings, localization, AI booking assistance,
              and admin operations.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I am now positioning my work for serious interviews and remote opportunities, especially where teams value
              ownership, product thinking, AI-native execution speed, and the ability to debug across frontend, backend,
              native mobile, and production flows.
            </p>

            <div className="mt-7 grid gap-3">
              {principles.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
