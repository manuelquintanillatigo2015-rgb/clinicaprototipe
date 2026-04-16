import { ArrowRight, MessageCircle, Phone, Calendar, ScanLine, ClipboardList, Heart, RotateCcw, CheckCircle2, Clock } from 'lucide-react';
import { NavigationProps } from '../types/navigation';

const journey = [
  {
    step: '01',
    icon: Phone,
    title: 'Primer contacto',
    subtitle: 'Por teléfono, WhatsApp o formulario',
    desc: 'El primer paso es simple: contáctanos. Puedes llamar, escribir por WhatsApp o llenar el formulario de contacto. Te respondemos en menos de 2 horas en horario de atención.',
    detail: 'No te pediremos que describas en detalle tu problema antes de venir. Solo necesitamos encontrar un horario que te funcione.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    step: '02',
    icon: Calendar,
    title: 'Agendas tu cita',
    subtitle: 'En menos de 2 minutos',
    desc: 'Tienes disponibilidad en horarios matutinos, vespertinos y los sábados. Te confirmamos tu cita y te enviamos un recordatorio el día anterior.',
    detail: 'No tienes que pagar por adelantado ni dejar un depósito para reservar tu espacio.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    step: '03',
    icon: Heart,
    title: 'Tu llegada',
    subtitle: 'Un ambiente pensado para ti',
    desc: 'Cuando llegas, te recibe nuestro equipo con tu nombre. La sala de espera es tranquila, discreta y cómoda. No hay formularios interminables ni tiempos de espera largos.',
    detail: 'Si tienes ansiedad o alguna condición especial, puedes decirnos antes y preparamos la consulta para que estés cómodo desde el inicio.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
  },
  {
    step: '04',
    icon: ScanLine,
    title: 'Evaluación con diagnóstico digital',
    subtitle: 'Lo vemos juntos, en tiempo real',
    desc: 'Usamos tecnología de radiografía digital que muestra los resultados en pantalla de inmediato. Te mostramos exactamente lo que encontramos mientras te lo explicamos.',
    detail: 'No usamos términos técnicos sin explicarlos. Si algo no queda claro, pregunta cuantas veces necesites.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    step: '05',
    icon: ClipboardList,
    title: 'Presentación del plan',
    subtitle: 'Sin presión ni letra chica',
    desc: 'Te presentamos por escrito las opciones de tratamiento disponibles para tu caso, con sus respectivos costos y tiempos estimados. Tienes toda la información para decidir.',
    detail: 'No tienes que decidir ese mismo día. Puedes tomarte el tiempo que necesites. Nunca te presionaremos.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    step: '06',
    icon: Heart,
    title: 'Tu tratamiento',
    subtitle: 'A tu ritmo, con tu autorización',
    desc: 'El tratamiento comienza solo cuando tú lo decides. Explicamos cada procedimiento antes de iniciarlo. Si en algún momento necesitas una pausa, basta con indicarlo.',
    detail: 'Usamos anestesia local de efecto rápido para que no sientas dolor. Si tienes miedo a las inyecciones, tenemos técnicas especiales para reducir la molestia.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    step: '07',
    icon: RotateCcw,
    title: 'Seguimiento y cuidado continuo',
    subtitle: 'No estás solo después del tratamiento',
    desc: 'Después de cada procedimiento, te contactamos para saber cómo estás. Si tienes alguna duda o molestia, puedes escribirnos en cualquier momento.',
    detail: 'Incluimos visitas de seguimiento en todos los tratamientos para asegurarnos de que el resultado sea exactamente el que planeamos.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
];

const faqs = [
  {
    q: '¿Duele el tratamiento?',
    a: 'La mayoría de los procedimientos se realizan con anestesia local. Puedes sentir presión o movimiento, pero no dolor. Si en algún momento sientes molestia, indícalo y hacemos una pausa o ajuste.',
  },
  {
    q: '¿Tengo que decidir en la primera cita?',
    a: 'No. En la primera cita solo evaluamos y te presentamos opciones. Puedes tomar el tiempo que necesites para decidir. No hay presión de ningún tipo.',
  },
  {
    q: '¿Cuánto tiempo toma una consulta?',
    a: 'La primera evaluación dura entre 30 y 45 minutos. Te explicamos todo con calma, sin apresurarte. Las citas de tratamiento varían según el procedimiento.',
  },
  {
    q: '¿Tienen facilidades de pago?',
    a: 'Sí. Ofrecemos planes de pago sin intereses y aceptamos todas las tarjetas. También trabajamos con varios seguros de gastos médicos.',
  },
  {
    q: '¿Qué pasa si tengo mucho miedo?',
    a: 'Es más común de lo que crees. Cuéntanoslo cuando agendes y preparamos tu visita de forma especial: ritmo más lento, más explicaciones, pausas cuando las necesites.',
  },
  {
    q: '¿Y si llego y decido no hacer nada?',
    a: 'Está completamente bien. La evaluación inicial no te compromete a ningún tratamiento. Puedes tomarte el tiempo que necesites.',
  },
];

export default function ExperienciaPaciente({ navigate }: NavigationProps) {
  return (
    <main className="bg-white">
      <div className="bg-hero-gradient pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Tu experiencia
            </p>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Saber qué esperar
              <br />
              <span className="text-gradient-blue">elimina el miedo</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Aquí te contamos exactamente qué pasa desde que nos contactas hasta el seguimiento final. Sin sorpresas.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-cyan-200 via-blue-200 to-cyan-200 hidden md:block" />

            <div className="space-y-8">
              {journey.map((step) => (
                <div key={step.step} className="relative flex gap-8">
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-12 h-12 ${step.bg} border-2 ${step.border} rounded-2xl flex items-center justify-center`}>
                      <step.icon size={20} className={step.color} />
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="bg-white rounded-2xl border border-slate-100 hover:border-cyan-200 p-6 transition-all hover-lift">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <span className={`text-xs font-bold ${step.color} tracking-widest`}>{step.step}</span>
                          <h3 className="font-display text-xl font-bold text-slate-900 mt-0.5">{step.title}</h3>
                          <p className={`text-sm ${step.color} font-medium`}>{step.subtitle}</p>
                        </div>
                        <Clock size={16} className="text-slate-300 flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{step.desc}</p>
                      <div className={`${step.bg} rounded-xl p-3 flex items-start gap-2`}>
                        <CheckCircle2 size={14} className={`${step.color} mt-0.5 flex-shrink-0`} />
                        <p className={`text-sm ${step.color}`}>{step.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-slate-500 text-lg">
              Las dudas más comunes que tienen los pacientes antes de venir.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-cyan-200 transition-all">
                <h3 className="font-display text-slate-800 font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            Ya sabes qué esperar. El resto es dar el paso.
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Agenda tu primera evaluación hoy. Sin compromiso, sin presión y sin sorpresas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('contacto')}
              className="btn-primary text-white font-bold px-10 py-4 rounded-2xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Agendar evaluación
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-2xl transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
