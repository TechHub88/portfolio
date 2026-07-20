import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ borderTop: '1px solid var(--surface-light)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card" 
          style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Let's Build Something <span className="text-gradient">Together</span></h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="mailto:nisharoy3363@gmail.com" className="btn btn-outline" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1rem', width: '200px' }}>
              <Mail size={32} color="var(--accent-primary)" />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</div>
                <div style={{ fontSize: '0.9rem', color: '#fff' }}>nisharoy3363@gmail.com</div>
              </div>
            </a>
            
            <a href="tel:+919749555376" className="btn btn-outline" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1rem', width: '200px' }}>
              <Phone size={32} color="var(--accent-secondary)" />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone</div>
                <div style={{ fontSize: '0.9rem', color: '#fff' }}>+91 9749555376</div>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/sayani-roy-36a167197/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1rem', width: '200px' }}>
              <User size={32} color="#0077b5" />
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                <div style={{ fontSize: '0.9rem', color: '#fff' }}>Sayani Roy</div>
              </div>
            </a>
          </div>
          
          <div style={{ marginTop: '4rem' }}>
            <a href="/sayaniroy_resume.pdf" download="Sayani_Roy_Resume.pdf" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Download Full Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
