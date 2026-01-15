import { MessageCircle, ChevronDown, Users, Award, HeartPulse, Car } from 'lucide-react';
import heroImage from '@/assets/hero-training.jpg';

const WHATSAPP_LINK = 'https://wa.me/573043442514?text=Hola,%20quiero%20agendar%20una%20clase%20de%20cortesía';

const features = [
  { icon: Users, text: 'Máx. 10 personas por clase' },
  { icon: Award, text: 'Entrenadores certificados' },
  { icon: HeartPulse, text: 'Fisioterapia integral' },
  { icon: Car, text: 'Parqueadero disponible' },
];

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Entrenamiento funcional en FUERTES"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-fuertes pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground leading-tight animate-fade-up">
            Entrenamiento profesional para{' '}
            <span className="text-secondary">todas las edades</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 max-w-xl animate-fade-up stagger-1" style={{ animationFillMode: 'both' }}>
            Programas especializados con más de 20 años de experiencia en Santa Rosa de Cabal
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up stagger-2" style={{ animationFillMode: 'both' }}>
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
              href="#servicios"
              className="btn-outline"
            >
              Conoce nuestros programas
            </a>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up stagger-3" style={{ animationFillMode: 'both' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3"
              >
                <feature.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-primary-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#nosotros" className="flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground transition-colors">
          <span className="text-sm mb-2">Descubre más</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
