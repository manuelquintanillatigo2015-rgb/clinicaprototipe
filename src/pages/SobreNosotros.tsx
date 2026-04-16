import { ArrowRight, Award, Users, Clock, Heart, CheckCircle2, GraduationCap } from 'lucide-react';
import { NavigationProps } from '../types/navigation';

const team = [
  {
    name: 'Dra. Valentina Soto',
    role: 'Directora clínica · Implantología y Estética',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Más de 12 años de experiencia. Egresada con mención honorífica de la UNAM, con especialización en implantes en España. Valentina fundó Lumina porque quería demostrar que ir al dentista no tiene por qué dar miedo.',
    credentials: ['UNAM · Odontología con Mención Honorífica', 'Universidad Complutense de Madrid · Implantología', 'Certificación Invisalign Diamond Provider', 'Miembro de la Asociación Dental Mexicana'],
  },
  {
    name: 'Dr. Andrés Villareal',
    role: 'Especialista en Ortodoncia',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Especialista certificado en ortodoncia con enfoque en casos adultos y corrección de mordida. Su filosofía es simple: ningún tratamiento empieza sin que el paciente lo entienda completamente.',
    credentials: ['IPN · Cirujano Dentista', 'Especialidad en Ortodoncia · CENTRO', 'Certificación en Ortodoncia Invisible', 'Miembro de la Sociedad Mexicana de Ortodoncia'],
  },
  {
    name: 'Dra. Camila Herrera',
    role: 'Especialista en Periodoncia y Prevención',
    image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Apasionada por la prevención, Camila cree que la salud dental es la base de la salud general. Trabaja especialmente con pacientes que llevan años sin visitar al dentista, creando un ambiente de total confianza.',
    credentials: ['Anáhuac · Odontología', 'Especialidad en Periodoncia · UAM', 'Diplomado en Odontología Preventiva', 'Certificación en Sedación Consciente'],
  },
];

const stats = [
  { value: '12+', label: 'años de experiencia', icon: Clock },
  { value: '1,200+', label: 'pacientes atendidos', icon: Users },
  { value: '98%', label: 'satisfacción verificada', icon: Heart },
  { value: '8', label: 'premios de calidad', icon: Award },
];

const values = [
  {
    title: 'Transparencia antes que ventas',
    desc: 'Nunca recomendamos algo que no sea necesario. Tu diagnóstico es tuyo y tienes derecho a entenderlo.',
  },
  {
    title: 'Cero presión, siempre',
    desc: 'Puedes venir a evaluarte y salir sin comprometerte a nada. Tu ritmo es el correcto.',
  },
  {
    title: 'Tecnología al servicio del paciente',
    desc: 'Invertimos en equipos modernos no para impresionar, sino para darte diagnósticos más precisos y tratamientos más cómodos.',
  },
  {
    title: 'Empatía como protocolo',
    desc: 'El miedo al dentista es real. Por eso lo tomamos en serio y diseñamos cada visita para reducirlo, no ignorarlo.',
  },
];

export default function SobreNosotros({ navigate }: NavigationProps) {
  return (
    <main className="bg-white">
      <div className="bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Quiénes somos
              </p>
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Una clínica construida
                <br />
                <span className="text-gradient-blue">para los que dudan</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Lumina Dental nació de una pregunta simple: ¿por qué tantas personas posponen ir al dentista incluso cuando saben que lo necesitan?
              </p>
              <p className="text-slate-400 leading-relaxed">
                La respuesta siempre fue la misma: miedo a lo desconocido, desconfianza, malas experiencias previas. Por eso decidimos crear una clínica donde la experiencia del paciente es tan importante como el tratamiento.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3881193/pexels-photo-3881193.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Interior de Clínica Lumina Dental"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={20} className="text-cyan-600" />
                </div>
                <p className="font-display text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Nuestro equipo
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
              Conoce a los profesionales
              <br />
              que cuidarán de ti
            </h2>
          </div>

          <div className="space-y-20">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="rounded-3xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover object-top"
                    />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="font-display text-3xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-cyan-600 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{member.bio}</p>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm mb-3 flex items-center gap-2">
                      <GraduationCap size={16} className="text-cyan-600" />
                      Formación y certificaciones
                    </p>
                    <ul className="space-y-2">
                      {member.credentials.map((c) => (
                        <li key={c} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-500 text-sm">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
              Lo que nos hace diferentes
            </h2>
            <p className="text-slate-500 text-lg">No son promesas. Son el modelo con el que trabajamos todos los días.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-cyan-200 transition-all hover-lift">
                <h3 className="font-display text-slate-800 font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            Ven a conocernos sin presión
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            La mejor manera de saber si somos la clínica correcta para ti es conocernos. Agenda una primera visita y compruébalo por ti mismo.
          </p>
          <button
            onClick={() => navigate('contacto')}
            className="btn-primary text-white font-bold px-10 py-4 rounded-2xl inline-flex items-center gap-2"
          >
            Agendar primera visita
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}
