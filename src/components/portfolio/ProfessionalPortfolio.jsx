import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FOOTER_LINKS, PROJECTS, SKILL_GROUPS, CERTIFICATES, MILESTONES} from '../../data/portfolioData';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ChatWidget from './ChatWidget';
import '../../styles/ProfessionalPortfolio.css';

function SectionHeader({ icon, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      {icon}
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#fff' }}>{title}</h3>
    </div>
  );
}

function Card({ children, style = {}, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ borderColor: 'rgba(255,255,255,0.15)', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 18px 48px rgba(0,0,0,0.32)',
        borderRadius: 24,
        padding: 24, 
        transition: 'border 0.3s ease, box-shadow 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
}

function SpaceLinkButton() {
  return (
    <motion.a
      whileHover={{ background: 'rgba(255,255,255,0.1)', y: -2 }}
      href="#space"
      aria-label="Space theme"
      className="pf-space-btn"
      style={{
        display: 'inline-flex', alignItems: 'center', justifycenter: 'center', borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.9)',
        textDecoration: 'none', fontWeight: 600, letterSpacing: '0.01em', 
        gap: 5,                  
        padding: '5px 12px',     
        fontSize: '0.75rem'      
      }}
    >
      <span>Space theme</span><span style={{ opacity: 0.75, fontSize: '0.85em' }}>↗</span>
    </motion.a>
  );
}

function ProjectPreview({ project, index, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)', y: -4, scale: 1.01 }}
      className="pf-project-card"
      style={{
        cursor: 'pointer', color: 'inherit', padding: 14, borderRadius: 16, 
        border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)'
      }}
    >
      <div style={{ borderRadius: 12, overflow: 'hidden', minHeight: 110, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.04)' }}>
        <img src={project.mockup} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.56)', marginBottom: 8, fontWeight: 600 }}>{project.tag}</div>
        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>{project.title}</div>
        <div style={{ fontSize: '0.9rem', color: 'rgba(232,237,247,0.64)', lineHeight: 1.6 }}>{project.desc}</div>
      </div>
    </motion.div>
  );
}

const chipStyle = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px 14px',
  borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)',
  color: 'rgba(255,255,255,0.84)', textDecoration: 'none', fontSize: '0.88rem'
};

// --- Main Layout ---

