import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border-color)', position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card" 
          style={{ textAlign: 'center', padding: '4.5rem 2rem', maxWidth: '880px', margin: '0 auto', background: 'var(--surface-color)' }}
        >
          <span className="badge" style={{ marginBottom: '1.2rem' }}>Open to Work & Collaborations</span>
          
          <h2 style={{ fontSize: '2.6rem', marginBottom: '1rem', color: '#fff', fontWeight: 800 }}>
            Let's Build Scalable Systems <span className="text-gradient">Together</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', marginBottom: '3.5rem', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            Whether you have a technical opening, an API/Backend challenge, or a data engineering project, I'm always open to discussing new opportunities!
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            
            <a href="mailto:nisharoy3363@gmail.com" className="btn-outline" style={{ padding: '1.8rem 1.2rem', borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(59, 130, 246, 0.12)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Address</div>
                <div style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600 }}>nisharoy3363@gmail.com</div>
              </div>
            </a>
            
            <a href="tel:+919749555376" className="btn-outline" style={{ padding: '1.8rem 1.2rem', borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(16, 185, 129, 0.12)', borderRadius: '50%', color: 'var(--accent-emerald)' }}>
                <Phone size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone Number</div>
                <div style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600 }}>+91 9749555376</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sayani-roy-36a167197/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '1.8rem 1.2rem', borderRadius: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(0, 119, 181, 0.12)', borderRadius: '50%', color: '#0077b5' }}>
                <User size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn Profile</div>
                <div style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600 }}>Sayani Roy</div>
              </div>
            </a>

          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
            <a href="mailto:nisharoy3363@gmail.com" className="btn btn-accent" style={{ padding: '0.9rem 2rem' }}>
              <Send size={18} /> Send Message
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
