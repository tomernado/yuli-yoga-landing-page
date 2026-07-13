import groupImageSrc from '../../../assets/images/classes-group.jpeg';
import privateImageSrc from '../../../assets/images/practice-1.jpeg';
import partnerImageSrc from '../../../assets/images/partner-practice.jpeg';
import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Reveal } from '../../motion';
import { UsersIcon, PersonIcon, HeartIcon } from '../../icons';
import styles from './Classes.module.css';

const FORMATS = [
  {
    title: 'שיעורים קבוצתיים',
    description: 'תרגול משותף באנרגיה נעימה, בקבוצות קטנות ואינטימיות שמזמינות התקדמות בקצב שלך.',
    Icon: UsersIcon,
    tone: 'gold' as const,
    media: <img src={groupImageSrc} alt="שיעור קבוצתי בטבע, מתרגלים ומתרגלות מכל הגילאים" className={styles.cardImage} />,
  },
  {
    title: 'שיעורים פרטיים',
    description: 'ליווי אישי ומותאם לחלוטין — לגוף, לצרכים ולמטרות שלך, בזמן ובמקום שנוחים לך.',
    Icon: PersonIcon,
    tone: 'rose' as const,
    media: (
      <img
        src={privateImageSrc}
        alt="שיעור אישי, תרגול מדיטציה בישיבה"
        className={styles.cardImage}
        style={{ objectPosition: 'center 48%' }}
      />
    ),
  },
  {
    title: 'שיעורי זוגות',
    description: 'תרגול משותף עם בן/בת זוג, חבר/ה או קרוב/ה — לרגע של חיבור מחודש, יחד.',
    Icon: HeartIcon,
    tone: 'lavender' as const,
    media: <img src={partnerImageSrc} alt="זוג מתרגלים אקרו-יוגה יחד" className={styles.cardImage} />,
  },
];

export function Classes() {
  return (
    <Section id="classes" tone="alt" className={styles.section}>
      <div className={`${styles.ambient} breathe`} aria-hidden="true" />
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
              tone={format.tone}
              media={format.media}
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
