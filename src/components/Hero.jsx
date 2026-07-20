import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2, User, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '4rem' }}>
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
              Available for new opportunities
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Hi, I'm <span className="text-gradient">Sayani Roy</span>
            </h1>
            
            <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--text-muted)', fontWeight: 400, marginBottom: '2rem' }}>
              Backend Developer & Aspiring Data Engineer
            </h2>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px' }}>
              Engineering scalable server architectures, robust applications, and complex third-party API configurations with a passion for modern web technologies.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">
                View Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Let's Talk
              </a>
              <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto', alignItems: 'center' }}>
                <a href="#" className="btn-outline" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex' }}><Code2 size={20} /></a>
                <a href="https://www.linkedin.com/in/sayani-roy-36a167197/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex' }}><User size={20} /></a>
                <a href="mailto:nisharoy3363@gmail.com" className="btn-outline" style={{ padding: '0.8rem', borderRadius: '50%', display: 'flex' }}><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Professional Portrait Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '3/4',
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'var(--surface-light)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.05)'
            }}>
              <img 
                src="/profile.jpg" 
                alt="Sayani Roy - Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="display:flex; flex-direction:column; gap:1rem; align-items:center; color:var(--text-muted); font-size:0.9rem; text-align:center; padding:2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span>Please place <strong>profile.jpg</strong> in public folder</span></div>';
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
