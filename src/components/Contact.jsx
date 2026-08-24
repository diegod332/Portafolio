import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 min-h-[70vh] flex flex-col justify-center items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <div className="terminal-window rounded-lg overflow-hidden glow-box">
          <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-[var(--color-matrix-sec)]">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-sm text-gray-400">~/contact.sh</span>
          </div>
          
          <div className="p-6 md:p-8 font-mono text-sm md:text-base">
            <p className="text-[var(--color-matrix-main)] mb-6">
              &gt; Estableciendo conexión segura... [OK]<br/>
              &gt; Seleccione un método de contacto:
            </p>
            
            <div className="flex flex-col gap-6 pl-4">
              <a
                href="mailto:diegosanchezs777@gmail.com"
                className="flex items-center gap-4 text-[var(--color-matrix-sec)] hover:text-[var(--color-matrix-main)] transition-colors duration-300 group"
              >
                <FaEnvelope className="text-2xl group-hover:glow-text" />
                <div>
                  <div className="text-white">Email</div>
                  <div className="text-xs">diegosanchezs777@gmail.com</div>
                </div>
              </a>
              
              <a
                href="https://github.com/diegod332"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[var(--color-matrix-sec)] hover:text-[var(--color-matrix-main)] transition-colors duration-300 group"
              >
                <FaGithub className="text-2xl group-hover:glow-text" />
                <div>
                  <div className="text-white">GitHub</div>
                  <div className="text-xs">github.com/diegod332</div>
                </div>
              </a>
            </div>

            <p className="mt-8 flex items-center text-[var(--color-matrix-sec)]">
              <span className="text-[var(--color-matrix-main)]">guest@portfolio:~$</span>
              <span className="w-2 h-5 bg-[var(--color-matrix-main)] ml-2 animate-pulse inline-block"></span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
