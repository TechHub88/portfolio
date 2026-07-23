import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShieldCheck, Server, Bot } from 'lucide-react';

const coreStrengths = [
  {
    icon: Server,
    title: 'System Architecture Troubleshooting',
    description: 'Diagnosing complex server setups, end-to-end data processing servers, and log troubleshooting setups.'
  },
  {
    icon: Database,
    title: 'Database Schema & Query Optimization',
    description: 'Optimizing enterprise MySQL database workflows, refactoring complex relational queries, and payload execution layers.'
  },
  {
    icon: Bot,
    title: 'AI & LLM Integration Architectures',
    description: 'Building intelligent chatbot routing matrices and integrating OpenAI (ChatGPT), Google Gemini, and OpenRouter APIs.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Webhook Automation',
    description: 'Configuring strict security policies, OAuth 2.0 authentication metrics, and real-time transactional webhooks.'
  }
];

const About = () => {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Glow Background */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
        filter: 'blur(70px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Engineering scalable backend microservices, robust API endpoints, and intelligent data-driven solutions.
        </p>

        {/* Profile Narrative & 4-Card Metrics Grid */}
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3.5rem', marginBottom: '5rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.2rem', lineHeight: 1.3 }}>
              Transforming Complex Backend Challenges into <span className="text-gradient">Scalable Solutions</span>
            </h3>

            <p style={{ fontSize: '1.05rem', marginBottom: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Passionate Backend Developer with <strong>2 years of IT industry experience</strong> engineering scalable server architectures, robust web applications, and complex third-party API configurations.
            </p>
            
            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Expert at optimizing enterprise database workflows, designing secure webhooks, implementing advanced AI-driven features (LLMs, OCR, Fraud Detection), and transitioning architectures to support modern data engineering solutions.
            </p>
          </motion.div>

          {/* 4 Metrics Cards Grid (Matching Screenshot 2) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}
          >
            <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
              <h3 style={{ fontSize: '3.2rem', color: '#fff', marginBottom: '0.2rem', lineHeight: 1, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>2+</h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Years IT Experience</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>WebMantra & Octagen Infotech</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '3.2rem', color: '#fff', marginBottom: '0.2rem', lineHeight: 1, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>3</h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Core Projects</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Enterprise E-Commerce Platforms</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.9rem', color: '#fff', marginBottom: '0.6rem', lineHeight: 1, fontWeight: 800, marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>AI & OCR</h3>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Integrations</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>OpenAI, Gemini, OpenRouter</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.9rem', color: '#fff', marginBottom: '0.6rem', lineHeight: 1, fontWeight: 800, marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>SQL & BI</h3>
              <p style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Data Engineering</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Tableau, Power BI, MySQL</p>
            </motion.div>
          </motion.div>

        </div>

        {/* Core Strengths Section */}
        <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '2rem', textAlign: 'center', fontWeight: 800 }}>
          Core Strengths & Specializations
        </h3>

        <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
          {coreStrengths.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="animated-border-card"
              >
                <div style={{ padding: '2rem', height: '100%' }}>
                  <div style={{
                    width: '50px', height: '50px',
                    borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.12)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    marginBottom: '1.2rem',
                    color: 'var(--accent-primary)'
                  }}>
                    <IconComponent size={26} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.6rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
