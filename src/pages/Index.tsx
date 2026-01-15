import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import PlansSection from '@/components/PlansSection';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FUERTES – Centro de Acondicionamiento Físico en Santa Rosa de Cabal</title>
        <meta
          name="description"
          content="Entrenamiento funcional, fisioterapia y programas para todas las edades. Más de 20 años de experiencia. Clases semi-personalizadas. Agenda tu clase de prueba."
        />
        <meta
          name="keywords"
          content="gimnasio santa rosa de cabal, entrenamiento funcional risaralda, fisioterapia santa rosa, ejercicio adulto mayor, iniciación deportiva niños, gym eje cafetero"
        />
        <meta property="og:title" content="FUERTES – Centro de Acondicionamiento Físico" />
        <meta
          property="og:description"
          content="Entrenamiento funcional, fisioterapia y programas para todas las edades en Santa Rosa de Cabal."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://fuertesgym.co" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            "name": "FUERTES – Centro de Acondicionamiento Físico",
            "description": "Centro de acondicionamiento físico con más de 20 años de experiencia, especializado en entrenamiento funcional, programas para niños, adultos y adultos mayores, y fisioterapia integral.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle 12 #8-05 esquina, Edificio Asís",
              "addressLocality": "Santa Rosa de Cabal",
              "addressRegion": "Risaralda",
              "addressCountry": "CO"
            },
            "telephone": "+573043442514",
            "openingHours": "Mo-Fr 05:00-20:00",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <PlansSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
