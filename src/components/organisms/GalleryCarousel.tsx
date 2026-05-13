import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from '../ui/Carousel';

const GalleryCarousel: React.FC = () => {
  const slides = [
    { 
      title: "Casa Nórdica", 
      button: "Ver proyecto",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" 
    },
    { 
      title: "Estudio Forma", 
      button: "Ver proyecto",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80" 
    },
    { 
      title: "Loft Malasaña", 
      button: "Ver proyecto",
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80" 
    },
    { 
      title: "Villa Sagrera", 
      button: "Ver proyecto",
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80" 
    },
    { 
      title: "Edificio Luz", 
      button: "Ver proyecto",
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" 
    }
  ];

  return (
    <section className="px-8 md:px-20 lg:px-32 xl:px-48 overflow-hidden" id="work">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-label mb-16 md:mb-20 self-start"
        >
          Proyectos seleccionados
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-switzer text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight mb-20 md:mb-40 text-center leading-tight max-w-[800px]"
        >
          Arquitectura <span className="text-stone font-light italic">en</span> movimiento
        </motion.h2>

        <div className="relative w-full min-h-[50vh] md:min-h-[75vmin] flex items-start justify-center">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
