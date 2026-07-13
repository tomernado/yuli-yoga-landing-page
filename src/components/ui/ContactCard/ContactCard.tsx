import type { ReactNode } from 'react';
import styles from './ContactCard.module.css';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  /** Marks the primary conversion channel with a subtle accent treatment. */
  featured?: boolean;
}

export function ContactCard({ icon, title, subtitle, href, external, featured }: ContactCardProps) {
  const classes = [styles.card, featured && styles.featured].filter(Boolean).join(' ');

  return (
    <a
      className={classes}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </span>
    </a>
  );
}
