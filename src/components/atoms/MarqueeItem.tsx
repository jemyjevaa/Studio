import React from 'react';

interface MarqueeItemProps {
  children: React.ReactNode;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ children }) => {
  return (
    <>
      <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.2em] md:tracking-[0.25em] uppercase text-stone px-6 md:px-12 flex-shrink-0">
        {children}
      </span>
      <span className="text-ink-faint mr-6 md:mr-12 text-[0.65rem]">·</span>
    </>
  );
};

export default MarqueeItem;
