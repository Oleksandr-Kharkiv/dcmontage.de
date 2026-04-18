'use client';
// Секція FAQ — акордеон з поширеними питаннями.
// useState відстежує який пункт відкритий (-1 = всі закриті).

import { useState } from 'react';
import styles from './faq-section.module.css';

const FAQS = [
  {
    q: 'Was genau übernimmt DCMontage bei der Installation?',
    a: 'Wir übernehmen die komplette DC-seitige Montage: Unterkonstruktion, Modulverlegung, Verkabelung und Anschluss an den Wechselrichter. Die AC-seitige Elektroinstallation ist nicht unser Leistungsumfang.',
  },
  {
    q: 'In welchen Regionen Deutschlands sind Sie tätig?',
    a: 'Wir sind bundesweit tätig – von Bayern bis Hamburg, von NRW bis Sachsen. Unser Standort ist Offenbach am Main, aber wir nehmen Aufträge aus ganz Deutschland an.',
  },
  {
    q: 'Wie schnell können Sie ein Projekt starten?',
    a: 'Nach Auftragseingang und Materialverfügbarkeit können wir in der Regel innerhalb von 1–2 Wochen mit der Montage beginnen. Wir reagieren auf Anfragen innerhalb von 48 Stunden.',
  },
  {
    q: 'Arbeiten Sie auch als Subunternehmer für Solarfirmen?',
    a: 'Ja, ein Großteil unserer Aufträge kommt von Solarunternehmen, die uns als zuverlässigen Montagepartner einsetzen. Wir sind erfahren in der Zusammenarbeit mit Projektleitern und halten Terminpläne ein.',
  },
  {
    q: 'Wie erhalte ich ein Angebot?',
    a: 'Füllen Sie einfach unser Kontaktformular aus oder schreiben Sie uns eine E-Mail. Wir benötigen die Anlagenleistung, den Anlagentyp und den Montageort – dann erhalten Sie innerhalb von 48 Stunden ein Angebot.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(-1);

  const toggle = (i) => setOpen(open === i ? -1 : i);

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className="container">
        <div className={styles.head}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title" id="faq-title">Häufige Fragen</h2>
          <p className="section-desc">
            Antworten auf die häufigsten Fragen rund um unsere DC-Montageleistungen.
          </p>
        </div>

        <div className={styles.list}>
          {FAQS.map((item, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}>
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className={styles.icon} aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
