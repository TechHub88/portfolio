import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* We moved Projects up higher and made it prominent based on target MNC feedback */}
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--surface-light)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Sayani Roy. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
