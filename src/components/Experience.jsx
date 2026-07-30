import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles } from 'lucide-react';

const experiences = [
  {
    role: 'Junior PHP Laravel Developer',
    company: 'WebMantra Technology Services Pvt. Ltd.',
    location: 'Kolkata, India',
    period: 'Oct 2025 – Present',
    badge: 'Current Role',
    isCurrent: true,
    accentColor: '#3b82f6',
    points: [
      'Architecting scalable backend microservices and implementing third-party enterprise vendor environments.',
      'Integrating advanced AI technologies, securing production authentication metrics, and handling real-time application processing loops.',
      'Structuring automated payment, transactional mail systems, and robust database models using Laravel and Node.js.'
    ],
    tech: ['Laravel', 'Node.js', 'PHP', 'AI Integration', 'REST APIs', 'MySQL']
  },
  {
    role: 'Junior Backend Developer',
    company: 'Octagen Infotech LLP',
    location: 'Kolkata, India',
    period: 'Jan 2024 – Oct 2025',
    badge: '1 Year 10 Months',
    isCurrent: false,
    accentColor: '#8b5cf6',
    points: [
      'Managed end-to-end data processing servers, log troubleshooting setups, and API endpoint structural engineering.',
      'Configured strict security policies, verification parameters, and real-time communications architecture across customer systems.'
    ],
    tech: ['PHP', 'Laravel', 'REST APIs', 'Server Logging', 'Security Policies', 'OAuth']
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Ambient Neon Glow Background */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '2%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '2%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ width: '100%' }}>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Over 2 years of hands-on experience in backend engineering, API microservices, and enterprise server architecture.
        </p>
        
        {/* Full-Width Classy Cards Showcase - Zero Awkward Side Gaps */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              style={{ width: '100%' }}
            >
              <div 
                className="card" 
                style={{ 
                  width: '100%', 
                  padding: '2.4rem', 
                  borderColor: exp.isCurrent ? 'rgba(59, 130, 246, 0.4)' : 'rgba(139, 92, 246, 0.3)',
                  background: exp.isCurrent ? 'rgba(11, 13, 20, 0.95)' : 'rgba(11, 13, 20, 0.85)',
                  boxShadow: exp.isCurrent ? '0 20px 50px -10px rgba(59, 130, 246, 0.15)' : 'none'
                }}
              >
                {/* Header Row: Company & Role */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.2rem' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <div style={{ 
                      padding: '0.8rem', 
                      borderRadius: '16px', 
                      background: exp.isCurrent ? 'rgba(59, 130, 246, 0.15)' : 'rgba(139, 92, 246, 0.15)', 
                      color: exp.accentColor,
                      boxShadow: `0 0 20px ${exp.accentColor}33`,
                      border: `1px solid ${exp.accentColor}44`
                    }}>
                      <Building2 size={28} />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                        <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)', color: '#fff', fontWeight: 800 }}>{exp.role}</h3>
                        
                        <span 
                          className="badge" 
                          style={{ 
                            background: exp.isCurrent ? 'rgba(16, 185, 129, 0.12)' : 'rgba(139, 92, 246, 0.12)', 
                            borderColor: exp.isCurrent ? 'rgba(16, 185, 129, 0.35)' : 'rgba(139, 92, 246, 0.35)', 
                            color: exp.isCurrent ? '#34d399' : '#a78bfa' 
                          }}
                        >
                          {exp.isCurrent && (
                            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }} />
                          )}
                          {exp.badge}
                        </span>
                      </div>

                      <h4 style={{ color: exp.accentColor, fontWeight: 700, fontSize: '1.08rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {exp.company}
                      </h4>
                    </div>
                  </div>

                  {/* Metadata Chips: Period & Location */}
                  <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ padding: '0.45rem 1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <Calendar size={15} color={exp.accentColor} /> {exp.period}
                    </div>
                    <div style={{ padding: '0.45rem 1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <MapPin size={15} color="var(--accent-rose)" /> {exp.location}
                    </div>
                  </div>

                </div>

                {/* Key Deliverables Points */}
                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.6rem' }}>
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', lineHeight: 1.65, fontSize: '1.01rem' }}>
                      <CheckCircle2 size={19} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills Footer */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-color)', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginRight: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Sparkles size={13} color="var(--accent-cyan)" /> Core Technologies:
                  </span>
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-pill">{t}</span>
                  ))}
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
