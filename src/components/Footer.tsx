import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-fuertes py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black">FUERTES</h3>
            <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
              Centro de Acondicionamiento Físico con más de 20 años transformando vidas a través del movimiento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#inicio" className="hover:text-secondary transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-secondary transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-secondary transition-colors">Servicios</a></li>
              <li><a href="#equipo" className="hover:text-secondary transition-colors">Equipo</a></li>
              <li><a href="#planes" className="hover:text-secondary transition-colors">Planes</a></li>
              <li><a href="#contacto" className="hover:text-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>Calle 12 #8-05 esquina, Edificio Asís, Santa Rosa de Cabal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="tel:+573043442514" className="hover:text-secondary transition-colors">304 344 2514</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>Lun - Vie: 5:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} FUERTES. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Centro certificado bajo Ley 2210 de 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
