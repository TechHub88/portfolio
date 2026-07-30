import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, Send, MapPin, CheckCircle2, Copy, MessageSquare, Code2 } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nisharoy3363@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Web3Forms Access Key
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
          from_name: `${formData.name} via Portfolio`
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
      setErrorMessage('Network error. Kripya apna internet connection check karein.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border-color)' }}>
      
      {/* Background Neon Glow Spheres */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Section Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#34d399' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }} />
            Open for New Opportunities & Collaborations
          </div>
          <h2 className="section-title">
            Let's Build Scalable Systems <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Have a backend architecture challenge, an API integration project, or a technical opening? Let's get in touch!
          </p>
        </div>

        {/* 2-Column Modern Layout: Interactive Form + Contact Cards */}
        <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'start' }}>
          
          {/* LEFT: Modern Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card"
            style={{ padding: '2.5rem', background: 'rgba(11, 13, 20, 0.9)', borderColor: 'rgba(59, 130, 246, 0.25)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.8rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <MessageSquare size={22} />
              </div>
              <div>
                <h3 style={{ color: '#fff', fontSize: '1.35rem', fontWeight: 700 }}>Send Direct Message</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fast response guaranteed within 24 hours</p>
              </div>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  background: 'rgba(16, 185, 129, 0.08)',
                  borderRadius: '16px',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'inline-flex', color: '#34d399', marginBottom: '1rem' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>Message Sent Successfully!</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Thank you for reaching out, Sayani will respond to your email shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
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
                        padding: '0.8rem 1rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'var(--transition)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
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
                        padding: '0.8rem 1rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'var(--transition)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Subject</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Backend Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'var(--transition)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Your Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Tell me about your project or job opening..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'none',
                      transition: 'var(--transition)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                  />
                </div>

                {errorMessage && (
                  <div style={{ padding: '0.8rem 1rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', color: '#f87171', fontSize: '0.85rem' }}>
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn btn-accent" 
                  style={{ marginTop: '0.5rem', width: '100%', padding: '0.9rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  <Send size={18} /> {isSubmitting ? 'Sending Message...' : 'Send Message Now'}
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: Direct Contact Cards & Copy Options */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            {/* Email Card with Copy Badge */}
            <div className="card" style={{ padding: '1.8rem', background: 'rgba(11, 13, 20, 0.9)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(59, 130, 246, 0.15)', borderRadius: '14px', color: '#60a5fa' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email Address</div>
                    <a href="mailto:nisharoy3363@gmail.com" style={{ fontSize: '1rem', color: '#fff', fontWeight: 700 }}>
                      nisharoy3363@gmail.com
                    </a>
                  </div>
                </div>

                <button 
                  onClick={handleCopyEmail}
                  className="btn-outline" 
                  style={{ padding: '0.5rem 0.9rem', fontSize: '0.78rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  {copied ? <CheckCircle2 size={14} color="#10b981" /> : <Copy size={14} />}
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <a href="tel:+919749555376" className="card" style={{ padding: '1.8rem', background: 'rgba(11, 13, 20, 0.9)', borderColor: 'rgba(16, 185, 129, 0.3)', textDecoration: 'none', display: 'block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '14px', color: '#34d399' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                  <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 700 }}>+91 9749555376</div>
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a href="https://github.com/TechHub88/" target="_blank" rel="noopener noreferrer" className="card" style={{ padding: '1.8rem', background: 'rgba(11, 13, 20, 0.9)', borderColor: 'rgba(139, 92, 246, 0.3)', textDecoration: 'none', display: 'block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '14px', color: '#a78bfa' }}>
                  <Code2 size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>GitHub Developer Profile</div>
                  <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 700 }}>github.com/TechHub88</div>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/sayani-roy-36a167197/" target="_blank" rel="noopener noreferrer" className="card" style={{ padding: '1.8rem', background: 'rgba(11, 13, 20, 0.9)', borderColor: 'rgba(0, 119, 181, 0.3)', textDecoration: 'none', display: 'block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(0, 119, 181, 0.15)', borderRadius: '14px', color: '#0077b5' }}>
                  <User size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>LinkedIn Professional Network</div>
                  <div style={{ fontSize: '1rem', color: '#fff', fontWeight: 700 }}>Sayani Roy (Backend Engineer)</div>
                </div>
              </div>
            </a>

            {/* Location & Relocation Card */}
            <div className="card" style={{ padding: '1.5rem 1.8rem', background: 'rgba(11, 13, 20, 0.9)', borderColor: 'var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.7rem', background: 'rgba(244, 63, 94, 0.12)', borderRadius: '12px', color: '#fb7185' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Location Availability</div>
                  <div style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600 }}>Kolkata, West Bengal, India</div>
                  <div style={{ fontSize: '0.75rem', color: '#34d399', marginTop: '0.2rem' }}>Open to Hybrid, Remote & Relocation</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
