import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import ResumeView from './components/ResumeView'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <ResumeView />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2.5rem 2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.9rem', background: 'var(--surface-color)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} Sayani Roy. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <a href="https://github.com/TechHub88/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.85rem' }}>
              GitHub Profile (TechHub88) &rarr;
            </a>
            <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>| Kolkata, India</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
