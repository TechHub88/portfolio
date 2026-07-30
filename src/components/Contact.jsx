import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, User, Send, MapPin, CheckCircle2, Copy, MessageSquare, Code2, Sparkles, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focusedInput, setFocusedInput] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nisharoy3363@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '6.5rem 0' }}>
      
      {/* Dynamic Ambient Background Light Spheres */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.16) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.16) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Section Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="badge" style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.35)', color: '#34d399' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 12px #10b981' }} />
            Open for New Roles, Backend Projects & Collaborations
          </div>
          <h2 className="section-title">
            Let's Build Scalable Systems <span className="text-gradient">Together</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Have a backend architecture challenge, an API integration project, or a technical opening? Let's get in touch!
          </p>
        </motion.div>

        {/* 2-Column Modern Layout: Sliding Form + Sliding Cards */}
        <div className="grid grid-cols-2" style={{ gap: '3rem', alignItems: 'start' }}>
          
          {/* LEFT: Modern Interactive Contact Form with Spring Slide-In */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="card"
            style={{ 
              padding: '2.5rem', 
              background: 'rgba(11, 13, 20, 0.92)', 
              borderColor: 'rgba(59, 130, 246, 0.35)',
              boxShadow: '0 20px 60px -15px rgba(59, 130, 246, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.7rem', borderRadius: '14px', background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800 }}>Send Direct Message</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={13} color="var(--accent-emerald)" /> Fast response guaranteed within 24 hours
                </p>
              </div>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                style={{
                  padding: '3rem 1.5rem',
                  textAlign: 'center',
                  background: 'rgba(16, 185, 129, 0.08)',
                  borderRadius: '20px',
                  border: '1px solid rgba(16, 185, 129, 0.35)'
                }}
              >
                <div style={{ padding: '1.2rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%', display: 'inline-flex', color: '#34d399', marginBottom: '1.2rem', boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}>
                  <CheckCircle2 size={42} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Thank you for reaching out! Sayani will respond to your email shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                <div className="grid grid-cols-2" style={{ gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.83rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput('')}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.1rem',
                        background: 'rgba(255, 255, 255, 0.035)',
                        border: focusedInput === 'name' ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                        boxShadow: focusedInput === 'name' ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'var(--transition)'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.83rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Your Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. rahuls@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput('')}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.1rem',
                        background: 'rgba(255, 255, 255, 0.035)',
                        border: focusedInput === 'email' ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                        boxShadow: focusedInput === 'email' ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'var(--transition)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.83rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Subject</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Backend Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    onFocus={() => setFocusedInput('subject')}
                    onBlur={() => setFocusedInput('')}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.035)',
                      border: focusedInput === 'subject' ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                      boxShadow: focusedInput === 'subject' ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'var(--transition)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.83rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600 }}>Your Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Tell me about your project or job opening..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput('')}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'rgba(255, 255, 255, 0.035)',
                      border: focusedInput === 'message' ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                      boxShadow: focusedInput === 'message' ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'none',
                      transition: 'var(--transition)'
                    }}
                  />
                </div>

                {errorMessage && (
                  <div style={{ padding: '0.8rem 1rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '12px', color: '#f87171', fontSize: '0.88rem' }}>
                    {errorMessage}
                  </div>
                )}

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn btn-accent" 
                  style={{ marginTop: '0.5rem', width: '100%', padding: '0.95rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  <Send size={18} /> {isSubmitting ? 'Sending Message...' : 'Send Message Now'}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: Staggered Sliding Direct Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
          >
            {/* Email Card with Copy Badge */}
            <motion.div whileHover={{ y: -4 }} className="card" style={{ padding: '1.8rem', background: 'rgba(11, 13, 20, 0.92)', borderColor: 'rgba(59, 130, 246, 0.35)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.85rem', background: 'rgba(59, 130, 246, 0.15)', borderRadius: '16px', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email Address</div>
                    <a href="mailto:nisharoy3363@gmail.com" style={{ fontSize: '1.02rem', color: '#fff', fontWeight: 700 }}>
                      nisharoy3363@gmail.com
                    </a>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="btn-outline" 
                  style={{ padding: '0.55rem 1rem', fontSize: '0.8rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.45rem', borderColor: copied ? '#10b981' : 'var(--border-color)' }}
                >
                  {copied ? <CheckCircle2 size={15} color="#10b981" /> : <Copy size={15} />}
                  {copied ? 'Copied!' : 'Copy Email'}
                </motion.button>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.a whileHover={{ y: -4 }} href="tel:+919749555376" className="card" style={{ padding: '1.8rem', background: 'rgba(11, 13, 20, 0.92)', borderColor: 'rgba(16, 185, 129, 0.35)', textDecoration: 'none', display: 'block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.85rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '16px', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                  <div style={{ fontSize: '1.02rem', color: '#fff', fontWeight: 700 }}>+91 9749555376</div>
                </div>
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a whileHover={{ y: -4 }} href="https://github.com/TechHub88/" target="_blank" rel="noopener noreferrer" className="card" style={{ padding: '1.8rem', background: 'rgba(11, 13, 20, 0.92)', borderColor: 'rgba(139, 92, 246, 0.35)', textDecoration: 'none', display: 'block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.85rem', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '16px', color: '#a78bfa', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                  <Code2 size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>GitHub Developer Profile</div>
                  <div style={{ fontSize: '1.02rem', color: '#fff', fontWeight: 700 }}>github.com/TechHub88</div>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a whileHover={{ y: -4 }} href="https://www.linkedin.com/in/sayani-roy-36a167197/" target="_blank" rel="noopener noreferrer" className="card" style={{ padding: '1.8rem', background: 'rgba(11, 13, 20, 0.92)', borderColor: 'rgba(0, 119, 181, 0.35)', textDecoration: 'none', display: 'block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.85rem', background: 'rgba(0, 119, 181, 0.15)', borderRadius: '16px', color: '#0077b5', border: '1px solid rgba(0, 119, 181, 0.3)' }}>
                  <User size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>LinkedIn Professional Network</div>
                  <div style={{ fontSize: '1.02rem', color: '#fff', fontWeight: 700 }}>Sayani Roy (Backend Engineer)</div>
                </div>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div whileHover={{ y: -4 }} className="card" style={{ padding: '1.5rem 1.8rem', background: 'rgba(11, 13, 20, 0.92)', borderColor: 'var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(244, 63, 94, 0.12)', borderRadius: '14px', color: '#fb7185', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Location & Relocation</div>
                  <div style={{ fontSize: '0.94rem', color: '#fff', fontWeight: 600 }}>Kolkata, West Bengal, India</div>
                  <div style={{ fontSize: '0.76rem', color: '#34d399', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Globe size={13} /> Open to Hybrid, Remote & Relocation
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
