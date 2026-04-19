import { UserCheck, Cpu, Lock, HeartHandshake } from 'lucide-react';

const items = [
  {
    icon: UserCheck,
    title: 'Atención personalizada',
    desc: 'Cada paciente recibe un plan exclusivo para su caso.',
  },
  {
    icon: Cpu,
    title: 'Tecnología moderna',
    desc: 'Equipos de última generación para diagnósticos precisos.',
  },
  {
    icon: Lock,
    title: 'Procedimientos sin sorpresas',
    desc: 'Te explicamos cada paso antes de comenzar, siempre.',
  },
  {
    icon: HeartHandshake,
    title: 'Trato humano y cercano',
    desc: 'Aquí te escuchamos antes de recomendarte cualquier cosa.',
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium mb-10 tracking-widest uppercase">
          Tu tranquilidad es parte del tratamiento.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
            >
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                <item.icon size={22} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-slate-800 font-display font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
