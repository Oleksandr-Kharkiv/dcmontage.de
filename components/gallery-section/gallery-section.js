// Секція галереї — сітка фотографій виконаних проєктів.
// Серверний компонент — всі зображення оптимізуються через Next.js Image.

import Image from 'next/image';
import styles from './gallery-section.module.css';

// Масив фотографій — щоб додати нове фото, просто додай об'єкт {src, alt}
const PHOTOS = [
  { src: 'https://mega-solar.online/wp-content/uploads/2023/12/6d36b37f-cc16-47af-9029-bfaf1b071cd8.jpeg',  alt: 'PV-Aufdachanlage – Wohngebäude' },
  { src: 'https://mega-solar.online/wp-content/uploads/2023/12/16e3ffac-7f97-4a6a-a56d-e0c8fa6d15ff-768x1024.jpeg', alt: 'DC-Montage in Arbeit' },
  { src: 'https://mega-solar.online/wp-content/uploads/2023/12/9de6652a-4cdc-4614-95b8-f0db91765f6e.jpeg', alt: 'Fertiggestellte Solaranlage' },
  { src: 'https://mega-solar.online/wp-content/uploads/2023/12/9b8e49ac-07a8-461d-ac8b-57d97e2785c3-1024x576.jpeg', alt: 'Großanlage auf Flachdach' },
  { src: 'https://mega-solar.online/wp-content/uploads/2023/12/8a9a44ae-db50-4f3d-890d-98962ea9e34e.jpeg', alt: 'Modulverlegung Schrägdach' },
  { src: 'https://mega-solar.online/wp-content/uploads/2023/12/7f3d61db-dafb-4dd6-bcad-58b56787aa57.jpeg', alt: 'DC-Verkabelung Detail' },
  { src: 'https://mega-solar.online/wp-content/uploads/2023/12/e9ebf32e-3be3-4c34-afd3-1b2c5d469ebb-1024x576.jpeg', alt: 'PV-Anlage Einfamilienhaus' },
  { src: 'https://mega-solar.online/wp-content/uploads/2023/12/2039f64c-ab21-476e-a10c-3b400dc4648e-1024x768.jpeg', alt: 'Freiflächenanlage' },
];

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

        {/* CSS Grid сітка — перше фото (i === 0) отримує клас featured і займає 2х2 клітинки */}
        <div className={styles.grid}>
          {PHOTOS.map((photo, i) => (
            <figure key={i} className={`${styles.item} ${i === 0 ? styles.featured : ''}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={i === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              {/* Підпис з'являється при наведенні (hover) через CSS */}
              <figcaption className={styles.caption}>{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
