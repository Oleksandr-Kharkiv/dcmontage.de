// Контактна форма з валідацією та відправкою на сервер.
// 'use client' — потрібен бо використовуємо useState та react-hook-form (браузерні хуки).

'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './contact-form.module.css';

// Варіанти послуг для випадаючого списку
const SERVICE_OPTIONS = [
  'DC-Montage Aufdachanlage',
  'DC-Montage Freiflächenanlage',
  'Wartung & Service',
  'Sonstiges',
];

export default function ContactForm() {
  // Стан форми: idle (початковий) | loading (відправляємо) | success (успіх) | error (помилка)
  const [status, setStatus] = useState('idle');

  // react-hook-form — бібліотека для керування формою та валідацією
  // register — підключає поле до форми
  // handleSubmit — обгортає onSubmit, запускає валідацію перед відправкою
  // reset — очищає форму після успішної відправки
  // formState.errors — об'єкт з помилками валідації для кожного поля
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Викликається після успішної валідації всіх полів
  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      // Відправляємо дані на наш API маршрут /api/contact (route.js)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      reset(); // Очищаємо форму після успішної відправки
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate // Вимикаємо браузерну валідацію — використовуємо свою через react-hook-form
      aria-label="Kontaktformular"
    >
      {/* Рядок з двома полями: ім'я та прізвище */}
      <div className={styles.row}>
        <Field label="Vorname *" error={errors.firstName?.message}>
          <input
            {...register('firstName', { required: 'Pflichtfeld' })}
            placeholder="Max"
            autoComplete="given-name"
            className={errors.firstName ? styles.inputErr : ''}
          />
        </Field>
        <Field label="Nachname *" error={errors.lastName?.message}>
          <input
            {...register('lastName', { required: 'Pflichtfeld' })}
            placeholder="Mustermann"
            autoComplete="family-name"
            className={errors.lastName ? styles.inputErr : ''}
          />
        </Field>
      </div>

      {/* Email з перевіркою формату через регулярний вираз */}
      <Field label="E-Mail *" error={errors.email?.message}>
        <input
          {...register('email', {
            required: 'Pflichtfeld',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Ungültige E-Mail' },
          })}
          type="email"
          placeholder="max@beispiel.de"
          autoComplete="email"
          className={errors.email ? styles.inputErr : ''}
        />
      </Field>

      {/* Телефон — необов'язкове поле */}
      <Field label="Telefon" error={errors.phone?.message}>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+49 69 …"
          autoComplete="tel"
        />
      </Field>

      {/* Вибір послуги — необов'язкове поле */}
      <Field label="Leistung" error={errors.service?.message}>
        <select {...register('service')}>
          <option value="">Bitte wählen …</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      {/* Повідомлення — мінімум 10 символів */}
      <Field label="Nachricht *" error={errors.message?.message}>
        <textarea
          {...register('message', { required: 'Pflichtfeld', minLength: { value: 10, message: 'Mindestens 10 Zeichen' } })}
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Projekt …"
          className={errors.message ? styles.inputErr : ''}
        />
      </Field>

      {/* Чекбокс згоди з політикою конфіденційності — обов'язковий */}
      <label className={styles.privacy}>
        <input
          type="checkbox"
          {...register('privacy', { required: 'Bitte Datenschutz bestätigen' })}
        />
        <span>
          Ich habe die{' '}
          <a href="/datenschutz" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung
          </a>{' '}
          gelesen und stimme zu. *
        </span>
      </label>
      {errors.privacy && <p className={styles.errMsg}>{errors.privacy.message}</p>}

      {/* Кнопка відправки — заблокована під час завантаження */}
      <button
        type="submit"
        className={`btn btn-primary ${styles.submit}`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Wird gesendet …
          </>
        ) : (
          <>
            Anfrage senden
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      {/* Повідомлення про результат відправки */}
      {status === 'success' && (
        <p className={styles.successMsg} role="status">
          ✅ Vielen Dank! Wir melden uns innerhalb von 48 Stunden bei Ihnen.
        </p>
      )}
      {status === 'error' && (
        <p className={styles.errFeedback} role="alert">
          ❌ Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.
        </p>
      )}
    </form>
  );
}

// Допоміжний компонент для поля форми — обгортає label + input + повідомлення про помилку.
// Використовується повторно для кожного поля щоб не дублювати розмітку.
function Field({ label, error, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <span className={styles.errMsg}>{error}</span>}
    </div>
  );
}
