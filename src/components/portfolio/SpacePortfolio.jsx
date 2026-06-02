import ChatWidget from './ChatWidget';
import Footer from './Footer';
import HeroSection from './HeroSection';
import PhotoCarouselSection from './PhotoCarouselSection';
import ProjectsSection from './ProjectsSection';

export default function SpacePortfolio() {
  return (
    <div style={{ margin: 0, padding: 0, background: '#000' }}>
      <nav
        style={{
          position: 'fixed',
          top: 12,
          left: 12,
          right: 12,
          zIndex: 60,
          display: 'flex',
          justifyContent: 'flex-end',
          pointerEvents: 'auto'
        }}
      >
        <a
          href="#home"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '10px 14px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(20,20,24,0.85)',
            color: 'white',
            textDecoration: 'none',
            backdropFilter: 'blur(12px)'
          }}
          aria-label="Back to professional portfolio"
        >
          ⟵ Back to portfolio
        </a>
      </nav>

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