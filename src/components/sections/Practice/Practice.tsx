import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import practiceImage2Src from '../../../assets/images/practice-2.jpeg';
import practiceImage3Src from '../../../assets/images/practice-3.jpeg';
import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { Button } from '../../ui/Button';
import { Reveal } from '../../motion';
import { BreathIcon, MovementIcon, PresenceIcon, LeafIcon, HeartIcon } from '../../icons';
import styles from './Practice.module.css';

const PILLARS = [
  {
    title: 'נשימה',
    description: 'לב התרגול — דרך פשוטה לחזור אל הרגע הזה.',
    Icon: BreathIcon,
    tint: 'var(--color-lavender-mist)',
  },
  {
    title: 'תנועה',
    description: 'זרימה עדינה שמזמינה את הגוף להשתחרר.',
    Icon: MovementIcon,
    tint: 'var(--color-warm-peach)',
  },
  {
    title: 'נוכחות',
    description: 'תשומת לב שקטה, בלי שיפוטיות ובלי מירוץ.',
    Icon: PresenceIcon,
    tint: 'var(--color-clay-gold)',
  },
  {
    title: 'הרפיה',
    description: 'מרחב לעצור, לנשום ולהניח את מה שכבד.',
    Icon: LeafIcon,
    tint: 'var(--color-dusty-rose)',
  },
  {
    title: 'חיבור לעצמך',
    description: 'התרגול כדרך להכיר את עצמך מחדש.',
    Icon: HeartIcon,
    tint: 'var(--color-sage)',
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: (index: number) => ({ opacity: 0, x: index % 2 === 0 ? -16 : 16 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function Practice() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="practice" className={styles.section}>
      <div className={`${styles.ambient} breathe`} aria-hidden="true" />
      <div className={styles.intro}>
        <Reveal>
          <Eyebrow>התרגול</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className={styles.heading}>נשימה, תנועה ונוכחות</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className={styles.description}>
            כל שיעור נע בעדינות בין נשימה מודעת, תנועה זורמת ורגעים של מנוחה. המטרה אינה תנוחה מושלמת —
            אלא לשוב אל הגוף, ולהרגיש בו בבית.
          </p>
        </Reveal>
      </div>

      <div className={styles.grid}>
        <motion.ul
          className={styles.pillars}
          initial={prefersReducedMotion ? undefined : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={listVariants}
        >
          {PILLARS.map(({ title, description, Icon, tint }, index) => (
            <motion.li
              key={title}
              className={styles.pillar}
              style={{ '--tint': tint } as CSSProperties}
              custom={index}
              variants={itemVariants}
            >
              <span className={styles.pillarIcon}>
                <Icon />
              </span>
              <span className={styles.pillarTitle}>{title}</span>
              <span className={styles.pillarDescription}>{description}</span>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={0.1} className={styles.media}>
          <img src={practiceImage2Src} alt="רגע של חיבור בסיום התרגול" className={styles.mediaImage} loading="lazy" />
          <img src={practiceImage3Src} alt="מפגש קבוצתי חם בתוך התרגול" className={styles.mediaImage} loading="lazy" />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className={styles.forWhom}>
          <p className={styles.paragraph}>
            בין אם זו הפעם הראשונה שלך על המזרן, ובין אם את/ה מחפש/ת להעמיק תרגול קיים — המרחב כאן מותאם
            אליך.
          </p>
          <Button href="#contact" variant="primary">
            לשיעור התנסות
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
