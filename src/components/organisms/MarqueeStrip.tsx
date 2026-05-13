import React from 'react';
import MarqueeItem from '../atoms/MarqueeItem';

const MarqueeStrip: React.FC = () => {
  const items = [
    "Arquitectura", "Diseño Interior", "Branding", 
    "Urbanismo", "Fotografía", "Dirección Creativa"
  ];

  return (
    <div className="bg-ink py-2.5 md:py-3 overflow-hidden relative z-[2]" aria-hidden="true">
      <div className="flex w-fit animate-marquee whitespace-nowrap">
        {/* Original items */}
        {items.map((item, i) => (
          <MarqueeItem key={`orig-${i}`}>{item}</MarqueeItem>
        ))}
        {/* Duplicated items for seamless loop */}
        {items.map((item, i) => (
          <MarqueeItem key={`dup-${i}`}>{item}</MarqueeItem>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
