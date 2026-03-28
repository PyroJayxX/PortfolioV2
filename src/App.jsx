import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';
import ChatWidget from './components/portfolio/ChatWidget';
import Footer from './components/portfolio/Footer';
import HeroSection from './components/portfolio/HeroSection';
import PhotoCarouselSection from './components/portfolio/PhotoCarouselSection';
import ProjectsSection from './components/portfolio/ProjectsSection';

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, background: '#000' }}>
      <HeroSection />

      <div style={{ position: 'relative', background: '#000000' }}>
        <StarsBackground
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          factor={0.06}
          speed={60}
          starColor="#ffffff"
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <PhotoCarouselSection sharedBackground />
          <ProjectsSection sharedBackground />
        </div>
      </div>
      <Footer />
      <ChatWidget />
    </div>
  );
}