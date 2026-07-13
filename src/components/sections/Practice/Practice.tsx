import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { Button } from '../../ui/Button';
import { PlaceholderImage } from '../../ui/PlaceholderImage';
import { Reveal, EASE_CALM } from '../../motion';
import styles from './Practice.module.css';

const PILLARS = [
  { title: 'נשימה', description: 'לב התרגול — דרך פשוטה לחזור אל הרגע הזה.' },
  { title: 'תנועה', description: 'זרימה עדינה שמזמינה את הגוף להשתחרר.' },
  { title: 'נוכחות', description: 'תשומת לב שקטה, בלי שיפוטיות ובלי מירוץ.' },
  { title: 'הרפיה', description: 'מרחב לעצור, לנשום ולהניח את מה שכבד.' },
  { title: 'חיבור לעצמך', description: 'התרגול כדרך להכיר את עצמך מחדש.' },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_CALM } },
};

export function Practice() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="practice">
      <div className={styles.grid}>
        <div className={styles.content}>
          <Reveal>
            <Eyebrow>התרגול</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className={styles.heading}>נשימה, תנועה ונוכחות</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className={styles.intro}>
              כל שיעור נע בעדינות בין נשימה מודעת, תנועה זורמת ורגעים של מנוחה. המטרה אינה תנוחה מושלמת —
              אלא לשוב אל הגוף, ולהרגיש בו בבית.
            </p>
          </Reveal>

          <motion.ul
            className={styles.pillars}
            initial={prefersReducedMotion ? undefined : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            variants={listVariants}
          >
            {PILLARS.map((pillar) => (
              <motion.li key={pillar.title} className={styles.pillar} variants={itemVariants}>
                <span className={styles.pillarMark} aria-hidden="true" />
                <span>
                  <span className={styles.pillarTitle}>{pillar.title}</span>
                  <span className={styles.pillarDescription}>{pillar.description}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>

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
        </div>

        <Reveal delay={0.1} className={styles.media}>
          <PlaceholderImage label="תמונה: מהתרגול" ratio="3 / 2" />
        </Reveal>
      </div>
    </Section>
  );
}
