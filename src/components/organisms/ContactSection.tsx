import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section className="bg-ink py-32 md:py-56 px-6 md:px-16" id="contact">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[0.65rem] tracking-[0.4em] uppercase text-stone/50 mb-12 flex items-center gap-6"
          >
            Contacto
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-switzer text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.95] text-cream tracking-[-0.04em]"
          >
            Hablemos de<br />tu próximo<br /><span className="text-stone font-light italic">proyecto</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          {[
            { label: 'Email', value: 'hola@forma-studio.com', href: 'mailto:hola@forma-studio.com' },
            { label: 'Teléfono', value: '+34 91 234 56 78', href: 'tel:+34912345678' },
            { label: 'Estudio', value: 'Calle Serrano 44, Madrid', href: '#' },
            { label: 'Instagram', value: '@forma_studio', href: '#' },
          ].map((item, i) => (
            <div key={i} className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-white/10 gap-2 transition-all duration-300 hover:border-white/30">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-stone/40 group-hover:text-stone transition-colors duration-300">{item.label}</span>
              {item.href !== '#' ? (
                <a href={item.href} className="text-[1rem] md:text-[1.2rem] text-cream no-underline transition-all duration-300 hover:tracking-wider">
                  {item.value}
                </a>
              ) : (
                <span className="text-[1rem] md:text-[1.2rem] text-cream">
                  {item.value}
                </span>
              )}
            </div>
          ))}
          
          <a href="mailto:hola@forma-studio.com" className="group relative inline-flex items-center justify-center text-[0.75rem] tracking-[0.3em] uppercase text-ink bg-cream px-12 py-6 no-underline mt-12 overflow-hidden transition-all duration-500 hover:bg-stone">
            <span className="relative z-10">Iniciar conversación</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
