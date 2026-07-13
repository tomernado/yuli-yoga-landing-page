import { Container } from '../Container';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span className={styles.wordmark}>יולי יוגה</span>
        <span className={styles.muted}>© {year} כל הזכויות שמורות</span>
      </Container>
    </footer>
  );
}
