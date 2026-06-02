import ChatWidget from './ChatWidget';
import Footer from './Footer';
import HeroSection from './HeroSection';
import PhotoCarouselSection from './PhotoCarouselSection';
import ProjectsSection from './ProjectsSection';

export default function SpacePortfolio() {
  return (
    <div style={{ margin: 0, padding: 0, background: '#000' }}>
      <HeroSection />

      <div style={{ position: 'relative', background: '#000000' }}>
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