import Image from 'next/image';
import styles from './about-section.module.css';

export default function AboutSection() {
  return (
    <section id="ueber-uns" className={styles.section} aria-labelledby="about-title">
      <div className="container">
        <div className={styles.layout}>
          {/* Image side */}
          <div className={styles.imgSide}>
            <div className={styles.imgMain}>
              <Image
                src="https://mega-solar.online/wp-content/uploads/2023/12/b1622af7-51c3-4cfb-9a55-f4ecd926f3b8-edited-768x1024.jpeg"
                alt="DCMontage Team bei der Arbeit"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
            <div className={styles.badge}>
              <strong className={styles.badgeValue}>Offenbach am Main</strong>
              <span className={styles.badgeLabel}>Unser Standort – bundesweit tätig</span>
            </div>
          </div>

          {/* Text side */}
          <div className={styles.textSide}>
            <span className="section-label">Über uns</span>
            <h2 className="section-title" id="about-title">
              DCMontage bei Solaringenieur
            </h2>
            <p className={styles.lead}>
              Wir sind ein auf DC-Montage spezialisiertes Handwerksunternehmen mit
              Sitz in Offenbach am Main. Unser Team ist bundesweit tätig und bringt
              jahrelange Erfahrung in der Installation von Photovoltaikanlagen mit.
            </p>
            <p className={styles.body}>
              Als zuverlässiger Partner für Solarunternehmen übernehmen wir die
              komplette DC-seitige Montage – von der Befestigung der Unterkonstruktion
              bis zur Verkabelung und Anschluss. Wir arbeiten präzise, schnell und
              nach höchsten Qualitätsstandards.
            </p>
            <p className={styles.body}>
              Neben der Tätigkeit als Subunternehmer betreuen wir auch direkte
              Kunden aus dem Privat- und Gewerbebereich. Kurze Wege, transparente
              Kommunikation und verlässliche Terminplanung zeichnen uns aus.
            </p>

            <div className={styles.address}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2C7.2 2 5 4.2 5 7c0 4.2 5 10 5 10s5-5.8 5-10c0-2.8-2.2-5-5-5z"
                  stroke="#f4a000" strokeWidth="1.5"/>
                <circle cx="10" cy="7" r="2" stroke="#f4a000" strokeWidth="1.5"/>
              </svg>
              <address className={styles.addressText}>
                Löhnunggasse 19, 60386 Offenbach am Main
              </address>
            </div>

            <a href="#kontakt" className="btn btn-primary" style={{ marginTop: 'var(--space-2)' }}>
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
