// Головна секція (hero) — перше що бачить відвідувач.
// Серверний компонент (без 'use client') — рендериться на сервері, добре для SEO.

import Image from 'next/image';
import AnimatedCounter from '@/components/animated-counter/animated-counter';
import styles from './hero-section.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Фонове зображення з затемненням (overlay).
          aria-hidden="true" — прихований від скрін-рідерів, бо це декоративний елемент. */}
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="https://mega-solar.online/wp-content/uploads/2023/12/IMG_9657-edited-scaled.jpeg"
          alt=""
          fill           // заповнює весь батьківський контейнер
          priority       // завантажується першим (LCP — найбільший елемент на екрані)
          sizes="100vw"  // займає 100% ширини екрану
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          quality={85}   // якість стиснення (налаштована в next.config.mjs)
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        {/* Бейдж "Zertifiziertes Montageteam" */}
        <div className={styles.badge}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#f4a000"/>
            <path d="M5 8.5L7 10.5L11 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Zertifiziertes Montageteam
        </div>

        {/* H1 — головний заголовок сторінки, важливий для SEO */}
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

        {/* Кнопки CTA (заклики до дії) */}
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

        {/* Статистика компанії з анімованими лічильниками */}
        <div className={styles.stats}>
          {STATS.map(({ value, suffix, label }) => (
            <div key={label} className={styles.stat}>
              <strong className={styles.statValue}>
                <AnimatedCounter value={value} suffix={suffix} />
              </strong>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Анімований індикатор прокрутки вниз */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

// Дані для блоку статистики — value це число для анімації, suffix — символ після числа
const STATS = [
  { value: 500, suffix: '+', label: 'Projekte abgeschlossen' },
  { value: 100, suffix: '%', label: 'Bundesweit tätig' },
  { value: 48, suffix: 'h', label: 'Reaktionszeit' },
];
