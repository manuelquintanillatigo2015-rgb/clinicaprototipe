import { ScanLine, FileCheck, MessageSquareText, ShieldCheck } from 'lucide-react';

const points = [
  {
    icon: ScanLine,
    title: 'Radiografías digitales en el momento',
    desc: 'Tecnología que nos permite mostrarte exactamente lo que ocurre en tus dientes, en tiempo real, mientras te explicamos.',
  },
  {
    icon: FileCheck,
    title: 'Diagnóstico escrito y detallado',
    desc: 'Te entregamos un reporte claro: qué encontramos, qué opciones tienes y cuánto cuesta cada una. Sin letra chica.',
  },
  {
    icon: MessageSquareText,
    title: 'Explicamos antes de comenzar',
    desc: 'Ningún procedimiento empieza sin que lo hayas entendido completamente y dado tu autorización explícita.',
  },
  {
    icon: ShieldCheck,
    title: 'Sin exageraciones ni sobreventa',
    desc: 'Solo te recomendamos lo que realmente necesitas. Tu salud oral primero, siempre.',
  },
];

export default function DifferentiationSection() {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Transparencia total
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              No adivinamos.{' '}
              <span className="text-gradient-blue">Te mostramos</span>{' '}
              exactamente lo que necesitas.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Muchas personas no confían en los dentistas porque sienten que no entienden qué les está pasando o cuánto costará. En Lumina Dental, eso no ocurre.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Usamos tecnología de diagnóstico avanzada para mostrarte en pantalla, en tiempo real, el estado de tu boca. Sin suposiciones, sin tecnicismos, sin ambigüedad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point) => (
              <div key={point.title} className="card-glass rounded-2xl p-5 hover:border-blue-400/20 transition-all hover-lift">
                <div className="w-10 h-10 bg-blue-400/15 rounded-xl flex items-center justify-center mb-4">
                  <point.icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-display font-semibold text-sm mb-2">{point.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
