'use client';
// Cookie Banner — обов'язковий для німецьких сайтів (DSGVO/GDPR).
// Зберігає згоду в localStorage щоб не показувати повторно.

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './cookie-banner.module.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Показуємо банер лише якщо користувач ще не дав згоду
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie-Hinweis">
      <p className={styles.text}>
        Diese Website verwendet ausschließlich technisch notwendige Cookies.
        Weitere Informationen finden Sie in unserer{' '}
        <Link href="/datenschutz" className={styles.link}>Datenschutzerklärung</Link>.
      </p>
      <button className={`btn btn-primary ${styles.btn}`} onClick={accept}>
        Verstanden
      </button>
    </div>
  );
}
