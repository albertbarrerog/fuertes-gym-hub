import { Award, Clock, Users, HeartPulse, Accessibility, Baby } from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: 'Certificación oficial',
    description: 'Cumplimos con la Ley 2210 de 2022',
  },
  {
    icon: Clock,
    title: '+20 años de experiencia',
    description: 'Trayectoria comprobada en fitness',
  },
  {
    icon: Users,
    title: 'Atención semi-personalizada',
    description: 'Grupos reducidos de máximo 10 personas',
  },
  {
    icon: HeartPulse,
    title: 'Enfoque integral',
    description: 'Entrenamiento + fisioterapia',
  },
  {
    icon: Accessibility,
    title: 'Instalaciones accesibles',
    description: 'Espacio adaptado para todos',
  },
  {
    icon: Baby,
    title: 'Todas las edades',
    description: 'Programas desde los 4 años',
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-fuertes">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Nosotros
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Más que entrenamiento,{' '}
            <span className="text-secondary">salud con propósito</span>
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transformar vidas a través del movimiento, ofreciendo programas de entrenamiento y fisioterapia seguros, profesionales y adaptados a cada etapa de la vida.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser el centro de acondicionamiento físico de referencia en el Eje Cafetero, reconocido por la calidad de nuestro equipo y el impacto positivo en la salud de nuestra comunidad.
            </p>
          </div>
        </div>

        {/* Differentiators */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
