import { ArrowRight, MessageCircle, CheckCircle2, Shield, AlignCenter, Sparkles, Layers, Wrench, Smile } from 'lucide-react';
import { NavigationProps } from '../types/navigation';

const services = [
  {
    id: 'limpieza',
    icon: Shield,
    name: 'Limpieza y Prevención',
    tagline: 'El mejor tratamiento es el que evita problemas antes de que existan.',
    desc: 'Una limpieza profesional va mucho más allá del cepillado diario. Removemos el sarro que se acumula en lugares que ningún cepillo alcanza, pulimos tus dientes y te enseñamos cómo mantenerlos así en casa.',
    benefits: [
      'Eliminación profunda de sarro y placa bacteriana',
      'Previene caries, infecciones y pérdida de dientes',
      'Mejora la apariencia de tus encías y tu aliento',
      'Detección temprana de problemas antes de que crezcan',
    ],
    image: 'https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-cyan-50 border-cyan-100',
    accent: 'text-cyan-600',
    iconBg: 'bg-cyan-100',
  },
  {
    id: 'ortodoncia',
    icon: AlignCenter,
    name: 'Ortodoncia',
    tagline: 'Alinea tu sonrisa sin que nadie lo note — o muéstrala orgulloso.',
    desc: 'Tenemos opciones para todos: brackets metálicos, brackets estéticos del color de tu diente, y alineadores removibles tipo Invisalign. Te asesoramos sin presión para que elijas lo que mejor se adapta a tu vida.',
    benefits: [
      'Opciones invisibles o discretas para adultos',
      'Tratamiento para niños, adolescentes y adultos',
      'Seguimiento puntual y ajustes sin demora',
      'Resultado documentado: sabes desde el inicio adónde vas',
    ],
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-blue-50 border-blue-100',
    accent: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    id: 'estetica',
    icon: Sparkles,
    name: 'Estética Dental',
    tagline: 'Una sonrisa que impacta empieza con pequeños cambios bien hechos.',
    desc: 'Blanqueamiento dental, carillas de porcelana y diseño de sonrisa digital. Te mostramos el resultado antes de comenzar, para que puedas decidir con total confianza.',
    benefits: [
      'Blanqueamiento seguro con gel de uso profesional',
      'Carillas que duran 10–15 años con cuidado normal',
      'Diseño digital de sonrisa: ves el resultado antes',
      'Cambios rápidos con resultados naturales y elegantes',
    ],
    image: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-amber-50 border-amber-100',
    accent: 'text-amber-600',
    iconBg: 'bg-amber-100',
  },
  {
    id: 'implantes',
    icon: Layers,
    name: 'Implantes Dentales',
    tagline: 'Recupera un diente para toda la vida, sin que nadie lo distinga del natural.',
    desc: 'Los implantes de titanio son la solución más parecida a un diente natural. Funcionan igual, se ven igual y, con los cuidados básicos, duran décadas. Te acompañamos en cada fase del proceso.',
    benefits: [
      'Titanio biocompatible de alta calidad certificado',
      'Procedimiento guiado con tecnología 3D para mayor precisión',
      'Anestesia local sin molestias durante el proceso',
      'Corona de cerámica idéntica a los dientes naturales',
    ],
    image: 'https://images.pexels.com/photos/6627449/pexels-photo-6627449.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-emerald-50 border-emerald-100',
    accent: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
  },
  {
    id: 'restauraciones',
    icon: Wrench,
    name: 'Restauraciones',
    tagline: 'Reparamos dientes dañados para que vuelvan a funcionar como nuevos.',
    desc: 'Desde una caries pequeña hasta un diente fracturado, tenemos la solución correcta. Usamos materiales del color de tu diente para que el resultado sea completamente natural.',
    benefits: [
      'Resinas compuestas del color exacto de tu diente',
      'Coronas de cerámica ultra resistentes y estéticas',
      'Tratamientos de conducto sin dolor con tecnología moderna',
      'Soluciones para dientes fracturados, desgastados o perdidos',
    ],
    image: 'https://images.pexels.com/photos/3845807/pexels-photo-3845807.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-slate-50 border-slate-200',
    accent: 'text-slate-600',
    iconBg: 'bg-slate-100',
  },
  {
    id: 'urgencias',
    icon: Smile,
    name: 'Urgencias Dentales',
    tagline: 'Cuando hay dolor, no te dejamos esperar.',
    desc: 'Atendemos dolores agudos, infecciones, dientes rotos y otras urgencias el mismo día. Si estás en dolor, llámanos ahora — encontramos un espacio para ti.',
    benefits: [
      'Atención preferencial el mismo día',
      'Diagnóstico rápido con tecnología digital',
      'Alivio del dolor garantizado en la primera visita',
      'Seguimiento post-urgencia incluido',
    ],
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'bg-rose-50 border-rose-100',
    accent: 'text-rose-600',
    iconBg: 'bg-rose-100',
  },
];

export default function Servicios({ navigate }: NavigationProps) {
  return (
    <main className="bg-white">
      <div className="bg-hero-gradient pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Tratamientos
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Cada tratamiento,
              <br />
              <span className="text-gradient-blue">explicado con claridad</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Sin tecnicismos. Solo lo que necesitas saber para tomar la mejor decisión para tu salud.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className={`rounded-3xl overflow-hidden ${service.color} border`}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>

              <div className={index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className={`inline-flex items-center gap-2 ${service.iconBg} rounded-xl px-3 py-1.5 mb-5`}>
                  <service.icon size={16} className={service.accent} />
                  <span className={`text-sm font-semibold ${service.accent}`}>{service.name}</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-3">
                  {service.tagline}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>

                <ul className="space-y-2.5 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className={`${service.accent} mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-600 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate('contacto')}
                    className="btn-primary text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    Agendar consulta
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium px-6 py-3 rounded-xl hover:bg-emerald-100 transition-colors text-sm"
                  >
                    <MessageCircle size={16} />
                    Preguntar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            ¿No sabes qué tratamiento necesitas?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Comienza con una evaluación completa. En 30 minutos te decimos exactamente qué encontramos y qué opciones tienes, sin compromiso.
          </p>
          <button
            onClick={() => navigate('contacto')}
            className="btn-primary text-white font-bold px-10 py-4 rounded-2xl inline-flex items-center gap-2"
          >
            Agenda tu evaluación
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}
