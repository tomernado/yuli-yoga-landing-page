import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, children, className }: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children && <div className={styles.footer}>{children}</div>}
    </div>
  );
}
