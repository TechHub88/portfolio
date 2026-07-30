import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, User, Server, Bot, Cpu, Code2, Terminal, ShieldCheck, Database, Zap, Activity } from 'lucide-react';

const techStackPills = [
  { name: 'PHP / Laravel', color: '#f43f5e' },
  { name: 'Node.js / Express', color: '#10b981' },
  { name: 'Python / Data', color: '#3b82f6' },
  { name: 'PostgreSQL / MySQL', color: '#06b6d4' },
  { name: 'Docker / Redis', color: '#8b5cf6' },
  { name: 'OpenAI / Gemini LLMs', color: '#a855f7' },
  { name: 'PowerBI & SQL', color: '#f59e0b' },
  { name: 'REST & Webhooks', color: '#34d399' }
];

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '94vh', display: 'flex', alignItems: 'center', paddingTop: '110px', paddingBottom: '4.5rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Ambient Background Light Spheres */}
      <div style={{
        position: 'absolute',
        top: '8%',
        left: '2%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%)',
        filter: 'blur(90px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '8%',
        right: '2%',
        width: '480px',
        height: '480px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 70%)',
        filter: 'blur(90px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
          
          {/* LEFT: Text & Interactive CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Live Availability Status */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="badge" 
              style={{ marginBottom: '1.5rem', background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.35)', color: '#34d399' }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 12px #10b981' }} />
              Open for Backend Engineer & Data Roles
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(2.7rem, 5.2vw, 4.2rem)', lineHeight: 1.08, marginBottom: '1rem', fontWeight: 800 }}>
              Hi, I'm <span className="text-gradient">Sayani Roy</span>
            </h1>
            
            <h2 style={{ fontSize: 'clamp(1.18rem, 2.2vw, 1.65rem)', color: '#e2e8f0', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              Backend Developer <span style={{ color: 'var(--accent-primary)' }}>•</span> Aspiring Data Engineer
            </h2>
            
            <p style={{ fontSize: '1.03rem', color: 'var(--text-muted)', marginBottom: '2.2rem', maxWidth: '620px', lineHeight: 1.75 }}>
              Passionate Backend Developer with 2+ years of IT industry experience engineering high-throughput server architectures, enterprise API microservices, AI/LLM integrations, and optimized data processing pipelines.
            </p>

            {/* Interactive Tech Pill Cloud */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.4rem' }}>
              {techStackPills.map((pill, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className="tech-pill"
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: pill.color, display: 'inline-block' }} />
                  {pill.name}
                </motion.span>
              ))}
            </div>
            
            {/* Primary CTAs */}
            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-accent">
                View Featured Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            {/* Direct Social & Contact Pills */}
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1.4rem', borderTop: '1px solid var(--border-color)' }}>
              <a 
                href="https://github.com/TechHub88/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline" 
                style={{ padding: '0.55rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <Code2 size={16} color="#8b5cf6" /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sayani-roy-36a167197/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline" 
                style={{ padding: '0.55rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <User size={16} color="#0077b5" /> LinkedIn
              </a>
              <a 
                href="mailto:nisharoy3363@gmail.com" 
                className="btn-outline" 
                style={{ padding: '0.55rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <Mail size={16} color="var(--accent-primary)" /> nisharoy3363@gmail.com
              </a>
              <a 
                href="tel:+919749555376" 
                className="btn-outline" 
                style={{ padding: '0.55rem 1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <Phone size={16} color="var(--accent-emerald)" /> +91 9749555376
              </a>
            </div>

          </motion.div>

          {/* RIGHT: High-Tech Glass Portrait + Live Telemetry Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
          >
            
            {/* Portrait Wrapper */}
            <div className="hero-portrait-wrapper">
              
              {/* FLOATING BADGE 1 (Top-Left) */}
              <div className="floating-badge animate-float-top" style={{ top: '-15px', left: '-25px', padding: '0.55rem 1rem' }}>
                <div style={{ padding: '0.35rem', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '8px', color: '#60a5fa' }}>
                  <Server size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700 }}>2+ Years IT Industry</div>
                </div>
              </div>

              {/* FLOATING BADGE 2 (Top-Right) */}
              <div className="floating-badge animate-float-bottom" style={{ top: '25px', right: '-25px', padding: '0.55rem 1rem' }}>
                <div style={{ padding: '0.35rem', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '8px', color: '#22d3ee' }}>
                  <Bot size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI & LLM Services</div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700 }}>OpenAI & Gemini APIs</div>
                </div>
              </div>

              {/* FLOATING BADGE 3 (Bottom-Right) */}
              <div className="floating-badge animate-float-top" style={{ bottom: '20px', right: '-30px', padding: '0.55rem 1rem' }}>
                <div style={{ padding: '0.35rem', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '8px', color: '#fbbf24' }}>
                  <Database size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Data Architecture</div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 700 }}>SQL & Analytics</div>
                </div>
              </div>

              <div className="hero-portrait-inner">
                <img 
                  src="/sayani-portrait.png" 
                  alt="Sayani Roy - Backend Engineer" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>

            </div>

            {/* Futuristic Live Telemetry Terminal Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="terminal-card" 
              style={{ width: '100%', maxWidth: '390px' }}
            >
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot" style={{ background: '#ef4444' }} />
                  <span className="terminal-dot" style={{ background: '#f59e0b' }} />
                  <span className="terminal-dot" style={{ background: '#10b981' }} />
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', flex: 1, justifyContent: 'center' }}>
                  <Activity size={12} color="#10b981" /> system-telemetry.sys
                </div>
              </div>

              <div className="terminal-body">
                <div style={{ color: '#34d399', display: 'flex', justifyContent: 'space-between' }}>
                  <span>STATUS: ACTIVE_SERVICES</span>
                  <span>99.99% OK</span>
                </div>
                <div style={{ color: '#94a3b8' }}>
                  $ GET /api/v1/microservices --status
                </div>
                <div style={{ color: '#60a5fa' }}>
                  ✓ Fraud AI Microservice: READY (12ms)
                </div>
                <div style={{ color: '#a78bfa' }}>
                  ✓ WhatsApp Webhooks: 150k+ events
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
