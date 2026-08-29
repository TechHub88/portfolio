import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, User, Server, Bot, Cpu, Database, Code2, MessageCircle, PhoneCall, Globe, Sparkles } from 'lucide-react';

const TypewriterText = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing character by character
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 2400);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 35 : 65);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, color: '#f59e0b', marginLeft: '3px', fontWeight: 300 }}>|</span>
    </span>
  );
};

const TypewriterParagraph = ({ text, delay = 600 }) => {
  const [subIndex, setSubIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Delay before typing starts
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  // Type character by character
  useEffect(() => {
    if (!started) return;
    if (subIndex < text.length) {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 18);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, started, text]);

  return (
    <p style={{ fontSize: '0.92rem', color: '#f8fafc', marginBottom: '1.8rem', maxWidth: '560px', lineHeight: 1.68, minHeight: '4.2rem' }}>
      {text.substring(0, subIndex)}
      {subIndex < text.length && (
        <span style={{ opacity: blink ? 1 : 0, color: '#f59e0b', marginLeft: '2px', fontWeight: 400 }}>|</span>
      )}
    </p>
  );
};

const Hero = ({ onOpenModal }) => {
  const typewriterRoles = [
    'Backend Developer & Aspiring DevOps Engineer'
  ];

  const paragraphText = "Passionate Backend Developer with 2 years of IT industry experience engineering scalable server architectures, enterprise API configurations, and AI-driven microservices. Transitioning architectures with modern DevOps and CI/CD practices.";

  return (
    <section id="hero" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '100px', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
      
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
            {/* Title with Precise Hand-Drawn Doodle Squiggle Underline */}
            <h1 style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)', lineHeight: 1.12, marginBottom: '0.85rem', fontWeight: 800 }}>
              Hi, I'm{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span className="text-gradient">Sayani Roy</span>
                <svg width="100%" height="8" viewBox="0 0 170 10" fill="none" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-4px', left: 0, pointerEvents: 'none' }}>
                  <path d="M3 8C30 2 80 8 130 3C150 1 162 7 167 3" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            {/* TYPEWRITER TYPING EFFECT SUBTITLE */}
            <h2 style={{ fontSize: 'clamp(1.02rem, 1.8vw, 1.35rem)', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '1.25rem', minHeight: '2.2rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <TypewriterText words={typewriterRoles} />
            </h2>
            
            {/* TYPEWRITER TYPING PARAGRAPH IN PURE WHITE */}
            <TypewriterParagraph text={paragraphText} delay={600} />
            
            {/* Sleek 1-Line Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.2rem' }}>
              <a href="#projects" className="btn btn-accent" style={{ padding: '0.65rem 1.25rem', fontSize: '0.86rem', whiteSpace: 'nowrap' }}>
                View My Work <ArrowRight size={16} />
              </a>
              <a href="/sayaniroy_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.65rem 1.15rem', fontSize: '0.86rem', borderColor: 'rgba(56, 189, 248, 0.4)', color: '#38bdf8', whiteSpace: 'nowrap' }}>
                Resume PDF ↗
              </a>
              <button onClick={onOpenModal} className="btn btn-outline" style={{ padding: '0.65rem 1.15rem', fontSize: '0.86rem', whiteSpace: 'nowrap', cursor: 'pointer' }}>
                Contact Me
              </button>
            </div>

            {/* Ultra-Classy 1-Line Social & Contact Icons Strip */}
            <div className="hero-connect-strip" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1.2rem', borderTop: '1px solid var(--border-color)' }}>
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
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.54 5.5-1.41 5.5-6a4.64 4.64 0 0 0-1.3-3.2 4.22 4.22 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0C6.2 2.7 5.1 3 5.1 3a4.22 4.22 0 0 0-.1 3.2 4.64 4.64 0 0 0-1.3 3.2c0 4.6 2.5 5.4 5.5 6a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M13.2 18c-2.3.8-4.7.7-6.9-1.2"></path></svg>
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
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>DevOps & CI/CD</div>
                <div style={{ fontWeight: 700, color: '#fff' }}>Docker & Pipelines</div>
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
