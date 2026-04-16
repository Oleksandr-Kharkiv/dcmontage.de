// Сторінка 404 — показується коли користувач відкриває неіснуючий URL.
// Next.js автоматично використовує цей файл для всіх 404 помилок.

import Link from 'next/link';
import NavBar from '@/components/nav-bar/nav-bar';
import SiteFooter from '@/components/site-footer/site-footer';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Seite nicht gefunden – 404',
};

export default function NotFound() {
  return (
    <>
      <NavBar solidBg />
      <main className={styles.main}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>
          Seite nicht gefunden
        </h1>
        <p className={styles.desc}>
          Die gesuchte Seite existiert leider nicht. Vielleicht wurde sie verschoben oder gelöscht.
        </p>
        <Link href="/" className={`btn btn-primary ${styles.cta}`}>
          Zurück zur Startseite
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
