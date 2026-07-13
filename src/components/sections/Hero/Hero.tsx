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

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 60]);
  const blobYSlow = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 28]);

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <div className={styles.ambient} aria-hidden="true" />
      <Container className={styles.grid}>
        <div className={styles.content}>
          <Reveal className={styles.brandRow}>
            <span className={styles.logoHalo}>
              <Logo className={styles.logo} />
            </span>
            <span className={styles.wordmark}>יולי יוגה</span>
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow>תרגול אישי ורגוע</Eyebrow>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className={styles.heading}>מרחב שקט לנשום, לזוז ולחזור אל עצמך</h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className={styles.description}>
              יולי מלווה אתכם בתרגול יוגה אישי ורגוע, בקצב שלכם — לבהירות, לגמישות ולנוכחות מחודשת בגוף ובנפש.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
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

        <Reveal delay={0.18} className={styles.imageWrap}>
          <motion.div className={styles.blobGold} style={{ y: blobY }} aria-hidden="true" />
          <motion.div className={styles.blobRose} style={{ y: blobYSlow }} aria-hidden="true" />
          <PlaceholderImage label="תמונה: תרגול בסטודיו" ratio="4 / 5" tone="gold" className={styles.image} />
        </Reveal>
      </Container>
    </section>
  );
}
