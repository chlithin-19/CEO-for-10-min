import React from 'react';
import { 
  ShoppingBag, 
  Utensils, 
  GraduationCap, 
  Film, 
  Dumbbell, 
  Truck, 
  Shirt, 
  Smartphone,
  Check
} from 'lucide-react';
import { Domain } from '../data/domains';

interface DomainCardProps {
  domain: Domain;
  index: number;
  isSelected: boolean;
  onSelect: (domain: Domain) => void;
  disabled?: boolean;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  ShoppingBag,
  Utensils,
  GraduationCap,
  Film,
  Dumbbell,
  Truck,
  Shirt,
  Smartphone,
};

export const DomainCard: React.FC<DomainCardProps> = ({
  domain,
  index,
  isSelected,
  onSelect,
  disabled = false,
}) => {
  const IconComponent = ICON_MAP[domain.icon] || ShoppingBag;
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <button
      type="button"
      onClick={() => !disabled && onSelect(domain)}
      disabled={disabled}
      className={`group relative text-left w-full p-5 sm:p-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B58A45]/60 ${
        isSelected
          ? 'bg-[#FFFFFF] border-2 border-[#B58A45] shadow-[0_12px_32px_rgba(181,138,69,0.18)]'
          : 'bg-[#FFFFFF] border border-[#B58A45]/25 hover:border-[#B58A45] shadow-[0_6px_20px_rgba(17,17,17,0.05)] hover:shadow-[0_12px_30px_rgba(17,17,17,0.1)]'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-1'}`}
      aria-pressed={isSelected}
    >
      <div className="flex items-start justify-between mb-4">
        {/* Large Prominent Number (01, 02, etc.) */}
        <span className={`font-cinzel text-2xl sm:text-3xl font-bold tracking-wider transition-colors ${
          isSelected ? 'text-[#B58A45]' : 'text-[#111111]/30 group-hover:text-[#B58A45]'
        }`}>
          {formattedIndex}
        </span>

        {/* Minimal Icon or Selected State */}
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
            <IconComponent className="w-4 h-4 stroke-[1.8]" />
          )}
        </div>
      </div>

      <div>
        <h3 className="font-cinzel text-base sm:text-lg font-bold tracking-wide text-[#111111] leading-snug group-hover:text-black">
          {domain.fullName}
        </h3>
        <p className="text-[12px] tracking-wider text-[#7A766F] font-medium uppercase mt-1.5">
          {domain.badge}
        </p>
      </div>

      {/* Bottom Accent Bar on Selection */}
      {isSelected && (
        <div className="absolute bottom-0 left-4 right-4 h-[3px] bg-[#B58A45] rounded-t" />
      )}
    </button>
  );
};
