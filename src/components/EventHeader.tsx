import React, { useState } from 'react';
import { Volume2, VolumeX, Shield } from 'lucide-react';
import { sound } from '../utils/audio';

interface EventHeaderProps {
  roundTitle?: string;
}

export const EventHeader: React.FC<EventHeaderProps> = ({
  roundTitle = "ROUND 1 • EXECUTIVE SIMULATION"
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
    <header className="w-full border-b border-[rgba(40,35,25,0.08)] bg-[#FFFFFF]/90 backdrop-blur-md sticky top-0 z-40 px-6 py-4 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left: Event Identity */}
        <div className="flex items-center space-x-3.5">
          <div className="w-7 h-7 rounded border border-[#B89555]/40 bg-[#FAF8F5] flex items-center justify-center text-[#B89555]">
            <Shield className="w-4 h-4 stroke-[1.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] font-semibold text-[#171717] uppercase">
              CEO FOR 10 MINUTES
            </span>
            <span className="text-[10px] tracking-[0.22em] text-[#B89555] font-semibold uppercase mt-0.5">
              THINK. DECIDE. LEAD.
            </span>
          </div>
        </div>

        {/* Right: Round indicator & Minimal Sound Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded border border-[rgba(40,35,25,0.1)] bg-[#FAF8F5] text-[11px] font-medium tracking-[0.15em] text-[#66635D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89555]"></span>
            <span>{roundTitle}</span>
          </div>

          <button
            onClick={handleToggleSound}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded border border-[rgba(40,35,25,0.12)] hover:border-[#B89555] bg-[#FFFFFF] text-[#66635D] hover:text-[#171717] transition-all text-xs tracking-wider focus:outline-none focus:ring-1 focus:ring-[#B89555]/50 shadow-sm"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#96928A]" />
                <span className="text-[11px] hidden md:inline text-[#96928A]">MUTED</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#B89555]" />
                <span className="text-[11px] hidden md:inline text-[#171717]">AUDIO ON</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
