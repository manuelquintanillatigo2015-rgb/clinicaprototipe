import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import SobreNosotros from './pages/SobreNosotros';
import CasosReales from './pages/CasosReales';
import ExperienciaPaciente from './pages/ExperienciaPaciente';
import Contacto from './pages/Contacto';
import { Page } from './types/navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<Page, string> = {
      'home': 'Clínica Dental Lumina | Sonríe con Confianza',
      'servicios': 'Servicios | Clínica Dental Lumina',
      'sobre-nosotros': 'Sobre Nosotros | Clínica Dental Lumina',
      'casos-reales': 'Casos Reales | Clínica Dental Lumina',
      'experiencia': 'Experiencia del Paciente | Clínica Dental Lumina',
      'contacto': 'Agenda tu Cita | Clínica Dental Lumina',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar navigate={navigate} currentPage={currentPage} />

      {currentPage === 'home' && <Home navigate={navigate} />}
      {currentPage === 'servicios' && <Servicios navigate={navigate} />}
      {currentPage === 'sobre-nosotros' && <SobreNosotros navigate={navigate} />}
      {currentPage === 'casos-reales' && <CasosReales navigate={navigate} />}
      {currentPage === 'experiencia' && <ExperienciaPaciente navigate={navigate} />}
      {currentPage === 'contacto' && <Contacto />}

      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
