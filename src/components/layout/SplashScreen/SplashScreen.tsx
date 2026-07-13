import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import logoSrc from '../../../assets/images/logo.jpeg';
import styles from './SplashScreen.module.css';

const DISPLAY_MS = 2500;
const FADE_MS = 500;

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), DISPLAY_MS);
    const removeTimer = setTimeout(
      () => setVisible(false),
      DISPLAY_MS + (prefersReducedMotion ? 0 : FADE_MS),
    );
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={[styles.splash, fadingOut && styles.fadingOut].filter(Boolean).join(' ')}
      style={{ transitionDuration: prefersReducedMotion ? '0s' : undefined }}
      role="status"
      aria-label="טוען את האתר"
    >
      <img
        src={logoSrc}
        alt="יולי יוגה"
        className={[styles.logo, !prefersReducedMotion && 'breathe'].filter(Boolean).join(' ')}
      />
    </div>
  );
}
