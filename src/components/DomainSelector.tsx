import React from 'react';
import { Domain } from '../data/domains';
import { DomainCard } from './DomainCard';
import { sound } from '../utils/audio';
import { Users } from 'lucide-react';

interface DomainSelectorProps {
  domains: Domain[];
  selectedDomain: Domain | null;
  onSelectDomain: (domain: Domain) => void;
  disabled?: boolean;
  teamId: string;
  member1: string;
  member2: string;
  onChangeTeamId: (val: string) => void;
  onChangeMember1: (val: string) => void;
  onChangeMember2: (val: string) => void;
}

export const DomainSelector: React.FC<DomainSelectorProps> = ({
  domains,
  selectedDomain,
  onSelectDomain,
  disabled = false,
  teamId,
  member1,
  member2,
  onChangeTeamId,
  onChangeMember1,
  onChangeMember2,
}) => {
  const handleSelect = (domain: Domain) => {
    sound.playButtonPress();
    onSelectDomain(domain);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-10">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
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

      {/* Leadership Team Setup Section (Two-Member Team) */}
      <div className="bg-[#FFFFFF] border border-[#B58A45]/30 rounded-lg p-6 sm:p-8 shadow-sm mb-10 text-left">
        <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-[#111111]/10">
          <Users className="w-5 h-5 text-[#B58A45]" />
          <h2 className="font-cinzel text-sm sm:text-base font-bold tracking-[0.2em] text-[#111111] uppercase">
            YOUR LEADERSHIP TEAM
          </h2>
          <span className="text-xs text-[#8F6B32] font-semibold tracking-wide ml-auto">
            (Two-Member Team)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-[11px] font-cinzel font-bold tracking-[0.15em] text-[#4A4843] uppercase mb-1.5">
              TEAM MEMBER 1
            </label>
            <input
              type="text"
              value={member1}
              onChange={(e) => onChangeMember1(e.target.value)}
              placeholder="e.g. Your Name"
              className="w-full px-3.5 py-2.5 rounded bg-[#F5F3EE] border border-[#111111]/15 text-[#111111] text-sm focus:outline-none focus:border-[#B58A45] focus:bg-white transition-all placeholder:text-[#7A766F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-cinzel font-bold tracking-[0.15em] text-[#4A4843] uppercase mb-1.5">
              TEAM MEMBER 2
            </label>
            <input
              type="text"
              value={member2}
              onChange={(e) => onChangeMember2(e.target.value)}
              placeholder="e.g. Your Name"
              className="w-full px-3.5 py-2.5 rounded bg-[#F5F3EE] border border-[#111111]/15 text-[#111111] text-sm focus:outline-none focus:border-[#B58A45] focus:bg-white transition-all placeholder:text-[#7A766F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-cinzel font-bold tracking-[0.15em] text-[#4A4843] uppercase mb-1.5">
              TEAM ID
            </label>
            <input
              type="text"
              value={teamId}
              onChange={(e) => onChangeTeamId(e.target.value)}
              placeholder="e.g. T01"
              className="w-full px-3.5 py-2.5 rounded bg-[#F5F3EE] border border-[#111111]/15 text-[#111111] text-sm focus:outline-none focus:border-[#B58A45] focus:bg-white transition-all placeholder:text-[#7A766F]"
            />
          </div>
        </div>
      </div>

      {/* 4 Domain Cards */}
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
