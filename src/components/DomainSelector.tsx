import React from 'react';
import { Domain } from '../data/domains';
import { DomainCard } from './DomainCard';
import { sound } from '../utils/audio';

interface DomainSelectorProps {
  domains: Domain[];
  selectedDomain: Domain | null;
  onSelectDomain: (domain: Domain) => void;
  disabled?: boolean;
}

export const DomainSelector: React.FC<DomainSelectorProps> = ({
  domains,
  selectedDomain,
  onSelectDomain,
  disabled = false,
}) => {
  const handleSelect = (domain: Domain) => {
    sound.playButtonPress();
    onSelectDomain(domain);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-block px-3 py-1 mb-3 rounded bg-[#111111] text-[#B58A45] font-cinzel text-xs font-bold tracking-[0.25em] uppercase shadow-sm">
          EXECUTIVE ARENA
        </div>
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[42px] font-bold tracking-[0.16em] text-[#111111] uppercase leading-tight">
          SELECT YOUR ARENA
        </h1>
        <p className="text-sm sm:text-base tracking-[0.12em] text-[#4A4843] mt-3 font-normal max-w-xl mx-auto">
          Choose the business world where you will make your CEO decision.
        </p>
        <div className="w-20 h-[2px] bg-[#B58A45] mx-auto mt-5" />
      </div>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        role="radiogroup"
        aria-label="CEO Arenas"
      >
        {domains.map((domain, index) => (
          <DomainCard
            key={domain.id}
            domain={domain}
            index={index}
            isSelected={selectedDomain?.id === domain.id}
            onSelect={handleSelect}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};
