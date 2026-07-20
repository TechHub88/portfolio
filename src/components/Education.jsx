import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Award, Calendar, ChevronRight } from 'lucide-react';

const academicData = [
  {
    title: 'Master of Computer Applications (MCA)',
    institution: 'Academy of Technology, Hooghly',
    year: '2022 – 2024',
    score: '77.7%'
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Burdwan University, Bardhaman',
    year: '2019 – 2022',
    score: '80%'
  },
  {
    title: 'Higher Secondary Education',
    institution: 'Panchmura High School',
    year: '2018 – 2019',
    score: '79%'
  }
];

const credentialsData = [
  {
    title: 'Azure Zero to Hero: Master Microsoft Cloud',
    institution: 'Udemy Certified'
  },
  {
    title: 'Data Analytics Course',
    institution: 'NPTEL Certified'
  }
];

const TimelineCard = ({ data, index, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.03, translateX: isLeft ? 10 : -10 }}
      className="card"
      style={{
        padding: '2rem',
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer'
      }}
    >
      {/* Decorative Slide Indicator */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        [isLeft ? 'left' : 'right']: 0,
        width: '4px',
        background: 'var(--gradient-accent)',
        borderRadius: isLeft ? '12px 0 0 12px' : '0 12px 12px 0'
      }} />

      <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {data.title}
      </h4>
      
      <div style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <Calendar size={14} /> {data.year || 'Certified'}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ color: 'var(--text-muted)' }}>
          <span style={{ display: 'block', color: '#fff', fontSize: '0.95rem' }}>{data.institution}</span>
          {data.score && <span style={{ fontSize: '0.85rem' }}>Score: <strong style={{ color: 'var(--accent-primary)' }}>{data.score}</strong></span>}
        </div>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          <ChevronRight color="var(--text-muted)" size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" style={{ background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Advanced Background Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Education & Credentials
        </motion.h2>
        
        <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
          
          {/* Left Column: Academic */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '1.5rem' }}
            >
              <div style={{ padding: '0.8rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px' }}>
                <GraduationCap color="var(--accent-primary)" size={28} />
              </div>
              Academic Background
            </motion.h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {academicData.map((item, idx) => (
                <TimelineCard key={idx} data={item} index={idx} isLeft={true} />
              ))}
            </div>
          </div>
          
          {/* Right Column: Credentials */}
          <div style={{ marginTop: '2rem' }}>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '1.5rem' }}
            >
              <div style={{ padding: '0.8rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px' }}>
                <Award color="var(--accent-secondary)" size={28} />
              </div>
              Certifications
            </motion.h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {credentialsData.map((item, idx) => (
                <TimelineCard key={idx} data={item} index={idx} isLeft={false} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
