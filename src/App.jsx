import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import MatrixBackground from './components/MatrixBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative font-mono selection:bg-[var(--color-matrix-main)] selection:text-black">
      <MatrixBackground />
      
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-matrix-bg)]/80 backdrop-blur-md border-b border-[var(--color-matrix-sec)]/50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#hero" className="text-[var(--color-matrix-main)] font-bold text-lg glow-text" onClick={closeMenu}>
            DSS_
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-[var(--color-matrix-sec)] text-sm">
            <a href="#about" className="hover:text-[var(--color-matrix-main)] transition-colors">~/about</a>
            <a href="#skills" className="hover:text-[var(--color-matrix-main)] transition-colors">~/skills</a>
            <a href="#projects" className="hover:text-[var(--color-matrix-main)] transition-colors">~/proyectos</a>
            <a href="#contact" className="hover:text-[var(--color-matrix-main)] transition-colors">~/contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--color-matrix-main)] text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--color-matrix-bg)]/95 border-b border-[var(--color-matrix-sec)]/50 backdrop-blur-md">
            <div className="flex flex-col px-4 py-4 gap-4 text-[var(--color-matrix-sec)] text-sm">
              <a href="#about" className="hover:text-[var(--color-matrix-main)] transition-colors" onClick={closeMenu}>$ ./about</a>
              <a href="#skills" className="hover:text-[var(--color-matrix-main)] transition-colors" onClick={closeMenu}>$ ./skills</a>
              <a href="#projects" className="hover:text-[var(--color-matrix-main)] transition-colors" onClick={closeMenu}>$ ./proyectos</a>
              <a href="#contact" className="hover:text-[var(--color-matrix-main)] transition-colors" onClick={closeMenu}>$ ./contacto</a>
            </div>
          </div>
        )}
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
