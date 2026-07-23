import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Bot, MessageSquare, ShoppingBag, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'VShop Multi-Category E-Commerce Platform',
    link: 'https://vshop.zelofx.com/',
    role: 'Lead Backend & Security Engineer',
    description: 'Multi-category enterprise e-commerce platform spanning Wellness, Academics, Deep Tech, Space, Climate, Technology, Games, and Skills.',
    highlights: [
      'Engineered PHP & Laravel core backend architecture powering multi-segment seller portals, product inventories, and multi-domain catalogs.',
      'Integrated Node.js microservices for advanced AI Fraud Detection and real-time live support chat systems.',
      'Implemented automated identity verification & KYC security protocols for seller and vendor onboarding.'
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Fraud Detection', 'Real-Time Chat', 'KYC Verification', 'Webhooks'],
    imageUrl: '/wellness campeign.jpg',
    badge: 'Multi-Domain E-Commerce',
    icon: ShoppingBag
  },
  {
    id: 2,
    title: 'Mafatlal Multi-Vendor E-Commerce Platform',
    link: 'https://mafatlaluniforms.com/',
    role: 'Core Backend Developer & AI Architect',
    description: 'Engineered an enterprise multi-vendor e-commerce platform handling cross-segment product inventories and custom fabric modules.',
    highlights: [
      'Engineered an enterprise multi-vendor e-commerce platform handling cross-segment product inventories.',
      'Built high-performance Node.js microservices to handle complex automated asynchronous background logic.',
      'Implemented an intelligent real-time customer support chatbot routing matrix utilizing Google Gemini API, OpenAI API, and OpenRouter AI.',
      'Integrated dedicated server modules for Fraud Image Detection, OCR validation systems, and real-time peer-to-peer customer chats.'
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Gemini AI', 'OpenAI API', 'OpenRouter', 'OCR Integration'],
    imageUrl: '/mafatlal-banner.jpg',
    badge: 'Enterprise Platform',
    icon: Bot
  },
  {
    id: 3,
    title: 'Teavera E-Commerce Experience Infrastructure',
    link: 'https://teavera.in/',
    role: 'Backend Architect & Messaging Lead',
    description: 'Built transactional messaging infrastructure deploying multi-point automated webhooks linked with core client systems.',
    highlights: [
      'Built transactional messaging infrastructure deploying multi-point automated webhooks linked with core client systems.',
      'Configured high-reliability WhatsApp Business API notification pipelines for real-time order tracking and dispatch alerts.',
      'Architected optimized database queries handling high-frequency webhook events.'
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Webhooks', 'WhatsApp Business API'],
    imageUrl: '/teavera-banner.jpg',
    badge: 'Messaging Infrastructure',
    icon: MessageSquare
  }
];

const SmallBrowserMockup = ({ url, title, imageUrl }) => (
  <div className="mockup-container" style={{
    width: '100%',
    maxHeight: '250px',
    background: 'var(--surface-color)',
    borderRadius: '14px',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
    transition: 'transform 0.3s ease, border-color 0.3s ease'
  }}>
    {/* Compact Browser Top Bar */}
    <div style={{
      height: '32px',
      background: 'var(--surface-light)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      gap: '6px'
    }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
      <div style={{ 
        flex: 1, 
        textAlign: 'center', 
        fontSize: '0.72rem', 
        color: 'var(--text-muted)',
        background: 'rgba(3, 4, 8, 0.6)',
        margin: '0 12px',
        borderRadius: '5px',
        padding: '2px 8px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        border: '1px solid var(--border-color)'
      }}>
        {url}
      </div>
    </div>

    {/* Compact Thumbnail Screen */}
    <div style={{ flex: 1, position: 'relative', background: 'var(--surface-color)', minHeight: '215px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src={imageUrl} 
        alt={`Thumbnail of ${title}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:2rem; text-align:center; color:var(--text-muted); gap:0.8rem;">
              <div style="padding:0.8rem; background:rgba(59, 130, 246, 0.1); borderRadius:50%; color:var(--accent-primary);">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>
              </div>
              <div style="font-weight:600; color:#fff; font-size:0.95rem;">${title}</div>
              <a href="${url}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-primary); font-size:0.82rem; text-decoration:underline;">Visit Platform &rarr;</a>
            </div>
          `;
        }}
      />
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="container">
        <h2 className="section-title">Core Projects Portfolio</h2>
        <p className="section-subtitle">
          Featured production systems demonstrating multi-category e-commerce platforms, AI microservices, webhook automation, and fraud detection systems.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
          {projects.map((project, idx) => {
            const IconComponent = project.icon;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="card"
                style={{ padding: '2.5rem' }}
              >
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr',
                    gap: '2.5rem',
                    alignItems: 'center'
                  }}
                  className="grid-cols-2"
                >
                  {/* Left Text Block */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                      <span className="badge">{project.badge}</span>
                    </div>

                    <h3 style={{ fontSize: '1.85rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.25, fontWeight: 700 }}>
                      {project.title}
                    </h3>
                    
                    <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <IconComponent size={17} /> {project.role}
                    </div>

                    {/* Highlights Bullet List */}
                    <div style={{ padding: '1.2rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {project.highlights.map((h, hIdx) => (
                          <li key={hIdx} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                            <CheckCircle2 size={15} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.8rem' }}>
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="tech-pill" style={{ fontSize: '0.78rem' }}>{t}</span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '0.7rem 1.6rem', fontSize: '0.88rem' }}>
                      <ExternalLink size={16} /> Visit Platform Live
                    </a>
                  </div>

                  {/* Right Small Thumbnail Mockup Display */}
                  <div>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SmallBrowserMockup url={project.link} title={project.title} imageUrl={project.imageUrl} />
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
