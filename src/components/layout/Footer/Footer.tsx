import { Container } from '../Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.credit}>
          <a
            href="https://www.linkedin.com/in/tomer-cohen-486457346/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            נבנה על ידי תומר כהן
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="https://web4-you.vercel.app/#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            WEB4YOU
          </a>
        </div>
      </Container>
    </footer>
  );
}