export default function ProfessionalPortfolio() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main style={{ minHeight: '100vh', width: '100%', color: '#f4f6fb', background: 'radial-gradient(circle at top left, rgba(133, 147, 255, 0.08), transparent 35%), radial-gradient(circle at top right, rgba(110,228,185,0.08), transparent 35%), linear-gradient(180deg, #0b0d12 0%, #06070a 100%)', overflowX: 'hidden' }}>
      
      {/* Grid overlay */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.5, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(circle at center, black 55%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle at center, black 55%, transparent 100%)' }} />

      {/* Main Container */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1180px', margin: '0 auto', padding: '40px 16px 64px', boxSizing: 'border-box' }}>
        
        {/* Responsive Grid layout from external CSS */}
        <section className="pf-layout">

          {/* ================= LEFT COLUMN ================= */}
          <div style={{ display: 'grid', gap: 24 }}>

            {/* Profile Header Card */}
            <Card>
              <div className="pf-profile-container">
                <div className="pf-profile-img">
                  <img src="/dp.jpg" alt="Edrill Bilan" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                <div style={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="pf-header-row">
                    <div>
                      <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', fontWeight: 700, lineHeight: 1.1, margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>Edrill Falziz Bilan</h1>
                      <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(232,237,247,0.72)', margin: 0 }}>Aspiring AI/ML Engineer | Full Stack Developer</p>
                    </div>
                    <SpaceLinkButton />
                  </div>

                  <div>
                    <div style={{ marginTop: 20 }}>
                      <span style={{ padding: '6px 14px', borderRadius: 999, background: 'rgba(111, 255, 201, 0.08)', border: '1px solid rgba(111, 255, 201, 0.2)', color: 'rgba(111, 255, 201, 0.9)', fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Open to work</span>
                    </div>

                    <div className="pf-actions">
                      <motion.a whileHover={{ y: -2, background: 'rgba(255,255,255,0.08)' }} href="mailto:efbilan@gmail.com" aria-label="Email" style={chipStyle}><FaEnvelope size={18} /></motion.a>
                      <motion.a whileHover={{ y: -2, background: 'rgba(255,255,255,0.08)' }} href="https://github.com/PyroJayxX" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={chipStyle}><FaGithub size={18} /></motion.a>
                      <motion.a whileHover={{ y: -2, background: 'rgba(255,255,255,0.08)' }} href="https://www.linkedin.com/in/edrill-bilan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={chipStyle}><FaLinkedinIn size={18} /></motion.a>
                      <motion.a whileHover={{ y: -2, background: '#e2e8f0', boxShadow: '0 4px 12px rgba(255,255,255,0.2)' }} href="/Bilan_CV_2026.pdf" target="_blank" rel="noopener noreferrer" style={{ ...chipStyle, background: '#fff', color: '#000', border: 'none', fontWeight: 600 }}>View CV</motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="pf-grid-2">
              {/* About Card */}
              <Card>
                <SectionHeader title="About" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>} />
                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'rgba(232,237,247,0.75)', margin: 0, textAlign: 'justify'}}>
                  I am an Aspiring AI/ML Engineer, Machine learning practitioner with extensive experience in full‑stack development, leveraging my ability in building AI‑driven solutions that integrate machine learning models into production applications that streamline business workflows. I am passionate about applying my skills to solve complex problems and drive innovation in the field of AI.
                </p>
              </Card>

              {/* Milestones Card */}
              <Card>
                <SectionHeader title="Milestones" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>} />
                <div style={{ display: 'grid', gap: 12 }}>
                  {[
                    { title: 'Magna Cum Laude', sub: 'BS Computer Science, GWA: 1.3' },
                    { title: 'Q1 Publication', sub: 'Undergraduate Thesis published in MDPI Diagnostics, indexed in Web of Science' },
                    { title: 'International Collaboration', sub: 'Participated in PLM-NCKU research collaboration at MMCV Laboratory' }
                  ].map((m) => (
                    <div 
                      key={m.title}
                      style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '12px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderLeft: '3px solid rgba(255,255,255,0.2)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.2)' }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{m.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(232,237,247,0.6)' }}>{m.sub}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Projects Card */}
            <Card>
              <SectionHeader title="Projects" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 17 22 12"></polyline></svg>} />
              <div className="projects-scroll-container">
                {PROJECTS.map((p, i) => (
                  <ProjectPreview 
                    key={p.id} 
                    project={p} 
                    index={i} 
                    onClick={() => setSelectedProject(p)} 
                  />
                ))}
              </div>
            </Card>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div style={{ display: 'grid', gap: 24, alignContent: 'start', position: 'sticky', top: 24 }}>

            {/* Experience Card */}
            <Card>
              <SectionHeader title="Experience" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>} />
              <div style={{ position: 'relative', paddingLeft: 8 }}>
                <div style={{ position: 'absolute', left: 13, top: 12, bottom: 12, width: 2, background: 'rgba(255,255,255,0.08)' }} />
                
                <div style={{ display: 'grid', gap: 12 }}>
                  {MILESTONES.map((m, idx) => {
                    const [role, company] = m.title.includes(' — ') ? m.title.split(' — ') : [m.title, ''];
                    
                    return (
                      <div key={m.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative', padding: 8, marginLeft: -8, borderRadius: 12 }}>
                        {/* Timeline Dot */}
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: idx === 0 ? '#ffffff' : '#0b0d12', border: idx === 0 ? 'none' : '2px solid rgba(255,255,255,0.15)', boxShadow: idx === 0 ? '0 0 8px rgba(255,255,255,0.5)' : 'none', marginTop: 4, position: 'relative', zIndex: 2, flexShrink: 0 }} />
                        
                        {/* Main Content Area */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                          
                          {/* Top Row: Role and Date */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', lineHeight: 1.3 }}>{role}</div>
                            <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)', padding: '4px 12px', borderRadius: 999, color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap', marginTop: -2 }}>
                              {m.year}
                            </div>
                          </div>

                          {/* Bottom Row: Description */}
                          {company && (
                            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                              {company}
                            </div>
                          )}

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Certifications Card */}
            <Card>
              <SectionHeader title="Certifications" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>} />
              <div style={{ display: 'grid', gap: 10 }}>
                {CERTIFICATES.map((c) => (
                  <motion.div
                    key={c.title}
                    onClick={() => setSelectedCert(c)}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}
                    style={{ 
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                      padding: '12px 14px', borderRadius: 14, background: 'rgba(255,255,255,0.015)', 
                      border: '1px solid rgba(255,255,255,0.04)', cursor: 'pointer', transition: 'all 0.2s' 
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>{c.title}</span>
                      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>{c.sub}</span>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>View ↗</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Skills Card */}
            <Card>
              <SectionHeader title="Skills" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>} />
              <div style={{ display: 'grid', gap: 16 }}>
                {SKILL_GROUPS.map((g) => (
                  <div key={g.title}>
                    <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', marginBottom: 10, fontWeight: 700 }}>{g.title}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {g.items.map((s) => (
                        <motion.span 
                          key={s} 
                          whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                          style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)' }}
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

           </div>
        </section>
      </div>

      <ChatWidget />

      {/* Lightbox Modal Overlays */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              background: 'rgba(5, 7, 10, 0.85)', backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', padding: 24
            }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative', maxWidth: '800px', width: '100%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24,
                boxShadow: '0 32px 64px rgba(0,0,0,0.6)', padding: 12,
                boxSizing: 'border-box', textAlign: 'center'
              }}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute', top: 16, right: 16,
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '50%', width: 32, height: 32, color: '#fff',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 300, transition: 'background 0.2s', zIndex: 10
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
              >
                ✕
              </button>

              <div style={{ padding: '12px 12px 20px 12px' }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>{selectedCert.title}</h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(232,237,247,0.5)' }}>{selectedCert.sub}</p>
              </div>

              <div style={{ width: '100%', borderRadius: 14, overflow: 'hidden', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.04)' }}>
                <img 
                  src={selectedCert.mockup} 
                  alt={selectedCert.title} 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '70vh', objectFit: 'contain' }} 
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 100,
              background: 'rgba(5, 7, 10, 0.85)', backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', padding: 24
            }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative', maxWidth: '800px', width: '100%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24,
                boxShadow: '0 32px 64px rgba(0,0,0,0.6)', padding: 16,
                boxSizing: 'border-box', textAlign: 'left',
                display: 'flex', flexDirection: 'column', gap: 16
              }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute', top: 24, right: 24,
                  background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50%', width: 36, height: 36, color: '#fff',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 300, transition: 'background 0.2s', zIndex: 10
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.6)'}
              >
                ✕
              </button>

              <div style={{ width: '100%', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.04)' }}>
                <img 
                  src={selectedProject.mockup} 
                  alt={selectedProject.title} 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '70vh', objectFit: 'contain' }} 
                />
              </div>

              <div style={{ padding: '0 8px 8px 8px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.56)', marginBottom: 8, fontWeight: 600 }}>{selectedProject.tag}</div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '1.4rem', color: '#fff', fontWeight: 700 }}>{selectedProject.title}</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'rgba(232,237,247,0.7)', lineHeight: 1.6, marginBottom: 24 }}>{selectedProject.desc}</p>
                
                <motion.a 
                  whileHover={{ y: -2, background: 'rgba(255,255,255,0.9)', color: '#000' }}
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ ...chipStyle, background: '#fff', color: '#000', fontWeight: 600, padding: '12px 24px', marginTop: 'auto', alignSelf: 'flex-start' }}
                >
                  Visit Project ↗
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </main>
  );
}