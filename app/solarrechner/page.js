// Сторінка калькулятора вартості DC-Montage (/solarrechner).
// Окрема сторінка (НЕ секція головної) — додатковий SEO-вхід і окрема точка конверсії.
// force-static — контент і матриця цін статичні, генеруємо HTML один раз під час білду.

import Link from 'next/link';
import NavBar from '@/components/nav-bar/nav-bar';
import SiteFooter from '@/components/site-footer/site-footer';
import SolarCalculator from '@/components/solar-calculator/solar-calculator';
import PriceInfo from '@/components/solar-calculator/price-info';
import styles from './solarrechner.module.css';

export const metadata = {
  title: 'Montagekosten-Rechner | DC-Montage Preise berechnen',
  description:
    'PV-Montagekosten in Sekunden berechnen: Dachart und Anlagenleistung wählen und den Richtpreis für die DC-Montage Ihrer Photovoltaikanlage erhalten – bundesweit.',
  keywords: [
    'Montagekosten',
    'PV Rechner',
    'DC-Montage Preis',
    'Photovoltaik Montage Kosten',
    'Solaranlage montieren Kosten',
  ],
  alternates: { canonical: '/solarrechner' },
};

export const dynamic = 'force-static';

export default function SolarrechnerPage() {
  return (
    <>
      <NavBar solidBg />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.back}>
            <Link href="/" className={styles.backLink}>← Zurück zur Startseite</Link>
          </div>

          {/* Заголовок сторінки */}
          <header className={styles.header}>
            <span className="section-label">Montagekosten-Rechner</span>
            <h1 className={styles.title}>
              DC-Montage Kosten in Sekunden berechnen
            </h1>
            <p className={styles.lead}>
              Wählen Sie Dachart, Anlagenleistung und Gerüst – Sie erhalten sofort
              einen unverbindlichen Richtpreis für die reine DC-Montage Ihrer
              Photovoltaikanlage. Für ein verbindliches Angebot kontaktieren Sie uns.
            </p>
          </header>

          {/* Калькулятор */}
          <SolarCalculator />

          {/* Пояснення: що входить у ціну / від чого залежить */}
          <PriceInfo />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
