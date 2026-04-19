import { ArrowRight, MessageCircle } from 'lucide-react';
import { NavigationProps } from '../../types/navigation';

export default function FinalCTA({ navigate }: NavigationProps) {
  return (
    <section className="py-28 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/20 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-slate-300 text-sm">Citas disponibles esta semana</span>
        </div>

        <h2 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Tu sonrisa{' '}
          <span className="text-gradient-blue">no debería</span>
          <br />
          esperar más
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Cada día que pospones puede complicar algo que hoy tiene solución sencilla. Danos 30 minutos y te decimos exactamente lo que necesitas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('contacto')}
            className="btn-primary text-white font-bold px-10 py-5 rounded-2xl flex items-center gap-2 text-base w-full sm:w-auto justify-center"
          >
            Reservar cita ahora
            <ArrowRight size={18} />
          </button>
          <a
            href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20agendar%20una%20evaluación."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-5 rounded-2xl transition-all w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            Escribir por WhatsApp
          </a>
        </div>

        <p className="text-slate-500 text-sm mt-8">
          Sin compromiso. Solo 30 minutos que pueden cambiar tu sonrisa.
        </p>
      </div>
    </section>
  );
}
