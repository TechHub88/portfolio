import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

const ResumeView = () => {
  return (
    <section id="resume" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      
      {/* Background Neon Ambient Spheres */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge" style={{ marginBottom: '1rem', background: 'rgba(59, 130, 246, 0.12)', borderColor: 'rgba(59, 130, 246, 0.3)', color: '#60a5fa' }}>
            <Sparkles size={14} color="#3b82f6" />
            Curriculum Vitae & Credentials
          </div>
          <h2 className="section-title">
            View & Download <span className="text-gradient">Official Resume</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Inspect Sayani Roy's complete technical qualifications, MCA credentials, enterprise project architecture metrics, and IT industry experience.
          </p>
        </div>

        {/* High-Tech Resume Preview Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card"
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            padding: 0,
            borderColor: 'rgba(59, 130, 246, 0.35)',
            background: 'rgba(11, 13, 20, 0.92)',
            boxShadow: '0 25px 70px -15px rgba(59, 130, 246, 0.25)',
            borderRadius: '24px',
            overflow: 'hidden'
          }}
        >
          {/* Header Action Bar */}
          <div style={{
            padding: '1.4rem 2.2rem',
            background: 'rgba(19, 23, 36, 0.95)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <FileText size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 800 }}>Sayani_Roy_Resume.pdf</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={14} color="#10b981" /> Verified Official Document • MCA & Backend Developer
                </div>
              </div>
            </div>

            {/* Action Buttons: View in New Tab & Download */}
            <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="/sayaniroy_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem', borderRadius: '12px' }}
              >
                <ExternalLink size={16} /> Open Resume in New Tab ↗
              </a>
              
              <a
                href="/sayaniroy_resume.pdf"
                download="Sayani_Roy_Resume.pdf"
                className="btn btn-outline"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem', borderRadius: '12px' }}
              >
                <Download size={16} color="var(--accent-emerald)" /> Download PDF
              </a>
            </div>
          </div>

          {/* Embedded Resume PDF Viewer Container */}
          <div style={{ width: '100%', height: '700px', background: '#090c14', position: 'relative' }}>
            <iframe
              src="/sayaniroy_resume.pdf#toolbar=1"
              title="Sayani Roy Official Resume PDF"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block' }}
            />
          </div>

          {/* Bottom Highlights Strip */}
          <div style={{
            padding: '1.2rem 2rem',
            background: 'rgba(19, 23, 36, 0.8)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            justify: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#10b981" /> 2+ Years IT Industry Experience
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#3b82f6" /> MCA Graduate (77.7%)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#8b5cf6" /> Laravel, Node.js, AI & Data Engineering
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ResumeView;
