// Пояснювальний блок під калькулятором: що входить / що не входить у ціну DC-Montage
// та від чого вона залежить. Серверний компонент — статичний контент, без інтерактиву.
// Текст навмисно загальний (без конкретних зобов'язань), точний обсяг — за домовленістю.

import styles from './price-info.module.css';

// Що входить у вказану ціну €/kWp
const INCLUDED = [
  'Montage der Unterkonstruktion (Dachhaken bzw. Schienen)',
  'Verlegung und Befestigung der Solarmodule',
  'DC-seitige String-Verkabelung bis zum Wechselrichter',
  'Fachgerechte Ausführung nach gültigen Normen',
];

// Що НЕ входить — окремі позиції / на запит
const EXCLUDED = [
  'AC-Anschluss & Elektroinstallation (durch Fachbetrieb)',
  'Anmeldung beim Netzbetreiber / Marktstammdatenregister',
  'Lieferung der Module und Komponenten',
  'Demontage von Altanlagen, Dacharbeiten',
];

// Фактори, що впливають на остаточну ціну
const FACTORS = [
  'Dachart',
  'Anlagenleistung (kWp)',
  'Gerüstbedarf',
  'Region & Anfahrt',
  'Dachneigung & Zugänglichkeit',
];

export default function PriceInfo() {
  return (
    <section className={styles.info} aria-label="Was ist im Preis enthalten">
      <div className={styles.cols}>
        <div className={`${styles.card} ${styles.included}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.iconCheck} aria-hidden="true">✓</span>
            In der DC-Montage enthalten
          </h3>
          <ul className={styles.list}>
            {INCLUDED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={`${styles.card} ${styles.excluded}`}>
          <h3 className={styles.cardTitle}>
            <span className={styles.iconCross} aria-hidden="true">✕</span>
            Nicht enthalten (auf Anfrage)
          </h3>
          <ul className={styles.list}>
            {EXCLUDED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.factors}>
        <strong>Preisfaktoren:</strong> {FACTORS.join(' · ')}. Die angezeigten
        Werte sind unverbindliche Richtpreise – der genaue Preis wird individuell
        kalkuliert.
      </p>
    </section>
  );
}
