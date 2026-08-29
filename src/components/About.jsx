import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const CountUp = ({ endValue, duration = 2, hasPlus = false }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const target = parseFloat(endValue);

          const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = easeOut * target;

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {Math.floor(count)}{hasPlus ? '+' : ''}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      
      {/* Glow Background */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Backend Developer & Aspiring DevOps Engineer
        </p>

        {/* SECOND CREATIVE PORTRAIT SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card"
          style={{
            marginBottom: '3.5rem',
            padding: '2rem',
            borderColor: 'rgba(245, 158, 11, 0.35)',
            background: 'rgba(15, 18, 28, 0.9)',
            boxShadow: '0 20px 50px -15px rgba(245, 158, 11, 0.18)',
            borderRadius: '24px'
          }}
        >
          <div className="about-portrait-grid" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'center' }}>
            {/* Portrait Frame */}
            <div style={{ width: '130px', height: '130px', borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(245, 158, 11, 0.5)', flexShrink: 0, boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
              <img src="/profile.jpg" alt="Sayani Roy - Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.14)', color: '#fbbf24', borderColor: 'rgba(245, 158, 11, 0.35)' }}>
                  Backend Developer & Aspiring DevOps Engineer
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                  <CheckCircle2 size={14} /> 2+ Years IT Industry Experience
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', color: '#fff', fontWeight: 800, marginBottom: '0.4rem' }}>
                Sayani Roy <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>(MCA & BCA)</span>
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Passionate Backend Developer & Aspiring DevOps Engineer with 2 years of IT experience engineering production-grade PHP Laravel microservices, Docker containerization, CI/CD automation, and secure Razorpay/WhatsApp API pipelines.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Profile Narrative & 4-Card Metrics Grid */}
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.2rem', lineHeight: 1.3 }}>
              Transforming Complex Backend Challenges into <span className="text-gradient">Scalable Solutions</span>
            </h3>

            <p style={{ fontSize: '1.05rem', marginBottom: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Passionate Backend Developer & Aspiring DevOps Engineer with <strong>2 years of IT industry experience</strong> engineering scalable server architectures, robust web applications, and complex third-party API configurations.
            </p>
            
            <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Expert at containerizing applications with Docker, building automated CI/CD pipelines, optimizing enterprise database workflows, and implementing advanced AI-driven features (LLMs, OCR, Fraud Detection).
            </p>
          </motion.div>

          {/* 4 Metrics Cards Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}
          >
            <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center', borderColor: 'rgba(56, 189, 248, 0.35)' }}>
              <h3 style={{ fontSize: '3.2rem', color: '#fff', marginBottom: '0.2rem', lineHeight: 1, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                <CountUp endValue={2} hasPlus={true} />
              </h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Years IT Experience</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>WebMantra & Octagen Infotech</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center', borderColor: 'rgba(245, 158, 11, 0.35)' }}>
              <h3 style={{ fontSize: '3.2rem', color: '#fff', marginBottom: '0.2rem', lineHeight: 1, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                <CountUp endValue={10} hasPlus={true} />
              </h3>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Core Projects</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Enterprise E-Commerce Platforms</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.9rem', color: '#fff', marginBottom: '0.6rem', lineHeight: 1, fontWeight: 800, marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>AI & OCR</h3>
              <p style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Integrations</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>OpenAI, Gemini, OpenRouter</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.9rem', color: '#fff', marginBottom: '0.6rem', lineHeight: 1, fontWeight: 800, marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>DevOps & CI/CD</h3>
              <p style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>Docker & Automation</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Docker, GitHub Actions, Linux</p>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
