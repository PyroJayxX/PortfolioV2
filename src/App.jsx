import { useEffect, useState } from 'react';
import ProfessionalPortfolio from './components/portfolio/ProfessionalPortfolio';
import SpacePortfolio from './components/portfolio/SpacePortfolio';

export default function App() {
  const [isSpaceTheme, setIsSpaceTheme] = useState(() => window.location.hash === '#space');

  useEffect(() => {
    const syncTheme = () => {
      setIsSpaceTheme(window.location.hash === '#space');
    };

    window.addEventListener('hashchange', syncTheme);
    syncTheme();

    return () => window.removeEventListener('hashchange', syncTheme);
  }, []);

  return (
    isSpaceTheme ? <SpacePortfolio /> : <ProfessionalPortfolio />
  );
}