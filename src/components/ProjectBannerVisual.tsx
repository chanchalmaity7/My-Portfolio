'use client';

import Image from 'next/image';

type ProjectBannerVisualProps = {
  alt: string;
  image?: string | null;
  imageClassName?: string;
  imageContain?: boolean;
  sizes: string;
  variant?: 'aaspasLottie' | 'smartBoxPhone';
};

export default function ProjectBannerVisual({
  alt,
  image,
  imageClassName,
  imageContain,
  sizes,
  variant,
}: ProjectBannerVisualProps) {
  if (variant === 'aaspasLottie') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_22%_20%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.18),transparent_32%),linear-gradient(135deg,#07111f_0%,#0f2b63_52%,#09111f_100%)]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-slate-950/55 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-md">
          Real app surfaces
        </div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {['Discovery', 'AI chat', 'Tracking', 'Payments', 'Wallet'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-300/20 bg-slate-950/55 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="absolute inset-x-4 bottom-5 top-16 flex items-end justify-center gap-2 sm:gap-3">
          {[
            {
              src: '/aaspas-showcase/app-screens/customer-home.png',
              className: 'mb-5 h-[68%] w-[16%] min-w-[52px] -rotate-6',
            },
            {
              src: '/aaspas-showcase/app-screens/payment-flow.jpg',
              className: 'mb-10 h-[76%] w-[17%] min-w-[56px] -rotate-2',
            },
            {
              src: '/aaspas-showcase/app-screens/chatbot-ai.png',
              className: 'mb-3 h-[86%] w-[18%] min-w-[62px] rotate-0',
            },
            {
              src: '/aaspas-showcase/app-screens/track-worker.png',
              className: 'mb-8 h-[78%] w-[17%] min-w-[56px] rotate-3',
            },
            {
              src: '/aaspas-showcase/app-screens/wallet-overview.png',
              className: 'mb-4 h-[70%] w-[16%] min-w-[52px] rotate-6',
            },
          ].map((screen) => (
            <div
              key={screen.src}
              className={`relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-slate-950/85 p-1 shadow-[0_16px_35px_rgba(0,0,0,0.34)] ${screen.className}`}
            >
              <div className="absolute left-1/2 top-1 z-10 h-3.5 w-10 -translate-x-1/2 rounded-b-xl bg-slate-950" />
              <div className="relative h-full overflow-hidden rounded-[1.1rem]">
                <Image
                  src={screen.src}
                  alt="AasPas mobile screen collage"
                  fill
                  sizes={sizes}
                  className="object-cover object-top"
                />
              </div>
            </div>
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
