import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Code2, Menu, X, User, Mail, Phone, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

const Navbar = () => {
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
          zIndex: 100,
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.35s ease'
        }}
      >
        {/* Sleek High-Tech Executive Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '38px', height: '38px',
            borderRadius: '11px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            color: '#fff',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: '1.05rem',
            boxShadow: '0 0 22px rgba(59, 130, 246, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.25)'
          }}>
            SR
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.15rem', 
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff'
            }}>
              SR <span className="text-gradient">// PORTFOLIO</span>
            </span>
            <span style={{ fontSize: '0.62rem', color: 'var(--accent-emerald)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginTop: '-3px', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
              BACKEND ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link" style={{ fontSize: '0.88rem' }}>
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-accent" style={{ padding: '0.55rem 1.4rem', fontSize: '0.84rem', borderRadius: '10px' }}>
            <Send size={14} /> Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle Triple-Bar Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Mobile Menu"
          style={{
            display: 'none',
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
                    <ChevronRight size={16} color="var(--text-muted)" />
                  </motion.a>
                ))}
              </div>

              {/* Sidebar Footer & Quick Actions */}
              <div style={{ paddingTop: '1.2rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
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
                    <Code2 size={18} />
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
