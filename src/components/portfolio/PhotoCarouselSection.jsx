import { motion } from 'framer-motion';
import { StarsBackground } from '../animate-ui/backgrounds/stars';
import { GALLERY_PHOTOS } from '../../data/portfolioData';

export default function PhotoCarouselSection({ sharedBackground = false }) {
  const loopedPhotos = [...GALLERY_PHOTOS, ...GALLERY_PHOTOS];

  return (
    <section style={{
      position: 'relative',
      background: sharedBackground ? 'transparent' : '#000000',
      minHeight: '72vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {!sharedBackground && (
        <StarsBackground
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          factor={0.06}
          speed={60}
          starColor="#ffffff"
        />
      )}

      {!sharedBackground && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 35%, rgba(255,255,255,0.05), rgba(0,0,0,0.86) 62%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
      )}

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        padding: 'clamp(48px, 8vh, 86px) 0'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 clamp(24px, 8vw, 100px)'
        }}>
          <p style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.26em',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            marginBottom: '18px'
          }}>Photo Reel</p>
          <h2 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(1.7rem, 3.6vw, 2.8rem)',
            fontWeight: 400,
            color: 'white',
            marginBottom: '30px'
          }}>A few moments from my universe</h2>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
          <motion.div
            style={{
              display: 'flex',
              width: 'max-content',
              gap: '16px',
              padding: '0 clamp(16px, 4vw, 32px)'
            }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 32,
              ease: 'linear',
              repeat: Infinity
            }}
          >
            {loopedPhotos.map((src, index) => (
              <div
                key={`${src}-${index}`}
                style={{
                  flex: '0 0 auto',
                  width: 'clamp(230px, 34vw, 410px)',
                  aspectRatio: '4 / 3',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.03)',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.35)'
                }}
              >
                <img
                  src={src}
                  alt={`Gallery photo ${(index % GALLERY_PHOTOS.length) + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </motion.div>

          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 'min(14vw, 120px)',
            background: 'linear-gradient(to right, rgba(0,0,0,0.94), rgba(0,0,0,0))',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: 'min(14vw, 120px)',
            background: 'linear-gradient(to left, rgba(0,0,0,0.94), rgba(0,0,0,0))',
            pointerEvents: 'none'
          }} />
        </div>
      </div>
    </section>
  );
}
