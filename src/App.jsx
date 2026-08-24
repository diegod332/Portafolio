import React from 'react';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative font-mono selection:bg-[var(--color-matrix-main)] selection:text-black">
      <MatrixBackground />
      
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-matrix-bg)]/80 backdrop-blur-md border-b border-[var(--color-matrix-sec)]/50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#hero" className="text-[var(--color-matrix-main)] font-bold text-lg glow-text">
            DSS_
          </a>
          <div className="hidden md:flex gap-6 text-[var(--color-matrix-sec)] text-sm">
            <a href="#about" className="hover:text-[var(--color-matrix-main)] transition-colors">~/about</a>
            <a href="#skills" className="hover:text-[var(--color-matrix-main)] transition-colors">~/skills</a>
            <a href="#projects" className="hover:text-[var(--color-matrix-main)] transition-colors">~/proyectos</a>
            <a href="#contact" className="hover:text-[var(--color-matrix-main)] transition-colors">~/contacto</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
