import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';
import { Eyebrow } from '../../ui/Eyebrow';
import { PlaceholderImage } from '../../ui/PlaceholderImage';
import { Logo } from '../../ui/Logo';
import { Reveal } from '../../motion';
import { CONTACT } from '../../../constants/contact';
import styles from './Hero.module.css';

const HIGHLIGHTS = ['מתאים לכל גיל ולכל רמה', 'גם בלי ניסיון קודם', 'קבוצות קטנות ואווירה אישית'];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 60]);
  const blobYSlow = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 28]);

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <div className={`${styles.ambient} breathe`} aria-hidden="true" />
      <Container className={styles.grid}>
        <div className={styles.content}>
          <Reveal className={styles.brandRow}>
            <span className={styles.logoHalo}>
              <Logo className={styles.logo} />
            </span>
            <span className={styles.wordmark}>יולי יוגה</span>
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow>האטה · יין יוגה · נשימה · תנועה</Eyebrow>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className={styles.heading}>מקום לעצור, לנשום ולהתחבר לעצמך.</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={styles.description}>מורה להאטה וין יוגה, בדגש על זכות הבחירה בטוב.</p>
          </Reveal>
          <Reveal delay={0.26}>
            <ul className={styles.highlights}>
              {HIGHLIGHTS.map((item) => (
                <li key={item} className={styles.highlight}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.32}>
            <div className={styles.actions}>
              <Button href={CONTACT.whatsapp} external>
                קביעת שיעור ראשון
              </Button>
              <Button href="#about" variant="secondary">
                להכיר את יולי
              </Button>
            </div>
          </Reveal>
        </div>

        <div className={styles.mediaCol}>
          <Reveal delay={0.18} className={styles.imageWrap}>
            <motion.div className={styles.blobGold} style={{ y: blobY }} aria-hidden="true" />
            <motion.div className={styles.blobRose} style={{ y: blobYSlow }} aria-hidden="true" />
            <PlaceholderImage label="תמונה: תרגול בסטודיו" ratio="4 / 5" tone="gold" className={styles.image} />
          </Reveal>
          <Reveal delay={0.4}>
            <p className={styles.caption}>בית של נשימה, תנועה, שהייה, הרפיה, שלווה — והמון אהבה.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
