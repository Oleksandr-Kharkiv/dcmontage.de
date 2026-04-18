// Секція галереї — серверна обгортка з заголовком.
// Сама сітка фото винесена в GalleryGrid (клієнтський компонент) — для лайтбокса.

import GalleryGrid from './gallery-grid';
import styles from './gallery-section.module.css';

export default function GallerySection() {
  return (
    // id="referenzen" — якір для навігації (#referenzen у nav-bar.js)
    <section id="referenzen" className={styles.section} aria-labelledby="gallery-title">
      <div className="container">
        <div className={styles.head}>
          <span className="section-label">Referenzen</span>
          <h2 className="section-title" id="gallery-title">Unsere Arbeiten</h2>
          <p className="section-desc">
            Ein Einblick in abgeschlossene Montage-Projekte – von der Aufdachanlage
            bis zur Gewerbehalle.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </section>
  );
}
