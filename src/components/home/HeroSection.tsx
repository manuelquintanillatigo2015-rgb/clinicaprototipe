import { ArrowRight, Star, Shield, Zap, CheckCircle } from 'lucide-react';
import { NavigationProps } from '../../types/navigation';

export default function HeroSection({ navigate }: NavigationProps) {
  return (
    <section className="relative bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <div className="inline-flex items-center gap-2 bg-[#2A6F97]/5 border border-[#2A6F97]/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-[#3EC1D3] rounded-full" />
              <span className="text-[#2A6F97] text-sm font-medium">Atención sin listas de espera</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Cuidado dental claro, cómodo y sin sorpresas
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              Diagnóstico preciso, tecnología moderna y un trato que te hace sentir tranquilo desde el primer momento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => navigate('contacto')}
                className="btn-primary text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-base hover:shadow-lg"
              >
                Agenda tu cita
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate('contacto')}
                className="btn-outline-white font-medium px-8 py-4 rounded-lg flex items-center justify-center gap-2 text-base"
              >
                Llamar: (123) 456-7890
              </button>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#3EC1D3] text-[#3EC1D3]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm font-medium">+500 pacientes atendidos</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-gray-900 font-semibold text-lg">15+ años</p>
                <p className="text-gray-600 text-sm">de experiencia</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clínica dental moderna"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-6 top-20 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2A6F97]/10 rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} className="text-[#2A6F97]" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-semibold">Seguro y comprobado</p>
                  <p className="text-gray-500 text-xs">Sin dolor ni sorpresas</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-24 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#3EC1D3]/10 rounded-lg flex items-center justify-center">
                  <Zap size={20} className="text-[#3EC1D3]" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-semibold">Tecnología moderna</p>
                  <p className="text-gray-500 text-xs">Diagnósticos precisos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
