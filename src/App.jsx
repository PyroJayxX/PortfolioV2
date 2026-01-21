import { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(err => console.log('Autoplay failed:', err));
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
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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

function Navbar() {
  const location = useLocation();
  
  return (
    <nav style={{
      position: 'fixed',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      display: 'flex',
      gap: '40px',
      padding: '15px 40px',
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      borderRadius: '50px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <Link 
        to="/bio" 
        style={{
          color: location.pathname === '/bio' ? '#fff' : 'rgba(255, 255, 255, 0.6)',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: location.pathname === '/bio' ? '600' : '400',
          transition: 'all 0.3s ease'
        }}
      >
        Bio
      </Link>
      <Link 
        to="/" 
        style={{
          color: location.pathname === '/' ? '#fff' : 'rgba(255, 255, 255, 0.6)',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: location.pathname === '/' ? '600' : '400',
          transition: 'all 0.3s ease'
        }}
      >
        Hero
      </Link>
      <Link 
        to="/projects" 
        style={{
          color: location.pathname === '/projects' ? '#fff' : 'rgba(255, 255, 255, 0.6)',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: location.pathname === '/projects' ? '600' : '400',
          transition: 'all 0.3s ease'
        }}
      >
        Projects
      </Link>
    </nav>
  );
}

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'relative',
        zIndex: 10,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px'
      }}
    >
      <h1 style={{
        fontSize: '4rem',
        lineHeight: '1.4',
        maxWidth: '900px',
        textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        fontFamily: 'Georgia, "Times New Roman", serif'
      }}>
        If the sky is the limit,<br />I'll refactor gravity.
      </h1>
      
    </motion.div>
  );
}

function Bio() {
    const skills = [
    'C', 'C++', 'Java', 'Python', 'Go',
    'HTML5', 'CSS3', 'JavaScript',
    'MySQL', 'PostgreSQL', 'Firebase', 'Supabase',
    'React', 'NextJS', 'Tailwind CSS', 'Django',
    'Figma', 'Android Studio'
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'relative',
        zIndex: 10,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        padding: '0 100px',
        maxWidth: '900px',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif'
      }}
    >
      <h1 style={{ 
        fontSize: '3.5rem', 
        marginBottom: '20px', 
        fontWeight: '500',
        letterSpacing: '-0.02em'
      }}>
        Hello, I'm Edrill Falziz Bilan
      </h1>
      <p style={{ 
        fontSize: '1.4rem', 
        marginBottom: '50px', 
        lineHeight: '1.8', 
        opacity: 0.9,
        fontWeight: '400'
      }}>
        An aspiring Software Engineer, studying Computer Science at Pamantasan ng Lungsod ng Maynila (PLM)
      </p>
    
      <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: '600' }}>Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {skills.map(skill => (
          <div key={skill} style={{
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '25px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            {skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Bilandog E-Commerce System',
      desc: 'A full-stack project that I developed for a fictional e-commerce business to practice React and Django framework.',
      link: 'https://github.com/PyroJayxX/Bilandog-Ecommerce-V2'
    },
    {
      id: 2,
      title: 'Fantasy Flip: Android Card Game',
      desc: 'Lead developer for a full-stack android mobile game utilizing Android Studio and Firebase.',
      link: 'https://github.com/PyroJayxX/MobileGame-AppDev-Project'
    },
    {
      id: 3,
      title: 'AI-Powered Pulmonary Nodule Detection',
      desc: 'Trained a deep learning model that detects pulmonary nodules from input x-ray image for early detection of lung cancer.',
      link: 'https://github.com/PyroJayxX/Thoracic-Disease-Classifier-ResNet50'
    },
    {
      id: 4,
      title: 'Irregular Enrollment System',
      desc: 'Front-end developer and designer for school project PLM Irregular Enrollment System utilizing JavaFX and Figma.',
      link: 'https://github.com/chaotic-braindead/Enrollment'
    },
    {
      id: 5,
      title: 'DOM Programming Language',
      desc: 'Lead developer for the DOM programming language, a customized web-based interpreter language.',
      link: 'https://github.com/IEMDomain04/DOM-IDE'
    },
    {
      id: 6,
      title: 'BlitzBall Game x86 Assembly',
      desc: 'Co-developer for dodgeball-inspired videogame built using x86 assembly language and DOSbox emulator.',
      link: 'https://github.com/sonajX/DodgeBall-ASM-Game'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'relative',
        zIndex: 10,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '0 80px',
        overflow: 'auto'
      }}
    >
      <h1 style={{ fontSize: '3.5rem', marginBottom: '40px', fontWeight: '700' }}>
        Projects
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '25px',
        maxWidth: '1100px',
        paddingBottom: '100px'
      }}>
        {projects.map(project => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '30px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(120, 199, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'rgba(120, 199, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', fontWeight: '600' }}>{project.title}</h3>
            <p style={{ opacity: 0.85, fontSize: '0.95rem', lineHeight: '1.6' }}>{project.desc}</p>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: 'black' }}>
      <VideoBackground />
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 5
      }} />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
      
      <Navbar />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;