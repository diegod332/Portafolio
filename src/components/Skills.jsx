import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiFlutter, SiAndroidstudio, SiTypescript, SiAnaconda, 
  SiPostgresql, SiMongodb, SiVercel, SiNetlify, SiRailway, 
  SiEclipseide, SiPostman, SiPnpm, SiArduino
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { 
  FaReact, FaAngular, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, 
  FaFigma, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaGithub, FaNpm
} from 'react-icons/fa';

const skillCategories = [
  {
    title: "Desarrollo Móvil",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Android Studio", icon: SiAndroidstudio }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Angular", icon: FaAngular },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Figma", icon: FaFigma }
    ]
  },
  {
    title: "Backend y Datos",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Java", icon: FaJava },
      { name: "Anaconda", icon: SiAnaconda },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb }
    ]
  },
  {
    title: "DevOps y Deploy",
    skills: [
      { name: "Docker", icon: FaDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Railway", icon: SiRailway }
    ]
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Eclipse", icon: SiEclipseide },
      { name: "Postman", icon: SiPostman },
      { name: "npm", icon: FaNpm },
      { name: "pnpm", icon: SiPnpm },
      { name: "Arduino", icon: SiArduino }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 min-h-screen flex flex-col justify-center items-center relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-matrix-main)] glow-text inline-block border-b-2 border-[var(--color-matrix-main)] pb-2">
            ~/skills.sh
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="terminal-window p-6 rounded-md hover:border-[var(--color-matrix-main)] transition-colors duration-300"
            >
              <h3 className="text-xl text-white mb-4 border-b border-[var(--color-matrix-sec)] pb-2 flex items-center">
                <span className="text-[var(--color-matrix-main)] mr-2">#</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col items-center group">
                    <div className="text-3xl text-[var(--color-matrix-sec)] group-hover:text-[var(--color-matrix-main)] group-hover:glow-text transition-all duration-300 mb-2">
                      <skill.icon />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
