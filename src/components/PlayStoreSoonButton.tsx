'use client';

import { useEffect, useState } from 'react';
import { PlayStoreIcon } from '@/components/ActionIcons';

type PlayStoreSoonButtonProps = {
  label?: string;
  soonLabel?: string;
  className?: string;
};

export default function PlayStoreSoonButton({
  label = 'Play Store',
  soonLabel = 'Coming soon on Play Store',
  className = 'inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5',
}: PlayStoreSoonButtonProps) {
  const [showSoon, setShowSoon] = useState(false);

  useEffect(() => {
    if (!showSoon) return undefined;

    const timer = window.setTimeout(() => {
      setShowSoon(false);
    }, 2400);

    return () => window.clearTimeout(timer);
  }, [showSoon]);

  return (
    <button type="button" onClick={() => setShowSoon(true)} className={className}>
      <PlayStoreIcon className="h-4 w-4" />
      <span>{showSoon ? soonLabel : label}</span>
    </button>
  );
}
