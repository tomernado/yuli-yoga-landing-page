import type { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Renders as a link when provided, otherwise as a button. */
  href?: string;
  /** Opens the link in a new tab with safe `rel` defaults. Only relevant with `href`. */
  external?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  className,
  href,
  external,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
