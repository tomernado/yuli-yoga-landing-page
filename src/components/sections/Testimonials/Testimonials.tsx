import { useEffect, useRef, useState } from 'react';
import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { TestimonialCard } from '../../ui/TestimonialCard';
import { Reveal } from '../../motion';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: 'שיעור תרגול מדהים מדהים מרפא ובעיקר נושם מתנה\nכבר לתרגלים הבאים ביחד 💙🫶',
    name: 'שרון ליברמן',
  },
  {
    quote:
      'היה תרגול מדהים הגוף כל כך משוחרר והנשימה\nזורמת בצורה כזאת נעימה ופתוחה\nתודה רבה יולי 🙏🤍\nאיזה כיף שיש אותך!!',
    name: 'אינה צינוב',
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: track, threshold: 0.6 },
    );

    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <Section id="testimonials" className={styles.section}>
      <div className={`${styles.ambient} breathe`} aria-hidden="true" />
      <div className={styles.header}>
        <Reveal>
          <Eyebrow>מה אומרות המתרגלות</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className={styles.heading}>רגעים מהתרגול, במילים שלהן</h2>
        </Reveal>
      </div>

      <div className={styles.track} ref={trackRef}>
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.name}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className={styles.slide}
          >
            <Reveal delay={0.1 + index * 0.08} className={styles.revealFill}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          </div>
        ))}
      </div>

      {TESTIMONIALS.length > 1 && (
        <div className={styles.dots}>
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              className={[styles.dot, index === activeIndex && styles.dotActive].filter(Boolean).join(' ')}
              aria-label={`עבור להמלצה ${index + 1} מתוך ${TESTIMONIALS.length}`}
              aria-current={index === activeIndex}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
