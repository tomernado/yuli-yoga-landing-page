import { ImageIcon } from '../../icons';
import styles from './PlaceholderImage.module.css';

type PlaceholderTone = 'sage' | 'gold' | 'rose' | 'lavender';

interface PlaceholderImageProps {
  /** Describes the future image's content, e.g. "תמונה מהתרגול". */
  label?: string;
  /** CSS aspect-ratio value, e.g. "4 / 5". */
  ratio?: string;
  /** Ambient gradient tint, varied per section for visual rhythm. */
  tone?: PlaceholderTone;
  className?: string;
}

export function PlaceholderImage({
  label = 'תמונה בהמתנה',
  ratio = '4 / 5',
  tone = 'sage',
  className,
}: PlaceholderImageProps) {
  const classes = [styles.placeholder, className].filter(Boolean).join(' ');

  return (
    <div className={classes} data-tone={tone} style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <span className={styles.frame} aria-hidden="true" />
      <span className={styles.motif} aria-hidden="true">
        <span className={`${styles.ring} ${styles.ringOuter}`} />
        <span className={`${styles.ring} ${styles.ringMid}`} />
        <span className={`${styles.ring} ${styles.ringInner}`} />
      </span>
      <span className={styles.content}>
        <ImageIcon className={styles.icon} />
        <span className={styles.label}>{label}</span>
      </span>
    </div>
  );
}
