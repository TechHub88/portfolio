import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Junior PHP Laravel Developer',
    company: 'WebMantra Technology Services Pvt. Ltd.',
    location: 'Kolkata, India',
    period: 'Oct 2025 – Present',
    badge: 'Current Role',
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
    points: [
      'Managed end-to-end data processing servers, log troubleshooting setups, and API endpoint structural engineering.',
      'Configured strict security policies, verification parameters, and real-time communications architecture across customer systems.'
    ],
    tech: ['PHP', 'Laravel', 'REST APIs', 'Server Logging', 'Security Policies', 'OAuth']
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Over 2 years of hands-on experience in backend engineering, API microservices, and enterprise server architecture.
        </p>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{ display: 'flex', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ 
                  width: '52px', height: '52px', 
                  borderRadius: '14px', 
                  background: 'var(--gradient-accent)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                }}>
                  <Briefcase size={24} color="#fff" />
                </div>
                {idx !== experiences.length - 1 && (
                  <div style={{ width: '2px', height: '100%', background: 'var(--border-color)', flexGrow: 1, marginTop: '0.8rem' }}></div>
                )}
              </div>
              
              <div className="card" style={{ flexGrow: 1, padding: '2.2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                      <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>{exp.role}</h3>
                      <span className="badge">{exp.badge}</span>
                    </div>
                    <h4 style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '1.05rem' }}>{exp.company}</h4>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', textAlign: 'right' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {exp.period}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={14} /> {exp.location}</span>
                  </div>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', lineHeight: 1.6, fontSize: '0.98rem' }}>
                      <CheckCircle2 size={18} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
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
