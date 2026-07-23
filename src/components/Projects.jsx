import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Bot, MessageSquare, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
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
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Gemini AI', 'OpenAI API', 'OpenRouter', 'OpenRoute API', 'OCR Integration'],
    imageUrl: '/mafatlal-banner.jpg',
    badge: 'Enterprise Platform',
    icon: Bot
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    title: 'Full-Stack Book Publication Platform',
    link: 'https://github.com/TechHub88/portfolio',
    role: 'Full-Stack Database & API Engineer',
    description: 'Designed relational databases with secure payload execution layers to handle metadata indexing and digital payments.',
    highlights: [
      'Designed relational databases with secure payload execution layers to handle metadata indexing and digital payments.',
      'Integrated Razorpay payment gateway API with automated webhooks for payment verification and invoice generation.',
      'Implemented RESTful API endpoints for secure book publication management.'
    ],
    tech: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'Razorpay Gateway'],
    imageUrl: '/book-banner.jpg',
    badge: 'Publication & Payments',
    icon: BookOpen
  }
];

const BrowserMockup = ({ url, title, imageUrl }) => (
  <div className="mockup-container" style={{
    width: '100%',
    minHeight: '380px',
    background: 'var(--surface-color)',
    borderRadius: '16px',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
  }}>
    {/* Browser Header Bar */}
    <div style={{
      height: '38px',
      background: 'var(--surface-light)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 14px',
      gap: '8px'
    }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
      <div style={{ 
        flex: 1, 
        textAlign: 'center', 
        fontSize: '0.78rem', 
        color: 'var(--text-muted)',
        background: 'var(--bg-color)',
        margin: '0 15px',
        borderRadius: '6px',
        padding: '3px 10px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        border: '1px solid var(--border-color)'
      }}>
        {url}
      </div>
    </div>

    {/* Browser Body Screen */}
    <div style={{ flex: 1, position: 'relative', background: 'var(--surface-color)', minHeight: '340px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src={imageUrl} 
        alt={`Screenshot of ${title}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        loading="lazy"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:3rem; text-align:center; color:var(--text-muted); gap:1rem;">
              <div style="padding:1.2rem; background:rgba(59, 130, 246, 0.1); borderRadius:50%; color:var(--accent-primary);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>
              </div>
              <div style="font-weight:600; color:#fff; font-size:1.1rem;">${title}</div>
              <a href="${url}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-primary); font-size:0.9rem; text-decoration:underline;">Visit Live Platform &rarr;</a>
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
          Featured production systems demonstrating enterprise multi-vendor e-commerce, AI microservices, webhook automation, and transactional payment platforms.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {projects.map((project, idx) => {
            const IconComponent = project.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr',
                  gap: '3rem',
                  alignItems: 'center'
                }}
                className="grid-cols-2"
              >
                {/* Text Content Block */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                    <span className="badge">{project.badge}</span>
                  </div>

                  <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.6rem', lineHeight: 1.25 }}>
                    {project.title}
                  </h3>
                  
                  <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <IconComponent size={18} /> {project.role}
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="card" style={{ padding: '1.5rem', marginBottom: '1.8rem', background: 'rgba(255, 255, 255, 0.02)' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} style={{ display: 'flex', gap: '0.7rem', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-pill">{t}</span>
                    ))}
                  </div>

                  {/* Live Link CTA */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                    <ExternalLink size={17} /> Visit Platform Live
                  </a>
                </div>

                {/* Mockup Display Block */}
                <div style={{ order: isEven ? 2 : 1, position: 'relative' }}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BrowserMockup url={project.link} title={project.title} imageUrl={project.imageUrl} />
                  </motion.div>
                  
                  {/* Subtle Background Glow */}
                  <div style={{
                    position: 'absolute',
                    top: '20%', left: '20%', right: '20%', bottom: '20%',
                    background: 'var(--gradient-accent)',
                    filter: 'blur(90px)',
                    opacity: 0.12,
                    zIndex: -1,
                    borderRadius: '50%'
                  }} />
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
