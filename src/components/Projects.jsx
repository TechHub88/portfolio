import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Bot, MessageSquare, BookOpen, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
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
    id: '02',
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
  },
  {
    id: '03',
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
    id: '04',
    title: 'Full-Stack Book Publication Platform',
    link: '#contact',
    role: 'Backend Architect & Payments Lead',
    tag: 'Payments & Relational DB',
    description: 'Engineered relational databases with secure payload execution layers to handle metadata indexing, digital publication cataloging, and automated Razorpay payment integration.',
    highlights: [
      'Designed relational databases with secure payload execution layers to handle metadata indexing and digital payments.',
      'Integrated Razorpay payment gateway API with webhook listeners for automated instant invoice generation and digital fulfillment.',
      'Implemented role-based authorization protocols for authors, publishers, and readers.'
    ],
    tech: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'Razorpay', 'Role Authorization'],
    imageUrl: '/vshop-banner.png',
    badge: 'Publication & Payments',
    icon: BookOpen
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative', padding: '3.5rem 0' }}>
      <div className="container">
        
        {/* Section Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge" style={{ marginBottom: '0.8rem', background: 'rgba(139, 92, 246, 0.12)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-secondary)', display: 'inline-block' }} />
            My Projects
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Case Studies & Projects</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            WebMantra & enterprise production systems demonstrating multi-category e-commerce, AI microservices, webhook automation, and publication payment systems.
          </p>
        </div>

        {/* WebMantra Project Cards Grid - Compact Spacing */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
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
                      <div style={{ padding: '0.6rem', background: 'rgba(59, 130, 246, 0.15)', borderRadius: '12px', color: 'var(--accent-primary)', display: 'flex' }}>
                        <IconComponent size={20} />
                      </div>
                      <span className="badge" style={{ background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.25)', color: '#60a5fa' }}>
                        {project.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', color: '#fff', marginBottom: '0.4rem', fontWeight: 800 }}>
                      {project.title}
                    </h3>
                    
                    <div style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '1rem' }}>
                      Role: {project.role}
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                      {project.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                          <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="tech-pill">{t}</span>
                      ))}
                    </div>

                    {project.link.startsWith('http') && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-accent"
                        style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem', borderRadius: '10px' }}
                      >
                        Visit Live Platform <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  {/* Right Preview Image Frame */}
                  <div className="webmantra-thumbnail-wrapper">
                    <div className="browser-header-dots">
                      <span style={{ background: '#ef4444' }} />
                      <span style={{ background: '#f59e0b' }} />
                      <span style={{ background: '#10b981' }} />
                      <div className="browser-url-text">{project.link.startsWith('http') ? project.link : 'https://sayaniroy.dev/book-platform'}</div>
                    </div>
                    <div className="webmantra-img-box">
                      <img src={project.imageUrl} alt={project.title} />
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
