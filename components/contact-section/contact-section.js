import ContactForm from '@/components/contact-form/contact-form';
import styles from './contact-section.module.css';

export default function ContactSection() {
  return (
    <section id="kontakt" className={styles.section} aria-labelledby="contact-title">
      <div className="container">
        <div className={styles.layout}>
          {/* Info side */}
          <div className={styles.info}>
            <span className="section-label">Kontakt</span>
            <h2 className="section-title" id="contact-title">
              Jetzt Angebot anfordern
            </h2>
            <p className="section-desc">
              Schreiben Sie uns – wir melden uns innerhalb von 48 Stunden
              mit einem unverbindlichen Angebot.
            </p>

            <div className={styles.contacts}>
              <a href="mailto:office@solaringenieur.com" className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke="#f4a000" strokeWidth="1.5"/>
                    <path d="M2 7l8 5 8-5" stroke="#f4a000" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.contactLabel}>E-Mail</span>
                  <span className={styles.contactValue}>office@solaringenieur.com</span>
                </div>
              </a>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 5a2 2 0 012-2h1.5a1 1 0 01.95.68l1 3a1 1 0 01-.23 1.06L7 9a11 11 0 004 4l1.26-1.22a1 1 0 011.06-.23l3 1a1 1 0 01.68.95V15a2 2 0 01-2 2C7.16 17 3 12.84 3 7.5V5z"
                      stroke="#f4a000" strokeWidth="1.5"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.contactLabel}>Telefon</span>
                  <span className={styles.contactValue}>Auf Anfrage</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C7.2 2 5 4.2 5 7c0 4.2 5 9 5 9s5-4.8 5-9c0-2.8-2.2-5-5-5z" stroke="#f4a000" strokeWidth="1.5"/>
                    <circle cx="10" cy="7" r="2" stroke="#f4a000" strokeWidth="1.5"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.contactLabel}>Adresse</span>
                  <address className={styles.contactValue} style={{ fontStyle: 'normal' }}>
                    Löhnunggasse 19<br />60386 Offenbach am Main
                  </address>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#f4a000" strokeWidth="1.5"/>
                    <path d="M10 6v4l2.5 2" stroke="#f4a000" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <span className={styles.contactLabel}>Reaktionszeit</span>
                  <span className={styles.contactValue}>Innerhalb 48 Stunden</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className={styles.formWrap}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
