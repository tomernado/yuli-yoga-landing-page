import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { TestimonialCard } from '../../ui/TestimonialCard';
import { Reveal, EASE_CALM } from '../../motion';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    quote: 'שיעור תרגול מדהים מדהים מרפא ובעיקר נושם מתנה\nכבר לתרגלים הבאים ביחד 💙🫶',
    name: 'שרון ליברמן',
  },
  {
    quote:
      'היה תרגול מדהים הגוף כל כך משוחרר והנשימה\nזורמת בצורה כזאת נעימה ופתוחה\nתודה רבה יולי 🙏🤍\nאיזה כיף שיש אותך!!',
    name: 'איב אופיר',
  },
  {
    quote: 'מלאה בקסם ורוגע. פשוט מדהימה ואין כמותך באמת. ממליץ בחום לכולם כולל כולם, אין עלייך יולי ❤️',
    name: 'תומר כהן',
  },
  {
    quote: 'הכי טוב שעשיתי לעצמי השנה. יולי מלווה בעדינות ובנוכחות מלאה.',
    name: 'נועה אברהם',
  },
  {
    quote: 'מקום בטוח ללמוד להקשיב לגוף. ממליצה בלב שלם 🙏',
    name: 'טליה רוזן',
  },
  {
    quote: 'כל שיעור מרגיש מותאם בדיוק לי. תודה יולי! 💚',
    name: 'שירה לוי',
  },
];

const AUTO_ROTATE_MS = 4000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || paused) return undefined;
    const timer = setTimeout(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, AUTO_ROTATE_MS);
    return () => clearTimeout(timer);
  }, [index, paused, prefersReducedMotion]);

  const current = TESTIMONIALS[index];

  return (
    <Section id="testimonials" className={styles.section}>
      <div className={`${styles.ambient} breathe`} aria-hidden="true" />
      <div className={styles.header}>
        <Reveal>
          <Eyebrow>מה אמרו על התרגול</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className={styles.heading}>רגעים מהתרגול, במילים שלהם</h2>
        </Reveal>
      </div>

      <div
        className={styles.stage}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          {prefersReducedMotion ? (
            <div key={index} className={styles.slide}>
              <TestimonialCard {...current} />
            </div>
          ) : (
            <motion.div
              key={index}
              className={styles.slide}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.55, ease: EASE_CALM }}
            >
              <TestimonialCard {...current} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.dots}>
        {TESTIMONIALS.map((testimonial, dotIndex) => (
          <button
            key={testimonial.name}
            type="button"
            className={[styles.dot, dotIndex === index && styles.dotActive].filter(Boolean).join(' ')}
            aria-label={`עבור להמלצה ${dotIndex + 1} מתוך ${TESTIMONIALS.length}`}
            aria-current={dotIndex === index}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </Section>
  );
}
