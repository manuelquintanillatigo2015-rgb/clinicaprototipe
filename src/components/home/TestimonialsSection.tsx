import { Star, Quote, ArrowRight } from 'lucide-react';
import { NavigationProps } from '../../types/navigation';

const testimonials = [
  {
    name: 'Andrea Morales',
    role: 'Paciente desde 2022',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=120&h=120&fit=crop',
    text: 'Llegué con mucho miedo después de años sin ir al dentista. La Dra. Soto me explicó todo con una pantalla frente a mí, sin apresurarse. Por primera vez entendí exactamente qué tenía y qué opciones tenía. Fue una experiencia completamente diferente.',
    service: 'Implante dental',
    rating: 5,
  },
  {
    name: 'Carlos Reyes',
    role: 'Paciente desde 2023',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=120&h=120&fit=crop',
    text: 'Había ido a tres clínicas antes y siempre salía sintiéndome confundido o presionado. Aquí fue distinto desde el primer momento. Me dieron un presupuesto escrito, sin letra chica, y cumplieron cada cosa que prometieron.',
    service: 'Ortodoncia invisible',
    rating: 5,
  },
  {
    name: 'Laura Jiménez',
    role: 'Paciente desde 2021',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=120&h=120&fit=crop',
    text: 'Mi hija tenía pánico al dentista. Desde la primera cita, el equipo fue tan cálido y paciente que ahora ella misma me pide ir. No solo le cuidaron los dientes — le cambiaron la perspectiva para siempre.',
    service: 'Ortodoncia infantil',
    rating: 5,
  },
];

export default function TestimonialsSection({ navigate }: NavigationProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#2A6F97] text-sm font-semibold tracking-widest uppercase mb-4">
            Resultados reales
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Pacientes que llegaron con dudas
            <br />
            y volvieron con sonrisas
          </h2>
          <p className="text-gray-600 text-lg max-w-lg mx-auto">
            Estas no son frases genéricas. Son historias reales de personas que entendemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#2A6F97]/30 hover:shadow-md transition-all hover-lift">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#3EC1D3] text-[#3EC1D3]" />
                ))}
              </div>
              <Quote size={24} className="text-[#2A6F97]/10 mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-[#2A6F97] text-xs">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('casos-reales')}
            className="inline-flex items-center gap-2 text-[#2A6F97] font-semibold hover:text-[#1e4d6b] transition-colors"
          >
            Ver más casos reales
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
