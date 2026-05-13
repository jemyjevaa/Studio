import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const words = ["Creamos", "espacios", "que", "perduran"];
  
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 lg:px-32 xl:px-48 relative overflow-hidden bg-warm-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[40%] bg-beige/50 md:bg-beige transition-all duration-1000"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[0.65rem] md:text-[0.75rem] tracking-[0.5em] uppercase text-ink-muted mb-20 md:mb-24 border-l border-stone/50 pl-8"
        >
          Estudio creativo & arquitectura — Oslo / Madrid
        </motion.p>

        <h1 className="font-switzer text-[clamp(2.5rem,10vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-20 md:mb-32">
          <div className="overflow-hidden">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3 + i * 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`inline-block mr-[0.3em] ${word === "que" ? "text-ink-faint font-light" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-16 md:gap-32 mt-12 md:mt-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-[450px] text-[1.1rem] md:text-[1.25rem] leading-relaxed text-ink-muted font-light"
          >
            Forma es un estudio de arquitectura y diseño creativo que transforma ideas en espacios extraordinarios. Minimalismo nórdico con alma mediterránea.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <a href="#work" className="group relative inline-flex items-center gap-6 text-[0.75rem] tracking-[0.3em] uppercase text-ink no-underline py-4">
              <span className="relative z-10">Ver proyectos seleccionados</span>
              <span className="w-12 h-[1px] bg-ink transition-all duration-500 group-hover:w-20"></span>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-ink transition-all duration-500 group-hover:w-full opacity-20"></div>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="hidden md:flex absolute right-16 bottom-16 text-[0.6rem] tracking-[0.4em] uppercase text-ink-faint items-center gap-6 [writing-mode:vertical-rl]"
      >
        <span className="animate-pulse">Desplazar</span>
        <div className="w-[1px] h-24 bg-stone/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-ink"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
