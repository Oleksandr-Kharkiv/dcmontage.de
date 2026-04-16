// Автоматична генерація sitemap.xml для пошукових систем (SEO).
// Next.js сам перетворює цей файл на /sitemap.xml при білді.
// priority — важливість сторінки для пошуковиків (від 0 до 1).
// changeFrequency — як часто сторінка змінюється (підказка для Google).

export default function sitemap() {
  const base = 'https://dcmontage.de';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
