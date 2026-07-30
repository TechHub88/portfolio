import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, User, Server, Bot, Cpu, Database, Code2, MessageCircle, PhoneCall, Globe, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '4rem', position: 'relative' }}>
      
      {/* Background Subtle Designer Mesh */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
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
            
            {/* Title with Precise Hand-Drawn Doodle Squiggle Underline */}
            <h1 style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '1rem', fontWeight: 800 }}>
              Hi, I'm{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span className="text-gradient">Sayani Roy</span>
                <svg width="100%" height="10" viewBox="0 0 170 10" fill="none" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-4px', left: 0, pointerEvents: 'none' }}>
                  <path d="M3 8C30 2 80 8 130 3C150 1 162 7 167 3" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <h2 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.65rem)', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              Backend Developer & Aspiring Data Engineer
            </h2>
            
            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', marginBottom: '2.2rem', maxWidth: '600px', lineHeight: 1.7 }}>
              Passionate Backend Developer with 2 years of IT industry experience engineering scalable server architectures, enterprise API configurations, and AI-driven microservices. Transitioning architectures to support high-throughput data solutions.
            </p>
            
            {/* Sleek 1-Line Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.2rem' }}>
              <a href="#projects" className="btn btn-accent" style={{ padding: '0.65rem 1.25rem', fontSize: '0.86rem', whiteSpace: 'nowrap' }}>
                View My Work <ArrowRight size={16} />
              </a>
              <a href="/sayaniroy_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.65rem 1.15rem', fontSize: '0.86rem', borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38bdf8', whiteSpace: 'nowrap' }}>
                Resume PDF ↗
              </a>
              <a href="#contact" className="btn btn-outline" style={{ padding: '0.65rem 1.15rem', fontSize: '0.86rem', whiteSpace: 'nowrap' }}>
                Contact Me
              </a>
            </div>

            {/* Ultra-Classy 1-Line Social & Contact Icons Strip */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1.2rem', borderTop: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: '0.3rem' }}>
                Connect:
              </span>

              {/* GitHub Icon */}
              <motion.a 
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/TechHub88/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="GitHub Profile"
                style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Code2 size={19} color="#fbbf24" />
              </motion.a>

              {/* LinkedIn SVG Icon */}
              <motion.a 
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/sayani-roy-36a167197/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn Profile"
                style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.14)', border: '1px solid rgba(56, 189, 248, 0.4)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>

              {/* WhatsApp Direct Chat Icon */}
              <motion.a 
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919749555376" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="WhatsApp Direct Chat (+91 9749555376)"
                style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.14)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <MessageCircle size={19} color="#34d399" />
              </motion.a>

              {/* Facebook SVG Icon */}
              <motion.a 
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Facebook Profile"
                style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(24, 119, 242, 0.14)', border: '1px solid rgba(24, 119, 242, 0.4)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </motion.a>

              {/* Direct Phone Call Icon */}
              <motion.a 
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919749555376" 
                title="Phone Call (+91 9749555376)"
                style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.14)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <PhoneCall size={19} color="#fbbf24" />
              </motion.a>

              {/* Email Icon */}
              <motion.a 
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:nisharoy3363@gmail.com" 
                title="Email (nisharoy3363@gmail.com)"
                style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(255, 77, 109, 0.14)', border: '1px solid rgba(255, 77, 109, 0.4)', color: '#ff4d6d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Mail size={19} color="#ff4d6d" />
              </motion.a>
            </div>

          </motion.div>

          {/* Right Profile Display with Precise Clean Floating Badges & Doodle Star */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            
            {/* DOODLE STAR: Top-Right Hand-Drawn Sparkle Star */}
            <div style={{ position: 'absolute', top: '-18px', right: '10px', zIndex: 5, pointerEvents: 'none' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5"/>
              </svg>
            </div>

            {/* FLOATING BADGE 1 (Top-Left) */}
            <div className="floating-badge animate-float-top" style={{ top: '-12px', left: '-20px', padding: '0.45rem 0.85rem', fontSize: '0.78rem', backdropFilter: 'blur(16px)', zIndex: 4 }}>
              <div style={{ padding: '0.25rem', background: 'rgba(56, 189, 248, 0.2)', borderRadius: '6px', color: '#38bdf8' }}>
                <Server size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Experience</div>
                <div style={{ fontWeight: 700, color: '#fff' }}>2+ Years IT</div>
              </div>
            </div>

            {/* FLOATING BADGE 2 (Top-Right) */}
            <div className="floating-badge animate-float-bottom" style={{ top: '25px', right: '-20px', padding: '0.45rem 0.85rem', fontSize: '0.78rem', backdropFilter: 'blur(16px)', zIndex: 4 }}>
              <div style={{ padding: '0.25rem', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '6px', color: '#fbbf24' }}>
                <Bot size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>AI & LLMs</div>
                <div style={{ fontWeight: 700, color: '#fff' }}>OpenAI & Gemini</div>
              </div>
            </div>

            {/* FLOATING BADGE 3 (Bottom-Left) */}
            <div className="floating-badge animate-float-bottom" style={{ bottom: '25px', left: '-20px', padding: '0.45rem 0.85rem', fontSize: '0.78rem', backdropFilter: 'blur(16px)', zIndex: 4 }}>
              <div style={{ padding: '0.25rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '6px', color: '#34d399' }}>
                <Cpu size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Architecture</div>
                <div style={{ fontWeight: 700, color: '#fff' }}>Laravel & Node.js</div>
              </div>
            </div>

            {/* FLOATING BADGE 4 (Bottom-Right) */}
            <div className="floating-badge animate-float-top" style={{ bottom: '-12px', right: '-20px', padding: '0.45rem 0.85rem', fontSize: '0.78rem', backdropFilter: 'blur(16px)', zIndex: 4 }}>
              <div style={{ padding: '0.25rem', background: 'rgba(255, 77, 109, 0.2)', borderRadius: '6px', color: '#ff4d6d' }}>
                <Database size={14} />
              </div>
              <div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Data Solutions</div>
                <div style={{ fontWeight: 700, color: '#fff' }}>SQL & Power BI</div>
              </div>
            </div>

            {/* Stylish Profile Frame with 3D Offset Gold Border */}
            <div 
              style={{
                position: 'relative',
                padding: '6px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.45) 0%, rgba(56, 189, 248, 0.35) 100%)',
                boxShadow: '10px 10px 0 0 rgba(245, 158, 11, 0.12), 0 25px 50px rgba(0, 0, 0, 0.75)'
              }}
            >
              <div className="profile-frame" style={{ width: '320px', height: '390px', borderRadius: '20px', overflow: 'hidden' }}>
                <img 
                  src="/profile.jpg" 
                  alt="Sayani Roy - Backend Developer" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
