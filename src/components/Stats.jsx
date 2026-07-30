import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CountUp = ({ endValue, duration = 2, decimals = 0, hasPlus = false }) => {
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

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref}>
      {displayValue}{hasPlus ? '+' : ''}
    </span>
  );
};

const statsData = [
  {
    numericValue: 2,
    hasPlus: true,
    decimals: 0,
    suffix: 'Years',
    label: 'IT Industry Experience',
    desc: 'Engineering scalable backend servers at WebMantra & Octagen.'
  },
  {
    numericValue: 10,
    hasPlus: true,
    decimals: 0,
    suffix: 'Core',
    label: 'Production Projects',
    desc: 'Multi-domain E-Commerce, AI Chatbots, & Webhook Infrastructure.'
  },
  {
    numericValue: 99.9,
    hasPlus: false,
    decimals: 1,
    suffix: '%',
    label: 'System Uptime & Stability',
    desc: 'High availability API endpoints & automated background processing.'
  },
  {
    numericValue: 100,
    hasPlus: false,
    decimals: 0,
    suffix: '%',
    label: 'Security & Verification',
    desc: 'Strict OAuth 2.0, KYC protocols, and Fraud Detection pipelines.'
  }
];

const Stats = () => {
  return (
    <section className="statsSec" style={{ position: 'relative', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'rgba(3, 4, 8, 0.95)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'inline-block' }} />
            Our Work
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff' }}>
            Work speaks through numbers. <span className="text-gradient">What I've achieved so far.</span>
          </h2>
        </div>

        {/* 4-Column Stats Box with Vertical Line Dividers */}
        <div className="stats-box-grid">
          {statsData.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="stat-column-box"
            >
              <div className="stat-number-wrap">
                <span className="stat-counter">
                  <CountUp 
                    endValue={stat.numericValue} 
                    decimals={stat.decimals} 
                    hasPlus={stat.hasPlus} 
                  />
                </span>
                <span className="text-gradient stat-suffix">{stat.suffix}</span>
              </div>
              <h4 className="stat-title">{stat.label}</h4>
              <p className="stat-description">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
