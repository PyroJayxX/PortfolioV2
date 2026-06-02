import { motion } from 'framer-motion';
import { FOOTER_LINKS, PROJECTS, SKILL_GROUPS } from '../../data/portfolioData';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

// --- Reusable UI Components ---

function SectionHeader({ icon, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
      {icon}
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#fff' }}>{title}</h3>
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <motion.div
      whileHover={{ borderColor: 'rgba(255,255,255,0.15)', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 18px 48px rgba(0,0,0,0.32)',
        borderRadius: 24,
        padding: 24, // Fixed padding!
        transition: 'border 0.3s ease, box-shadow 0.3s ease',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
}

function SpaceLinkButton({ small = false }) {
  return (
    <motion.a
      whileHover={{ background: 'rgba(255,255,255,0.1)', y: -2 }}
      href="#space"
      aria-label="Space theme"
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.9)',
        textDecoration: 'none', fontWeight: 600, letterSpacing: '0.01em',
        padding: small ? '8px 10px' : '12px 16px', fontSize: small ? '0.82rem' : '0.92rem', gap: 10
      }}
    >
      {small ? 'Space' : (<><span>Space theme</span><span style={{ opacity: 0.75 }}>↗</span></>)}
    </motion.a>
  );
}

function ProjectPreview({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)', y: -4, scale: 1.01 }}
      style={{
        display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16, textDecoration: 'none', color: 'inherit',
        padding: 14, borderRadius: 16, border: '1px solid rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)'
      }}
    >
      <div style={{ borderRadius: 12, overflow: 'hidden', minHeight: 110, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.04)' }}>
        <img src={project.mockup} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.56)', marginBottom: 8, fontWeight: 600 }}>{project.tag}</div>
        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>{project.title}</div>
        <div style={{ fontSize: '0.9rem', color: 'rgba(232,237,247,0.64)', lineHeight: 1.5 }}>{project.desc}</div>
      </div>
    </motion.a>
  );
}

const chipStyle = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px 14px',
  borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)',
  color: 'rgba(255,255,255,0.84)', textDecoration: 'none', fontSize: '0.88rem'
};

// --- Main Layout ---

