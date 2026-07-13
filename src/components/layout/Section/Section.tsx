import type { ElementType, ReactNode } from 'react';
import { Container } from '../Container';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: 'default' | 'alt';
  as?: ElementType;
  className?: string;
}

export function Section({ children, id, tone = 'default', as: Tag = 'section', className }: SectionProps) {
  const classes = [styles.section, tone === 'alt' && styles.alt, className].filter(Boolean).join(' ');

  return (
    <Tag id={id} className={classes}>
      <Container>{children}</Container>
    </Tag>
  );
}
