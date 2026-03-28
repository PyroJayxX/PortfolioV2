import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SKILLS } from '../../data/portfolioData';

const SLIDE_DURATION = 5500;

function TopNav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 14,
      left: 0,
      right: 0,
      zIndex: 40,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none'
    }}>
      <div style={{
        pointerEvents: 'auto',
        position: 'relative',
        width: 'min(1100px, 92vw)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '62px'
      }}>
        <img
          src="/logo.svg"
          alt="Logo"
          style={{
            height: '32px',
            width: 'auto',
            marginRight: '32px'
          }}
        />
        <div style={{
          position: 'relative',
          display: 'flex',
          gap: '14px',
          padding: '8px 12px',
          background: 'transparent'
        }}>
          <a href="#hero" style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.92rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.9)',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid rgba(255,255,255,0.45)',
            borderRadius: '999px',
            background: 'transparent'
          }}>Hero</a>
          <a href="#projects" style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.92rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.82)',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid rgba(255,255,255,0.35)',
            borderRadius: '999px',
            background: 'transparent'
          }}>Projects</a>
          <a href="/resume.pdf" download style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.92rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.82)',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid rgba(255,255,255,0.35)',
            borderRadius: '999px',
            background: 'transparent'
          }}>My Resume</a>
        </div>
      </div>
    </nav>
  );
}

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      src="/solarsys.mp4"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        objectFit: 'cover',
        zIndex: 0
      }}
    />
  );
}

function HeroSlide() {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '0 24px',
      color: 'white'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -28 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '0.78rem',
          letterSpacing: '0.28em',
          opacity: 0.5,
          marginBottom: '26px',
          textTransform: 'uppercase'
        }}>Software Engineer · Computer Science</p>
        <h1 style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          lineHeight: 1.38,
          maxWidth: '820px',
          textShadow: '0 2px 40px rgba(0,0,0,0.7)',
          fontWeight: 400,
          margin: 0
        }}>
          If the sky is the limit,<br />
          <em style={{ opacity: 0.82 }}>I'll refactor gravity.</em>
        </h1>
      </motion.div>
    </div>
  );
}

function BioSlide() {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 clamp(30px, 8vw, 110px)',
      color: 'white'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -28 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: '860px', width: '100%', textAlign: 'center' }}
      >
        <p style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '0.75rem',
          letterSpacing: '0.26em',
          opacity: 0.45,
          marginBottom: '16px',
          textTransform: 'uppercase'
        }}>About me</p>
        <h2 style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 400,
          marginBottom: '16px',
          lineHeight: 1.3
        }}>
          Hello, I'm <em>Edrill Falziz Bilan</em>
        </h2>
        <p style={{
          fontFamily: '"Courier New", monospace',
          fontSize: 'clamp(0.8rem, 1.15vw, 0.95rem)',
          opacity: 0.7,
          lineHeight: 1.95,
          margin: '0 auto 36px',
          maxWidth: '580px'
        }}>
          An aspiring Software Engineer studying Computer Science at
          Pamantasan ng Lungsod ng Maynila (PLM). I build things that
          sit at the intersection of logic and craft.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px', justifyContent: 'center' }}>
          {SKILLS.map((skill) => (
            <span key={skill} style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              padding: '6px 14px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: '3px',
              color: 'rgba(255,255,255,0.8)'
            }}>{skill}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Carousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(performance.now());

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now();
    setProgress(0);

    const tick = (now) => {
      const p = Math.min((now - startRef.current) / SLIDE_DURATION, 1);
      setProgress(p);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    timerRef.current = setInterval(() => {
      setActive((prev) => {
        startRef.current = performance.now();
        setProgress(0);
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(tick);
        return (prev + 1) % 2;
      });
    }, SLIDE_DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [startTimer]);

  const goTo = (index) => {
    setActive(index);
    startTimer();
  };

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <AnimatePresence mode="wait">
        {active === 0 ? <HeroSlide key="hero" /> : <BioSlide key="bio" />}
      </AnimatePresence>

      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 20,
        alignItems: 'center'
      }}>
        {[0, 1].map((index) => (
          <button key={index} onClick={() => goTo(index)} style={{
            width: index === active ? '34px' : '8px',
            height: '8px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            background: index === active ? 'white' : 'rgba(255,255,255,0.3)',
            transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {index === active && (
              <span style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: `${progress * 100}%`,
                background: 'rgba(120,200,255,0.8)',
                transition: 'width 0.05s linear'
              }} />
            )}
          </button>
        ))}
      </div>

      <div style={{
        position: 'absolute',
        bottom: '36px',
        right: '44px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        zIndex: 20,
        opacity: 0.4,
        color: 'white',
        fontFamily: '"Courier New", monospace',
        fontSize: '0.62rem',
        letterSpacing: '0.16em',
        textTransform: 'uppercase'
      }}>
        <span>Scroll</span>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <rect x="1" y="1" width="10" height="18" rx="5" stroke="white" strokeWidth="1.5" />
          <motion.rect
            x="5"
            y="4"
            width="2"
            height="4"
            rx="1"
            fill="white"
            animate={{ y: [4, 9, 4] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      <TopNav />
      <div id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', scrollMarginTop: '72px' }}>
        <VideoBackground />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.32)', zIndex: 1 }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '220px',
          background: 'linear-gradient(to bottom, transparent, #000000)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{ position: 'relative', zIndex: 3, height: '100%' }}>
          <Carousel />
        </div>
      </div>
    </>
  );
}
