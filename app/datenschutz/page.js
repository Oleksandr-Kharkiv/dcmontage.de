import Link from 'next/link';
import NavBar from '@/components/nav-bar/nav-bar';
import SiteFooter from '@/components/site-footer/site-footer';
import styles from '../impressum/legal.module.css';

export const metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der DCMontage bei Solaringenieur.',
  robots: { index: false },
};

export const dynamic = 'force-static';

export default function DatenschutzPage() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.back}>
            <Link href="/" className={styles.backLink}>← Zurück zur Startseite</Link>
          </div>
          <article className={styles.article}>
            <h1>Datenschutzerklärung</h1>

            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen,
              z. B. durch Eingabe in unser Kontaktformular. Andere Daten werden
              automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
              unsere IT-Systeme erfasst.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, USA gehostet. Vercel kann beim Besuch dieser Website
              Server-Logfiles erfassen. Details entnehmen Sie der Datenschutzerklärung
              von Vercel:{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                https://vercel.com/legal/privacy-policy
              </a>.
            </p>

            <h2>3. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
              unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p>
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns,
              bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt.
            </p>

            <h2>4. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und
              den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder
              Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
              personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
            <p>
              Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. Für Hessen ist dies der:{' '}
              <a href="https://www.datenschutz.hessen.de" target="_blank" rel="noopener noreferrer">
                Hessische Beauftragte für Datenschutz und Informationsfreiheit
              </a>.
            </p>

            <h2>5. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an:{' '}
              <a href="mailto:info@dcmontage.de">info@dcmontage.de</a>
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
