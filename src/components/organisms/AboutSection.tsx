import React from 'react';
import { motion } from 'framer-motion';
import StatItem from '../atoms/StatItem';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-warm-white py-40 md:py-64 px-8 md:px-20 lg:px-32 xl:px-48" id="about">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-label"
        >
          Sobre nosotros
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-switzer text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-16 lg:mb-0"
          >
            Donde la <span className="text-stone/60 font-light italic">función</span><br />encuentra la <span className="text-stone/60 font-light italic">belleza</span>
          </motion.h2>

          <div className="flex flex-col gap-10 md:gap-16">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[1.05rem] md:text-[1.15rem] leading-[1.8] text-ink-muted font-light max-w-[500px]"
            >
              Desde 2012, hemos definido espacios que van más allá de lo estético. Cada proyecto es una conversación entre cliente, contexto y propósito — una síntesis que emerge del silencio entre las líneas.
            </motion.p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 border-t border-stone/20 pt-12">
              <StatItem number="140+" label="Proyectos" delay={0.3} />
              <StatItem number="12" label="Años" delay={0.4} />
              <StatItem number="08" label="Premios" delay={0.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
