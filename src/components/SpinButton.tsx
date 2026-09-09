import React from 'react';
import { sound } from '../utils/audio';

interface SpinButtonProps {
  isSpinning: boolean;
  onClick: () => void;
  disabled?: boolean;
  label?: string;
  spinningLabel?: string;
}

export const SpinButton: React.FC<SpinButtonProps> = ({
  isSpinning,
  onClick,
  disabled = false,
  label = "SPIN THE WHEEL",
  spinningLabel = "SPINNING...",
}) => {
  const handleClick = () => {
    if (disabled || isSpinning) return;
    sound.playButtonPress();
    onClick();
  };

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled || isSpinning}
        aria-busy={isSpinning}
        className={`relative group h-[58px] sm:h-[62px] px-12 sm:px-16 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B58A45]/60 flex items-center justify-center ${
          isSpinning
            ? 'bg-[#222222] border-2 border-[#B58A45]/50 text-[#B58A45] cursor-wait'
            : disabled
            ? 'bg-[#111111]/40 border-2 border-[#111111]/20 text-[#7A766F] cursor-not-allowed'
            : 'bg-[#111111] border-2 border-[#B58A45] hover:bg-[#1A1A1A] hover:border-[#D4B376] text-white hover:-translate-y-0.5 shadow-button-command active:translate-y-0.5'
        }`}
      >
        <div className="flex items-center justify-center space-x-3">
          {isSpinning && (
            <span className="w-2.5 h-2.5 rounded-full bg-[#B58A45] animate-ping" />
          )}
          <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.2em] uppercase text-white">
            {isSpinning ? spinningLabel : label}
          </span>
        </div>
      </button>

      {/* Subtext when spinning */}
      {isSpinning && (
        <span className="text-xs sm:text-sm tracking-[0.2em] text-[#8F6B32] font-bold mt-3 uppercase animate-pulse">
          Deliberating Executive Outcome…
        </span>
      )}
    </div>
  );
};
