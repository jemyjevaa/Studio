import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 border border-stone/30 text-ink-muted hover:border-ink hover:text-ink transition-all duration-300">
      {children}
    </span>
  );
};

export default Tag;
