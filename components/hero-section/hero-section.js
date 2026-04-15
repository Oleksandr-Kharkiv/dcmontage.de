import Image from 'next/image';
import styles from './hero-section.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background image */}
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="https://mega-solar.online/wp-content/uploads/2023/12/IMG_9657-edited-scaled.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          quality={85}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#f4a000"/>
            <path d="M5 8.5L7 10.5L11 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Zertifiziertes Montageteam
        </div>

        <h1 className={styles.title}>
          DC-Montage von{' '}
          <span className={styles.accent}>Photovoltaikanlagen</span>{' '}
          in ganz Deutschland
        </h1>

        <p className={styles.subtitle}>
          Wir montieren Ihre Solaranlage schnell, sicher und professionell –
          bundesweit im Einsatz. Als Subunternehmer für Solarunternehmen
          und direkt für Privat- und Gewerbekunden.
        </p>

        <div className={styles.actions}>
          <a href="#kontakt" className="btn btn-primary">
            Kostenloses Angebot
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#leistungen" className="btn btn-ghost-white">
            Unsere Leistungen
          </a>
        </div>

        <div className={styles.stats}>
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <strong className={styles.statValue}>{value}</strong>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

const STATS = [
  { value: '500+', label: 'Projekte abgeschlossen' },
  { value: '100%', label: 'Bundesweit tätig' },
  { value: '48h', label: 'Reaktionszeit' },
];
