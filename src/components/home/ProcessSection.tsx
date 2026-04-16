import { ClipboardList, MessageCircle, Stethoscope, RotateCcw } from 'lucide-react';
import { NavigationProps } from '../../types/navigation';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Evaluación clara',
    desc: 'Usamos tecnología de diagnóstico digital para mostrarte con exactitud el estado de tu boca. Sin suposiciones.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Explicación sin presión',
    desc: 'Te explicamos lo que encontramos, las opciones disponibles y los costos. Sin apresurarte a decidir nada.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'Tratamiento personalizado',
    desc: 'Comenzamos solo cuando tú estés listo y de acuerdo. Cada paso del tratamiento es ajustado a tus tiempos y necesidades.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    number: '04',
    icon: RotateCcw,
    title: 'Seguimiento continuo',
    desc: 'No te dejamos solo una vez que termina el tratamiento. Hacemos seguimiento para asegurarnos de que el resultado se mantenga.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
];

export default function ProcessSection({ navigate }: NavigationProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Cómo funciona
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
            Tu camino hacia una mejor sonrisa
            <br />
            es más simple de lo que crees
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-0.5 bg-gradient-to-r from-cyan-200 via-blue-200 to-emerald-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mb-5 relative z-10 border border-white shadow-sm`}>
                  <step.icon size={24} className={step.color} />
                </div>
                <div className={`text-xs font-bold ${step.color} tracking-widest mb-2`}>{step.number}</div>
                <h3 className="font-display text-slate-800 font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <button
            onClick={() => navigate('experiencia')}
            className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-cyan-600 transition-colors"
          >
            Conoce la experiencia completa del paciente →
          </button>
        </div>
      </div>
    </section>
  );
}
