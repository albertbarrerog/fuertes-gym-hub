import logoIcon from '@/assets/logo-icon.png';

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
            Bienestar integral con <span className="text-secondary">respaldo profesional</span>
          </h2>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
          <div className="mt-4">
            <p className="text-muted-foreground leading-relaxed text-lg">
              En FUERTES Transformamos vidas mediante el movimiento, ofreciendo programas de entrenamiento seguros, profesionales y adaptados a cada etapa de la vida. Acompañamos el{' '}
              <span className="text-secondary font-semibold">desarrollo psicomotor</span>{' '}
              desde los 4 años, guiamos la{' '}
              <span className="text-secondary font-semibold">iniciación deportiva</span>{' '}
              en niños y adolescentes, potenciamos el{' '}
              <span className="text-secondary font-semibold">entrenamiento funcional</span>{' '}
              en adultos y brindamos ejercicio orientado y seguro para{' '}
              <span className="text-secondary font-semibold">adultos mayores</span>,
              siempre con el respaldo de un equipo experto.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end lg:-mt-28">
            <img
              src={logoIcon}
              alt="FUERTES"
              className="w-full max-w-xs lg:max-w-sm h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
