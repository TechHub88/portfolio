import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, Sparkles, CheckCircle2, ShieldCheck, Award, GraduationCap, Briefcase } from 'lucide-react';

const ResumeView = () => {
  return (
    <section id="resume" style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
      
      {/* Background Ambient Glow */}
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
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="badge" style={{ marginBottom: '0.8rem', background: 'rgba(59, 130, 246, 0.12)', borderColor: 'rgba(59, 130, 246, 0.3)', color: '#60a5fa' }}>
            <Sparkles size={14} color="#3b82f6" />
            Curriculum Vitae
          </div>
          <h2 className="section-title">
            Official <span className="text-gradient">Resume & Credentials</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Click below to view or download Sayani Roy's complete verified PDF resume in a new tab.
          </p>
        </div>

        {/* High-Tech Clean Resume Card (No Embedded Iframe) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '2.5rem',
            borderColor: 'rgba(59, 130, 246, 0.4)',
            background: 'rgba(11, 13, 20, 0.95)',
            boxShadow: '0 20px 60px -15px rgba(59, 130, 246, 0.2)',
            borderRadius: '24px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <div style={{ 
                padding: '1rem', 
                borderRadius: '16px', 
                background: 'rgba(59, 130, 246, 0.15)', 
                color: '#3b82f6',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.25)'
              }}>
                <FileText size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)', color: '#fff', fontWeight: 800, wordBreak: 'break-all' }}>
                  Sayani_Roy_Resume.pdf
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <ShieldCheck size={16} color="#10b981" /> Verified PDF • MCA Graduate & Backend Developer
                </div>
              </div>
            </div>

            {/* Direct Action Buttons: View in New Tab & Download */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="/sayaniroy_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ padding: '0.8rem 1.8rem', fontSize: '0.94rem', borderRadius: '12px' }}
              >
                <ExternalLink size={18} /> Open Resume in New Tab ↗
              </a>
              
              <a
                href="/sayaniroy_resume.pdf"
                download="Sayani_Roy_Resume.pdf"
                className="btn btn-outline"
                style={{ padding: '0.8rem 1.6rem', fontSize: '0.94rem', borderRadius: '12px' }}
              >
                <Download size={18} color="var(--accent-emerald)" /> Download PDF
              </a>
            </div>

          </div>

          {/* Quick Qualification Summary Grid */}
          <div className="resume-cards-grid" style={{ paddingTop: '1.8rem', borderTop: '1px solid var(--border-color)' }}>
            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                <Briefcase size={15} /> Experience
              </div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.98rem' }}>2+ Years IT Industry</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>WebMantra & Octagen</div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-secondary)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                <GraduationCap size={15} /> Education
              </div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.98rem' }}>MCA (77.7%) & BCA (80%)</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Academy of Technology</div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                <Award size={15} /> Certifications
              </div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.98rem' }}>Azure Cloud & Data Analytics</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Udemy & NPTEL Certified</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ResumeView;
