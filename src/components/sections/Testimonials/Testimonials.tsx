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
  return (
    <Section id="testimonials" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.header}>
        <Reveal>
          <Eyebrow>מה אומרות המתרגלות</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className={styles.heading}>רגעים מהתרגול, במילים שלהן</h2>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {TESTIMONIALS.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={0.1 + index * 0.08}>
            <TestimonialCard {...testimonial} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
