import Link from 'next/link';
import NavBar from '@/components/nav-bar/nav-bar';
import SiteFooter from '@/components/site-footer/site-footer';

export const metadata = {
  title: 'Seite nicht gefunden – 404',
};

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        textAlign: 'center',
        padding: '8rem 1.5rem 4rem',
      }}>
        <p style={{ fontSize: '5rem', fontWeight: 900, color: '#f4a000', lineHeight: 1 }}>404</p>
        <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: 700 }}>
          Seite nicht gefunden
        </h1>
        <p style={{ color: '#6b7280', maxWidth: '40ch' }}>
          Die gesuchte Seite existiert leider nicht. Vielleicht wurde sie verschoben oder gelöscht.
        </p>
        <Link href="/" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
          Zurück zur Startseite
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
