// config/calculator-config.js
// Хардкоджені дані калькулятора DC-Montage. Той самий формат матриці, що в
// solaringenieur.com — довгострокова ціль перенести в WordPress CMS як єдине джерело.
//
// На відміну від solaringenieur.com тут НЕ обираємо модулі/інвертор/батареї —
// профіль dcmontage.de лише монтаж. Тому потужність системи (kWp) клієнт вводить напряму.

// ----- Anlagenleistung (kWp) -----
// Користувач вводить потужність системи напряму — з неї визначаємо tier і рахуємо €/kWp.
export const KWP_RANGE = {
  min: 1,
  max: 200,
  default: 10,
  step: 0.5,
};

// ----- DC-Montage: матриця Dachart × Leistungsklasse (€/kWp) -----

// Діапазони потужності (tier визначається автоматично з kWp системи).
// Порядок ВАЖЛИВИЙ — від меншого до більшого; шукаємо перший, де kwp <= maxKwp.
export const POWER_TIERS = [
  { id: 'bis6', label: 'bis 6 kWp', maxKwp: 6 },
  { id: 'bis30', label: 'bis 30 kWp', maxKwp: 30 },
  { id: 'bis60', label: 'bis 60 kWp', maxKwp: 60 },
  { id: 'bis100', label: 'bis 100 kWp', maxKwp: 100 },
  { id: 'ab100', label: 'ab 100 kWp', maxKwp: Infinity },
];

// Ставка €/kWp за типом даху та tier. null = «nach Absprache» або недоступна комбінація
// (Schieferdach bis100/ab100, Fassade bis60+) → у калькуляторі показуємо «Auf Anfrage».
export const ROOF_TYPES = [
  {
    id: 'ziegel',
    label: 'Ziegeldach',
    rate: { bis6: 250, bis30: 200, bis60: 170, bis100: 140, ab100: null },
  },
  {
    id: 'flach',
    label: 'Flachdach',
    rate: { bis6: 220, bis30: 200, bis60: 160, bis100: 120, ab100: null },
  },
  {
    id: 'blech',
    label: 'Trapezblech / Blechdach',
    rate: { bis6: 200, bis30: 180, bis60: 150, bis100: 120, ab100: null },
  },
  {
    id: 'schiefer',
    label: 'Schieferdach',
    rate: { bis6: 320, bis30: 300, bis60: 280, bis100: null, ab100: null },
  },
  {
    id: 'fassade',
    label: 'Fassade',
    rate: { bis6: 270, bis30: 250, bis60: null, bis100: null, ab100: null },
  },
];

// ----- Gerüst (риштування) -----
// price = null → «Auf Anfrage» (Standgerüst)
export const GERUEST_OPTIONS = [
  { id: 'none', label: 'Kein Gerüst', price: 0 },
  { id: 'rss', label: 'RSS bis 6,5 m Höhe', price: 400 },
  { id: 'roll', label: 'Rollgerüst bis 12 m Höhe', price: 1000 },
  { id: 'stand', label: 'Standgerüst', price: null },
];
