'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './nav-bar.module.css';

const NAV_LINKS = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#referenzen', label: 'Referenzen' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={`container ${styles.nav}`} aria-label="Hauptnavigation">
        {/* Logo */}
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

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="tel:+4969" className={`btn btn-primary ${styles.cta}`}>
          Angebot anfordern
        </a>

        {/* Burger */}
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

      {/* Mobile menu */}
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
