import { motion, useReducedMotion } from 'framer-motion';
import practiceImageSrc from '../../../assets/images/practice-session.jpeg';
import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { Button } from '../../ui/Button';
import { Reveal, EASE_CALM } from '../../motion';
import { BreathIcon, MovementIcon, PresenceIcon, LeafIcon, HeartIcon } from '../../icons';
import styles from './Practice.module.css';

const PILLARS = [
  { title: 'נשימה', description: 'לב התרגול — דרך פשוטה לחזור אל הרגע הזה.', Icon: BreathIcon },
  { title: 'תנועה', description: 'זרימה עדינה שמזמינה את הגוף להשתחרר.', Icon: MovementIcon },
  { title: 'נוכחות', description: 'תשומת לב שקטה, בלי שיפוטיות ובלי מירוץ.', Icon: PresenceIcon },
  { title: 'הרפיה', description: 'מרחב לעצור, לנשום ולהניח את מה שכבד.', Icon: LeafIcon },
  { title: 'חיבור לעצמך', description: 'התרגול כדרך להכיר את עצמך מחדש.', Icon: HeartIcon },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE_CALM } },
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
          {PILLARS.map(({ title, description, Icon }) => (
            <motion.li key={title} className={styles.pillar} variants={itemVariants}>
              <span className={styles.pillarIcon}>
                <Icon />
              </span>
              <span className={styles.pillarTitle}>{title}</span>
              <span className={styles.pillarDescription}>{description}</span>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={0.1} className={styles.media}>
          <img src={practiceImageSrc} alt="תרגול יוגה תחת גג קש בטבע" className={styles.mediaImage} />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className={styles.forWhom}>
          <p className={styles.paragraph}>
            בין אם זו הפעם הראשונה שלך על המזרן, ובין אם את/ה מחפש/ת להעמיק תרגול קיים — המרחב כאן מותאם
            אליך.
          </p>
          <Button href="#contact" variant="secondary">
            לשיעור התנסות
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
