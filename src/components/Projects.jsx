import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Mafatlal Uniforms E-Commerce',
    link: 'https://mafatlaluniforms.com/',
    role: 'Core Backend Developer',
    description: 'Engineered an enterprise multi-vendor e-commerce platform handling cross-segment product inventories and custom fabric modules. Built high-performance Node.js microservices and integrated real-time AI customer support.',
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Gemini AI', 'OpenAI'],
    metrics: ['Enterprise Scale', 'Microservices', 'AI Integration'],
    imageUrl: '/mafatlal-banner.jpg'
  },
  {
    title: 'Teavera E-Commerce Experience',
    link: 'https://teavera.in/',
    role: 'Backend Architect',
    description: 'Built a highly robust transactional messaging infrastructure deploying multi-point automated webhooks linked with core client systems to enhance user experience.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Webhooks', 'WhatsApp API'],
    metrics: ['Transactional Messaging', 'Webhook Automation'],
    imageUrl: '/teavera-banner.jpg'
  }
];

const BrowserMockup = ({ url, imageUrl }) => (
  <div className="mockup-container" style={{
    width: '100%',
    height: '450px',
    background: 'var(--bg-color)',
    borderRadius: '12px',
    border: '1px solid var(--surface-light)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    cursor: 'pointer'
  }}>
    {/* Browser Top Bar */}
    <div style={{
      height: '32px',
      background: 'var(--surface-color)',
      borderBottom: '1px solid var(--surface-light)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      gap: '6px'
    }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
      <div style={{ 
        flex: 1, 
        textAlign: 'center', 
        fontSize: '0.75rem', 
        color: 'var(--text-muted)',
        background: 'var(--bg-color)',
        margin: '0 20px',
        borderRadius: '4px',
        padding: '2px 0'
      }}>
        {url}
      </div>
    </div>
    {/* Browser Content */}
    <div style={{ flex: 1, position: 'relative', background: 'var(--surface-color)' }}>
      <img 
        src={imageUrl} 
        alt={`Screenshot of ${url}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = '<div style="display:flex; height:100%; align-items:center; justify-content:center; color:var(--text-muted); text-align:center; padding:2rem; background:var(--surface-color);">Please save screenshot image in public folder</div>';
        }}
      />
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative', paddingBottom: '10rem' }}>
      <div className="container">
        <h2 className="section-title">Core Projects Portfolio</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '5rem', maxWidth: '700px', margin: '0 auto 5rem auto' }}>
          My focus is on engineering scalable server architectures, complex API configurations, and AI integrations for enterprise-level applications.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="project-row"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: idx % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
              }}
            >
              {/* If odd index, we reverse the order visually using order CSS property (requires wrapper) */}
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Featured Project
                </div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff', lineHeight: 1.2 }}>{project.title}</h3>
                
                <div style={{ color: 'var(--accent-secondary)', fontWeight: 500, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={18} /> {project.role}
                </div>
                
                <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem', border: 'none', background: 'rgba(255,255,255,0.03)' }}>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                    {project.description}
                  </p>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
                        {tech} {tIdx < project.tech.length - 1 && '•'}
                      </span>
                    ))}
                  </div>
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>
                  <ExternalLink size={18} /> Visit Live Site
                </a>
              </div>

              <div style={{ order: idx % 2 === 0 ? 2 : 1, position: 'relative' }}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BrowserMockup url={project.link} imageUrl={project.imageUrl} />
                </motion.div>
                
                {/* Decorative blob behind browser mockup */}
                <div style={{
                  position: 'absolute',
                  top: '10%', left: '10%', right: '-10%', bottom: '-10%',
                  background: 'var(--gradient-accent)',
                  filter: 'blur(100px)',
                  opacity: 0.15,
                  zIndex: -1,
                  borderRadius: '50%'
                }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
