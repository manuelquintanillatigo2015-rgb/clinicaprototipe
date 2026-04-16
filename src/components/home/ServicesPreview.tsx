import { ArrowRight, Sparkles, AlignCenter, Smile, Layers, Wrench, Shield } from 'lucide-react';
import { NavigationProps } from '../../types/navigation';

const services = [
  {
    icon: Shield,
    name: 'Limpieza y prevención',
    desc: 'Mantén tus dientes sanos y elimina el sarro acumulado antes de que cause problemas.',
    color: 'from-cyan-500/10 to-blue-600/10',
    accent: 'text-cyan-500',
    border: 'border-cyan-200 hover:border-cyan-400',
  },
  {
    icon: AlignCenter,
    name: 'Ortodoncia',
    desc: 'Alinea tu sonrisa con opciones discretas y modernas, incluyendo brackets estéticos e invisalign.',
    color: 'from-blue-500/10 to-blue-700/10',
    accent: 'text-blue-500',
    border: 'border-blue-200 hover:border-blue-400',
  },
  {
    icon: Sparkles,
    name: 'Estética dental',
    desc: 'Blanqueamiento, carillas y diseño de sonrisa para una imagen que proyecta confianza.',
    color: 'from-amber-500/10 to-orange-500/10',
    accent: 'text-amber-500',
    border: 'border-amber-200 hover:border-amber-400',
  },
  {
    icon: Layers,
    name: 'Implantes dentales',
    desc: 'Recupera tu sonrisa completa con implantes de titanio de alta calidad, sin dolor y de por vida.',
    color: 'from-emerald-500/10 to-teal-500/10',
    accent: 'text-emerald-500',
    border: 'border-emerald-200 hover:border-emerald-400',
  },
  {
    icon: Wrench,
    name: 'Restauraciones',
    desc: 'Reconstruye dientes dañados con materiales del color de tu diente, sin que nadie lo note.',
    color: 'from-slate-500/10 to-slate-600/10',
    accent: 'text-slate-500',
    border: 'border-slate-200 hover:border-slate-400',
  },
  {
    icon: Smile,
    name: 'Urgencias dentales',
    desc: 'Atendemos dolores e infecciones el mismo día. No te dejamos esperar cuando hay dolor.',
    color: 'from-rose-500/10 to-red-500/10',
    accent: 'text-rose-500',
    border: 'border-rose-200 hover:border-rose-400',
  },
];

export default function ServicesPreview({ navigate }: NavigationProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Lo que podemos hacer por ti
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Todos los tratamientos que necesitas
            <br />
            en un solo lugar
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Con explicaciones claras, precios transparentes y un equipo que te acompaña en cada paso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative p-6 rounded-2xl border bg-gradient-to-br ${service.color} ${service.border} transition-all hover-lift cursor-pointer group`}
              onClick={() => navigate('servicios')}
            >
              <div className={`w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4`}>
                <service.icon size={22} className={service.accent} />
              </div>
              <h3 className="font-display text-slate-800 font-semibold text-lg mb-2">{service.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={`text-sm font-medium ${service.accent}`}>Conocer más</span>
                <ArrowRight size={14} className={service.accent} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('servicios')}
            className="inline-flex items-center gap-2 border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all"
          >
            Ver todos los tratamientos
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
