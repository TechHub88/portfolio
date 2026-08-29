import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Server, Database, Bot, Zap, Shield, Globe, Terminal, Sparkles } from 'lucide-react';

const marqueeItems = [
  { name: 'PHP 8.2', icon: Server, color: '#8892be' },
  { name: 'Laravel 11', icon: Cpu, color: '#ff2d20' },
  { name: 'Node.js', icon: Terminal, color: '#5fa04e' },
  { name: 'Docker', icon: Server, color: '#0ea5e9' },
  { name: 'CI/CD Pipelines', icon: Zap, color: '#a855f7' },
  { name: 'MySQL Database', icon: Database, color: '#00758f' },
  { name: 'Gemini AI', icon: Bot, color: '#38bdf8' },
  { name: 'OpenAI API', icon: Sparkles, color: '#10a37f' },
  { name: 'RESTful APIs', icon: Globe, color: '#f59e0b' },
  { name: 'AI Fraud Detection', icon: Shield, color: '#f43f5e' },
  { name: 'WhatsApp Webhooks', icon: Zap, color: '#25d366' },
  { name: 'Razorpay Gateway', icon: Code2, color: '#0c66e4' },
  { name: 'OAuth 2.0 Security', icon: Shield, color: '#a855f7' },
  { name: 'Tableau & Power BI', icon: Database, color: '#eab308' },
];

const TechMarquee = () => {
  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      padding: '1.2rem 0',
      background: 'rgba(12, 15, 24, 0.75)',
      borderTop: '1px solid rgba(255, 255, 255, 0.07)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
      position: 'relative',
      zIndex: 2,
      backdropFilter: 'blur(15px)'
    }}>
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div 
              key={idx} 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 1.1rem',
                margin: '0 0.6rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.035)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                color: '#e2e8f0',
                fontSize: '0.85rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              <IconComp size={15} color={item.color} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
