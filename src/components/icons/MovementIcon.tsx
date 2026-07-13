import type { IconProps } from './types';

export function MovementIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M3.5 16c1.8 0 1.8-3 3.6-3s1.8 3 3.6 3 1.8-3 3.6-3 1.8 3 3.6 3 1.8-3 3.6-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 9.5c1.8 0 1.8-3 3.6-3s1.8 3 3.6 3 1.8-3 3.6-3 1.8 3 3.6 3 1.8-3 3.6-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </svg>
  );
}
