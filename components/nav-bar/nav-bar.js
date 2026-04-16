// Навігаційна панель сайту.
// 'use client' — потрібен бо використовуємо useState та useEffect (браузерні хуки).
// Серверні компоненти не можуть мати стан або слухати події браузера.

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './nav-bar.module.css';

// Список посилань навігації — href вказують на секції сторінки через якір (#)
const NAV_LINKS = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
];

// solidBg — якщо true, навбар одразу показується з білим фоном (для сторінок без темного hero)
export default function NavBar({ solidBg = false }) {
  // scrolled — чи прокрутив користувач сторінку більше ніж на 40px
  // (змінює стиль хедера: додає тінь/фон через CSS клас)
  const [scrolled, setScrolled] = useState(solidBg);

  // menuOpen — чи відкрите мобільне меню (бургер)
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Слухаємо прокрутку сторінки
    // passive: true — оптимізація для плавного скролу (браузер не чекає на JS)
    const onScroll = () => setScrolled(solidBg || window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Прибираємо слухач при розмонтуванні компонента (очищення пам'яті)
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Закриває мобільне меню після кліку на посилання
  const close = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={`container ${styles.nav}`} aria-label="Hauptnavigation">
        {/* Логотип — SVG іконка + текст, клікабельний, веде на головну */}
        <Link href="/" className={styles.logo} aria-label="DCMontage – Startseite">
          <span className={styles.logoIcon} aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#f4a000"/>
              <path d="M8 22L16 10L24 22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 19h10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span className={styles.logoText}>
            <strong>DC</strong>Montage
          </span>
        </Link>

        {/* Десктопні посилання (видимі на великих екранах) */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Кнопка CTA (заклик до дії) — телефонний номер */}
        <a href="tel:+4969" className={`btn btn-primary ${styles.cta}`}>
          Angebot anfordern
        </a>

        {/* Бургер-кнопка для мобільного меню */}
        <button
          className={styles.burger}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
          aria-controls="mob-menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
        </button>
      </nav>

      {/* Мобільне меню — показується/ховається через CSS клас mobOpen */}
      <div
        id="mob-menu"
        className={`${styles.mobMenu} ${menuOpen ? styles.mobOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.mobLink} onClick={close}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#kontakt" className={`btn btn-primary ${styles.mobCta}`} onClick={close}>
              Angebot anfordern
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
