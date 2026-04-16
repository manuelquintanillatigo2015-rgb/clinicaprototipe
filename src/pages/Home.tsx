import { NavigationProps } from '../types/navigation';
import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import EmotionalSection from '../components/home/EmotionalSection';
import ServicesPreview from '../components/home/ServicesPreview';
import DifferentiationSection from '../components/home/DifferentiationSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ProcessSection from '../components/home/ProcessSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home({ navigate }: NavigationProps) {
  return (
    <main>
      <HeroSection navigate={navigate} />
      <TrustStrip />
      <EmotionalSection navigate={navigate} />
      <ServicesPreview navigate={navigate} />
      <DifferentiationSection />
      <TestimonialsSection navigate={navigate} />
      <ProcessSection navigate={navigate} />
      <FinalCTA navigate={navigate} />
    </main>
  );
}
