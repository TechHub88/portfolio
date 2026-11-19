import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, Bot, MessageSquare, ExternalLink, Layers } from 'lucide-react';

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
      'Built high-performance Node.js backend services to handle complex automated asynchronous background logic.',
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
    title: 'VShop Multi-Vendor E-Commerce Platform',
    link: 'https://vshop.vridhee.com/',
    role: 'Lead Backend & Security Engineer',
    tag: 'Multi-Vendor & Security',
    description: 'Multi-vendor enterprise e-commerce platform spanning Wellness, Academics, Deep Tech, Space, Climate, Technology, Games, and Skills.',
    highlights: [
      'Engineered PHP & Laravel core backend architecture powering multi-segment seller portals, product inventories, and multi-domain catalogs.',
      'Integrated Node.js backend modules for advanced AI Fraud Detection and real-time live support chat systems.',
      'Implemented automated identity verification & KYC security protocols for seller and vendor onboarding.'
    ],
    tech: ['PHP', 'Laravel', 'Node.js', 'MySQL', 'Fraud Detection', 'Real-Time Chat', 'KYC Verification', 'Webhooks'],
    imageUrl: '/vshop-banner.png',
    badge: 'Featured Project',
    icon: ShoppingBag
  },
  {
    id: '04',
    title: 'Relateo - Enterprise Sales & Telecalling CRM',
    link: 'https://github.com/TechHub88/CRM-Platform',
    githubUrl: 'https://github.com/TechHub88/CRM-Platform',
    role: 'Lead Full-Stack Developer & Backend Architect',
    tag: 'Sales CRM & Telecalling',
    description: 'Full-featured enterprise Sales & Telecalling CRM engineered with PHP Laravel, featuring real-time lead capture, an outbound Telecalling Hub with integrated Power Dialer, 1-click WhatsApp messaging sequences, and conversion analytics.',
    highlights: [
      'Engineered a comprehensive Sales & Lead Management CRM using PHP Laravel, Blade, Tailwind CSS, Alpine.js, and MySQL.',
      'Built an Outbound Telecalling Hub with 1-click Power Dialer, live call duration timers, disposition logging, and audio recording playback.',
      'Integrated 1-Click WhatsApp outreach sequences with automated dynamic template variable replacement.',
      'Architected multi-source lead webhooks (Facebook Ads, Google Ads, IndiaMART, JustDial) with stage pipelines and callback alarms.'
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'WhatsApp API', 'Power Dialer', 'Webhooks'],
    imageUrl: '/crm-banner.jpg',
    badge: 'Sales CRM & Dialer',
    icon: Layers,
    isGithub: true
  }
];

// TYPEWRITER COMPONENT FOR PROJECT TITLES (MATCHING HERO DESCRIPTION PATTERN)
const ProjectTitleTypewriter = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Type character by character when in view
  useEffect(() => {
    if (!isInView) return;
    if (subIndex < title.length) {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, isInView, title]);

  return (
    <h3 ref={ref} style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', color: '#ffffff', marginBottom: '0.4rem', fontWeight: 800, minHeight: '2.2rem' }}>
      {title.substring(0, subIndex)}
      {subIndex < title.length && (
        <span style={{ opacity: blink ? 1 : 0, color: '#f59e0b', marginLeft: '3px', fontWeight: 400 }}>|</span>
      )}
    </h3>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{ position: 'relative', padding: '4rem 0', overflow: 'hidden' }}>
      
      {/* BACKGROUND CREATIVE DOODLE GLOWS */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Section Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          
          {/* Top Doodle Sparkle */}
          <div style={{ position: 'absolute', top: '-20px', right: '25%', pointerEvents: 'none' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5"/>
            </svg>
          </div>

          <div className="badge" style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.12)', borderColor: 'rgba(245, 158, 11, 0.3)', color: '#fbbf24' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24', display: 'inline-block' }} />
            My Projects
          </div>

          <h2 className="section-title">
            Featured Case Studies &{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span className="text-gradient">Projects</span>
              {/* Hand-Drawn Wavy Underline SVG Doodle */}
              <svg width="100%" height="10" viewBox="0 0 120 10" fill="none" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-4px', left: 0, pointerEvents: 'none' }}>
                <path d="M3 7C30 2 70 8 117 3" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="section-subtitle" style={{ marginBottom: 0, marginTop: '0.6rem' }}>
            Enterprise production systems demonstrating Sales CRM platforms, multi-vendor e-commerce, AI integrations, and webhook automation.
          </p>
        </div>

        {/* WebMantra Project Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
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
                style={{ position: 'relative' }}
              >
                {/* DOODLE 1: Hand-Drawn Corner Flourish SVG */}
                <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 1, pointerEvents: 'none', opacity: 0.7 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M20 4 L4 4 L4 20" />
                  </svg>
                </div>

                {/* Number Watermark Badge */}
                <div className="project-card-number">{project.id}</div>

                <div className="webmantra-card-grid">
                  
                  {/* Left Details */}
                  <div style={{ zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem', flexWrap: 'wrap' }}>
                      <div style={{ padding: '0.6rem', background: 'rgba(56, 189, 248, 0.15)', borderRadius: '12px', color: 'var(--accent-primary)', display: 'flex' }}>
                        <IconComponent size={20} />
                      </div>
                      <span className="badge" style={{ background: 'rgba(56, 189, 248, 0.1)', borderColor: 'rgba(56, 189, 248, 0.25)', color: '#38bdf8' }}>
                        {project.badge}
                      </span>
                    </div>

                    {/* TYPEWRITER PROJECT TITLE */}
                    <ProjectTitleTypewriter title={project.title} />
                    
                    <div style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.8rem' }}>
                      Role: {project.role}
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.6rem' }}>
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="tech-pill">{t}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      {project.link.startsWith('http') && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-accent"
                          style={{ padding: '0.65rem 1.35rem', fontSize: '0.86rem', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                          {project.isGithub ? (
                            <>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.54 5.5-1.41 5.5-6a4.64 4.64 0 0 0-1.3-3.2 4.22 4.22 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0C6.2 2.7 5.1 3 5.1 3a4.22 4.22 0 0 0-.1 3.2 4.64 4.64 0 0 0-1.3 3.2c0 4.6 2.5 5.4 5.5 6a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M13.2 18c-2.3.8-4.7.7-6.9-1.2"></path></svg>
                              <span>View Git Repository ↗</span>
                            </>
                          ) : (
                            <>
                              <span>Visit Live Platform</span>
                              <ExternalLink size={15} />
                            </>
                          )}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Preview Image Frame */}
                  <div className="webmantra-thumbnail-wrapper" style={{ position: 'relative' }}>
                    <div className="browser-header-dots">
                      <span style={{ background: '#ef4444' }} />
                      <span style={{ background: '#f59e0b' }} />
                      <span style={{ background: '#10b981' }} />
                      <div className="browser-url-text">{project.link}</div>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="webmantra-img-box"
                      style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <img src={project.imageUrl} alt={project.title} />
                    </a>
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
