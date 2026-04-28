'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import Lottie from 'lottie-react';
import welcomeAnimation from '@/animations/welcome.json';

const fullText = 'Welcome to my portfolio';

export default function HomeIntroSplash() {
  const [visible, setVisible] = useState(true);
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    const typingTimer = window.setInterval(() => {
      setTypedCount((count) => {
        if (count >= fullText.length) {
          window.clearInterval(typingTimer);
          return count;
        }
        return count + 1;
      });
    }, 55);

    return () => window.clearInterval(typingTimer);
  }, []);

  useEffect(() => {
    if (typedCount < fullText.length) return;
    const closeTimer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(closeTimer);
  }, [typedCount]);

  const typedText = useMemo(() => fullText.slice(0, typedCount), [typedCount]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_16%,rgba(16,185,129,0.15),transparent_30%),linear-gradient(135deg,#050b16_0%,#0b1630_52%,#08111f_100%)]"
        >
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.75)_1px,transparent_1px)] [background-size:44px_44px]" />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative w-[92%] max-w-xl rounded-[2.2rem] border border-white/10 bg-slate-950/55 p-8 text-center shadow-2xl shadow-cyan-950/35 backdrop-blur-2xl"
          >
            <div className="mx-auto h-28 w-44">
              <Lottie animationData={welcomeAnimation} loop autoplay className="h-full w-full" />
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
              Chanchal Maity
            </p>
            <h1 className="mt-4 min-h-[3.5rem] text-3xl font-black tracking-tight text-white sm:text-4xl">
              {typedText}
              <span className="ml-1 inline-block h-8 w-[3px] animate-pulse rounded-full bg-cyan-300 align-middle" />
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Full-stack, mobile, realtime, AI-native, and product engineering work with production-grade depth.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
