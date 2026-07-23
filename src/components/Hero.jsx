import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, User, Globe, Terminal, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '4rem' }}>
      
      {/* Background Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="badge" 
              style={{ marginBottom: '1.5rem' }}
            >
              <Sparkles size={14} color="#60a5fa" /> Available for New Opportunities & Projects
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', lineHeight: 1.1, marginBottom: '1.2rem', fontWeight: 800 }}>
              Hi, I'm <span className="text-gradient">Sayani Roy</span>
            </h1>
            
            <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Terminal size={22} color="var(--accent-primary)" /> Backend Developer & Aspiring Data Engineer
            </h2>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '620px', lineHeight: 1.7 }}>
              Passionate Backend Developer with 2 years of IT industry experience engineering scalable server architectures, enterprise API configurations, and AI-driven microservices. Transitioning architectures to support high-throughput data solutions.
            </p>
            
            {/* Quick Contact & Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-accent">
                View Featured Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            {/* Social Icons & Direct Contact Links */}
            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <a 
                href="https://www.linkedin.com/in/sayani-roy-36a167197/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline" 
                style={{ padding: '0.6rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
              >
                <User size={18} color="#0077b5" /> LinkedIn Profile
              </a>
              <a 
                href="mailto:nisharoy3363@gmail.com" 
                className="btn-outline" 
                style={{ padding: '0.6rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
              >
                <Mail size={18} color="var(--accent-primary)" /> nisharoy3363@gmail.com
              </a>
              <a 
                href="tel:+919749555376" 
                className="btn-outline" 
                style={{ padding: '0.6rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem' }}
              >
                <Phone size={18} color="var(--accent-emerald)" /> +91 9749555376
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              maxWidth: '400px',
              background: 'var(--gradient-accent)',
              filter: 'blur(80px)',
              opacity: 0.2,
              borderRadius: '50%'
            }} />

            {/* Profile Frame with Glassmorphism */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '3/4',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'var(--surface-color)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/profile.jpg" 
                alt="Sayani Roy - Backend Developer" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="display:flex; flex-direction:column; gap:1rem; align-items:center; color:var(--text-muted); font-size:0.9rem; text-align:center; padding:2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span style="font-weight:600; color:#fff;">Sayani Roy</span><span>Backend Developer & Aspiring Data Engineer</span></div>';
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
