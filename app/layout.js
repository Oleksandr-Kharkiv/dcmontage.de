import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://dcmontage.de'),
  title: {
    default: 'DCMontage bei Solaringenieur – Photovoltaik Montage in Offenbach & Deutschland',
    template: '%s | DCMontage bei Solaringenieur',
  },
  description:
    'Professionelle DC-Montage von Photovoltaikanlagen in ganz Deutschland. Zuverlässig, schnell und zertifiziert. Jetzt kostenloses Angebot anfordern!',
  keywords: [
    'DC Montage', 'Photovoltaik Montage', 'Solaranlage Montage', 'PV Montage',
    'Solaringenieur', 'Offenbach am Main', 'Deutschland', 'Aufdachanlage', 'Freiflächenanlage',
  ],
  authors: [{ name: 'DCMontage bei Solaringenieur' }],
  creator: 'DCMontage bei Solaringenieur',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://dcmontage.de',
    siteName: 'DCMontage bei Solaringenieur',
    title: 'DCMontage bei Solaringenieur – Photovoltaik Montage',
    description: 'Professionelle DC-Montage von Photovoltaikanlagen in ganz Deutschland.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'DCMontage bei Solaringenieur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DCMontage bei Solaringenieur',
    description: 'Professionelle DC-Montage von Photovoltaikanlagen in ganz Deutschland.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://dcmontage.de' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f4a000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
