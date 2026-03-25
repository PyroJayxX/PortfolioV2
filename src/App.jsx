import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';

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
    if (v) { v.muted = true; v.play().catch(() => {}); }
  }, []);
  return (
    <video ref={videoRef} autoPlay loop muted playsInline src="/solarsys.mp4"
      style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '100%', minHeight: '100%',
        width: 'auto', height: 'auto',
        objectFit: 'cover', zIndex: 0
      }}
    />
  );
}

function HeroSlide() {
  return (
    <div style={{
      height: '100%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexDirection: 'column',
      textAlign: 'center', padding: '0 24px', color: 'white'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -28 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p style={{
          fontFamily: '"Courier New", monospace', fontSize: '0.78rem',
          letterSpacing: '0.28em', opacity: 0.5, marginBottom: '26px',
          textTransform: 'uppercase'
        }}>Software Engineer · Computer Science</p>
        <h1 style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          lineHeight: 1.38, maxWidth: '820px',
          textShadow: '0 2px 40px rgba(0,0,0,0.7)',
          fontWeight: 400, margin: 0
        }}>
          If the sky is the limit,<br />
          <em style={{ opacity: 0.82 }}>I'll refactor gravity.</em>
        </h1>
      </motion.div>
    </div>
  );
}

function BioSlide() {
  const skills = [
    'C','C++','Java','Python','Go',
    'HTML5','CSS3','JavaScript',
    'MySQL','PostgreSQL','Firebase','Supabase',
    'React','Next.js','Tailwind CSS','Django',
    'Figma','Android Studio'
  ];
  return (
    <div style={{
      height: '100%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', padding: '0 clamp(30px, 8vw, 110px)', color: 'white'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -28 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: '860px', width: '100%', textAlign: 'center' }}
      >
        <p style={{
          fontFamily: '"Courier New", monospace', fontSize: '0.75rem',
          letterSpacing: '0.26em', opacity: 0.45,
          marginBottom: '16px', textTransform: 'uppercase'
        }}>About me</p>
        <h2 style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 400, marginBottom: '16px', lineHeight: 1.3
        }}>
          Hello, I'm <em>Edrill Falziz Bilan</em>
        </h2>
        <p style={{
          fontFamily: '"Courier New", monospace',
          fontSize: 'clamp(0.8rem, 1.15vw, 0.95rem)',
          opacity: 0.7, lineHeight: 1.95, margin: '0 auto 36px', maxWidth: '580px'
        }}>
          An aspiring Software Engineer studying Computer Science at
          Pamantasan ng Lungsod ng Maynila (PLM). I build things that
          sit at the intersection of logic and craft.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '9px', justifyContent: 'center' }}>
          {skills.map(s => (
            <span key={s} style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.72rem', letterSpacing: '0.08em',
              padding: '6px 14px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.16)',
              borderRadius: '3px', color: 'rgba(255,255,255,0.8)'
            }}>{s}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const SLIDE_DURATION = 5500;

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
      setActive(prev => {
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
    return () => { clearInterval(timerRef.current); cancelAnimationFrame(rafRef.current); };
  }, [startTimer]);

  const goTo = (i) => { setActive(i); startTimer(); };

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <AnimatePresence mode="wait">
        {active === 0 ? <HeroSlide key="hero" /> : <BioSlide key="bio" />}
      </AnimatePresence>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute', bottom: '36px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', gap: '12px', zIndex: 20, alignItems: 'center'
      }}>
        {[0, 1].map(i => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === active ? '34px' : '8px', height: '8px',
            borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0,
            background: i === active ? 'white' : 'rgba(255,255,255,0.3)',
            transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
            position: 'relative', overflow: 'hidden'
          }}>
            {i === active && (
              <span style={{
                position: 'absolute', top: 0, left: 0, bottom: 0,
                width: `${progress * 100}%`,
                background: 'rgba(120,200,255,0.8)',
                transition: 'width 0.05s linear'
              }} />
            )}
          </button>
        ))}
      </div>

      <div style={{
        position: 'absolute', bottom: '36px', right: '44px',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '5px', zIndex: 20, opacity: 0.4, color: 'white',
        fontFamily: '"Courier New", monospace',
        fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase'
      }}>
        <span>Scroll</span>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <rect x="1" y="1" width="10" height="18" rx="5" stroke="white" strokeWidth="1.5"/>
          <motion.rect x="5" y="4" width="2" height="4" rx="1" fill="white"
            animate={{ y: [4, 9, 4] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1, title: 'Bilandog E-Commerce System',
    tag: 'Full-Stack · React · Django',
    desc: 'A full-stack e-commerce platform built to practice React and Django, featuring product listings, cart, and order management.',
    link: 'https://github.com/PyroJayxX/Bilandog-Ecommerce-V2'
  },
  {
    id: 2, title: 'Fantasy Flip: Android Card Game',
    tag: 'Mobile · Android Studio · Firebase',
    desc: 'Lead developer on a full-stack Android card game with real-time multiplayer and Firebase backend.',
    link: 'https://github.com/PyroJayxX/MobileGame-AppDev-Project'
  },
  {
    id: 3, title: 'AI Pulmonary Nodule Detection',
    tag: 'Deep Learning · ResNet50',
    desc: 'Enhanced ResNet-50 architecture to detect pulmonary nodules in chest X-rays for early lung cancer screening.',
    link: 'https://github.com/PyroJayxX/Thoracic-Disease-Classifier-ResNet50'
  },
  {
    id: 4, title: 'Irregular Enrollment System',
    tag: 'Front-End · JavaFX · Figma',
    desc: "Front-end developer and designer for PLM's irregular enrollment system, from wireframe to implementation.",
    link: 'https://github.com/chaotic-braindead/Enrollment'
  },
  {
    id: 5, title: 'DOM Programming Language',
    tag: 'Language Design · Interpreter',
    desc: 'Lead developer of DOM — a customized web-based interpreted programming language with its own IDE.',
    link: 'https://github.com/IEMDomain04/DOM-IDE'
  },
  {
    id: 6, title: 'BlitzBall — x86 Assembly',
    tag: 'Game Dev · x86 ASM · DOSBox',
    desc: 'Co-developer of a dodgeball-inspired game built entirely in x86 assembly running inside a DOSBox emulator.',
    link: 'https://github.com/sonajX/DodgeBall-ASM-Game'
  },
];

