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
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-10">
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="font-cinzel text-2xl sm:text-[26px] md:text-[28px] font-semibold tracking-[0.2em] text-[#171717] uppercase">
          SELECT YOUR DOMAIN
        </h1>
        <p className="text-xs sm:text-sm tracking-widest text-[#66635D] mt-2 font-normal">
          Choose the arena in which you will make your CEO decision.
        </p>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#B89555]/60 to-transparent mx-auto mt-4" />
      </div>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
        role="radiogroup"
        aria-label="CEO Domains"
      >
        {domains.map((domain) => (
          <DomainCard
            key={domain.id}
            domain={domain}
            isSelected={selectedDomain?.id === domain.id}
            onSelect={handleSelect}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};
