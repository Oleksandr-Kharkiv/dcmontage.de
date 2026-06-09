// Калькулятор вартості DC-Montage.
// 'use client' — потрібен, бо тримаємо стан полів (useState) і рахуємо результат (useMemo).

'use client';

import { useState, useMemo } from 'react';
import {
  KWP_RANGE,
  POWER_TIERS,
  ROOF_TYPES,
  GERUEST_OPTIONS,
} from '@/config/calculator-config';
import styles from './solar-calculator.module.css';

// Форматування цін у німецькому форматі (1.234 €), без копійок
const euro = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

const ANFRAGE = 'Auf Anfrage';

export default function SolarCalculator() {
  const [kwp, setKwp] = useState(KWP_RANGE.default);
  const [roofTypeId, setRoofTypeId] = useState(ROOF_TYPES[0].id);
  const [geruestId, setGeruestId] = useState(GERUEST_OPTIONS[0].id);

  // Обмежуємо потужність допустимим діапазоном (захист від ручного вводу поза межами)
  const handleKwpChange = (value) => {
    const parsed = parseFloat(value);
    if (Number.isNaN(parsed)) {
      setKwp(KWP_RANGE.min);
      return;
    }
    const clamped = Math.min(Math.max(parsed, KWP_RANGE.min), KWP_RANGE.max);
    setKwp(clamped);
  };

  // Усі підрахунки в одному місці, перераховуються лише при зміні залежностей
  const calc = useMemo(() => {
    const roofType = ROOF_TYPES.find((r) => r.id === roofTypeId);
    const geruest = GERUEST_OPTIONS.find((g) => g.id === geruestId);

    // tier з kWp → ставка з матриці (null = nach Absprache)
    const tier = POWER_TIERS.find((t) => kwp <= t.maxKwp);
    const montageRate = roofType.rate[tier.id];
    const montageCost = montageRate == null ? null : montageRate * kwp;
    const geruestCost = geruest.price; // null для Standgerüst

    // cost === null → позиція «Auf Anfrage» (не входить у відому суму)
    const rows = [
      {
        label: 'DC-Montage',
        detail:
          montageRate == null
            ? `${roofType.label}, ${tier.label}`
            : `${roofType.label}, ${tier.label} — ${montageRate} €/kWp`,
        cost: montageCost,
      },
      { label: 'Gerüst', detail: geruest.label, cost: geruestCost },
    ];

    const hasAnfrage = rows.some((r) => r.cost === null);
    const knownTotal = rows.reduce((sum, r) => sum + (r.cost ?? 0), 0);

    return {
      tier,
      rows,
      hasAnfrage,
      knownTotal,
      roofLabel: roofType.label,
      geruestLabel: geruest.label,
    };
  }, [kwp, roofTypeId, geruestId]);

  // Текст підсумкової суми — використовуємо і в UI, і в посиланні на форму
  const summeText = calc.hasAnfrage
    ? `ab ${euro.format(calc.knownTotal)}`
    : euro.format(calc.knownTotal);

  // Посилання на форму контакту з конфігурацією в query-параметрах.
  // Форма (ContactForm) прочитає їх і пре-заповнить поле «Nachricht».
  // Hash #kontakt має бути в кінці URL, щоб спрацював scroll до секції.
  const contactParams = new URLSearchParams({
    kwp: kwp.toLocaleString('de-DE'),
    dach: calc.roofLabel,
    geruest: calc.geruestLabel,
    summe: summeText,
  });
  const contactHref = `/?${contactParams.toString()}#kontakt`;

  return (
    <div className={styles.calculator}>
      {/* Поля конфігурації */}
      <div className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="kwp" className={styles.label}>
            Anlagenleistung (kWp)
          </label>
          <input
            id="kwp"
            type="number"
            className={styles.input}
            min={KWP_RANGE.min}
            max={KWP_RANGE.max}
            step={KWP_RANGE.step}
            value={kwp}
            onChange={(e) => handleKwpChange(e.target.value)}
          />
          <span className={styles.hint}>
            Leistungsklasse: <strong>{calc.tier.label}</strong>
          </span>
        </div>

        <div className={styles.field}>
          <label htmlFor="roof" className={styles.label}>
            Dachart
          </label>
          <select
            id="roof"
            className={styles.select}
            value={roofTypeId}
            onChange={(e) => setRoofTypeId(e.target.value)}
          >
            {ROOF_TYPES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="geruest" className={styles.label}>
            Gerüst
          </label>
          <select
            id="geruest"
            className={styles.select}
            value={geruestId}
            onChange={(e) => setGeruestId(e.target.value)}
          >
            {GERUEST_OPTIONS.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
                {g.price > 0 ? ` — ${euro.format(g.price)}` : ''}
                {g.price === null ? ' — auf Anfrage' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Підсумок */}
      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>Ihre Kalkulation</h2>
        <p className={styles.power}>
          Anlagenleistung: <strong>{kwp.toLocaleString('de-DE')} kWp</strong>
        </p>

        <ul className={styles.rows}>
          {calc.rows.map((row) => (
            <li key={row.label} className={styles.row}>
              <span className={styles.rowLabel}>
                {row.label}
                <span className={styles.rowDetail}>{row.detail}</span>
              </span>
              <span className={styles.rowCost}>
                {row.cost === null ? (
                  <span className={styles.anfrage}>{ANFRAGE}</span>
                ) : (
                  euro.format(row.cost)
                )}
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.total}>
          <span>Gesamtsumme</span>
          <span className={styles.totalCost}>{summeText}</span>
        </div>

        <p className={styles.note}>
          {calc.hasAnfrage
            ? 'Einige Positionen werden individuell kalkuliert (auf Anfrage). Fordern Sie ein genaues Angebot an.'
            : 'Alle Preise sind unverbindliche Richtwerte für die reine DC-Montage zzgl. MwSt.'}
        </p>

        <a href={contactHref} className={`btn btn-primary ${styles.cta}`}>
          Kostenloses Angebot anfordern
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
