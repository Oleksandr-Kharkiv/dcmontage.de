'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './contact-form.module.css';

const SERVICE_OPTIONS = [
  'DC-Montage Aufdachanlage',
  'DC-Montage Freiflächenanlage',
  'Wartung & Service',
  'Sonstiges',
];

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Kontaktformular"
    >
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

      <Field label="Telefon" error={errors.phone?.message}>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+49 69 …"
          autoComplete="tel"
        />
      </Field>

      <Field label="Leistung" error={errors.service?.message}>
        <select {...register('service')}>
          <option value="">Bitte wählen …</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Nachricht *" error={errors.message?.message}>
        <textarea
          {...register('message', { required: 'Pflichtfeld', minLength: { value: 10, message: 'Mindestens 10 Zeichen' } })}
          rows={5}
          placeholder="Beschreiben Sie kurz Ihr Projekt …"
          className={errors.message ? styles.inputErr : ''}
        />
      </Field>

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

function Field({ label, error, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <span className={styles.errMsg}>{error}</span>}
    </div>
  );
}
