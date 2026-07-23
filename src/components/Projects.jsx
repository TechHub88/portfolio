import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, Bot, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'VShop Multi-Category E-Commerce Platform',
    link: 'https://vshop.vridhee.com/',
    role: 'Lead Backend & Security Engineer',
    tag: 'E-Commerce & Security',
    description: 'Multi-category enterprise e-commerce platform spanning Wellness, Academics, Deep Tech, Space, Climate, Technology, Games, and Skills.',
    highlights: [
      'Engineered PHP & Laravel core backend architecture powering multi-segment seller portals, product inventories, and multi-domain catalogs.',
      'Integrated Node.js microservices for advanced AI Fraud Detection and real-time live support chat systems.',
      'Implemented automated identity verification & KYC security protocols for seller and vendor onboarding.'
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Fraud Detection', 'Real-Time Chat', 'KYC Verification', 'Webhooks'],
    imageUrl: '/vshop-banner.png',
    badge: 'Featured Project',
    icon: ShoppingBag
  },
  {
    id: '02',
    title: 'Mafatlal Multi-Vendor E-Commerce Platform',
    link: 'https://mafatlaluniforms.com/',
    role: 'Core Backend Developer & AI Architect',
    tag: 'Multi-Vendor & AI',
    description: 'Engineered an enterprise multi-vendor e-commerce platform handling cross-segment product inventories and custom fabric modules.',
    highlights: [
      'Engineered an enterprise multi-vendor e-commerce platform handling cross-segment product inventories.',
      'Built high-performance Node.js microservices to handle complex automated asynchronous background logic.',
      'Implemented an intelligent real-time customer support chatbot routing matrix utilizing Google Gemini API, OpenAI API, and OpenRouter AI.',
      'Integrated dedicated server modules for Fraud Image Detection, OCR validation systems, and real-time peer-to-peer customer chats.'
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Gemini AI', 'OpenAI API', 'OpenRouter', 'OCR Integration'],
    imageUrl: '/mafatlal-banner.jpg',
    badge: 'Enterprise AI',
    icon: Bot
  },
  {
    id: '03',
    title: 'Teavera E-Commerce Experience Infrastructure',
    link: 'https://teavera.in/',
    role: 'Backend Architect & Messaging Lead',
    tag: 'Webhooks & Messaging',
    description: 'Built transactional messaging infrastructure deploying multi-point automated webhooks linked with core client systems.',
    highlights: [
      'Built transactional messaging infrastructure deploying multi-point automated webhooks linked with core client systems.',
      'Configured high-reliability WhatsApp Business API notification pipelines for real-time order tracking and dispatch alerts.',
      'Architected optimized database queries handling high-frequency webhook events.'
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Webhooks', 'WhatsApp Business API'],
    imageUrl: '/teavera-banner.jpg',
    badge: 'Infrastructure',
    icon: MessageSquare
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.12)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-secondary)', display: 'inline-block' }} />
            Our Portfolio
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Case Studies & Projects</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            WebMantra & enterprise production systems demonstrating multi-category e-commerce, AI microservices, webhook automation, and fraud detection systems.
          </p>
        </div>

        {/* WebMantra-Inspired Project Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {projects.map((project) => {
            const IconComponent = project.icon;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="webmantra-project-card"
              >
                {/* Number Watermark Badge */}
                <div className="project-card-number">{project.id}</div>

                <div className="webmantra-card-grid">
                  
                  {/* Left Details */}
                  <div style={{ zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                      <span className="badge" style={{ fontSize: '0.78rem' }}>{project.badge}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {project.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.9rem', color: '#ffffff', marginBottom: '0.6rem', lineHeight: 1.25, fontWeight: 800 }}>
                      {project.title}
                    </h3>
                    
                    <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <IconComponent size={18} /> {project.role}
                    </div>

                    {/* Bullet Highlights */}
                    <div style={{ padding: '1.2rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {project.highlights.map((h, hIdx) => (
                          <li key={hIdx} style={{ display: 'flex', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                            <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
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

                    {/* WebMantra Style Action Button */}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ padding: '0.75rem 1.8rem', fontSize: '0.88rem' }}>
                      View Project <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Right Thumbnail Image Container */}
                  <div style={{ zIndex: 2 }}>
                    <div className="webmantra-thumbnail-wrapper">
                      <div className="browser-header-dots">
                        <span style={{ background: '#ef4444' }} />
                        <span style={{ background: '#f59e0b' }} />
                        <span style={{ background: '#10b981' }} />
                        <span className="browser-url-text">{project.link}</span>
                      </div>
                      <div className="webmantra-img-box">
                        <img 
                          src={project.imageUrl} 
                          alt={`Thumbnail of ${project.title}`}
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:2rem; text-align:center; color:var(--text-muted); gap:0.8rem;">
                                <div style="font-weight:600; color:#fff;">${project.title}</div>
                                <a href="${project.link}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-primary); font-size:0.82rem; text-decoration:underline;">View Live Project &rarr;</a>
                              </div>
                            `;
                          }}
                        />
                      </div>
                    </div>
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