const galleryPhotos = [
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/10.jpg',
  '/6.jpg',
  '/5.jpg',
  '/7.jpg',
  '/8.jpg',
  '/9.jpg'
];

function PhotoCarouselSection({ sharedBackground = false }) {
  const loopedPhotos = [...galleryPhotos, ...galleryPhotos];

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

        <div style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%'
        }}>
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
              repeat: Infinity,
            }}
          >
            {loopedPhotos.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
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
                  alt={`Gallery photo ${(idx % galleryPhotos.length) + 1}`}
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

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <motion.a
      ref={ref} href={project.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block', textDecoration: 'none', color: 'inherit', padding: '30px',
        background: hovered ? 'rgba(120,200,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(120,200,255,0.22)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '6px',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)', cursor: 'pointer'
      }}
    >
      <div style={{
        fontFamily: '"Courier New", monospace', fontSize: '0.65rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: hovered ? 'rgba(120,200,255,0.85)' : 'rgba(255,255,255,0.3)',
        marginBottom: '11px', transition: 'color 0.3s'
      }}>{project.tag}</div>
      <h3 style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: '1.2rem', fontWeight: 400,
        color: 'white', marginBottom: '11px', lineHeight: 1.3
      }}>{project.title}</h3>
      <p style={{
        fontFamily: '"Courier New", monospace', fontSize: '0.8rem',
        lineHeight: 1.85, color: 'rgba(255,255,255,0.48)'
      }}>{project.desc}</p>
      <div style={{
        marginTop: '18px', fontFamily: '"Courier New", monospace',
        fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase',
        color: hovered ? 'rgba(120,200,255,0.75)' : 'rgba(255,255,255,0.18)',
        display: 'flex', alignItems: 'center', gap: '5px', transition: 'color 0.3s'
      }}>
        View on GitHub
        <span style={{
          display: 'inline-block',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 0.3s'
        }}>→</span>
      </div>
    </motion.a>
  );
}

