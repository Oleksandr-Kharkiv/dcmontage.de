'use client';
// Toast — спливаюче повідомлення у кутку екрану.
// Автоматично зникає через 5 секунд.

import { useEffect } from 'react';
import styles from './toast.module.css';

export default function Toast({ type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`} role={type === 'error' ? 'alert' : 'status'}>
      <span className={styles.icon}>{type === 'success' ? '✅' : '❌'}</span>
      <span className={styles.msg}>{message}</span>
      <button className={styles.close} onClick={onClose} aria-label="Schließen">×</button>
    </div>
  );
}
