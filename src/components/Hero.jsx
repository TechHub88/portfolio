import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, User, Server, Bot, Cpu, Database, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '4rem' }}>
      
      {/* Dynamic Background Glow Spheres */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, transparent 70%)',
        filter: 'blur(70px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '380px',
        height: '380px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.16) 0%, transparent 70%)',
        filter: 'blur(70px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
          
          {/* Left Text & CTAs */}
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
              style={{ marginBottom: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }} />
              Available for New Roles & Projects
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem', fontWeight: 800 }}>
              Hi, I'm <span className="text-gradient">Sayani Roy</span>
            </h1>
            
            <h2 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.65rem)', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              Backend Developer & Aspiring Data Engineer
            </h2>
            
            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', marginBottom: '2.2rem', maxWidth: '600px', lineHeight: 1.7 }}>
              Passionate Backend Developer with 2 years of IT industry experience engineering scalable server architectures, enterprise API configurations, and AI-driven microservices. Transitioning architectures to support high-throughput data solutions.
            </p>
            
            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.4rem' }}>
              <a href="#projects" className="btn btn-accent">
                View Featured Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            {/* Direct Contact Links */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1.2rem', borderTop: '1px solid var(--border-color)' }}>
              <a 
                href="https://github.com/TechHub88/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline" 
                style={{ padding: '0.55rem 1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <Code2 size={16} color="#8b5cf6" /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sayani-roy-36a167197/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline" 
                style={{ padding: '0.55rem 1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <User size={16} color="#0077b5" /> LinkedIn
              </a>
              <a 
                href="mailto:nisharoy3363@gmail.com" 
                className="btn-outline" 
                style={{ padding: '0.55rem 1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <Mail size={16} color="var(--accent-primary)" /> nisharoy3363@gmail.com
              </a>
              <a 
                href="tel:+919749555376" 
                className="btn-outline" 
                style={{ padding: '0.55rem 1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
              >
                <Phone size={16} color="var(--accent-emerald)" /> +91 9749555376
              </a>
            </div>

          </motion.div>

          {/* Right Compact Profile Display with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            
            {/* FLOATING BADGE 1 (Top-Left) */}
            <div className="floating-badge animate-float-top" style={{ top: '-10px', left: '-15px', padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}>
              <div style={{ padding: '0.25rem', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '6px', color: '#60a5fa' }}>
                <Server size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Experience</div>
                <div style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>2+ Years IT</div>
              </div>
            </div>

            {/* FLOATING BADGE 2 (Top-Right) */}
            <div className="floating-badge animate-float-bottom" style={{ top: '20px', right: '-15px', padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}>
              <div style={{ padding: '0.25rem', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '6px', color: '#22d3ee' }}>
                <Bot size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>AI & LLMs</div>
                <div style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>OpenAI & Gemini</div>
              </div>
            </div>

            {/* FLOATING BADGE 3 (Bottom-Left) */}
            <div className="floating-badge animate-float-bottom" style={{ bottom: '30px', left: '-20px', padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}>
              <div style={{ padding: '0.25rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '6px', color: '#34d399' }}>
                <Cpu size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Architecture</div>
                <div style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>Laravel & Node.js</div>
              </div>
            </div>

            {/* FLOATING BADGE 4 (Bottom-Right) */}
            <div className="floating-badge animate-float-top" style={{ bottom: '-10px', right: '-10px', padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}>
              <div style={{ padding: '0.25rem', background: 'rgba(244, 63, 94, 0.2)', borderRadius: '6px', color: '#fb7185' }}>
                <Database size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Data Solutions</div>
                <div style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 600 }}>SQL & Power BI</div>
              </div>
            </div>

            {/* Compact Portrait Frame (Max-Width 280px) */}
            <div className="hero-portrait-wrapper" style={{ maxWidth: '285px', borderRadius: '22px' }}>
              <div className="hero-portrait-inner" style={{ borderRadius: '20px' }}>
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
                    e.target.parentElement.innerHTML = `
                      <div style="display:flex; flex-direction:column; gap:1rem; align-items:center; justify-content:center; height:100%; color:var(--text-muted); font-size:0.85rem; text-align:center; padding:1.5rem; background:var(--surface-color);">
                        <div style="padding:1.2rem; background:rgba(59, 130, 246, 0.12); borderRadius:50%; color:var(--accent-primary);">
                          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <div style="font-weight:700; color:#fff; font-size:1.15rem;">Sayani Roy</div>
                        <span style="color:var(--accent-primary); font-weight:600; font-size:0.8rem;">Backend Developer</span>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
