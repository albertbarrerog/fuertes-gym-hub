import { MessageCircle, Phone } from 'lucide-react';
import ctaBackground from '@/assets/cta-background.png';

const WHATSAPP_LINK = 'https://wa.me/573043442514?text=Hola,%20quiero%20agendar%20una%20clase%20de%20cortesía';

const CTASection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ctaBackground}
          alt="Entrenamiento intenso"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-fuertes text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-foreground leading-tight">
          Comienza tu proceso con{' '}
          <span className="text-secondary">profesionales</span>
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Tu primera clase es de cortesía. Descubre cómo podemos ayudarte a alcanzar tus metas de salud y bienestar.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Agenda tu clase de cortesía
          </a>
          <a
            href="tel:+573043442514"
            className="btn-outline"
          >
            <Phone className="w-5 h-5 mr-2" />
            Llámanos ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
