import type { IconProps } from './types';

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 19c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15.2 5.1c1.4.3 2.5 1.5 2.5 3a3.1 3.1 0 0 1-1.9 2.9M17.8 14.3c1.9.5 3.3 1.9 3.7 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
