import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  quote: string;
  name: string;
}

export function TestimonialCard({ quote, name }: TestimonialCardProps) {
  const initial = name.trim().charAt(0);

  return (
    <figure className={styles.card}>
      <span className={styles.quoteMark} aria-hidden="true">
        ”
      </span>
      <blockquote className={styles.quote}>{quote}</blockquote>
      <figcaption className={styles.attribution}>
        <span className={styles.avatar} aria-hidden="true">
          {initial}
        </span>
        <span className={styles.name}>{name}</span>
      </figcaption>
    </figure>
  );
}
