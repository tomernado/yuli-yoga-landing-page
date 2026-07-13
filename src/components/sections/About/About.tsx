import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { PlaceholderImage } from '../../ui/PlaceholderImage';
import { Reveal } from '../../motion';
import styles from './About.module.css';

export function About() {
  return (
    <Section id="about" tone="alt">
      <div className={styles.grid}>
        <Reveal className={styles.media}>
          <div className={styles.portraitWrap}>
            <PlaceholderImage label="פורטרט של יולי" ratio="3 / 4" />
            <div className={styles.badge}>
              <PlaceholderImage label="תעודת הסמכה" ratio="1 / 1" />
            </div>
          </div>
        </Reveal>

        <div className={styles.content}>
          <Reveal>
            <Eyebrow>עליי</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className={styles.heading}>יולי</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className={styles.paragraph}>
              היוגה שלי נולדה מתוך צורך אישי להאט, להקשיב לגוף ולמצוא רגע של שקט בתוך יום עמוס. עם השנים היא הפכה
              לדרך חיים — ולדרך שבה אני הכי אוהבת ללוות אחרים.
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
    </Section>
  );
}
