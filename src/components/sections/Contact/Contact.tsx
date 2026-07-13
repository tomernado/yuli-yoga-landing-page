import { Section } from '../../layout/Section';
import { Eyebrow } from '../../ui/Eyebrow';
import { ContactCard } from '../../ui/ContactCard';
import { Reveal } from '../../motion';
import { WhatsAppIcon, UsersIcon, InstagramIcon, PhoneIcon } from '../../icons';
import { CONTACT } from '../../../constants/contact';
import styles from './Contact.module.css';

const CHANNELS = [
  {
    icon: <WhatsAppIcon />,
    title: 'וואטסאפ',
    subtitle: 'לשיחה אישית וקביעת שיעור',
    href: CONTACT.whatsapp,
    external: true,
    featured: true,
  },
  {
    icon: <UsersIcon />,
    title: 'קהילת הוואטסאפ',
    subtitle: 'עדכונים, השראה ותרגולים',
    href: CONTACT.whatsappCommunity,
    external: true,
  },
  {
    icon: <InstagramIcon />,
    title: 'אינסטגרם',
    subtitle: 'עקבו אחרי התרגול',
    href: CONTACT.instagram,
    external: true,
  },
  {
    icon: <PhoneIcon />,
    title: 'טלפון',
    subtitle: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    external: false,
  },
];

export function Contact() {
  return (
    <Section id="contact" tone="alt" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.header}>
        <Reveal>
          <Eyebrow>בואו נתחיל</Eyebrow>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className={styles.heading}>מוכנים לתרגול הראשון שלכם?</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className={styles.paragraph}>
            כתבו לי כמה מילים, ונמצא יחד את המסגרת והזמן שמתאימים לכם. אשמח ללוות אתכם צעד אחר צעד.
          </p>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {CHANNELS.map((channel, index) => (
          <Reveal key={channel.title} delay={0.16 + index * 0.06}>
            <ContactCard {...channel} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
