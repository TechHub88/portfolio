import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Code2, Menu, X, User, Mail, Phone, ChevronRight, Sparkles } from 'lucide-react';

const Navbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile sidebar drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'About', href: '#about', badge: '01' },
    { name: 'Skills', href: '#skills', badge: '02' },
    { name: 'Experience', href: '#experience', badge: '03' },
    { name: 'Projects', href: '#projects', badge: '04' },
    { name: 'Education', href: '#education', badge: '05' },
    { name: 'Resume', href: '#resume', badge: '06' },
    { name: 'Contact', href: '#contact', badge: '07' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          padding: scrolled ? '0.8rem 1.5rem' : '1.2rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(3, 4, 8, 0.92)' : 'rgba(3, 4, 8, 0.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          zIndex: 1000,
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.35s ease'
        }}
      >
        {/* Ultra-Classy Professional Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <div style={{
            width: '40px', height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            color: '#fff',
            boxShadow: '0 0 24px rgba(59, 130, 246, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.28)'
          }}>
            <Code2 size={22} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.22rem', 
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#ffffff'
            }}>
              SAYANI <span className="text-gradient">ROY</span>
            </span>
            <span className="brand-subtitle" style={{ fontSize: '0.62rem', color: 'var(--accent-cyan)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, marginTop: '-2px' }}>
              Backend Developer & Aspiring DevOps Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Compact Right Alignment */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginLeft: 'auto' }} className="desktop-nav">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="nav-link" 
              style={{ fontSize: '0.85rem', padding: '0.4rem 0.6rem' }}
            >
              {item.name} {item.isExternal && <span style={{ fontSize: '0.72rem', opacity: 0.85 }}>↗</span>}
            </a>
          ))}
          <button onClick={onOpenModal} className="btn btn-accent" style={{ padding: '0.55rem 1.3rem', fontSize: '0.84rem', borderRadius: '10px', cursor: 'pointer', marginLeft: '0.4rem' }}>
            <Send size={14} /> Contact Me
          </button>
        </div>

        {/* Mobile Menu Toggle Triple-Bar Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Mobile Menu"
          style={{
            display: 'none',
            marginLeft: 'auto',
            background: 'rgba(59, 130, 246, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: '#60a5fa',
            padding: '0.6rem 0.8rem',
            borderRadius: '12px',
            cursor: 'pointer',
            alignItems: 'center',
            gap: '0.4rem',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)'
          }}
        >
          <Menu size={22} />
        </button>
      </motion.nav>

      {/* Advanced Right Slide-In Navigation Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dark Glass Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(3, 4, 8, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                zIndex: 1000
              }}
            />

            {/* Slide-In Right Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              style={{
                position: 'fixed',
                top: 0, right: 0, bottom: 0,
                width: '85vw',
                maxWidth: '340px',
                background: 'rgba(11, 13, 20, 0.98)',
                borderLeft: '1px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '-20px 0 50px rgba(0, 0, 0, 0.8)',
                zIndex: 1001,
                display: 'flex',
                flexDirection: 'column',
                padding: '1.8rem 1.5rem',
                backdropFilter: 'blur(30px)'
              }}
            >
              {/* Sidebar Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Sparkles size={18} color="var(--accent-cyan)" />
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Navigation</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    padding: '0.5rem',
                    borderRadius: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Links Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                {navItems.map((item, idx) => (
                  <motion.a 
                    key={item.name} 
                    href={item.href} 
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justify: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 800 }}>{item.badge}</span>
                      <span>{item.name}</span>
                    </div>
                    {item.isExternal ? (
                      <span style={{ fontSize: '0.85rem', color: '#38bdf8' }}>↗</span>
                    ) : (
                      <ChevronRight size={16} color="var(--text-muted)" />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Sidebar Footer & Quick Actions */}
              <div style={{ paddingTop: '1.2rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <a 
                  href="/sayaniroy_resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline" 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem', borderRadius: '12px', borderColor: 'rgba(56, 189, 248, 0.45)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <FileText size={16} /> View Resume PDF ↗
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-accent" 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem', borderRadius: '12px' }}
                >
                  <Send size={16} /> Contact Me Now
                </a>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginTop: '0.4rem' }}>
                  <a href="https://github.com/TechHub88/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: '#fff' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.54 5.5-1.41 5.5-6a4.64 4.64 0 0 0-1.3-3.2 4.22 4.22 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0C6.2 2.7 5.1 3 5.1 3a4.22 4.22 0 0 0-.1 3.2 4.64 4.64 0 0 0-1.3 3.2c0 4.6 2.5 5.4 5.5 6a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M13.2 18c-2.3.8-4.7.7-6.9-1.2"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/sayani-roy-36a167197/" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: '#0077b5' }}>
                    <User size={18} />
                  </a>
                  <a href="mailto:nisharoy3363@gmail.com" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--accent-primary)' }}>
                    <Mail size={18} />
                  </a>
                  <a href="tel:+919749555376" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--accent-emerald)' }}>
                    <Phone size={18} />
                  </a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
