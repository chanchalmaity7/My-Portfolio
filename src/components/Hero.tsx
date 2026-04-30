'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import isometricUiuxAnimation from '@/animations/isometric-uiux.json';
import OptimizedLottie from '@/components/OptimizedLottie';

const proofStats = [
  { value: '3+ years', label: 'Product engineering' },
  { value: 'AI-native', label: 'Fast, verified delivery' },
  { value: 'Mobile + backend', label: 'End-to-end ownership' },
  { value: 'Realtime', label: 'Maps, sockets, payments' },
];

const coreStack = [
  'React Native',
  'Flutter',
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Socket.IO',
  'WebRTC',
  'ESP32',
  'Java',
  'Python',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07111f] pt-20 text-white sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(135deg,#07111f_0%,#101827_52%,#08111f_100%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-stretch gap-4 px-4 sm:gap-6 sm:px-6 lg:grid lg:min-h-[calc(100vh-7rem)] lg:items-center lg:gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative order-1 mx-auto w-full min-w-0 max-w-[24rem] self-center lg:order-2 lg:max-w-md"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-3.5 shadow-xl shadow-slate-950/35 backdrop-blur-sm sm:p-5 md:backdrop-blur-md">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_30%),linear-gradient(180deg,#07111f_0%,#0c1730_100%)]">
              <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="relative h-[280px] sm:h-[320px]">
                <OptimizedLottie
                  animationData={isometricUiuxAnimation}
                  wrapperClassName="h-full w-full"
                  className="h-full w-full scale-[1.08]"
                />
              </div>

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/70 px-4 py-2 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.75)] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">Welcome</span>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/72 px-4 py-3 backdrop-blur-md">
                <div className="overflow-hidden rounded-full border border-cyan-300/20">
                  <Image src="/img/chanchal.jpg" alt="Chanchal Maity" width={44} height={44} className="h-11 w-11 object-cover" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Chanchal Maity</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">AI-native product engineer</p>
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-3.5 sm:mt-4 sm:gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  Now featuring
                </p>
                <h2 className="mt-2 text-2xl font-black">Marketplace, IoT, commerce</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Flagship work across AasPas, Smart Box, and commerce products with real workflows,
                  backend logic, mobile UX, payments, and device control.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  AI-native execution
                </p>
                <h2 className="mt-2 text-2xl font-black">Fast delivery, verified logic</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I use GPT, Claude, and Gemini to move faster, then verify architecture, edge cases,
                  and production behavior before shipping.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="order-2 w-full min-w-0 max-w-4xl lg:order-1"
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            AI-native full-stack and mobile product engineer
          </p>

          <h1 className="text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            I build production-ready apps across mobile, backend, realtime, and IoT.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-xl">
            I am Chanchal Maity. My strongest work combines React Native, Next.js, Node.js,
            MongoDB, Socket.IO, native Android modules, payments, maps, and AI-assisted engineering
            into complete product systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#apps">
              <motion.span
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full justify-center rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/40 sm:w-auto"
              >
                View flagship work
              </motion.span>
            </Link>
            <Link href="#contact">
              <motion.span
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full justify-center rounded-full border border-white/15 bg-white/8 px-7 py-4 text-sm font-bold text-white backdrop-blur-md sm:w-auto"
              >
                Contact me
              </motion.span>
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {proofStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm md:backdrop-blur-md"
              >
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
