// Головна сторінка сайту (/).
// Збирає всі секції в одну сторінку — це типова структура односторінкового сайту (landing page).
// force-static — Next.js генерує HTML один раз під час білду (SSG), не на кожен запит.
// revalidate — ISR: якщо пройшло більше 86400 секунд (1 доба), Next.js перегенерує сторінку у фоні.

import NavBar from '@/components/nav-bar/nav-bar';
import HeroSection from '@/components/hero-section/hero-section';
import ServicesSection from '@/components/services-section/services-section';
import WhyUsSection from '@/components/why-us-section/why-us-section';
import GallerySection from '@/components/gallery-section/gallery-section';
import AboutSection from '@/components/about-section/about-section';
import FaqSection from '@/components/faq-section/faq-section';
import ContactSection from '@/components/contact-section/contact-section';
import SiteFooter from '@/components/site-footer/site-footer';

export const dynamic = 'force-static';
export const revalidate = 86400; // ISR: перегенерація раз на добу

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <GallerySection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
