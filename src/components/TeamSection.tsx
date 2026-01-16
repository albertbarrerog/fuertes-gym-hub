import { Award } from 'lucide-react';
import elizabethImage from '@/assets/team/elizabeth-barrero.png';
import carlosImage from '@/assets/team/carlos-segura.png';
import marianaImage from '@/assets/team/mariana-sepulveda-molina.png';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  certifications: string[];
}

const team: TeamMember[] = [
  {
    name: 'Elizabeth Barrero',
    role: 'Entrenador Deportivo',
    specialty: 'Especialista en levantamiento de pesas y alto rendimiento',
    image: elizabethImage,
    certifications: ['22 años de experiencia'],
  },
  {
    name: 'Carlos Segura',
    role: 'Entrenador Deportivo',
    specialty: 'Especialista en teoría y metodología del entrenamiento',
    image: carlosImage,
    certifications: ['Profesional en ciencias del deporte'],
  },
  {
    name: 'Mariana Sepúlveda',
    role: 'Fisioterapeuta',
    specialty: 'Especialista en rehabilitación y lesiones osteomusculares',
    image: marianaImage,
    certifications: ['Profesional en Fisioterapia'],
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="section-padding bg-background">
      <div className="container-fuertes">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Equipo
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Profesionales que te acompañan
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Nuestro equipo de expertos certificados está comprometido con tu bienestar
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-muted"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
                  <p className="text-secondary font-semibold mt-1">{member.role}</p>
                  <p className="mt-3 text-muted-foreground text-sm">
                    {member.specialty}
                  </p>
                </div>

                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-secondary/30 flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Certifications */}
              <div className="mt-2 space-y-1">
                {member.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Award className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="italic">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
