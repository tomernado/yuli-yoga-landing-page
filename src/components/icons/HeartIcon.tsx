import type { IconProps } from './types';

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 19.2s-7.4-4.4-7.4-9.8a4.4 4.4 0 0 1 7.4-3.2 4.4 4.4 0 0 1 7.4 3.2c0 5.4-7.4 9.8-7.4 9.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
