import type { ReactNode } from 'react';
import styles from './Card.module.css';

type CardTone = 'sage' | 'gold' | 'rose' | 'lavender';

interface CardProps {
  title: string;
  description: string;
  /** Optional media rendered full-bleed above the padded content, e.g. an image placeholder. */
  media?: ReactNode;
  /** Optional icon rendered beside the title. */
  icon?: ReactNode;
  /** Tints the icon to give each card its own personality; matches PlaceholderImage's `tone`. */
  tone?: CardTone;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, media, icon, tone = 'sage', children, className }: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {media && <div className={styles.media}>{media}</div>}
      <div className={styles.body}>
        <h3 className={styles.title}>
          {icon && (
            <span className={styles.icon} data-tone={tone}>
              {icon}
            </span>
          )}
          {title}
        </h3>
        <p className={styles.description}>{description}</p>
        {children && <div className={styles.footer}>{children}</div>}
      </div>
    </div>
  );
}
