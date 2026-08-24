import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 min-h-screen flex flex-col justify-center items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full terminal-window rounded-lg overflow-hidden"
      >
        <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-[var(--color-matrix-sec)]">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-sm text-gray-400">~/diego/about.txt</span>
        </div>
        
        <div className="p-6 md:p-8 font-mono text-[var(--color-matrix-sec)] text-sm md:text-base leading-relaxed">
          <p className="mb-4">
            <span className="text-[var(--color-matrix-main)]">guest@portfolio:~$</span> whoami
          </p>
          <p className="mb-6 pl-4 text-white">
            Diego Sánchez Sánchez
          </p>
          
          <p className="mb-4">
            <span className="text-[var(--color-matrix-main)]">guest@portfolio:~$</span> cat about.txt
          </p>
          <div className="pl-4 space-y-4">
            <p>
              Soy estudiante de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica del Centro de Veracruz (UTCV).
            </p>
            <p>
              Me especializo en desarrollo full stack, creación de aplicaciones móviles multiplataforma y diseño de APIs RESTful eficientes y escalables.
            </p>
            <p className="text-[var(--color-matrix-main)] glow-text">
              &gt; Ubicación: Fortín de las Flores, Veracruz, México (Disponible para reubicación / remoto).
              <br/>
              &gt; Disponibilidad: Estadía profesional de tiempo completo a partir de enero de 2027.
            </p>
          </div>
          
          <p className="mt-6 flex items-center">
            <span className="text-[var(--color-matrix-main)]">guest@portfolio:~$</span>
            <span className="w-2 h-5 bg-[var(--color-matrix-main)] ml-2 animate-pulse inline-block"></span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
