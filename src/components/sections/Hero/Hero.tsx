import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import heroPhotoSrc from '../../../assets/images/hero-photo.jpeg';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';
import { Eyebrow } from '../../ui/Eyebrow';
import { Reveal } from '../../motion';
import { CONTACT } from '../../../constants/contact';
import styles from './Hero.module.css';

const HIGHLIGHTS = ['מתאים לכל גיל', 'מתאים גם למי שאין ניסיון', 'קבוצות קטנות ואווירה נעימה'];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 90]);

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <motion.img
        src={heroPhotoSrc}
        alt="יולי בישיבת מדיטציה שקטה, ידיים בתנוחת תפילה"
        className={styles.bgImage}
        style={{ y: photoY }}
        fetchPriority="high"
      />
      <div className={styles.scrim} aria-hidden="true" />

      <Container className={styles.content}>
        <Reveal>
          <Eyebrow className={styles.eyebrow}>האטה · יין יוגה · נשימה · תנועה</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className={styles.heading}>
            מקום לעצור,
            <br />
            לנשום
            <br />
            ולהתחבר לעצמך.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className={styles.description}>מורה להאטה וין יוגה, בדגש על זכות הבחירה בטוב.</p>
        </Reveal>
        <Reveal delay={0.24}>
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
            <Button href={CONTACT.whatsapp} external className={styles.actionBtn}>
              קביעת שיעור ראשון
            </Button>
            <Button href="#about" variant="secondary" className={`${styles.actionBtn} ${styles.secondaryOnPhoto}`}>
              להכיר את יולי
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
