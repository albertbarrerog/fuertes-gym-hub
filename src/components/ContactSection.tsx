import { MapPin, Phone, Clock, Car, Accessibility } from 'lucide-react';

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
              Estamos ubicados en el centro de la ciudad, con fácil acceso y parqueadero disponible.
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

              {/* Facilities */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Car className="w-5 h-5 text-secondary" />
                  <span>Parqueadero</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Accessibility className="w-5 h-5 text-secondary" />
                  <span>Acceso para discapacidad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789!2d-75.6200000!3d4.8700000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle%2012%20%238-05%2C%20Santa%20Rosa%20de%20Cabal%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1234567890"
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
