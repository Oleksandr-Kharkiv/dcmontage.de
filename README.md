# DCMontage bei Solaringenieur – Website

Moderner, performanter Next.js 15-Firmenauftritt für **DCMontage bei Solaringenieur**, Offenbach am Main.

## Tech-Stack

| Technologie | Version | Zweck |
|-------------|---------|-------|
| Next.js | 15.3.2 | Framework (App Router) |
| React | 19.2.3 | UI |
| CSS Modules | – | Scoped Styles |
| Resend | 4.x | E-Mail-Versand |
| react-hook-form | 7.x | Formular-Validierung |
| Vercel | – | Hosting & Deployment |

## Rendering-Strategie

- **SSG/ISR** – Startseite, Impressum, Datenschutz (statisch, täglich revalidiert)
- **SSR** – `/api/contact` Route (läuft server-seitig bei jedem Request)
- **CSR** – Kontaktformular, Navigation (interaktive Client-Komponenten)

## Schnellstart

### 1. Archiv entpacken & Abhängigkeiten installieren

```bash
cd dcmontage
npm install
```

### 2. Umgebungsvariablen einrichten

```bash
cp .env.example .env.local
# .env.local öffnen und RESEND_API_KEY eintragen
```

**Resend-Konto einrichten:**
1. Kostenloses Konto auf [resend.com](https://resend.com) erstellen
2. API-Key generieren → in `.env.local` eintragen
3. Domain `dcmontage.de` in Resend verifizieren (DNS-Einträge)

### 3. Entwicklungsserver starten

```bash
npm run dev
# → http://localhost:3000
```

### 4. Produktions-Build testen

```bash
npm run build
npm start
```

## Deployment auf Vercel

### Option A – Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B – GitHub

1. Repository auf GitHub pushen
2. Auf [vercel.com](https://vercel.com) → „New Project" → GitHub-Repo verknüpfen
3. Environment Variable `RESEND_API_KEY` in Vercel-Dashboard eintragen
4. Deploy 🚀

## Domain verbinden (dcmontage.de)

1. Vercel Dashboard → Ihr Projekt → **Settings → Domains**
2. `dcmontage.de` und `www.dcmontage.de` eintragen
3. Bei Ihrem Registrar (imena.ua) folgende DNS-Einträge setzen:

| Typ | Name | Wert |
|-----|------|------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

## Kontaktformular – E-Mail-Empfänger ändern

Datei: `app/api/contact/route.js`

```js
to: ['info@dcmontage.de'],  // ← Ihre E-Mail-Adresse
```

## Projektstruktur

```
dcmontage/
├── app/
│   ├── globals.css          # CSS-Variablen & Reset
│   ├── layout.js            # Root-Layout + SEO-Metadata
│   ├── page.js              # Startseite (SSG/ISR)
│   ├── sitemap.js           # Auto-Sitemap
│   ├── api/
│   │   └── contact/
│   │       └── route.js     # Kontakt-API (SSR)
│   ├── impressum/
│   │   ├── page.js
│   │   └── legal.module.css
│   └── datenschutz/
│       └── page.js
├── components/
│   ├── nav-bar/             # Sticky Navigation
│   ├── hero-section/        # Fullscreen Hero
│   ├── services-section/    # Leistungen (3 Karten)
│   ├── why-us-section/      # USP-Raster (dark bg)
│   ├── gallery-section/     # Referenz-Fotogalerie
│   ├── about-section/       # Über uns (2-spaltig)
│   ├── contact-section/     # Kontakt-Info + Formular
│   ├── contact-form/        # CSR-Formular
│   └── site-footer/         # Footer
├── public/
│   ├── favicon.svg
│   ├── site.webmanifest
│   └── robots.txt
├── .env.example
├── .gitignore
├── jsconfig.json
├── next.config.mjs
└── package.json
```

## SEO-Checkliste nach Go-Live

- [ ] Google Search Console → Website verifizieren
- [ ] Sitemap einreichen: `https://dcmontage.de/sitemap.xml`
- [ ] Google Business Profil anlegen (wichtig für lokale Suche)
- [ ] `og-image.jpg` (1200×630 px) in `/public` erstellen
- [ ] `apple-touch-icon.png` (180×180 px) in `/public` erstellen

## Lizenz

Proprietär – Alle Rechte vorbehalten. © DCMontage bei Solaringenieur
