import type { IconProps } from './types';

export function PresenceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}
