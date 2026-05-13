import React from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  number: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="border-t border-beige pt-6"
    >
      <div className="font-switzer text-4xl font-bold tracking-[-0.04em] leading-none mb-2">
        {number}
      </div>
      <div className="text-[0.75rem] tracking-[0.12em] uppercase text-ink-muted">
        {label}
      </div>
    </motion.div>
  );
};

export default StatItem;
