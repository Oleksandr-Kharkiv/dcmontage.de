import Link from 'next/link';
import NavBar from '@/components/nav-bar/nav-bar';
import SiteFooter from '@/components/site-footer/site-footer';
import styles from './legal.module.css';

export const metadata = {
  title: 'Impressum',
  description: 'Impressum der DCMontage bei Solaringenieur, Löhnunggasse 19, 60386 Offenbach am Main.',
  robots: { index: false },
};

export const dynamic = 'force-static';

export default function ImpressumPage() {
  return (
    <>
      <NavBar solidBg />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.back}>
            <Link href="/" className={styles.backLink}>← Zurück zur Startseite</Link>
          </div>
          <article className={styles.article}>
            <div className={styles.demoBanner}>
              ⚠️ Diese Website ist ein <strong>Demo- und Lernprojekt</strong>. Alle Angaben sind fiktiv und dienen ausschließlich zu Demonstrationszwecken.
            </div>
            <h1>Impressum</h1>

            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              DCMontage bei Solaringenieur<br />
              Löhnunggasse 19<br />
              60386 Offenbach am Main<br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:office@solaringenieur.com">office@solaringenieur.com</a>
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              DCMontage bei Solaringenieur<br />
              Löhnunggasse 19<br />
              60386 Offenbach am Main
            </p>

            <h2>Haftungsausschluss</h2>
            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
              wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
              § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
              Inhalte auch keine Gewähr übernehmen.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
              bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
