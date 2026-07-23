import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Bot, Network, CreditCard, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Tools',
    icon: Code2,
    color: '#3b82f6',
    skills: [
      { name: 'PHP', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'Node.js', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 90 },
      { name: 'GitHub & GitLab', level: 88 }
    ]
  },
  {
    title: 'Frameworks',
    icon: Layers,
    color: '#8b5cf6',
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'Django', level: 82 }
    ]
  },
  {
    title: 'AI & LLM Integrations',
    icon: Bot,
    color: '#06b6d4',
    skills: [
      { name: 'OpenAI API (ChatGPT, GPT Models)', level: 92 },
      { name: 'Google Gemini API', level: 90 },
      { name: 'OpenRouter AI Matrix', level: 88 },
      { name: 'Fraud Image Detection & OCR', level: 85 }
    ]
  },
  {
    title: 'API Integrations & Webhooks',
    icon: Network,
    color: '#10b981',
    skills: [
      { name: 'RESTful APIs', level: 95 },
      { name: 'WhatsApp Business API', level: 88 },
      { name: 'Multi-Point Automated Webhooks', level: 90 },
      { name: 'Real-Time Communication Loops', level: 85 }
    ]
  },
  {
    title: 'Gateways & Services',
    icon: CreditCard,
    color: '#f59e0b',
    skills: [
      { name: 'Razorpay Payment Gateway', level: 92 },
      { name: 'Twilio (SMS/OTP Verification)', level: 88 }
    ]
  },
  {
    title: 'Data Engineering & BI',
    icon: BarChart3,
    color: '#ec4899',
    skills: [
      { name: 'Tableau Data Visualization', level: 85 },
      { name: 'Power BI Analytics', level: 82 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          Specialized tech stack across Backend Engineering, AI/LLM Integration, API Security, and Data Analytics.
        </p>
        
        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="card"
                style={{ padding: '2rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.8rem' }}>
                  <div style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    background: `rgba(${parseInt(category.color.slice(1,3),16)}, ${parseInt(category.color.slice(3,5),16)}, ${parseInt(category.color.slice(5,7),16)}, 0.12)`,
                    color: category.color
                  }}>
                    <IconComponent size={22} />
                  </div>
                  <h4 style={{ color: '#fff', fontSize: '1.25rem' }}>{category.title}</h4>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500 }}>{skill.name}</span>
                        <span style={{ color: category.color, fontSize: '0.82rem', fontWeight: 600 }}>{skill.level}%</span>
                      </div>
                      <div className="progress-bg">
                        <motion.div 
                          className="progress-fill"
                          style={{ background: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.1 + (sIdx * 0.08), ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
