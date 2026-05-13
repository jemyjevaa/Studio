import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 right-4 md:top-8 md:left-16 md:right-16 lg:left-24 lg:right-24 z-[100] flex justify-between items-center px-6 md:px-12 py-4 md:py-6 bg-cream/70 backdrop-blur-xl border border-stone/20 rounded-xl md:rounded-2xl shadow-sm transition-all duration-500"
    >
      <a href="#" className="font-switzer text-[1.1rem] md:text-[1.4rem] font-bold tracking-[0.4em] uppercase text-ink no-underline">
        Forma
      </a>
      <ul className="hidden md:flex gap-8 lg:gap-12 list-none">
        {['Trabajo', 'Servicios', 'Proceso', 'Contacto'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-[0.65rem] md:text-[0.7rem] tracking-[0.2em] uppercase text-ink-muted no-underline transition-all duration-300 hover:text-ink hover:tracking-[0.3em] font-medium"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-col gap-1 w-6 cursor-pointer">
        <span className="w-full h-[1px] bg-ink"></span>
        <span className="w-full h-[1px] bg-ink"></span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
