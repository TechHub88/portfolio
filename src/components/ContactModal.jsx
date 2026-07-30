import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck, Mail, User } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || '7312caf1-4da8-422a-9583-45be5ff3c646';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: `${formData.name} via Portfolio Drawer`
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Message send nahi ho paya. Kripya punah prayas karein.');
      }
    } catch (err) {
      setErrorMessage('Network error. Kripya connection check karein.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Subtle Transparent Click-Out Zone (No Dark Blur Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'transparent',
              zIndex: 99998
            }}
          />

          {/* Sleek Modern Right-Side Slide-Over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '440px',
              height: '100vh',
              background: 'rgba(12, 15, 25, 0.98)',
              borderLeft: '1px solid rgba(245, 158, 11, 0.4)',
              boxShadow: '-15px 0 50px rgba(0, 0, 0, 0.85), -5px 0 25px rgba(245, 158, 11, 0.2)',
              padding: '2.2rem 1.8rem',
              zIndex: 99999,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Drawer Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem', paddingBottom: '1.2rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 800 }}>Send Direct Message</h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Fast response guaranteed within 24h</div>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close Contact Drawer"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#fff',
                  padding: '0.5rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', my: 'auto' }}>
                <div style={{ padding: '1.2rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'inline-flex', color: '#34d399', marginBottom: '1.2rem' }}>
                  <CheckCircle2 size={42} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>Thank you for reaching out, Sayani will review your inquiry and get back to you shortly.</p>
                <button onClick={onClose} className="btn btn-accent" style={{ padding: '0.75rem 1.6rem', fontSize: '0.92rem', width: '100%' }}>
                  Close Panel
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahuls@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Subject (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Project Consultation / Job Opening"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project requirement or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'none',
                      minHeight: '110px'
                    }}
                  />
                </div>

                {errorMessage && (
                  <div style={{ padding: '0.75rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', color: '#f87171', fontSize: '0.84rem' }}>
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-accent"
                  style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem', fontSize: '0.95rem' }}
                >
                  <Send size={16} /> {isSubmitting ? 'Sending Message...' : 'Send Message Now'}
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
