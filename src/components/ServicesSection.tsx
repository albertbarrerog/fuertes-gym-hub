import { ArrowRight, Check } from 'lucide-react';
import functionalImage from '@/assets/functional-training.png';
import seniorImage from '@/assets/senior-fitness.png';
import kidsImage from '@/assets/kids-sports.png';
import psychomotorImage from '@/assets/kids-psychomotor.png';
import physioImage from '@/assets/physiotherapy.png';

const WHATSAPP_BASE = 'https://wa.me/573043442514?text=';

interface Service {
  id: string;
  title: string;
  audience: string;
  image: string;
  benefits: string[];
  whatsappMessage: string;
}

const services: Service[] = [
  {
    id: 'funcional',
    title: 'Entrenamiento Funcional',
    audience: 'Adultos',
    image: functionalImage,
    benefits: [
      'Fuerza y resistencia',
      'Prevención de lesiones',
      'Coordinación y equilibrio',
    ],
    whatsappMessage: 'Hola, me interesa el programa de Entrenamiento Funcional',
  },
  {
    id: 'adulto-vip',
    title: 'Adulto VIP',
    audience: 'Adultos mayores',
    image: seniorImage,
    benefits: [
      'Fortalecimiento progresivo',
      'Bienestar integral',
      'Entorno seguro y guiado',
    ],
    whatsappMessage: 'Hola, me interesa el programa Adulto VIP',
  },
  {
    id: 'iniciacion',
    title: 'Iniciación Deportiva',
    audience: 'Niños y adolescentes (7-14)',
    image: kidsImage,
    benefits: [
      'Valores y disciplina',
      'Base para cualquier deporte',
      'Agilidad física',
    ],
    whatsappMessage: 'Hola, me interesa el programa de Iniciación Deportiva para mi hijo/a',
  },
  {
    id: 'psicomotor',
    title: 'Desarrollo Psicomotor',
    audience: 'Niños (4-6)',
    image: psychomotorImage,
    benefits: [
      'Estimulación cognitiva',
      'Aprendizaje mediante el juego',
      'Coordinación motriz',
    ],
    whatsappMessage: 'Hola, me interesa el programa de Desarrollo Psicomotor para mi hijo/a',
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    audience: 'Todas las edades',
    image: physioImage,
    benefits: [
      'Rehabilitación efectiva',
      'Movilidad óptima',
      'Alivio dolor',
    ],
    whatsappMessage: 'Hola, me interesa el servicio de Fisioterapia',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-muted/30">
      <div className="container-fuertes">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Nuestros Programas
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Entrenamiento especializado adaptado a cada etapa de la vida
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.id} className="card-service group">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                    {service.audience}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-4 transition-all duration-300"
                >
                  Inscríbete ahora
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
