import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FOOTER_LINKS } from '../../data/portfolioData';

export default function Footer() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.12 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} style={{
      background: '#000000',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: 'clamp(60px, 8vh, 100px) clamp(24px, 8vw, 100px)'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '44px' }}
        >
          <div>
            <h3 style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
              fontWeight: 400,
              color: 'white',
              marginBottom: '14px'
            }}>
              Let's build something<br /><em>worth remembering.</em>
            </h3>
            <a href="mailto:efbilan@gmail.com" style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              color: 'rgba(120,200,255,0.7)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(120,200,255,0.28)',
              paddingBottom: '2px'
            }}>efbilan@gmail.com</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-end' }}>
            <p style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.22em',
              color: 'rgba(255,255,255,0.25)',
              textTransform: 'uppercase',
              marginBottom: '4px'
            }}>Connect</p>
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.25s'
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = 'rgba(120,200,255,0.9)';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </motion.div>

        <div style={{
          marginTop: '60px',
          paddingTop: '22px',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
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
