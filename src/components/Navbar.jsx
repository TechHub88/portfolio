import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText, Send } from 'lucide-react';

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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(5, 5, 8, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        zIndex: 100,
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
        <div style={{
          width: '38px', height: '38px',
          borderRadius: '10px',
          background: 'var(--gradient-accent)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          fontWeight: 'bold', fontSize: '1.2rem', color: '#fff',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
        }}>
          SR
        </div>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '1.4rem', color: '#fff' }}>
          Sayani<span className="text-gradient">Roy</span>
        </span>
      </a>

      {/* Desktop Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="nav-link">
            {item.name}
          </a>
        ))}
        <a href="#contact" className="btn btn-accent" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
          <Send size={15} /> Contact Me
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
