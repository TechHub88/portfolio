import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, ShieldCheck } from 'lucide-react';

const academicData = [
  {
    title: 'Master of Computer Applications (MCA)',
    institution: 'Academy of Technology, Hooghly, WB',
    year: '2022 – 2024',
    score: '77.7%',
    description: 'Specialized in Advanced Data Structures, Cloud Architectures, Distributed Systems, and Database Management.'
  },
  {
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'Burdwan University, Bardhaman, WB',
    year: '2019 – 2022',
    score: '80.0%',
    description: 'Focused on Computer Science Core, Software Engineering, Object-Oriented Programming, and SQL Databases.'
  },
  {
    title: 'Higher Secondary Education (10+2)',
    institution: 'Panchmura High School, West Bengal',
    year: '2018 – 2019',
    score: '79.0%'
  },
  {
    title: 'Secondary Education (10th)',
    institution: 'West Bengal Board (WBBSE), West Bengal',
    year: '2016 – 2017',
    score: 'Completed'
  }
];

const credentialsData = [
  {
    title: 'Azure Zero to Hero: Master Microsoft Cloud',
    issuer: 'Udemy Certified',
    description: 'Comprehensive certification covering Azure Virtual Machines, Cloud Security, App Services, and Serverless Microservices.'
  },
  {
    title: 'Data Analytics Course',
    issuer: 'NPTEL Certified',
    description: 'Certified in fundamental Data Engineering, Statistical Analytics, Data Visualization, and SQL query modeling.'
  }
];

const Education = () => {
  return (
    <section id="education" style={{ background: 'var(--surface-color)', position: 'relative', overflow: 'hidden' }}>
      
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">
          Academic foundation in Computer Applications and verified industry credentials in Cloud & Data Analytics.
        </p>

        <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
          
          {/* Left Column: Academic Background */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.7rem', background: 'rgba(59, 130, 246, 0.12)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                <GraduationCap size={26} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#fff' }}>Academic Qualifications</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {academicData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card"
                  style={{ padding: '1.8rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <h4 style={{ color: '#fff', fontSize: '1.15rem' }}>{item.title}</h4>
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}>
                      <Calendar size={13} /> {item.year}
                    </span>
                  </div>

                  <p style={{ color: 'var(--accent-primary)', fontWeight: 500, fontSize: '0.92rem', marginBottom: '0.4rem' }}>
                    {item.institution}
                  </p>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '0.8rem' }}>
                    {item.description}
                  </p>

                  {item.score !== 'Completed' && (
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Aggregate Score: <strong style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem' }}>{item.score}</strong>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Credentials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.7rem', background: 'rgba(139, 92, 246, 0.12)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#fff' }}>Verified Certifications</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {credentialsData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="animated-border-card"
                >
                  <div style={{ padding: '2rem', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                      <ShieldCheck size={20} color="var(--accent-secondary)" />
                      <h4 style={{ color: '#fff', fontSize: '1.2rem' }}>{item.title}</h4>
                    </div>

                    <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                      {item.issuer}
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
