import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text text-white">
          <Typewriter
            options={{
              strings: ['> Diego Sánchez Sánchez_'],
              autoStart: true,
              loop: false,
              cursor: '█',
              delay: 80,
            }}
          />
        </h1>
        
        <div className="text-xl md:text-2xl text-[var(--color-matrix-sec)] mb-8 h-8 flex items-center gap-2">
          <span className="text-[var(--color-matrix-main)]">$</span> 
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer',
                'Mobile Developer',
                'API Architect',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 60,
              cursor: '_'
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 border border-[var(--color-matrix-sec)] text-[var(--color-matrix-main)] hover:text-black hover:bg-[var(--color-matrix-main)] transition-all duration-300 glow-box relative group"
          >
            <span className="opacity-70 group-hover:opacity-100">$ ./ver-proyectos</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--color-matrix-sec)] text-[var(--color-matrix-main)] hover:text-black hover:bg-[var(--color-matrix-main)] transition-all duration-300 glow-box relative group"
          >
            <span className="opacity-70 group-hover:opacity-100">$ ./contactar</span>
          </a>
        </div>

        <div className="mt-12">
          <a
            href="https://github.com/diegod332"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-matrix-sec)] hover:text-[var(--color-matrix-main)] text-4xl transition-colors duration-300 hover:glow-text flex flex-col items-center gap-2"
          >
            <FaGithub />
            <span className="text-sm opacity-50">GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
