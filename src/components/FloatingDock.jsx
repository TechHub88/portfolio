import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code2, PhoneCall, Mail, MessageCircle } from 'lucide-react';

const FloatingDock = ({ onOpenModal }) => {
  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.5rem 0.75rem',
        background: 'rgba(15, 18, 28, 0.92)',
        border: '1px solid rgba(245, 158, 11, 0.4)',
        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(245, 158, 11, 0.25)',
        borderRadius: '999px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      {/* Floating GitHub Icon */}
      <motion.a 
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/TechHub88/" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="GitHub Profile"
        style={{ padding: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', color: '#fbbf24', display: 'flex' }}
      >
        <Code2 size={18} />
      </motion.a>

      {/* Floating LinkedIn Icon */}
      <motion.a 
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/sayani-roy-36a167197/" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="LinkedIn Profile"
        style={{ padding: '0.5rem', background: 'rgba(56, 189, 248, 0.12)', borderRadius: '50%', color: '#38bdf8', display: 'flex' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </motion.a>

      {/* Floating WhatsApp Direct Chat */}
      <motion.a 
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/919749555376" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="WhatsApp Chat (+91 9749555376)"
        style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.14)', borderRadius: '50%', color: '#34d399', display: 'flex' }}
      >
        <MessageCircle size={18} />
      </motion.a>

      {/* Floating Direct Call */}
      <motion.a 
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+919749555376" 
        title="Call (+91 9749555376)"
        style={{ padding: '0.5rem', background: 'rgba(245, 158, 11, 0.14)', borderRadius: '50%', color: '#fbbf24', display: 'flex' }}
      >
        <PhoneCall size={18} />
      </motion.a>

      {/* Separator Divider */}
      <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)', margin: '0 0.2rem' }} />

      {/* Floating Smart Send Message Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenModal}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.45rem 0.9rem',
          background: 'linear-gradient(135deg, #f59e0b 0%, #38bdf8 100%)',
          border: 'none',
          borderRadius: '999px',
          color: '#090a0f',
          fontWeight: 800,
          fontSize: '0.82rem',
          cursor: 'pointer',
          boxShadow: '0 0 15px rgba(245, 158, 11, 0.4)'
        }}
      >
        <MessageSquare size={16} /> Quick Message
      </motion.button>
    </div>
  );
};

export default FloatingDock;
