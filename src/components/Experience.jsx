import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Junior PHP Laravel Developer',
    company: 'WebMantra Technology Services Pvt. Ltd.',
    location: 'Kolkata, India',
    period: 'Oct 2025 – Present',
    points: [
      'Architecting scalable backend microservices and implementing third-party enterprise vendor environments.',
      'Integrating advanced AI technologies, securing production authentication metrics, and handling real-time application processing loops.',
      'Structuring automated payment, transactional mail systems, and robust database models using Laravel and Node.js.'
    ]
  },
  {
    role: 'Junior Backend Developer',
    company: 'Octagen Infotech LLP',
    location: 'Kolkata, India',
    period: 'Jan 2024 – Oct 2025',
    points: [
      'Managed end-to-end data processing servers, log troubleshooting setups, and API endpoint structural engineering.',
      'Configured strict security policies, OAuth verification parameters, and real-time communications architecture across customer systems.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{ display: 'flex', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ 
                  width: '50px', height: '50px', 
                  borderRadius: '50%', 
                  background: 'var(--gradient-accent)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  flexShrink: 0
                }}>
                  <Briefcase size={24} color="#fff" />
                </div>
                {idx !== experiences.length - 1 && (
                  <div style={{ width: '2px', height: '100%', background: 'var(--surface-light)', flexGrow: 1, marginTop: '0.5rem' }}></div>
                )}
              </div>
              
              <div className="card" style={{ flexGrow: 1, padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.3rem' }}>{exp.role}</h3>
                    <h4 style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{exp.company}</h4>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.period}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.location}</div>
                  </div>
                </div>
                
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} style={{ lineHeight: 1.6 }}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
