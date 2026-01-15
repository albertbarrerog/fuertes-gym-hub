import { Award, Star } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  certifications: string[];
  achievement?: string;
}

const team: TeamMember[] = [
  {
    name: 'Elizabeth Barrero',
    role: 'Entrenadora Deportiva',
    specialty: 'Especialista en levantamiento de pesas y alto rendimiento',
    experience: '22 años de experiencia',
    certifications: ['COI', 'Panam Sports', 'Ley 2210'],
    achievement: 'Entrenadora Selección Colombia Sub-17 y Juvenil',
  },
  {
    name: 'Carlos Segura',
    role: 'Entrenador Deportivo',
    specialty: 'Especialista en teoría y metodología del entrenamiento',
    experience: '12 años de experiencia',
    certifications: ['Profesional en Ciencias del Deporte'],
    achievement: 'Enfoque en entrenamiento seguro y adaptado',
  },
  {
    name: 'Mariana Sepúlveda Molina',
    role: 'Fisioterapeuta',
    specialty: 'Especialista en rehabilitación y lesiones osteomusculares',
    experience: 'Atiende todas las edades',
    certifications: ['Fisioterapia certificada'],
    achievement: 'Enfoque integral en calidad de vida',
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
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <h3 className="text-xl font-bold text-card-foreground">{member.name}</h3>
              <p className="text-secondary font-semibold mt-1">{member.role}</p>
              
              <p className="mt-4 text-muted-foreground text-sm">
                {member.specialty}
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-sm text-foreground">
                <Star className="w-4 h-4 text-secondary" />
                {member.experience}
              </div>

              {/* Certifications */}
              <div className="mt-4 flex flex-wrap gap-2">
                {member.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                  >
                    <Award className="w-3 h-3" />
                    {cert}
                  </span>
                ))}
              </div>

              {member.achievement && (
                <p className="mt-4 text-sm text-secondary font-medium border-t border-border pt-4">
                  {member.achievement}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
