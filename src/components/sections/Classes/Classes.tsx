import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { PlaceholderImage } from '../../ui/PlaceholderImage';
import { Reveal } from '../../motion';
import { UsersIcon, PersonIcon, HeartIcon } from '../../icons';
import styles from './Classes.module.css';

const FORMATS = [
  {
    title: 'שיעורים קבוצתיים',
    description: 'תרגול משותף באנרגיה נעימה, בקבוצות קטנות ואינטימיות שמזמינות התקדמות בקצב שלך.',
    Icon: UsersIcon,
    tone: 'gold' as const,
    imageLabel: 'תמונה: שיעור קבוצתי',
  },
  {
    title: 'שיעורים פרטיים',
    description: 'ליווי אישי ומותאם לחלוטין — לגוף, לצרכים ולמטרות שלך, בזמן ובמקום שנוחים לך.',
    Icon: PersonIcon,
    tone: 'rose' as const,
    imageLabel: 'תמונה: שיעור פרטי',
  },
  {
    title: 'שיעורי זוגות',
    description: 'תרגול משותף עם בן/בת זוג, חבר/ה או קרוב/ה — לרגע של חיבור מחודש, יחד.',
    Icon: HeartIcon,
    tone: 'lavender' as const,
    imageLabel: 'תמונה: שיעור זוגי',
  },
];

export function Classes() {
  return (
    <Section id="classes" tone="alt" className={styles.section}>
      <div className={styles.ambient} aria-hidden="true" />
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
            <Card
              title={format.title}
              description={format.description}
              icon={<format.Icon />}
              media={<PlaceholderImage label={format.imageLabel} ratio="16 / 10" tone={format.tone} />}
            >
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
