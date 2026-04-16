import { ArrowRight, Play, Star, Shield, Zap } from 'lucide-react';
import { NavigationProps } from '../../types/navigation';

export default function HeroSection({ navigate }: NavigationProps) {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl animate-pulse-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.08'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Atención sin listas de espera</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
              Sonríe con{' '}
              <span className="text-gradient-blue">confianza</span>
              <br />
              desde tu primera
              <br />
              visita
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
              Diagnóstico claro, tecnología moderna y un trato que elimina el miedo desde el primer momento. Sin sorpresas, sin presión.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => navigate('contacto')}
                className="btn-primary text-white font-semibold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 text-base"
              >
                Agenda tu evaluación ahora
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate('experiencia')}
                className="btn-outline-white text-white font-medium px-8 py-4 rounded-2xl flex items-center justify-center gap-2 text-base"
              >
                <Play size={16} className="fill-white" />
                Ver cómo trabajamos
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {[
                  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=80&h=80&fit=crop',
                  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=80&h=80&fit=crop',
                  'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=80&h=80&fit=crop',
                  'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=80&h=80&fit=crop',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Paciente"
                    className="w-9 h-9 rounded-full border-2 border-slate-900 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-400 text-xs">+1,200 pacientes satisfechos</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden glow-cyan">
              <img
                src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clínica dental moderna"
                className="w-full h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-8 top-16 card-glass rounded-2xl p-5 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-400/20 rounded-xl flex items-center justify-center">
                  <Shield size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Procedimiento seguro</p>
                  <p className="text-slate-400 text-xs">Sin sorpresas ni presión</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 bottom-20 card-glass rounded-2xl p-5 animate-float delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-400/20 rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Diagnóstico digital</p>
                  <p className="text-slate-400 text-xs">Resultados en el momento</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 card-glass rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">Próxima disponibilidad</p>
                  <p className="text-cyan-400 text-xs">Hoy mismo — sin espera</p>
                </div>
                <button
                  onClick={() => navigate('contacto')}
                  className="btn-primary text-white text-xs font-semibold px-4 py-2 rounded-xl"
                >
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
