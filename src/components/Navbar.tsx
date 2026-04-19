import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Page, NavigationProps } from '../types/navigation';

const navLinks: { label: string; page: Page }[] = [
  { label: 'Inicio', page: 'home' },
  { label: 'Servicios', page: 'servicios' },
  { label: 'Nosotros', page: 'sobre-nosotros' },
  { label: 'Casos Reales', page: 'casos-reales' },
  { label: 'Experiencia', page: 'experiencia' },
  { label: 'Contacto', page: 'contacto' },
];

export default function Navbar({ navigate, currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    navigate(page);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? 'bg-slate-950/95 border-b border-white/8 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">L</span>
            </div>
            <span className="text-white font-display font-semibold text-lg tracking-tight">
              Lumina <span className="text-gradient-blue">Dental</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === link.page
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
            >
              <Phone size={14} />
              <span>(123) 456-7890</span>
            </a>
            <button
              onClick={() => handleNav('contacto')}
              className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
            >
              Agenda tu cita
            </button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    currentPage === link.page
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/8'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('contacto')}
                className="btn-primary text-white text-sm font-semibold px-5 py-3 rounded-xl mt-2"
              >
                Agenda tu cita
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
