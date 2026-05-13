import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    "Mercer Hotels", "Textil Santanderina", "Grupo Lar", "Selenta", "BNP Paribas RE"
  ];

  return (
    <div className="bg-cream py-24 px-16">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ink-faint text-center mb-16">
        Han confiado en nosotros
      </p>
      <div className="flex justify-center items-center gap-24 flex-wrap">
        {clients.map((client, i) => (
          <span 
            key={i} 
            className="font-cormorant text-[1.3rem] font-light text-stone tracking-[0.05em] transition-colors duration-300 hover:text-ink cursor-none"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Clients;