export default function ProfessionalPortfolio() {
  const MILESTONES = [
    { title: 'Research Intern — Multimedia and Computer Vision Laboratory, NCKU, Tainan, Taiwan', year: 'Oct 2025 — Nov 2025' },
    { title: 'IT Service Management Intern — Goldilocks Bakeshop, Inc., Greenfield, Mandaluyong', year: 'Jun 2025 — Jul 2025' }
  ];

  return (
    <main style={{ minHeight: '100vh', width: '100%', color: '#f4f6fb', background: 'radial-gradient(circle at top left, rgba(133,148,255,0.12), transparent 35%), radial-gradient(circle at top right, rgba(110,228,185,0.08), transparent 35%), linear-gradient(180deg, #0b0d12 0%, #06070a 100%)' }}>
      
      {/* Grid overlay */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.5, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(circle at center, black 55%, transparent 100%)' }} />

      <div style={{ position: 'relative', zIndex: 1, width: 'min(1180px, calc(100vw - 32px))', margin: '0 auto', padding: '40px 0 64px' }}>
        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.55fr) minmax(300px, 0.85fr)', gap: 24, alignItems: 'start' }}>

          {/* ================= LEFT COLUMN ================= */}
          <div style={{ display: 'grid', gap: 24 }}>

            {/* Profile Header Card */}
            <Card>
              <div style={{ display: 'flex', gap: 24, alignItems: 'stretch', flexWrap: 'wrap' }}>
                <div style={{ width: 160, borderRadius: 30, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 14px 36px rgba(0,0,0,0.35)', flexShrink: 0, alignSelf: 'stretch' }}>
                  <img src="/dp.jpg" alt="Edrill Bilan" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                <div style={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    <div>
                      <h1 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>Edrill Falziz Bilan</h1>
                      <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(232,237,247,0.72)', margin: 0 }}>Aspiring AI/ML Engineer.</p>
                    </div>
                    <SpaceLinkButton />
                  </div>

                  <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div>
                      <span style={{ padding: '6px 14px', borderRadius: 999, background: 'rgba(111, 255, 201, 0.08)', border: '1px solid rgba(111, 255, 201, 0.2)', color: 'rgba(111, 255, 201, 0.9)', fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Open to work</span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4, alignItems: 'center' }}>
                      <motion.a whileHover={{ y: -2, background: 'rgba(255,255,255,0.08)' }} href="mailto:efbilan@gmail.com" aria-label="Email" style={chipStyle}><FaEnvelope size={18} /></motion.a>
                      <motion.a whileHover={{ y: -2, background: 'rgba(255,255,255,0.08)' }} href="https://github.com/PyroJayxX" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={chipStyle}><FaGithub size={18} /></motion.a>
                      <motion.a whileHover={{ y: -2, background: 'rgba(255,255,255,0.08)' }} href="https://www.linkedin.com/in/edrill-bilan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={chipStyle}><FaLinkedinIn size={18} /></motion.a>
                      <motion.a whileHover={{ y: -2, background: '#e2e8f0', boxShadow: '0 4px 12px rgba(255,255,255,0.2)' }} href="/Bilan_CV_2026.pdf" target="_blank" rel="noopener noreferrer" style={{ ...chipStyle, background: '#fff', color: '#000', border: 'none', fontWeight: 600 }}>View CV</motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
              {/* About Card */}
              <Card>
                <SectionHeader title="About" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>} />
                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'rgba(232,237,247,0.75)', margin: 0 }}>
                  Machine learning practitioner with extensive experience in full‑stack development, aspiring to be an AI/ML Engineering through building AI‑driven solutions that integrate research models into production applications to help streamline businesses into a more efficient and automated future.
                </p>
              </Card>

              {/* Milestones Card */}
              <Card>
                <SectionHeader title="Milestones" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>} />
                <div style={{ display: 'grid', gap: 12 }}>
                  {[
                    { title: 'Magna Cum Laude', sub: 'BS in Computer Science, GWA: 1.3' },
                    { title: 'Q1 Publication', sub: 'Undergraduate Thesis published in MDPI Diagnostics, indexed in Web of Science' },
                    { title: 'International Collaboration', sub: 'Participated in PLM-NCKU Research Collaboration' }
                  ].map((m) => (
                    <motion.div 
                      key={m.title}
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)' }}
                      style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '12px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderLeft: '3px solid rgba(255,255,255,0.2)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.2)' }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>{m.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(232,237,247,0.6)' }}>{m.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Projects Card */}
            <Card>
              <SectionHeader title="Projects" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>} />
              <div style={{ display: 'grid', gap: 14 }}>
                {PROJECTS.slice(0, 4).map((p, i) => (<ProjectPreview key={p.id} project={p} index={i} />))}
              </div>
            </Card>

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div style={{ display: 'grid', gap: 24, position: 'sticky', top: 24 }}>

            {/* Experience Card */}
            <Card>
              <SectionHeader title="Experience" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>} />
              <div style={{ position: 'relative', paddingLeft: 8 }}>
                <div style={{ position: 'absolute', left: 13, top: 12, bottom: 12, width: 2, background: 'rgba(255,255,255,0.08)' }} />
                
                <div style={{ display: 'grid', gap: 24 }}>
                  {MILESTONES.map((m, idx) => {
                    const [role, company] = m.title.includes(' — ') ? m.title.split(' — ') : [m.title, ''];
                    
                    return (
                      <motion.div key={m.title} whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative', padding: 8, marginLeft: -8, borderRadius: 12 }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: idx === 0 ? '#ffffff' : '#0b0d12', border: idx === 0 ? 'none' : '2px solid rgba(255,255,255,0.15)', boxShadow: idx === 0 ? '0 0 8px rgba(255,255,255,0.5)' : 'none', marginTop: 4, position: 'relative', zIndex: 2, flexShrink: 0 }} />
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', lineHeight: 1.3 }}>{role}</div>
                          {company && (<div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>{company}</div>)}
                        </div>
                        <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)', padding: '4px 12px', borderRadius: 999, color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap', marginTop: -2 }}>
                          {m.year}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
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

            {/* Contact Card */}
            <Card>
              <SectionHeader title="Contact" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>} />
              <div style={{ display: 'grid', gap: 10 }}>
                {FOOTER_LINKS.map((link) => {
                  const isMail = link.href.startsWith('mailto:');
                  const Icon = link.label === 'GitHub' ? FaGithub : link.label === 'LinkedIn' ? FaLinkedinIn : FaEnvelope;
                  
                  return (
                    <motion.a 
                      key={link.label} 
                      href={link.href} 
                      target={isMail ? '_self' : '_blank'} 
                      rel={isMail ? undefined : 'noopener noreferrer'} 
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)', paddingLeft: 18, borderColor: 'rgba(255,255,255,0.1)' }}
                      style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.9)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontWeight: 500 }}>
                        <Icon size={18} style={{ opacity: 0.7 }} />
                        <span>{link.label}</span>
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}>{isMail ? '' : '↗'}</span>
                    </motion.a>
                  );
                })}
              </div>
            </Card>

          </div>
        </section>
      </div>
    </main>
  );
}