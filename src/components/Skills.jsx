import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages & Tools',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 90 },
      { name: 'Git', level: 85 }
    ]
  },
  {
    title: 'Frameworks & DB',
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'Django', level: 80 },
      { name: 'MVC Architecture', level: 90 },
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 }
    ]
  },
  {
    title: 'Auth & Security',
    skills: [
      { name: 'JWT & JSON', level: 90 },
      { name: 'OAuth 2.0', level: 85 },
      { name: 'Google/GitHub Auth', level: 85 }
    ]
  },
  {
    title: 'AI & Integrations',
    skills: [
      { name: 'OpenAI API', level: 90 },
      { name: 'Google Gemini API', level: 85 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'Webhooks', level: 90 },
      { name: 'WhatsApp Business', level: 85 }
    ]
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // A simple way to trigger the progress bar animation after mount
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <section id="skills" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, type: 'spring' }}
              className="animated-border-card"
            >
              <div style={{ padding: '2.5rem', background: 'var(--surface-color)', height: '100%', borderRadius: '10px' }}>
                <h4 style={{ marginBottom: '2rem', color: '#fff', fontSize: '1.4rem' }}>{category.title}</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500 }}>{skill.name}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{skill.level}%</span>
                      </div>
                      <div className="progress-bg">
                        <motion.div 
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    </div>
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

export default Skills;
