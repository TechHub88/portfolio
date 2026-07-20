import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              Passionate Backend Developer with 2 years of IT industry experience engineering scalable server architectures, robust applications, and complex third-party API configurations.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              Expert at optimizing enterprise database workflows, designing secure web hooks, implementing advanced AI-driven features (LLMs, OCR, Fraud Detection), and transitioning architectures to support data solutions.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2.5rem' }}>
              <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', display: 'inline-block', marginBottom: '1rem' }}>
                  <Database size={28} color="var(--accent-primary)" />
                </div>
                <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>Database Optimization</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Schema design & complex query refactoring</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', display: 'inline-block', marginBottom: '1rem' }}>
                  <Zap size={28} color="var(--accent-secondary)" />
                </div>
                <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>System Architecture</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Troubleshooting & high-scale server design</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
          >
            {/* Advanced Background Glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px', height: '400px',
              background: 'var(--gradient-accent)',
              filter: 'blur(120px)',
              opacity: 0.1,
              borderRadius: '50%',
              zIndex: 0
            }}></div>
            
            {/* Professional Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', width: '100%', zIndex: 1 }}>
              <motion.div whileHover={{ y: -5, scale: 1.02 }} className="card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1 }}>2</h3>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 500, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Years Experience</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Professional IT Industry</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -5, scale: 1.02 }} className="card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1 }}>10+</h3>
                <p style={{ color: 'var(--accent-secondary)', fontWeight: 500, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Live Projects</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Deployed to Production</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -5, scale: 1.02 }} className="card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', lineHeight: 1, marginTop: '0.5rem' }}>REST</h3>
                <p style={{ color: '#10b981', fontWeight: 500, fontSize: '1.1rem', marginBottom: '0.5rem' }}>API Development</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Secure & Scalable Endpoints</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -5, scale: 1.02 }} className="card" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', lineHeight: 1, marginTop: '0.5rem' }}>SQL</h3>
                <p style={{ color: '#f59e0b', fontWeight: 500, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Database Design</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Schema & Query Refactoring</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