function ProjectsSection({ sharedBackground = false }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" style={{ position: 'relative', background: sharedBackground ? 'transparent' : '#000000', minHeight: '100vh', scrollMarginTop: '72px' }}>
      {!sharedBackground && (
        <StarsBackground
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          factor={0.06}
          speed={60}
          starColor="#ffffff"
        />
      )}
      <div style={{
        position: 'relative', zIndex: 1,
        padding: 'clamp(44px, 6vh, 84px) clamp(24px, 8vw, 100px)',
        maxWidth: '1100px', margin: '0 auto'
      }}>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={vis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{
            fontFamily: '"Courier New", monospace', fontSize: '0.75rem',
            letterSpacing: '0.26em', color: 'rgba(120,200,255,0.55)',
            textTransform: 'uppercase', marginBottom: '12px'
          }}>Relevant Works</p>
          <h2 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(1.9rem, 4vw, 3rem)',
            fontWeight: 400, color: 'white',
            borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '26px'
          }}>Projects</h2>
        </motion.div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))',
          gap: '18px'
        }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/PyroJayxX' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edrill-bilan/' },
    { label: 'Email', href: 'mailto:efbilan@gmail.com' },
  ];
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <footer ref={ref} style={{
      background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: 'clamp(60px, 8vh, 100px) clamp(24px, 8vw, 100px)'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={vis ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '44px' }}
        >
          <div>
            <h3 style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
              fontWeight: 400, color: 'white', marginBottom: '14px'
            }}>
              Let's build something<br /><em>worth remembering.</em>
            </h3>
            <a href="mailto:efbilan@gmail.com" style={{
              fontFamily: '"Courier New", monospace', fontSize: '0.82rem',
              letterSpacing: '0.1em', color: 'rgba(120,200,255,0.7)',
              textDecoration: 'none', borderBottom: '1px solid rgba(120,200,255,0.28)', paddingBottom: '2px'
            }}>efbilan@gmail.com</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-end' }}>
            <p style={{
              fontFamily: '"Courier New", monospace', fontSize: '0.65rem',
              letterSpacing: '0.22em', color: 'rgba(255,255,255,0.25)',
              textTransform: 'uppercase', marginBottom: '4px'
            }}>Connect</p>
            {links.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: '"Courier New", monospace', fontSize: '0.82rem',
                  letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none', transition: 'color 0.25s'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(120,200,255,0.9)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >{l.label} ↗</a>
            ))}
          </div>
        </motion.div>
        <div style={{
          marginTop: '60px', paddingTop: '22px',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px'
        }}>
          <p style={{ fontFamily: '"Courier New", monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.18)' }}>
            © {new Date().getFullYear()} Edrill Falziz Bilan
          </p>
          <p style={{ fontFamily: '"Courier New", monospace', fontSize: '0.68rem', color: 'rgba(255,255,255,0.18)' }}>
            PLM · Computer Science
          </p>
        </div>
      </div>
    </footer>
  );
}

// App
export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, background: '#000' }}>
      <TopNav />
      {/* Hero carousel */}
      <div id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden', scrollMarginTop: '72px' }}>
        <VideoBackground />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.32)', zIndex: 1 }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
          background: 'linear-gradient(to bottom, transparent, #000000)',
          zIndex: 2, pointerEvents: 'none'
        }} />
        <div style={{ position: 'relative', zIndex: 3, height: '100%' }}>
          <Carousel />
        </div>
      </div>

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
    </div>
  );
}