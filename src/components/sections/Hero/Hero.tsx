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
  const blobY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 50]);

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <Container className={styles.grid}>
        <div className={styles.content}>
          <Reveal>
            <Logo className={styles.logo} />
          </Reveal>
          <Reveal delay={0.05}>
            <Eyebrow>יולי יוגה — תרגול אישי</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className={styles.heading}>מרחב שקט לנשום, לזוז ולחזור אל עצמך</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className={styles.description}>
              יולי מלווה אתכם בתרגול יוגה אישי ורגוע, בקצב שלכם — לבהירות, לגמישות ולנוכחות מחודשת בגוף ובנפש.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
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

        <Reveal delay={0.15} className={styles.imageWrap}>
          <motion.div className={styles.blob} style={{ y: blobY }} aria-hidden="true" />
          <PlaceholderImage label="תמונה: תרגול בסטודיו" ratio="4 / 5" className={styles.image} />
        </Reveal>
      </Container>
    </section>
  );
}
