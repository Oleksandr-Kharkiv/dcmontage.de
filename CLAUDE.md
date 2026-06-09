# dcmontage.de — інструкції проєкту

## Стек
Next.js App Router + JavaScript + CSS Modules + Vercel.
Односторінковий лендинг (одна `/` сторінка + секції як компоненти).
Немає WordPress CMS — контент хардкоджений у компонентах.

## Email
Resend (НЕ Brevo). API-ключ: `RESEND_API_KEY` у `.env.local`.
Ендпоінт: `app/api/contact/` — обробляє форму зворотного зв'язку.

## Шрифти
Inter (400/500/700), subsets: latin. CSS-змінна `--font-inter`. Без Oswald.

## Структура сторінки
Усі секції — окремі компоненти, збираються в `app/page.js`:
NavBar → HeroSection → ServicesSection → WhyUsSection → GallerySection → AboutSection → FaqSection → ContactSection → SiteFooter

```
app/
├── layout.js
├── page.js          (force-static, revalidate: 86400)
├── globals.css
├── api/contact/     (Resend email endpoint)
├── impressum/
├── datenschutz/
└── solarrechner/    (майбутня сторінка калькулятора)

components/
└── назва-секції/
    ├── назва-секції.js
    └── назва-секції.module.css
```

## Навігація
NavBar містить якірні посилання на секції головної сторінки (`/#services`, `/#about` тощо).
Кнопка «Angebot anfordern» (CTA) веде на `/solarrechner` — окрему сторінку калькулятора.

## Калькулятор /solarrechner (заплановано)
Окрема сторінка (НЕ секція на головній) — дає:
- додатковий SEO-вхід (ключові слова: Montagekosten, PV Rechner тощо)
- окрему точку конверсії з власним CTA

Калькулятор компактніший ніж на solaringenieur.com — тільки DC-Montage:
- Dachart × Leistungsklasse (€/kWp) — та ж матриця що в solaringenieur.com
- Gerüst — ті самі 4 варіанти
- Без вибору модулів/інвертора/батарей (це не профіль dcmontage.de)

Дані (матриця цін): хардкоджені у `config/calculator-config.js` у тому ж форматі що
`src/components/solar-calculator/config/calculator-config.js` в solaringenieur.com.
Довгострокова ціль — перенести в WordPress CMS як єдине джерело для обох проєктів.

## Примітки
- CSS-змінні кольорів: `--clr-primary` (#f4a000 amber), `--clr-bg`, `--clr-text` (НЕ `--color-*` як у solaringenieur.com)
- `suppressHydrationWarning` на `<body>` вже є
- CookieBanner і BackToTop підключені глобально в layout.js
