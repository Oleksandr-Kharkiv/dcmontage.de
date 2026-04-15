import NavBar from '@/components/nav-bar/nav-bar';
import HeroSection from '@/components/hero-section/hero-section';
import ServicesSection from '@/components/services-section/services-section';
import WhyUsSection from '@/components/why-us-section/why-us-section';
import GallerySection from '@/components/gallery-section/gallery-section';
import AboutSection from '@/components/about-section/about-section';
import ContactSection from '@/components/contact-section/contact-section';
import SiteFooter from '@/components/site-footer/site-footer';

// This page is statically generated at build time (SSG)
export const dynamic = 'force-static';
export const revalidate = 86400; // ISR: revalidate daily

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
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
