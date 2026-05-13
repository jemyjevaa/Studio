import React from 'react';
import { motion } from 'framer-motion';
import ProcessItem from '../molecules/ProcessItem';

const ProcessList: React.FC = () => {
  const steps = [
    { number: "I", name: "Escucha & Visión", description: "Entendemos el proyecto antes de dibujarlo. La conversación es el primer boceto." },
    { number: "II", name: "Concepto & Estrategia", description: "Un concepto sólido que guía cada decisión posterior. Rigor sin rigidez." },
    { number: "III", name: "Diseño & Detalle", description: "De la idea al milímetro. Los detalles no son pequeños: son la arquitectura." },
    { number: "IV", name: "Ejecución & Entrega", description: "Acompañamos hasta el último tornillo. Hasta que el espacio respira." }
  ];

  return (
    <section className="bg-warm-white py-32 md:py-48 px-6 md:px-16" id="process">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-label"
        >
          Nuestra metodología
        </motion.div>

        <div className="flex flex-col border-t border-stone/20">
          {steps.map((step, i) => (
            <ProcessItem 
              key={i}
              number={step.number}
              name={step.name}
              description={step.description}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessList;
