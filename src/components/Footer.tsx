import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { NavigationProps, Page } from '../types/navigation';

const footerLinks: { label: string; page: Page }[] = [
  { label: 'Inicio', page: 'home' },
  { label: 'Servicios', page: 'servicios' },
  { label: 'Sobre Nosotros', page: 'sobre-nosotros' },
  { label: 'Casos Reales', page: 'casos-reales' },
  { label: 'Experiencia del Paciente', page: 'experiencia' },
  { label: 'Agendar Cita', page: 'contacto' },
];

export default function Footer({ navigate }: NavigationProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <button onClick={() => navigate('home')} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2A6F97] to-[#1e4d6b] flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">L</span>
              </div>
              <span className="text-gray-900 font-display font-semibold text-lg tracking-tight">
                Lumina <span className="text-[#2A6F97]">Dental</span>
              </span>
            </button>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Diagnóstico claro, tecnología moderna y un trato que te hace sentir tranquilo desde el primer momento.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#2A6F97] hover:border-[#2A6F97] transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#2A6F97] hover:border-[#2A6F97] transition-all">
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 hover:bg-emerald-500/20 transition-all"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-5">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-5">Servicios</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {['Limpieza y Prevención', 'Ortodoncia', 'Estética Dental', 'Implantes Dentales', 'Restauraciones', 'Urgencias'].map(s => (
                <li key={s}>
                  <button onClick={() => navigate('servicios')} className="hover:text-blue-400 transition-colors">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Av. Principal 123, Col. Centro<br />Ciudad de México, CDMX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={15} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:hola@luminadental.mx" className="hover:text-white transition-colors">hola@luminadental.mx</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Clock size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Lun – Vie: 9:00 – 19:00</p>
                  <p>Sáb: 9:00 – 14:00</p>
                </div>
              </li>
            </ul>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all w-full"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Clínica Dental Lumina. Todos los derechos reservados.</p>
          <p>Hecho con cuidado para tus pacientes.</p>
        </div>
      </div>
    </footer>
  );
}
