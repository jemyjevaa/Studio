import React, { useState } from 'react';
import Tag from '../atoms/Tag';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  number: string;
  title: React.ReactNode;
  description: string;
  tags: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description, tags, className }) => {
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1) + '%';
    const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1) + '%';
    setMousePos({ x, y });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "group relative flex flex-col items-start transition-all duration-500",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl z-0"
        style={{
          background: `radial-gradient(300px circle at ${mousePos.x} ${mousePos.y}, rgba(209, 205, 196, 0.15) 0%, transparent 80%)`
        }}
      />
      
      <div className="relative z-10 w-full">
        <div className="font-switzer text-[3rem] md:text-[4rem] font-bold text-stone/20 leading-none mb-6 transition-colors duration-500 group-hover:text-ink/5 tracking-tighter">
          {number}
        </div>
        
        <h3 className="font-switzer text-[1.4rem] md:text-[1.8rem] font-bold leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-500 tracking-tight">
          {title}
        </h3>
        
        <p className="text-[0.9rem] md:text-[0.95rem] leading-[1.7] text-ink-muted mb-8 font-light max-w-[95%]">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
