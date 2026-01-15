import { Check, Clock, Users, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/573043442514?text=Hola,%20quiero%20información%20sobre%20los%20planes%20y%20precios';

const schedules = [
  { day: 'Lunes a Viernes', time: '5:00 AM – 8:00 PM' },
  { day: 'Sábados', time: 'Por confirmar' },
  { day: 'Domingos', time: 'Por confirmar' },
];

const plans = [
  {
    name: 'Plan Básico',
    sessions: '2 sesiones / semana',
    highlighted: false,
  },
  {
    name: 'Plan Intermedio',
    sessions: '3 sesiones / semana',
    highlighted: true,
  },
  {
    name: 'Plan Intensivo',
    sessions: '5 sesiones / semana',
    highlighted: false,
  },
];

const features = [
  'Grupos máx. 10 personas',
  'Atención semi-personalizada',
  'Programas adaptados a tu nivel',
  'Seguimiento de progreso',
];

const PlansSection = () => {
  return (
    <section id="planes" className="section-padding bg-primary">
      <div className="container-fuertes">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Schedules */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Horarios
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary-foreground">
              Entrena cuando mejor te convenga
            </h2>
            
            <div className="mt-8 space-y-4">
              {schedules.map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-primary-foreground/10 rounded-xl px-6 py-4"
                >
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-semibold">{schedule.day}</p>
                    <p className="text-primary-foreground/70 text-sm">{schedule.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plans */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Planes
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary-foreground">
              Elige el plan que se adapte a ti
            </h2>

            <div className="mt-8 space-y-4">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl px-6 py-4 border-2 transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-secondary border-secondary'
                      : 'bg-primary-foreground/10 border-transparent hover:border-secondary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-bold ${plan.highlighted ? 'text-secondary-foreground' : 'text-primary-foreground'}`}>
                        {plan.name}
                      </p>
                      <p className={`text-sm ${plan.highlighted ? 'text-secondary-foreground/80' : 'text-primary-foreground/70'}`}>
                        {plan.sessions}
                      </p>
                    </div>
                    {plan.highlighted && (
                      <span className="px-3 py-1 bg-primary-foreground text-primary text-xs font-bold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 btn-primary inline-flex"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar precios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
