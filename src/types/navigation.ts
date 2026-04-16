export type Page = 'home' | 'servicios' | 'sobre-nosotros' | 'casos-reales' | 'experiencia' | 'contacto';

export interface NavigationProps {
  navigate: (page: Page) => void;
  currentPage?: Page;
}
