import styles from './PlaceholderImage.module.css';

interface PlaceholderImageProps {
  /** Describes the future image's content, e.g. "תמונה מהתרגול". */
  label?: string;
  /** CSS aspect-ratio value, e.g. "4 / 5". */
  ratio?: string;
  className?: string;
}

export function PlaceholderImage({ label = 'תמונה בהמתנה', ratio = '4 / 5', className }: PlaceholderImageProps) {
  const classes = [styles.placeholder, className].filter(Boolean).join(' ');

  return (
    <div className={classes} style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
