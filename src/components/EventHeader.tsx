import React, { useState } from 'react';
import { Volume2, VolumeX, Shield } from 'lucide-react';
import { sound } from '../utils/audio';

interface EventHeaderProps {
  roundTitle?: string;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  roundTitle = "ROUND 1"
}) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playButtonPress();
    }
  };

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

        {/* Right: Round 1 & Audio */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded bg-[#111111] border border-[#B58A45] text-xs font-bold tracking-[0.2em] text-[#FFFFFF] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B58A45] animate-pulse"></span>
            <span className="font-cinzel uppercase">{roundTitle}</span>
          </div>

          <button
            onClick={handleToggleSound}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded border border-[rgba(17,17,17,0.15)] hover:border-[#B58A45] bg-[#FFFFFF] text-[#4A4843] hover:text-[#111111] transition-all text-xs tracking-wider focus:outline-none focus:ring-1 focus:ring-[#B58A45]/50 shadow-sm"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-[#7A766F]" />
                <span className="text-[11px] hidden md:inline text-[#7A766F]">MUTED</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#B58A45]" />
                <span className="text-[11px] hidden md:inline text-[#111111] font-medium">AUDIO ON</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
