import React from 'react';
import { Shield } from 'lucide-react';

interface EventHeaderProps {
  activeRound?: 'round1' | 'round2';
  onSelectRound?: (round: 'round1' | 'round2') => void;
  roundTitle?: string;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  activeRound = 'round1',
  onSelectRound,
  roundTitle,
}) => {
  return (
    <header className="w-full border-b border-[#B58A45]/20 bg-[#FFFFFF] sticky top-0 z-40 px-6 sm:px-10 py-4 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Event Identity */}
        <div className="flex items-center space-x-3.5">
          <div className="w-9 h-9 rounded bg-[#111111] border border-[#B58A45] flex items-center justify-center text-[#B58A45] shadow-sm">
            <Shield className="w-5 h-5 stroke-[2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-cinzel text-base sm:text-lg md:text-xl tracking-[0.2em] font-bold text-[#111111] uppercase leading-tight">
                CEO FOR 10 MINUTES
              </span>
              {roundTitle && (
                <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#B58A45]/10 border border-[#B58A45]/30 text-[#8F6B32] text-[9px] font-bold tracking-widest uppercase font-cinzel">
                  {roundTitle}
                </span>
              )}
            </div>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#B58A45] font-bold uppercase mt-0.5">
              THINK. DECIDE. LEAD.
            </span>
          </div>
        </div>

        {/* Right: Round Navigation Buttons */}
        <nav className="flex items-center space-x-2.5" aria-label="Competition Rounds">
          {/* ROUND 1 BUTTON */}
          <button
            type="button"
            onClick={() => onSelectRound && onSelectRound('round1')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded transition-all text-xs font-bold tracking-[0.2em] shadow-sm font-cinzel uppercase ${
              activeRound === 'round1'
                ? 'bg-[#111111] border border-[#B58A45] text-[#FFFFFF]'
                : 'bg-[#FFFFFF] border border-[#B58A45]/30 text-[#4A4843] hover:text-[#111111] hover:border-[#B58A45]'
            }`}
            aria-current={activeRound === 'round1' ? 'page' : undefined}
          >
            {activeRound === 'round1' && (
              <span className="w-2 h-2 rounded-full bg-[#B58A45] animate-pulse"></span>
            )}
            <span>ROUND 1</span>
          </button>

          {/* ROUND 2 BUTTON */}
          <button
            type="button"
            onClick={() => onSelectRound && onSelectRound('round2')}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded transition-all text-xs font-bold tracking-[0.2em] shadow-sm font-cinzel uppercase ${
              activeRound === 'round2'
                ? 'bg-[#111111] border border-[#B58A45] text-[#FFFFFF]'
                : 'bg-[#FFFFFF] border border-[#B58A45]/30 text-[#4A4843] hover:text-[#111111] hover:border-[#B58A45]'
            }`}
            aria-current={activeRound === 'round2' ? 'page' : undefined}
          >
            {activeRound === 'round2' && (
              <span className="w-2 h-2 rounded-full bg-[#B58A45] animate-pulse"></span>
            )}
            <span>ROUND 2</span>
          </button>
        </nav>

      </div>
    </header>
  );
};
