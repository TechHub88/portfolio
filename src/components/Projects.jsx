import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, Bot, MessageSquare, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Mafatlal Multi-Vendor E-Commerce Platform',
    link: 'https://mafatlaluniforms.com/',
    role: 'Core Backend Developer & AI Architect',
    tag: 'Multi-Vendor & AI',
    doodleTag: '{ multi_vendor: true }',
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
    doodleTag: '{ whatsapp_webhooks: true }',
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
    doodleTag: '{ kyc_security: true }',
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
  }
];

// TYPEWRITER COMPONENT FOR PROJECT TITLES
const ProjectTitleTypewriter = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= title.length) {
          setDisplayedText(title.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 35); // Typing speed per letter
      return () => clearInterval(interval);
    }
  }, [isInView, title, isTyping]);

  return (
    <h3 ref={ref} style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)', color: '#fff', marginBottom: '0.4rem', fontWeight: 800, minHeight: '2rem' }}>
      {displayedText}
      {displayedText.length < title.length && (
        <span style={{ color: '#f59e0b', marginLeft: '2px', fontWeight: 300, animation: 'pulse 1s infinite' }}>|</span>
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
            WebMantra & enterprise production systems demonstrating multi-category e-commerce, AI microservices, webhook automation, and fraud detection.
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

                {/* DOODLE 2: Floating Code Badge Sticker */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '24px',
                  zIndex: 5,
                  background: '#090a0f',
                  border: '1.5px dashed #f59e0b',
                  borderRadius: '10px',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.74rem',
                  color: '#fbbf24',
                  fontWeight: 700,
                  boxShadow: '0 6px 15px rgba(0,0,0,0.5)',
                  transform: 'rotate(-2deg)'
                }}>
                  ✨ {project.doodleTag}
                </div>

                {/* Number Watermark Badge */}
                <div className="project-card-number">{project.id}</div>

                <div className="webmantra-card-grid" style={{ paddingTop: '0.6rem' }}>
                  
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
                    
                    <div style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '1rem' }}>
                      Role: {project.role}
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '1.2rem', lineHeight: 1.65 }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                      {project.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
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
                        style={{ padding: '0.65rem 1.35rem', fontSize: '0.86rem', borderRadius: '10px' }}
                      >
                        Visit Live Platform <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  {/* Right Preview Image Frame */}
                  <div className="webmantra-thumbnail-wrapper" style={{ position: 'relative' }}>
                    <div className="browser-header-dots">
                      <span style={{ background: '#ef4444' }} />
                      <span style={{ background: '#f59e0b' }} />
                      <span style={{ background: '#10b981' }} />
                      <div className="browser-url-text">{project.link}</div>
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
