import { useState } from 'react';
import portraitSrc from '../../../assets/images/yuli-portrait.jpeg';
import certificateSrc from '../../../assets/images/yuli-certificate.jpeg';
import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { Lightbox } from '../../ui/Lightbox';
import { ImageIcon } from '../../icons';
import { Reveal } from '../../motion';
import styles from './About.module.css';

const CERTIFICATE_ALT = 'תעודת ההסמכה של יולי כמדריכת יוגה';

export function About() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  return (
    <Section id="about" tone="alt" className={styles.section}>
      <div className={`${styles.ambient} breathe`} aria-hidden="true" />
      <div className={styles.grid}>
        <Reveal className={styles.media}>
          <img
            src={portraitSrc}
            alt="יולי מחייכת ומחזיקה את תעודת ההסמכה שלה כמדריכת יוגה"
            className={styles.portrait}
          />
          <button
            type="button"
            onClick={() => setIsCertificateOpen(true)}
            className={styles.certificateLink}
          >
            <ImageIcon className={styles.certificateIcon} />
            צפו בתעודת ההסמכה
          </button>
        </Reveal>

        <div className={styles.content}>
          <Reveal>
            <Eyebrow>עליי</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className={styles.heading}>היי, אני יולי</h2>
          </Reveal>
          <div className={styles.textBlock}>
            <span className={styles.quoteMark} aria-hidden="true">
              ”
            </span>
            <Reveal delay={0.14}>
              <p className={styles.paragraph}>
                היוגה שלי נולדה מתוך צורך אישי להאט, להקשיב לגוף ולמצוא רגע של שקט בתוך יום עמוס. עם השנים היא
                הפכה לדרך חיים — ולדרך שבה אני הכי אוהבת ללוות אחרים.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className={styles.paragraph}>
                אני מאמינה שתרגול טוב לא נמדד בגמישות או בביצוע, אלא ביכולת להיות נוכחים עם עצמנו. כל שיעור נבנה
                בעדינות ובקצב אישי, מתוך הקשבה אמיתית למי שנמצא־ת מולי.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {isCertificateOpen && (
        <Lightbox src={certificateSrc} alt={CERTIFICATE_ALT} onClose={() => setIsCertificateOpen(false)} />
      )}
    </Section>
  );
}
