import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Code2 } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        padding: scrolled ? '0.9rem 2.5rem' : '1.3rem 2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(3, 4, 8, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
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
    </motion.nav>
  );
};

export default Navbar;
