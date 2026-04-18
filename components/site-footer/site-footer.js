// Футер сайту — нижня частина з навігацією, контактами та копірайтом.
// Серверний компонент — статичний, не потребує браузерних хуків.

import Link from 'next/link';
import styles from './site-footer.module.css';

export default function SiteFooter() {
  // Поточний рік для копірайту — автоматично оновлюється щороку
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          {/* Бренд — логотип + короткий слоган */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="DCMontage – Startseite">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#f4a000"/>
                <path d="M8 22L16 10L24 22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 19h10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <span><strong>DC</strong>Montage</span>
            </Link>
            <p className={styles.tagline}>
              Professionelle DC-Montage von Photovoltaikanlagen – bundesweit.
            </p>
          </div>

          {/* Навігаційні посилання — якорі на секції головної сторінки */}
          <nav aria-label="Footer Navigation">
            <p className={styles.colTitle}>Navigation</p>
            <ul className={styles.colList}>
              {[
                ['/#leistungen', 'Leistungen'],
                ['/#referenzen', 'Referenzen'],
                ['/#ueber-uns', 'Über uns'],
                ['/#kontakt', 'Kontakt'],
              ].map(([href, label]) => (
                <li key={href}><a href={href} className={styles.footLink}>{label}</a></li>
              ))}
            </ul>
          </nav>

          {/* Юридичні сторінки — окремі маршрути (/impressum, /datenschutz) */}
          <nav aria-label="Rechtliches">
            <p className={styles.colTitle}>Rechtliches</p>
            <ul className={styles.colList}>
              {[
                ['/impressum', 'Impressum'],
                ['/datenschutz', 'Datenschutz'],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className={styles.footLink}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          {/* Контактна інформація */}
          <div>
            <p className={styles.colTitle}>Kontakt</p>
            <address className={styles.addr}>
              DCMontage bei Solaringenieur<br />
              Löhnunggasse 19<br />
              60386 Offenbach am Main
            </address>
            <a href="mailto:office@solaringenieur.com" className={styles.footLink} style={{ marginTop: '0.75rem', display: 'block' }}>
              office@solaringenieur.com
            </a>
          </div>
        </div>

        {/* Нижній рядок з копірайтом */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} DCMontage bei Solaringenieur. Alle Rechte vorbehalten.
          </p>
          <p className={styles.copy}>
            Offenbach am Main, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}
