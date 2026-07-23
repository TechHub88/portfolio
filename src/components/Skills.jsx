import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Bot, Network, CreditCard, BarChart3, TrendingUp, Cpu, Sparkles, Activity, ShieldCheck } from 'lucide-react';

// Radial Ring Component for BI Tools
const RadialGauge = ({ percentage, label, sublabel, color }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
      <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Animated Glow Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            strokeLinecap="round"
            fill="transparent"
            style={{ filter: `drop-shadow(0 0 8px ${color})` }}
          />
        </svg>
        <div style={{ position: 'absolute', textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{percentage}%</div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>{label}</div>
        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>{sublabel}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'var(--surface-color)', position: 'relative' }}>
      
      {/* Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <h2 className="section-title">Technical Expertise & Data Systems</h2>
        <p className="section-subtitle">
          Advanced Backend Architecture, AI & LLM Integrations, and Interactive Data Engineering Analytics.
        </p>

        {/* TOP FEATURE: Advanced Live Data Performance & Throughput Chart Visualizer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card"
          style={{ padding: '2.5rem', marginBottom: '3rem', borderColor: 'rgba(236, 72, 153, 0.3)', background: 'linear-gradient(135deg, rgba(11, 13, 20, 0.95), rgba(30, 15, 40, 0.7))' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span className="badge" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', borderColor: 'rgba(236, 72, 153, 0.3)' }}>
                  <TrendingUp size={14} /> Advanced Data Analytics
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Activity size={14} color="#10b981" /> Live Real-Time Throughput
                </span>
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 800 }}>
                Data Engineering & <span className="text-gradient">Query Performance Analytics</span>
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Query Latency</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34d399' }}>&lt; 14ms (Optimal)</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pipeline Efficiency</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ec4899' }}>98.5%</div>
              </div>
            </div>
          </div>

          {/* Futuristic SVG Area Chart Graphic */}
          <div style={{ width: '100%', height: '180px', position: 'relative', overflow: 'hidden', background: 'rgba(3, 4, 8, 0.6)', borderRadius: '16px', border: '1px solid var(--border-color)', padding: '1rem' }}>
            <svg width="100%" height="100%" viewBox="0 0 800 140" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="30" x2="800" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
              <line x1="0" y1="70" x2="800" y2="70" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
              <line x1="0" y1="110" x2="800" y2="110" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

              {/* Area Fill */}
              <path
                d="M 0 140 L 0 90 Q 120 20 240 70 T 480 30 T 720 80 L 800 20 L 800 140 Z"
                fill="url(#chartGradient)"
              />

              {/* Animated Stroke Path */}
              <motion.path
                d="M 0 90 Q 120 20 240 70 T 480 30 T 720 80 L 800 20"
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Glowing Data Nodes */}
              <circle cx="240" cy="70" r="5" fill="#ec4899" style={{ filter: 'drop-shadow(0 0 8px #ec4899)' }} />
              <circle cx="480" cy="30" r="5" fill="#8b5cf6" style={{ filter: 'drop-shadow(0 0 8px #8b5cf6)' }} />
              <circle cx="800" cy="20" r="6" fill="#3b82f6" style={{ filter: 'drop-shadow(0 0 10px #3b82f6)' }} />
            </svg>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.2rem', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
            <span>SQL Schema Optimization</span>
            <span>REST API Endpoint Routing</span>
            <span>Microservices Queue Processing</span>
            <span>BI Dashboard Analytics</span>
          </div>
        </motion.div>

        {/* 6 Varied & Distinct Skill Cards Grid */}
        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          
          {/* STYLE 1: Languages & Tools - Tech Tag Matrix with Glowing Dots */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
            style={{ padding: '2.2rem', borderColor: 'rgba(59, 130, 246, 0.35)', background: 'linear-gradient(145deg, rgba(11, 13, 20, 0.95), rgba(19, 23, 36, 0.8))' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                <Code2 size={24} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>Languages & Core Tools</h4>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Core Programming & Repositories</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
              {[
                { name: 'PHP', level: '92%', color: '#3b82f6' },
                { name: 'Python', level: '88%', color: '#60a5fa' },
                { name: 'Node.js', level: '85%', color: '#10b981' },
                { name: 'JavaScript', level: '85%', color: '#f59e0b' },
                { name: 'SQL Database', level: '90%', color: '#06b6d4' },
                { name: 'GitHub & GitLab', level: '88%', color: '#8b5cf6' }
              ].map((item, idx) => (
                <div key={idx} style={{
                  padding: '0.65rem 1.1rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>{item.name}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: '6px' }}>{item.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* STYLE 2: Frameworks - Sleek Highlight Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
            style={{ padding: '2.2rem', borderColor: 'rgba(139, 92, 246, 0.35)', background: 'linear-gradient(145deg, rgba(11, 13, 20, 0.95), rgba(26, 20, 48, 0.6))' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.8rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}>
                <Layers size={24} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>Backend Frameworks</h4>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>MVC & Microservices</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ padding: '1rem 1.2rem', background: 'rgba(139, 92, 246, 0.08)', borderRadius: '14px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#8b5cf6" /> Laravel Framework
                  </span>
                  <span style={{ color: '#a78bfa', fontWeight: 700 }}>95% Mastery</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enterprise REST APIs, Eloquent ORM, Authentication & Queues</p>
              </div>

              <div style={{ padding: '1rem 1.2rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#38bdf8" /> Django Framework
                  </span>
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}>82% Proficiency</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Python Backend Services, MVT Pattern & Database Models</p>
              </div>
            </div>
          </motion.div>

          {/* STYLE 3: AI & LLM Integrations - Futuristic Cyber Neon Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
            style={{ padding: '2.2rem', borderColor: 'rgba(6, 182, 212, 0.35)', background: 'linear-gradient(145deg, rgba(11, 13, 20, 0.95), rgba(12, 35, 48, 0.7))' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
                <Bot size={24} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>AI & LLM Integrations</h4>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Intelligent Chatbots & OCR</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
              <div style={{ padding: '0.9rem', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <div style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 700, marginBottom: '0.2rem' }}>OpenAI API</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>ChatGPT & GPT Models (92%)</div>
              </div>

              <div style={{ padding: '0.9rem', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <div style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 700, marginBottom: '0.2rem' }}>Google Gemini</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>AI Matrix Routing (90%)</div>
              </div>

              <div style={{ padding: '0.9rem', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <div style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 700, marginBottom: '0.2rem' }}>OpenRouter API</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Multi-LLM Hub (88%)</div>
              </div>

              <div style={{ padding: '0.9rem', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '12px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <div style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 700, marginBottom: '0.2rem' }}>Fraud & OCR</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Image Validation (85%)</div>
              </div>
            </div>
          </motion.div>

          {/* STYLE 4: API Integrations & Webhooks - Connected Flow Wireframe */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card"
            style={{ padding: '2.2rem', borderColor: 'rgba(16, 185, 129, 0.35)', background: 'linear-gradient(145deg, rgba(11, 13, 20, 0.95), rgba(14, 38, 28, 0.6))' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                <Network size={24} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>API & Webhook Architecture</h4>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Transactional Messaging & Endpoints</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                { title: 'RESTful API Engineering', detail: 'Secure & Scalable Endpoints', pct: '95%' },
                { title: 'WhatsApp Business API', detail: 'Order Notifications & Alerts', pct: '88%' },
                { title: 'Multi-Point Webhooks', detail: 'Automated Event Listeners', pct: '90%' },
                { title: 'Real-Time Communication', detail: 'Asynchronous Socket Loops', pct: '85%' }
              ].map((api, idx) => (
                <div key={idx} style={{
                  padding: '0.7rem 1rem',
                  background: 'rgba(16, 185, 129, 0.05)',
                  borderRadius: '10px',
                  borderLeft: '3px solid #10b981',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontSize: '0.88rem', color: '#fff', fontWeight: 600 }}>{api.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{api.detail}</div>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 700 }}>{api.pct}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* STYLE 5: Gateways & Services - Glass Token Chips */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
            style={{ padding: '2.2rem', borderColor: 'rgba(245, 158, 11, 0.35)', background: 'linear-gradient(145deg, rgba(11, 13, 20, 0.95), rgba(40, 28, 12, 0.6))' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.8rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                <CreditCard size={24} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>Gateways & Services</h4>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Payment Processing & Auth</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1.1rem', background: 'rgba(245, 158, 11, 0.08)', borderRadius: '14px', border: '1px solid rgba(245, 158, 11, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '8px', color: '#fbbf24' }}>
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Razorpay Payment Gateway</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Digital Payments & Verification (92%)</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '14px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(59, 130, 246, 0.15)', borderRadius: '8px', color: '#60a5fa' }}>
                    <Zap size={20} />
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Twilio SMS & OTP</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Secure Verification & Telephony (88%)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* STYLE 6: Data Engineering & BI - RADIAL GAUGE CHARTS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card"
            style={{ padding: '2.2rem', borderColor: 'rgba(236, 72, 153, 0.35)', background: 'linear-gradient(145deg, rgba(11, 13, 20, 0.95), rgba(42, 16, 32, 0.6))' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.8rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}>
                <BarChart3 size={24} />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>Data Engineering & BI Tools</h4>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Business Intelligence Radial Gauges</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginTop: '0.5rem' }}>
              <RadialGauge 
                percentage={85} 
                label="Tableau" 
                sublabel="Data Visualization" 
                color="#ec4899" 
              />
              <RadialGauge 
                percentage={82} 
                label="Power BI" 
                sublabel="Analytics Dashboards" 
                color="#8b5cf6" 
              />
              <RadialGauge 
                percentage={90} 
                label="MySQL BI" 
                sublabel="Query Modeling" 
                color="#3b82f6" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
