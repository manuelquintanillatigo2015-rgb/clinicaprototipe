import { CheckCircle2 } from 'lucide-react';
import { NavigationProps } from '../../types/navigation';

const reassurances = [
  'Nunca te diremos lo que "necesitas" sin mostrarte por qué.',
  'Si tienes miedo, lo tomamos en serio — no lo ignoramos.',
  'No hay presión para iniciar ningún tratamiento.',
  'Puedes preguntar todo lo que quieras, sin límite de tiempo.',
];

export default function EmotionalSection({ navigate }: NavigationProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Adolescente sonriendo con confianza"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                </div>
                <p className="text-slate-800 font-display font-semibold text-sm">9 de cada 10 pacientes</p>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                que llegaron con miedo, volvieron tranquilos para su segunda visita.
              </p>
            </div>
          </div>

          <div>
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Entendemos cómo te sientes
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Sabemos lo que sientes{' '}
              <span className="text-gradient-blue">antes de venir</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Quizás llevas tiempo posponiendo esta visita. Tal vez tuviste una mala experiencia antes. O simplemente no sabes qué esperar y eso te genera ansiedad.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Lo entendemos completamente. Por eso diseñamos cada parte de tu visita para que tengas claridad total: qué encontramos, qué opciones tienes y cuánto cuesta, antes de tomar cualquier decisión.
            </p>

            <ul className="space-y-3 mb-10">
              {reassurances.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('contacto')}
              className="btn-primary text-white font-semibold px-8 py-4 rounded-2xl inline-block"
            >
              Agenda una evaluación sin compromiso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
