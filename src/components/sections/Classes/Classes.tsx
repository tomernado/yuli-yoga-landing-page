import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Reveal } from '../../motion';
import styles from './Classes.module.css';

const FORMATS = [
  {
    title: 'שיעורים קבוצתיים',
    description: 'תרגול משותף באנרגיה נעימה, בקבוצות קטנות ואינטימיות שמזמינות התקדמות בקצב שלך.',
  },
  {
    title: 'שיעורים פרטיים',
    description: 'ליווי אישי ומותאם לחלוטין — לגוף, לצרכים ולמטרות שלך, בזמן ובמקום שנוחים לך.',
  },
  {
    title: 'שיעורי זוגות',
    description: 'תרגול משותף עם בן/בת זוג, חבר/ה או קרוב/ה — לרגע של חיבור מחודש, יחד.',
  },
];

export function Classes() {
  return (
    <Section id="classes" tone="alt">
      <div className={styles.header}>
        <Reveal>
          <Eyebrow>מסגרות התרגול</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className={styles.heading}>בחרו את המסגרת שמתאימה לכם</h2>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {FORMATS.map((format, index) => (
          <Reveal key={format.title} delay={0.1 + index * 0.08}>
            <Card title={format.title} description={format.description}>
              <Button href="#contact" variant="secondary" className={styles.cardCta}>
                לפרטים ותיאום
              </Button>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
