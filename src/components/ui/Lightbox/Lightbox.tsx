import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Lightbox.module.css';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <div className={styles.frame} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="סגור">
          <span aria-hidden="true">✕</span>
        </button>
        <img src={src} alt={alt} className={styles.image} />
      </div>
    </div>,
    document.body,
  );
}
