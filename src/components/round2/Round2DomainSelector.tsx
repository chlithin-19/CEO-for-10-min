import React from 'react';
import { Round2Domain } from '../../data/round2Domains';
import { 
  Cpu, 
  Landmark, 
  Zap, 
  HeartPulse, 
  Scale, 
  ShieldCheck, 
  Users, 
  Check, 
  ArrowRight 
} from 'lucide-react';

interface Round2DomainSelectorProps {
  domains: Round2Domain[];
  selectedDomain: Round2Domain | null;
  onSelectDomain: (domain: Round2Domain) => void;
  ceo1: string;
  ceo2: string;
  teamId: string;
  onChangeCeo1: (val: string) => void;
  onChangeCeo2: (val: string) => void;
  onChangeTeamId: (val: string) => void;
  onContinue: () => void;
}

export const Round2DomainSelector: React.FC<Round2DomainSelectorProps> = ({
  domains,
  selectedDomain,
  onSelectDomain,
  ceo1,
  ceo2,
  teamId,
  onChangeCeo1,
  onChangeCeo2,
  onChangeTeamId,
  onContinue,
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 sm:py-8 transition-all animate-fadeIn">
      
      {/* Round 2 Header */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-block px-3.5 py-1 mb-3 rounded bg-[#111111] text-[#B58A45] font-cinzel text-xs font-bold tracking-[0.25em] uppercase">
          ROUND 02 • EXECUTIVE ARENA
        </div>
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.15em] text-[#111111] uppercase leading-tight">
          LEADERSHIP CHALLENGE
        </h1>
        <p className="text-base sm:text-lg tracking-[0.1em] text-[#111111] font-semibold mt-3">
          Two CEOs. One company. One decision.
        </p>
        <p className="text-xs sm:text-sm tracking-[0.08em] text-[#4A4843] mt-1.5 font-medium max-w-xl mx-auto">
          Think together. Decide under pressure. Defend your strategy.
        </p>
        <div className="w-20 h-[2.5px] bg-[#B58A45] mx-auto mt-4" />
      </div>

      {/* Leadership Team Setup Section */}
      <div className="bg-[#FFFFFF] border border-[#B58A45]/30 rounded-lg p-6 sm:p-8 shadow-sm mb-10">
        <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-[#111111]/10">
          <Users className="w-5 h-5 text-[#B58A45]" />
          <h2 className="font-cinzel text-sm sm:text-base font-bold tracking-[0.2em] text-[#111111] uppercase">
            YOUR LEADERSHIP TEAM
          </h2>
          <span className="text-xs text-[#7A766F] tracking-wide ml-auto">
            (Optional Setup)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-[11px] font-cinzel font-bold tracking-[0.15em] text-[#4A4843] uppercase mb-1.5">
              CEO 01
            </label>
            <input
              type="text"
              value={ceo1}
              onChange={(e) => onChangeCeo1(e.target.value)}
              placeholder="Enter participant name"
              className="w-full px-3.5 py-2.5 rounded bg-[#F5F3EE] border border-[#111111]/15 text-[#111111] text-sm focus:outline-none focus:border-[#B58A45] focus:bg-white transition-all placeholder:text-[#7A766F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-cinzel font-bold tracking-[0.15em] text-[#4A4843] uppercase mb-1.5">
              CEO 02
            </label>
            <input
              type="text"
              value={ceo2}
              onChange={(e) => onChangeCeo2(e.target.value)}
              placeholder="Enter participant name"
              className="w-full px-3.5 py-2.5 rounded bg-[#F5F3EE] border border-[#111111]/15 text-[#111111] text-sm focus:outline-none focus:border-[#B58A45] focus:bg-white transition-all placeholder:text-[#7A766F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-cinzel font-bold tracking-[0.15em] text-[#4A4843] uppercase mb-1.5">
              TEAM / CASE ID
            </label>
            <input
              type="text"
              value={teamId}
              onChange={(e) => onChangeTeamId(e.target.value)}
              placeholder="e.g. TEAM-B04"
              className="w-full px-3.5 py-2.5 rounded bg-[#F5F3EE] border border-[#111111]/15 text-[#111111] text-sm focus:outline-none focus:border-[#B58A45] focus:bg-white transition-all placeholder:text-[#7A766F]"
            />
          </div>
        </div>
      </div>

      {/* Manual Domain Selection Section */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-1 mb-2 rounded bg-[#F5F3EE] border border-[#B58A45]/30 text-[#8F6B32] font-cinzel text-xs font-bold tracking-[0.2em] uppercase">
            STEP 01 • SELECT YOUR ARENA
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-black tracking-[0.12em] text-[#111111] uppercase">
            CHOOSE THE BATTLEFIELD
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.08em] text-[#4A4843] mt-1.5 font-medium">
            Select the domain for your boardroom challenge.
          </p>
        </div>

        {/* 6 Domain Cards (3x2 grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {domains.map((domain, index) => {
            const Icon = 
              domain.id === 'ai-deeptech' ? Cpu :
              domain.id === 'fintech-banking' ? Landmark :
              domain.id === 'ev-automotive' ? Zap :
              domain.id === 'healthcare-medtech' ? HeartPulse :
              domain.id === 'law-firms' ? Scale :
              domain.id === 'cybersecurity' ? ShieldCheck : Cpu;
            const isSelected = selectedDomain?.id === domain.id;
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => onSelectDomain(domain)}
                className={`group relative text-left w-full p-5 sm:p-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B58A45]/60 ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-2 border-[#B58A45] shadow-[0_12px_32px_rgba(181,138,69,0.22)] -translate-y-1'
                    : 'bg-[#FFFFFF] border border-[#B58A45]/25 hover:border-[#B58A45] shadow-[0_6px_20px_rgba(17,17,17,0.05)] hover:shadow-[0_12px_30px_rgba(17,17,17,0.1)] hover:-translate-y-0.5'
                } cursor-pointer`}
                aria-pressed={isSelected}
              >
                <div className="flex items-start justify-between mb-4">
                  {/* Number Index */}
                  <span className={`font-cinzel text-2xl sm:text-3xl font-bold tracking-wider transition-colors ${
                    isSelected ? 'text-[#B58A45]' : 'text-[#111111]/25 group-hover:text-[#B58A45]'
                  }`}>
                    {formattedIndex}
                  </span>

                  {/* Icon / Selected State */}
                  <div
                    className={`w-9 h-9 rounded flex items-center justify-center transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#B58A45] text-white shadow-sm'
                        : 'bg-[#F5F3EE] text-[#4A4843] border border-[#B58A45]/20 group-hover:text-[#B58A45] group-hover:border-[#B58A45]'
                    }`}
                  >
                    {isSelected ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Icon className="w-4 h-4 stroke-[2]" />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold tracking-wide text-[#111111] leading-snug group-hover:text-black">
                    {domain.name}
                  </h3>
                  <p className="text-[11px] tracking-wider text-[#8F6B32] font-bold uppercase mt-1">
                    {domain.badge}
                  </p>
                  <p className="text-xs text-[#4A4843] mt-2 line-clamp-2 leading-relaxed font-normal">
                    {domain.description}
                  </p>
                </div>

                {/* Bottom Gold Accent Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-4 right-4 h-[3px] bg-[#B58A45] rounded-t" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Continue CTA Bar */}
      {selectedDomain && (
        <div className="flex flex-col items-center justify-center mt-8 pt-4 animate-fadeIn">
          <div className="mb-4 text-center">
            <span className="text-xs tracking-[0.2em] font-cinzel font-bold text-[#8F6B32] uppercase">
              SELECTED ARENA:
            </span>
            <span className="ml-2 text-sm sm:text-base font-bold text-[#111111] uppercase font-cinzel">
              {selectedDomain.name}
            </span>
          </div>

          <button
            type="button"
            onClick={onContinue}
            className="flex items-center space-x-3 px-10 sm:px-14 py-4 rounded-md bg-[#111111] border-2 border-[#B58A45] hover:bg-[#1A1A1A] hover:border-[#D4B376] text-white text-sm sm:text-base font-cinzel font-bold tracking-[0.2em] uppercase transition-all shadow-button-command hover:-translate-y-0.5 active:translate-y-0.5"
          >
            <span>CONTINUE TO CHALLENGE</span>
            <ArrowRight className="w-4 h-4 text-[#B58A45]" />
          </button>
        </div>
      )}

    </div>
  );
};
