import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code2, PhoneCall, Mail, MessageCircle } from 'lucide-react';

const FloatingDock = ({ onOpenModal }) => {
  return (
    <div 
      className="floating-dock-container"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.65rem',
        padding: '0.75rem 0.6rem',
        background: 'rgba(15, 18, 28, 0.94)',
        border: '1px solid rgba(245, 158, 11, 0.45)',
        boxShadow: '0 15px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(245, 158, 11, 0.25)',
        borderRadius: '24px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}
    >
      {/* Floating Smart Send Message Button */}
      <motion.button
        whileHover={{ scale: 1.12, x: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenModal}
        title="Send Direct Message"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '42px',
          height: '42px',
          background: 'linear-gradient(135deg, #f59e0b 0%, #38bdf8 100%)',
          border: 'none',
          borderRadius: '50%',
          color: '#090a0f',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
          position: 'relative'
        }}
      >
        <MessageSquare size={20} />
        <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', border: '2px solid #090a0f', boxShadow: '0 0 8px #10b981' }} />
      </motion.button>

      {/* Divider */}
      <div className="dock-divider" style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.15)', margin: '0.2rem 0' }} />

      {/* Floating GitHub Icon */}
      <motion.a 
        whileHover={{ scale: 1.15, x: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/TechHub88/" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="GitHub Profile"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.54 5.5-1.41 5.5-6a4.64 4.64 0 0 0-1.3-3.2 4.22 4.22 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0C6.2 2.7 5.1 3 5.1 3a4.22 4.22 0 0 0-.1 3.2 4.64 4.64 0 0 0-1.3 3.2c0 4.6 2.5 5.4 5.5 6a4.8 4.8 0 0 0-1 3.24v4"></path><path d="M13.2 18c-2.3.8-4.7.7-6.9-1.2"></path></svg>
      </motion.a>

      {/* Floating LinkedIn Icon */}
      <motion.a 
        whileHover={{ scale: 1.15, x: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/sayani-roy-36a167197/" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="LinkedIn Profile"
        style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.14)', border: '1px solid rgba(56, 189, 248, 0.35)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </motion.a>

      {/* Floating WhatsApp Direct Chat */}
      <motion.a 
        whileHover={{ scale: 1.15, x: -3 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/919749555376" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="WhatsApp Direct Chat (+91 9749555376)"
        style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.14)', border: '1px solid rgba(16, 185, 129, 0.35)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <MessageCircle size={18} />
      </motion.a>

      {/* Floating Direct Call */}
      <motion.a 
        whileHover={{ scale: 1.15, x: -3 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+919749555376" 
        title="Call (+91 9749555376)"
        style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.14)', border: '1px solid rgba(245, 158, 11, 0.35)', color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <PhoneCall size={18} />
      </motion.a>

      {/* Floating Email Icon */}
      <motion.a 
        whileHover={{ scale: 1.15, x: -3 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:nisharoy3363@gmail.com" 
        title="Email (nisharoy3363@gmail.com)"
        style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255, 77, 109, 0.14)', border: '1px solid rgba(255, 77, 109, 0.35)', color: '#ff4d6d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Mail size={18} />
      </motion.a>
    </div>
  );
};

export default FloatingDock;
