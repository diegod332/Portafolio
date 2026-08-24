import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--color-matrix-sec)] py-6 text-center relative z-10 bg-[var(--color-matrix-bg)]/80 backdrop-blur-sm">
      <div className="text-[var(--color-matrix-sec)] font-mono text-sm">
        <p className="mb-2">Disponible para estadías profesionales — Enero 2027</p>
        <p>© {new Date().getFullYear()} Diego Sánchez Sánchez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
