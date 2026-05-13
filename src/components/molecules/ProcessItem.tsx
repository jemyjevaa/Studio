import React from 'react';
import { motion } from 'framer-motion';

interface ProcessItemProps {
  number: string;
  name: string;
  description: string;
  delay?: number;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ number, name, description, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay }}
      className="group flex flex-col md:grid md:grid-cols-[120px_1fr_400px] items-start md:items-center gap-6 md:gap-12 py-12 md:py-20 border-b border-stone/20 transition-all duration-500 hover:bg-beige/30 hover:px-8"
    >
      <span className="font-switzer text-[1rem] md:text-[1.2rem] font-bold text-ink-faint group-hover:text-ink transition-colors duration-500">
        {number}
      </span>
      <span className="font-switzer text-[1.8rem] md:text-[2.8rem] font-semibold tracking-tight group-hover:translate-x-4 transition-transform duration-700">
        {name}
      </span>
      <p className="text-[1rem] md:text-[1.1rem] leading-relaxed text-ink-muted md:text-right font-light italic">
        {description}
      </p>
    </motion.div>
  );
};

export default ProcessItem;
