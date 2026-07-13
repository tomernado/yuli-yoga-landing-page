import type { IconProps } from './types';

export function ImageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4.5 16.5 9 12.3a1.6 1.6 0 0 1 2.2.06l1.1 1.1a1.6 1.6 0 0 0 2.16.1l1.34-1.1a1.6 1.6 0 0 1 2.1.06l1.6 1.48"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
