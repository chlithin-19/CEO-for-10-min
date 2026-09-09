import React from 'react';
import { Domain } from '../data/domains';
import { ArrowLeft } from 'lucide-react';
import { sound } from '../utils/audio';

interface ResetControlsProps {
  domain: Domain;
  onChangeDomain: () => void;
  disabled?: boolean;
}

export const ResetControls: React.FC<ResetControlsProps> = ({
  domain,
  onChangeDomain,
  disabled = false,
}) => {
  const handleChange = () => {
    if (disabled) return;
    sound.playButtonPress();
    onChangeDomain();
  };

  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto pt-5 pb-2 px-4 border-t border-[rgba(40,35,25,0.08)] text-xs text-[#66635D]">
      <div className="flex items-center space-x-2">
        <span className="text-[#96928A]">Active Arena:</span>
        <span className="text-[#171717] font-semibold tracking-wide">
          {domain.fullName}
        </span>
      </div>

      <button
        type="button"
        onClick={handleChange}
        disabled={disabled}
        className={`flex items-center space-x-1.5 py-1.5 px-3 rounded transition-all ${
          disabled
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:text-[#171717] hover:bg-[#FFFFFF] border border-transparent hover:border-[rgba(40,35,25,0.12)] shadow-sm'
        }`}
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span className="tracking-wider uppercase text-[11px] font-medium">Change Domain</span>
      </button>
    </div>
  );
};
