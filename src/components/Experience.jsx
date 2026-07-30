import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles, Cpu, ShieldCheck, Zap, Server, Activity } from 'lucide-react';

const experiences = [
  {
    role: 'Junior PHP Laravel Developer',
    company: 'WebMantra Technology Services Pvt. Ltd.',
    location: 'Kolkata, West Bengal, India',
    period: 'Oct 2025 – Present',
    badge: 'Current Role',
    isCurrent: true,
    accentColor: '#3b82f6',
    glowGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%)',
    borderGlow: 'rgba(59, 130, 246, 0.45)',
    impactTitle: 'Enterprise Systems & AI Microservices',
    points: [
      'Architecting scalable PHP Laravel & Node.js backend microservices powering multi-segment seller portals and product inventories.',
      'Integrating advanced AI technologies (Gemini, OpenAI, OpenRouter APIs), securing production authentication metrics, and handling real-time chat loops.',
      'Structuring automated payment gateways, WhatsApp webhooks, transactional mail systems, and robust MySQL relational models.'
    ],
    tech: ['Laravel', 'Node.js', 'PHP', 'AI Microservices', 'REST APIs', 'MySQL', 'Fraud Detection', 'Webhooks']
  },
  {
    role: 'Junior Backend Developer',
    company: 'Octagen Infotech LLP',
    location: 'Kolkata, West Bengal, India',
    period: 'Jan 2024 – Oct 2025',
    badge: '1 Year 10 Months',
    isCurrent: false,
    accentColor: '#8b5cf6',
    glowGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
    borderGlow: 'rgba(139, 92, 246, 0.4)',
    impactTitle: 'Server Infrastructure & Log Troubleshooting',
    points: [
      'Managed end-to-end data processing servers, log troubleshooting setups, and API endpoint structural engineering.',
      'Configured strict security policies, OAuth 2.0 verification parameters, and real-time communications architecture across customer environments.'
    ],
    tech: ['PHP', 'Laravel', 'REST APIs', 'Server Logging', 'Security Policies', 'OAuth 2.0', 'Database Optimization']
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ position: 'relative', overflow: 'hidden', padding: '7rem 0' }}>
      
      {/* Background Ambient Glowing Orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '2%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '2%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ width: '100%' }}>
        <h2 className="section-title">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="section-subtitle">
          Over 2 years of hands-on industry experience engineering high-performance backend microservices, enterprise server architectures, and AI integrations.
        </p>
        
        {/* Futuristic Bento Card Grid Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              style={{ width: '100%' }}
            >
              <div 
                className="card" 
                style={{ 
                  width: '100%', 
                  padding: 0, 
                  borderColor: exp.borderGlow,
                  background: 'rgba(11, 13, 20, 0.92)',
                  boxShadow: `0 20px 60px -15px ${exp.accentColor}22`,
                  overflow: 'hidden',
                  borderRadius: '24px'
                }}
              >
                {/* 2-Column Bento Structure: Left Brand Card + Right Details */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 0.8fr) 1.2fr', gap: 0 }}>
                  
                  {/* LEFT BENTO SUB-PANEL */}
                  <div style={{ 
                    background: exp.glowGradient, 
                    padding: '2.2rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justify: 'space-between',
                    borderRight: '1px solid var(--border-color)',
                    position: 'relative'
                  }}>
                    <div>
                      {/* Company Icon & Pulse Badge */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ 
                          padding: '0.9rem', 
                          borderRadius: '16px', 
                          background: 'rgba(11, 13, 20, 0.85)', 
                          color: exp.accentColor,
                          boxShadow: `0 0 25px ${exp.accentColor}44`,
                          border: `1px solid ${exp.accentColor}55`
                        }}>
                          <Building2 size={30} />
                        </div>

                        <span 
                          className="badge" 
                          style={{ 
                            background: exp.isCurrent ? 'rgba(16, 185, 129, 0.15)' : 'rgba(139, 92, 246, 0.15)', 
                            borderColor: exp.isCurrent ? 'rgba(16, 185, 129, 0.4)' : 'rgba(139, 92, 246, 0.4)', 
                            color: exp.isCurrent ? '#34d399' : '#a78bfa',
                            fontSize: '0.8rem'
                          }}
                        >
                          {exp.isCurrent && (
                            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 12px #10b981' }} />
                          )}
                          {exp.badge}
                        </span>
                      </div>

                      {/* Company & Role Titles */}
                      <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.55rem)', color: '#fff', fontWeight: 800, marginBottom: '0.4rem', lineHeight: 1.25 }}>
                        {exp.role}
                      </h3>
                      
                      <h4 style={{ color: exp.accentColor, fontWeight: 700, fontSize: '1.02rem', marginBottom: '1.2rem' }}>
                        {exp.company}
                      </h4>
                    </div>

                    {/* Metadata Pills */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1.5rem' }}>
                      <div style={{ padding: '0.5rem 0.9rem', background: 'rgba(11, 13, 20, 0.65)', borderRadius: '10px', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.83rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={14} color={exp.accentColor} /> {exp.period}
                      </div>
                      <div style={{ padding: '0.5rem 0.9rem', background: 'rgba(11, 13, 20, 0.65)', borderRadius: '10px', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.83rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin size={14} color="var(--accent-rose)" /> {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT MAIN PANEL */}
                  <div style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {/* Section Impact Tag */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: exp.accentColor, fontSize: '0.83rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                        <Activity size={15} /> {exp.impactTitle}
                      </div>

                      {/* Bullet Achievements */}
                      <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.8rem' }}>
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', lineHeight: 1.65, fontSize: '0.98rem' }}>
                            <CheckCircle2 size={19} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                            <span style={{ color: '#e2e8f0' }}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pills Cloud */}
                    <div style={{ paddingTop: '1.2rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', gap: '0.55rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Sparkles size={13} color="var(--accent-cyan)" /> Core Technologies:
                      </span>
                      {exp.tech.map((t, tIdx) => (
                        <motion.span 
                          key={tIdx} 
                          whileHover={{ scale: 1.05, borderColor: exp.accentColor }} 
                          className="tech-pill"
                          style={{ cursor: 'default' }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
