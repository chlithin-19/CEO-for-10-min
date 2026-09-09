import React from 'react';
import { sound } from '../utils/audio';

interface SpinButtonProps {
  isSpinning: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const SpinButton: React.FC<SpinButtonProps> = ({
  isSpinning,
  onClick,
  disabled = false,
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
        className={`relative group h-14 sm:h-16 px-12 sm:px-16 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B89555]/50 flex items-center justify-center ${
          isSpinning
            ? 'bg-[#FAF8F5] border-2 border-[#B89555]/40 text-[#66635D] cursor-wait'
            : disabled
            ? 'bg-[#FFFFFF] border-2 border-[rgba(40,35,25,0.15)] text-[#96928A] cursor-not-allowed opacity-60'
            : 'bg-[#FFFFFF] border-2 border-[#B89555] hover:bg-[#FAF6EE] text-[#171717] hover:text-black hover:-translate-y-0.5 hover:shadow-button-hover active:translate-y-0.5 shadow-sm'
        }`}
      >
        <div className="flex items-center justify-center space-x-3">
          {isSpinning && (
            <span className="w-2.5 h-2.5 rounded-full bg-[#B89555] animate-ping" />
          )}
          <span className="font-cinzel text-lg sm:text-xl font-semibold tracking-[0.2em] uppercase">
            {isSpinning ? "DECISION IN PROGRESS…" : "SPIN THE WHEEL"}
          </span>
        </div>
      </button>

      {/* Supporting spinning indicator status text */}
      {isSpinning && (
        <span className="text-sm sm:text-base tracking-[0.18em] text-[#8F713D] font-medium mt-3 uppercase animate-pulse">
          Deliberating executive challenge…
        </span>
      )}
    </div>
  );
};
