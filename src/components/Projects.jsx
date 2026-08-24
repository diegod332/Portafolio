import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "RetiScan",
    description: "Sistema multiplataforma para la detección temprana de retinopatía diabética, con frontend en React/Flutter y backend dockerizado. Colaboré en el desarrollo del frontend y la integración con los servicios backend.",
    tech: ["React", "Flutter", "Docker"],
    link: "https://github.com/AlfreRose12/RetiScan",
  },
  {
    title: "Odontología Integral — Sistema de Gestión",
    description: "Sistema integral para la gestión de citas, servicios, inventario y usuarios de un consultorio dental, con app móvil Android y API RESTful documentada con Swagger. Desarrollé el backend: diseño de endpoints, conexión a base de datos y pruebas unitarias.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker", "Swagger"],
    link: "https://github.com/diegod332/Proyecto_Integrador_4A_TIDSM_EQUIPO_6",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 min-h-screen flex flex-col justify-center items-center relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-matrix-main)] glow-text inline-block border-b-2 border-[var(--color-matrix-main)] pb-2">
            ls -l ~/proyectos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="terminal-window rounded-lg overflow-hidden flex flex-col h-full glow-box"
            >
              <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-[var(--color-matrix-sec)]">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-sm text-gray-400">bash - {project.title.toLowerCase().replace(/ /g, '_')}</span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 glow-text">
                  {project.title}
                </h3>
                <p className="text-[var(--color-matrix-sec)] mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs px-2 py-1 border border-[var(--color-matrix-sec)] text-[var(--color-matrix-main)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white bg-[var(--color-matrix-sec)] hover:bg-[var(--color-matrix-main)] hover:text-black px-4 py-2 transition-all duration-300 w-max"
                >
                  <FaGithub />
                  <span>Ver en GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
