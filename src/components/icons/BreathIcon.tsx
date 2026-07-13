import type { IconProps } from './types';

export function BreathIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <path d="M8.3 12a3.7 3.7 0 0 1 3.7-3.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5.2 12a6.8 6.8 0 0 1 6.8-6.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15.7 12a3.7 3.7 0 0 1-3.7 3.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18.8 12a6.8 6.8 0 0 1-6.8 6.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
