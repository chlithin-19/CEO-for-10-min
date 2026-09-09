import React from 'react';
import { Shield } from 'lucide-react';

interface EventHeaderProps {
  roundTitle?: string;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  roundTitle = "ROUND 1"
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
            <span className="font-cinzel text-base sm:text-lg md:text-xl tracking-[0.2em] font-bold text-[#111111] uppercase leading-tight">
              CEO FOR 10 MINUTES
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#B58A45] font-bold uppercase mt-0.5">
              CEO DECISION SIMULATION
            </span>
          </div>
        </div>

        {/* Right: Round 1 */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded bg-[#111111] border border-[#B58A45] text-xs font-bold tracking-[0.2em] text-[#FFFFFF] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B58A45] animate-pulse"></span>
            <span className="font-cinzel uppercase">{roundTitle}</span>
          </div>
        </div>

      </div>
    </header>
  );
};
