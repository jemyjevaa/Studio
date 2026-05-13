import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink border-t border-white/5 px-6 md:px-16 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <span className="font-switzer text-[1.2rem] font-bold tracking-[0.4em] uppercase text-stone">
        Forma
      </span>
      <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.12em] text-stone/35 text-center md:text-right">
        © 2024 Forma Studio. Todos los derechos reservados.
      </span>
    </footer>
  );
};

export default Footer;
