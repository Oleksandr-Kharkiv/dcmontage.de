import styles from './why-us-section.module.css';

const USP = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L17.5 10.5L26 11.5L20 17.5L21.5 26L14 22L6.5 26L8 17.5L2 11.5L10.5 10.5L14 3Z"
          stroke="#f4a000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Erfahrenes Team',
    desc: 'Unsere Monteure verfügen über jahrelange Erfahrung in der DC-Montage von Photovoltaikanlagen aller Größen und Hersteller.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="#f4a000" strokeWidth="2"/>
        <path d="M14 8v6l4 2" stroke="#f4a000" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Schnelle Reaktionszeit',
    desc: 'Wir reagieren innerhalb von 48 Stunden auf Ihre Anfrage und können Projekte kurzfristig terminieren.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 14l6 6L23 8" stroke="#f4a000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Qualitätsgarantie',
    desc: 'Alle Montagen werden nach aktuellen VDE-Normen und Herstellervorgaben ausgeführt. Lückenlose Dokumentation inklusive.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11" stroke="#f4a000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 3v6h-6" stroke="#f4a000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Bundesweit tätig',
    desc: 'Wir sind in ganz Deutschland im Einsatz – von Bayern bis Hamburg, von NRW bis Sachsen. Kein Projekt ist zu weit entfernt.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="22" height="16" rx="2" stroke="#f4a000" strokeWidth="2"/>
        <path d="M3 12h22" stroke="#f4a000" strokeWidth="2"/>
        <path d="M8 17h4M16 17h4" stroke="#f4a000" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Transparente Abrechnung',
    desc: 'Klare Angebote ohne versteckte Kosten. Wir arbeiten auf Basis von Einheitspreisen oder nach Aufwand – Ihre Wahl.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3a11 11 0 100 22A11 11 0 0014 3z" stroke="#f4a000" strokeWidth="2"/>
        <path d="M10 14l2.5 2.5L18 11" stroke="#f4a000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Subunternehmer & Direkt',
    desc: 'Wir arbeiten sowohl als zuverlässiger Subunternehmer für Solarfirmen als auch direkt mit Privat- und Gewerbekunden.',
  },
];

export default function WhyUsSection() {
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.head}>
            <span className="section-label" style={{ '--clr-primary': '#f4a000' }}>Warum DCMontage?</span>
            <h2 className="section-title" id="why-title" style={{ color: '#fff' }}>
              Ihr Partner für professionelle<br />DC-Montage
            </h2>
          </div>
          <div className={styles.grid}>
            {USP.map(({ icon, title, desc }) => (
              <div key={title} className={styles.card}>
                <div className={styles.iconWrap}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
