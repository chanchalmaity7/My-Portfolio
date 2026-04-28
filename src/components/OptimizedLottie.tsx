'use client';

import { useInView } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRef } from 'react';

type OptimizedLottieProps = {
  animationData: object;
  className?: string;
  wrapperClassName?: string;
  loop?: boolean;
  autoplay?: boolean;
};

export default function OptimizedLottie({
  animationData,
  className,
  wrapperClassName = 'h-full w-full',
  loop = true,
  autoplay = true,
}: OptimizedLottieProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.12,
    margin: '220px 0px 220px 0px',
  });

  return (
    <div ref={ref} className={wrapperClassName}>
      {isInView ? <Lottie animationData={animationData} loop={loop} autoplay={autoplay} className={className} /> : null}
    </div>
  );
}
