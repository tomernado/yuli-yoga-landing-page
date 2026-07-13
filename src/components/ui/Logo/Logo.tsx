import logoSrc from '../../../assets/images/logo.jpeg';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const classes = [styles.logo, className].filter(Boolean).join(' ');
  return <img src={logoSrc} alt="יולי יוגה" className={classes} width={44} height={44} />;
}
