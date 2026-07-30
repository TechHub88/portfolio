import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Code2, Menu, X } from 'lucide-react';

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

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
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
          padding: scrolled ? '0.8rem 2rem' : '1.2rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(3, 4, 8, 0.92)' : 'rgba(3, 4, 8, 0.5)',
          backdropFilter: 'blur(20px)',
          zIndex: 100,
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          transition: 'all 0.35s ease'
        }}
      >
        {/* Stylish Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            color: '#fff',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Code2 size={19} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#ffffff'
            }}>
              SAYANI <span className="text-gradient">ROY</span>
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginTop: '-3px' }}>
              Backend Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link" style={{ fontSize: '0.88rem' }}>
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-accent" style={{ padding: '0.5rem 1.3rem', fontSize: '0.82rem', borderRadius: '10px' }}>
            <Send size={14} /> Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-color)',
            color: '#fff',
            padding: '0.5rem',
            borderRadius: '10px',
            cursor: 'pointer'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              background: 'rgba(11, 13, 20, 0.98)',
              backdropFilter: 'blur(25px)',
              borderBottom: '1px solid var(--border-color)',
              padding: '1.5rem 2rem',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            className="mobile-menu-drawer"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.05rem', padding: '0.6rem 0' }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-accent" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ padding: '0.8rem 1.5rem', fontSize: '0.95rem', borderRadius: '12px', marginTop: '0.5rem' }}
            >
              <Send size={16} /> Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
