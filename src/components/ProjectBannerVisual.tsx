'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ProjectBannerVisualProps = {
  alt: string;
  image?: string | null;
  imageClassName?: string;
  imageContain?: boolean;
  sizes: string;
  variant?: 'aaspasLottie' | 'smartBoxPhone';
};

const aaspasBannerScreens = [
  {
    src: '/aaspas-showcase/app-screens/customer-home.png',
    label: 'Discovery',
    accent: 'Customer home',
  },
  {
    src: '/aaspas-showcase/app-screens/chatbot-ai.png',
    label: 'AI chat',
    accent: 'Multilingual concierge',
  },
  {
    src: '/aaspas-showcase/app-screens/track-worker.png',
    label: 'Tracking',
    accent: 'Live worker view',
  },
  {
    src: '/aaspas-showcase/app-screens/payment-flow.jpg',
    label: 'Payments',
    accent: 'Checkout flow',
  },
  {
    src: '/aaspas-showcase/app-screens/wallet-overview.png',
    label: 'Wallet',
    accent: 'Worker earnings',
  },
];

export default function ProjectBannerVisual({
  alt,
  image,
  imageClassName,
  imageContain,
  sizes,
  variant,
}: ProjectBannerVisualProps) {
  const [activeAaspasScreen, setActiveAaspasScreen] = useState(0);

  useEffect(() => {
    if (variant !== 'aaspasLottie') return;

    const interval = window.setInterval(() => {
      setActiveAaspasScreen((prev) => (prev + 1) % aaspasBannerScreens.length);
    }, 2100);

    return () => window.clearInterval(interval);
  }, [variant]);

  if (variant === 'aaspasLottie') {
    const currentScreen = aaspasBannerScreens[activeAaspasScreen];

    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_22%_20%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.18),transparent_32%),linear-gradient(135deg,#07111f_0%,#0f2b63_52%,#09111f_100%)]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:42px_42px]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen.src}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={currentScreen.src}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-top opacity-30 blur-[2px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.1)_0%,rgba(7,17,31,0.42)_35%,rgba(7,17,31,0.84)_100%)]" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-slate-950/58 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-md">
          {currentScreen.accent}
        </div>
        <div className="absolute inset-x-0 bottom-5 top-16 flex items-center justify-center px-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen.src + '-frame'}
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[88%] w-[176px] rounded-[2rem] border border-white/12 bg-slate-950/82 p-2 shadow-[0_18px_44px_rgba(0,0,0,0.42)]"
            >
              <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
              <div className="relative h-full overflow-hidden rounded-[1.55rem]">
                <Image
                  src={currentScreen.src}
                  alt={alt}
                  fill
                  sizes={sizes}
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {aaspasBannerScreens.map((screen) => (
            <span
              key={screen.label}
              className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] backdrop-blur-md ${
                screen.label === currentScreen.label
                  ? 'border-emerald-300/30 bg-emerald-300/16 text-emerald-100'
                  : 'border-cyan-300/20 bg-slate-950/55 text-cyan-100'
              }`}
            >
              {screen.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'smartBoxPhone' && image) {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_16%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(59,130,246,0.16),transparent_32%),linear-gradient(180deg,#07111f_0%,#0b1630_100%)]">
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute left-6 top-6 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-100">
          Realtime control
        </div>
        <div className="absolute bottom-6 right-6 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-100">
          Energy analytics
        </div>
        <div className="relative h-[92%] w-[175px] rounded-[2rem] border border-white/12 bg-slate-950/80 p-2 shadow-[0_0_40px_rgba(14,165,233,0.18)]">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
          <div className="relative h-full overflow-hidden rounded-[1.6rem]">
            <Image
              src={image}
              alt={alt}
              fill
              sizes={sizes}
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    );
  }

  if (!image) {
    return null;
  }

  return (
    <Image
      src={image}
      alt={alt}
      fill
      sizes={sizes}
      className={
        imageClassName ??
        (imageContain
          ? 'object-contain p-8 transition-transform duration-700 group-hover:scale-105'
          : 'object-cover transition-transform duration-700 group-hover:scale-105')
      }
    />
  );
}
