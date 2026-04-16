import { Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavigationProps } from '../types/navigation';

const cases = [
  {
    id: 1,
    name: 'Mariana López',
    age: 34,
    treatment: 'Diseño de sonrisa + Carillas de porcelana',
    duration: '3 meses',
    before: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimony: '"Siempre fui insegura con mi sonrisa en fotos. Evitaba reírme abiertamente. Hoy no puedo dejar de sonreír. El resultado superó todo lo que esperaba y el proceso fue mucho menos intimidante de lo que pensé."',
    rating: 5,
    results: ['Simetría dental mejorada en 100%', '8 carillas de porcelana ultrafinas', 'Blanqueamiento previo incluido', 'Resultado natural, no artificial'],
  },
  {
    id: 2,
    name: 'Roberto Fuentes',
    age: 48,
    treatment: 'Implante dental + Corona cerámica',
    duration: '5 meses',
    before: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimony: '"Llevaba 6 años con ese diente faltante y me avergonzaba hablar con clientes. Vine convencido de que iba a ser un proceso largo y doloroso. No lo fue. Hoy tengo un diente que no se distingue del resto."',
    rating: 5,
    results: ['Implante de titanio grado médico', 'Guía quirúrgica 3D para máxima precisión', 'Cero dolor en el proceso', 'Resultado final en 5 meses totales'],
  },
  {
    id: 3,
    name: 'Sofía Méndez',
    age: 22,
    treatment: 'Ortodoncia con alineadores invisibles',
    duration: '14 meses',
    before: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimony: '"Fui a una presentación de trabajo y mi jefa me preguntó si me habían hecho algo. Le dije \'nada, solo sonrío diferente\'. Eso fue suficiente. Nadie supo que usaba alineadores en todo el proceso."',
    rating: 5,
    results: ['32 alineadores progresivos', 'Seguimiento mensual sin demora', 'Ningún compañero de trabajo lo notó', 'Retención incluida en el plan'],
  },
  {
    id: 4,
    name: 'Carmen Ríos',
    age: 55,
    treatment: 'Prótesis completa implantosoportada',
    duration: '6 meses',
    before: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    after: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
    testimony: '"Llevaba años usando una prótesis removible que me daba inseguridad. La Dra. Soto me explicó todo con paciencia y honestidad. Nunca me presionó. Tomé mi tiempo para decidir y no me arrepiento para nada."',
    rating: 5,
    results: ['4 implantes de soporte', 'Prótesis fija estética y funcional', 'Masticación completamente restaurada', 'Sin retiro nocturno'],
  },
];

const shortTestimonials = [
  {
    name: 'Diego Castillo',
    text: 'Vine con miedo y salí con ganas de volver. Eso no lo había sentido nunca en un consultorio dental.',
    rating: 5,
    service: 'Limpieza + revisión general',
  },
  {
    name: 'Patricia Navarro',
    text: 'Me explicaron con una pantalla lo que tenía. Por primera vez en mi vida entendí exactamente qué pasaba en mi boca.',
    rating: 5,
    service: 'Diagnóstico digital',
  },
  {
    name: 'Héctor Guzmán',
    text: 'Tres presupuestos distintos, todos diferentes y todos confusos. Aquí me dieron uno claro y cumplieron cada peso.',
    rating: 5,
    service: 'Ortodoncia metálica',
  },
  {
    name: 'Lucía Vega',
    text: 'Mi niña de 8 años llegó llorando y salió contándome todo lo que había aprendido. Cambió algo en ella.',
    rating: 5,
    service: 'Odontopediatría',
  },
  {
    name: 'Fernando Torres',
    text: 'Soy de los que se desmayan fácilmente. Me lo dijeron al inicio, se prepararon, y no pasó nada. Increíble.',
    rating: 5,
    service: 'Extracción con sedación',
  },
  {
    name: 'Isabel Reyes',
    text: 'Cuatro años posponiéndolo. Ojalá hubiera venido antes. El proceso fue rápido, sin dolor y el resultado es hermoso.',
    rating: 5,
    service: 'Implante dental',
  },
];

export default function CasosReales({ navigate }: NavigationProps) {
  return (
    <main className="bg-white">
      <div className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Resultados reales
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Casos que hablan
              <br />
              <span className="text-gradient-blue">por sí solos</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              No hay filtros, no hay promesas exageradas. Solo resultados verificables de pacientes reales con situaciones como la tuya.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {cases.map((c, i) => (
              <div
                key={c.id}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <div className="grid grid-cols-2 h-full min-h-64">
                      <div className="relative">
                        <img src={c.before} alt="Antes" className="w-full h-full object-cover" />
                        <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-xs font-bold px-2 py-1 rounded-lg">
                          ANTES
                        </div>
                      </div>
                      <div className="relative">
                        <img src={c.after} alt="Después" className="w-full h-full object-cover" />
                        <div className="absolute bottom-3 left-3 bg-cyan-600/90 text-white text-xs font-bold px-2 py-1 rounded-lg">
                          DESPUÉS
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(c.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">{c.name}</h3>
                    <p className="text-cyan-600 text-sm font-medium mb-1">{c.treatment}</p>
                    <p className="text-slate-400 text-sm mb-5">Duración del tratamiento: {c.duration}</p>

                    <Quote size={20} className="text-cyan-100 mb-2" />
                    <p className="text-slate-600 italic leading-relaxed text-sm mb-6">{c.testimony}</p>

                    <div>
                      <p className="text-slate-700 font-semibold text-sm mb-3">Resultados del caso:</p>
                      <ul className="space-y-2">
                        {c.results.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-500 text-sm">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
              Más voces de nuestros pacientes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shortTestimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed mb-4">"{t.text}"</p>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-slate-800 font-semibold text-sm">{t.name}</p>
                  <p className="text-cyan-600 text-xs">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            Tu caso puede ser el próximo
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Cada historia comenzó con una evaluación sin compromiso. La tuya puede empezar hoy.
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
