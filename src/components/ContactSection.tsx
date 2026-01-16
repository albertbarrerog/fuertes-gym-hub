import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-fuertes">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Contacto
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Visítanos en Santa Rosa de Cabal
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Estamos ubicados en el corazón de la ciudad, con fácil acceso y parqueadero disponible para tu comodidad.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Dirección</h3>
                  <p className="text-muted-foreground">Calle 12 #8-05 esquina, Edificio Asís</p>
                  <p className="text-muted-foreground">Santa Rosa de Cabal, Risaralda</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <a
                    href="tel:+573043442514"
                    className="text-secondary hover:underline"
                  >
                    304 344 2514
                  </a>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Horario</h3>
                  <p className="text-muted-foreground">Lunes a Viernes: 5:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[340px] lg:h-auto min-h-[340px] rounded-2xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps?q=4.866254,-75.615541&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación FUERTES"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
