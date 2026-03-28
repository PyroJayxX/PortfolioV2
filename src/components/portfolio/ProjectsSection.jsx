import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { StarsBackground } from '../animate-ui/backgrounds/stars';
import { PROJECTS } from '../../data/portfolioData';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        padding: '30px',
        background: hovered ? 'rgba(120,200,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(120,200,255,0.22)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '6px',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
        cursor: 'pointer'
      }}
    >
      <div style={{
        fontFamily: '"Courier New", monospace',
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: hovered ? 'rgba(120,200,255,0.85)' : 'rgba(255,255,255,0.3)',
        marginBottom: '11px',
        transition: 'color 0.3s'
      }}>{project.tag}</div>

      <h3 style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: '1.2rem',
        fontWeight: 400,
        color: 'white',
        marginBottom: '11px',
        lineHeight: 1.3
      }}>{project.title}</h3>

      <p style={{
        fontFamily: '"Courier New", monospace',
        fontSize: '0.8rem',
        lineHeight: 1.85,
        color: 'rgba(255,255,255,0.48)'
      }}>{project.desc}</p>

      <div style={{
        marginTop: '18px',
        fontFamily: '"Courier New", monospace',
        fontSize: '0.68rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: hovered ? 'rgba(120,200,255,0.75)' : 'rgba(255,255,255,0.18)',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        transition: 'color 0.3s'
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

export default function ProjectsSection({ sharedBackground = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.06 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
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
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(44px, 6vh, 84px) clamp(24px, 8vw, 100px)',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.26em',
            color: 'rgba(120,200,255,0.55)',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>Relevant Works</p>
          <h2 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(1.9rem, 4vw, 3rem)',
            fontWeight: 400,
            color: 'white',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            paddingBottom: '26px'
          }}>Projects</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))',
          gap: '18px'
        }}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
