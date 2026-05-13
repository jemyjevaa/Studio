import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../molecules/ServiceCard';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      number: "01",
      title: <>Arquitectura<br/>Residencial</>,
      description: "Diseñamos viviendas que equilibran la vida cotidiana con momentos de contemplación. Cada estancia, una intención.",
      tags: ["Vivienda", "Reforma", "Nueva planta"]
    },
    {
      number: "02",
      title: <>Interiorismo<br/>Comercial</>,
      description: "Espacios de trabajo y retail que comunican valores de marca con honestidad material y luz natural.",
      tags: ["Retail", "Oficinas", "Hostelería"]
    },
    {
      number: "03",
      title: <>Dirección<br/>Creativa</>,
      description: "Identidad visual, fotografía arquitectónica y narrativa de marca para proyectos que merecen ser contados bien.",
      tags: ["Branding", "Fotografía", "Editorial"]
    },
    {
      number: "04",
      title: <>Espacios<br/>Efímeros</>,
      description: "Instalaciones, exposiciones y pabellones que desafían la permanencia y celebran el instante presente.",
      tags: ["Instalaciones", "Exposición", "Evento"]
    },
    {
      number: "05",
      title: <>Consultoría<br/>Estratégica</>,
      description: "Asesoría desde las etapas más tempranas del proyecto: programa, solar, viabilidad y visión de conjunto.",
      tags: ["Estrategia", "Visión", "Programa"]
    },
    {
      number: "06",
      title: <>Paisajismo<br/>& Exterior</>,
      description: "La arquitectura que dialoga con el territorio. Jardines, terrazas y espacios abiertos como extensión del habitar.",
      tags: ["Jardín", "Terraza", "Landscape"]
    }
  ];

  return (
    <section className="px-8 md:px-20 lg:px-32 xl:px-48" id="services">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-label mb-16 md:mb-24"
      >
        Servicios especializados
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 lg:gap-32">
        {services.map((service, i) => (
          <ServiceCard 
            key={i}
            number={service.number}
            title={service.title}
            description={service.description}
            tags={service.tags}
            className="pb-12"
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
