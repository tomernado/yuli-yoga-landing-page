import type { IconProps } from './types';

export function PersonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="7.5" r="3.3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 19c.7-3.6 3.2-5.5 6.5-5.5s5.8 1.9 6.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
