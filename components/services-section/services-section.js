// Секція послуг — показує три основні напрямки роботи компанії.
// Серверний компонент — рендериться на сервері, зображення оптимізуються через Next.js Image.

import Image from 'next/image';
import styles from './services-section.module.css';

// Дані послуг — щоб додати нову послугу, просто додай об'єкт до цього масиву
const SERVICES = [
  {
    id: 'aufdach',
    title: 'DC-Montage Aufdachanlagen',
    desc: 'Professionelle Montage von PV-Aufdachanlagen für Einfamilienhäuser, Mehrfamilienhäuser und Gewerbebauten. Wir übernehmen die komplette DC-seitige Installation.',
    img: 'https://mega-solar.online/wp-content/uploads/2023/12/9255b318-4df4-4ad8-8dad-91b89809f771.jpeg',
    features: ['Modulverlegung & Befestigung', 'DC-Verkabelung', 'Wechselrichter-Anbindung', 'Dokumentation'],
  },
  {
    id: 'freifläche',
    title: 'Freiflächenanlagen',
    desc: 'Montage von Freiflächen-Photovoltaikanlagen und Agri-PV-Projekten für Projektentwickler und Industriekunden – deutschlandweit, effizient und termingerecht.',
    img: 'https://mega-solar.online/wp-content/uploads/2023/12/6d36b37f-cc16-47af-9029-bfaf1b071cd8.jpeg',
    features: ['Rammarbeiten & Unterkonstruktion', 'Modulbestückung', 'DC-Strangsicherung', 'Qualitätsprüfung'],
  },
  {
    id: 'service',
    title: 'Wartung & Service',
    desc: 'Regelmäßige Überprüfung, Reinigung und Instandhaltung bestehender Photovoltaikanlagen. Schnelle Reaktionszeit, kurzfristig innerhalb von 48 Stunden.',
    img: 'https://mega-solar.online/wp-content/uploads/2023/12/IMG_8919-768x1024.jpeg',
    features: ['Sichtprüfung & Messung', 'Fehlerdiagnose', 'Modulreinigung', 'Bericht & Protokoll'],
  },
];

export default function ServicesSection() {
  return (
    // id="leistungen" — якір для навігації (#leistungen у nav-bar.js)
    <section id="leistungen" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="section-label">Leistungen</span>
          <h2 className="section-title">Was wir für Sie leisten</h2>
          <p className="section-desc">
            Als spezialisiertes Montageteam übernehmen wir die DC-seitige Installation
            von Photovoltaikanlagen aller Größen – zuverlässig und nach höchsten Standards.
          </p>
        </div>

        {/* Сітка карток послуг */}
        <div className={styles.grid}>
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Картка окремої послуги — зображення + заголовок + опис + список особливостей
function ServiceCard({ title, desc, img, features }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw" // підказка браузеру для вибору розміру зображення
          style={{ objectFit: 'cover' }}
          loading="lazy" // завантажується лише коли картка потрапляє у viewport
        />
        <div className={styles.imgOverlay} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
        <ul className={styles.featureList}>
          {features.map((f) => (
            <li key={f} className={styles.featureItem}>
              <span className={styles.check} aria-hidden="true">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
