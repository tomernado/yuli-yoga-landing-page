import { Button } from '../../ui/Button';
import { Container } from '../Container';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '#about', label: 'עליי' },
  { href: '#practice', label: 'התרגול' },
  { href: '#classes', label: 'שיעורים' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#contact', label: 'צור קשר' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.brand}>
          יולי יוגה
        </a>
        <nav className={styles.nav} aria-label="ניווט ראשי">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="#contact" variant="primary" className={styles.cta}>
          בואו נתחיל
        </Button>
      </Container>
    </header>
  );
}
