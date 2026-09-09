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
  ChevronRight,
  Check
} from 'lucide-react';
import { Domain } from '../data/domains';

interface DomainCardProps {
  domain: Domain;
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
  isSelected,
  onSelect,
  disabled = false,
}) => {
  const IconComponent = ICON_MAP[domain.icon] || ShoppingBag;

  return (
    <button
      type="button"
      onClick={() => !disabled && onSelect(domain)}
      disabled={disabled}
      className={`group relative text-left w-full p-4 rounded transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#B89555]/50 ${
        isSelected
          ? 'bg-[#FAF8F5] border-2 border-[#B89555] shadow-[0_4px_16px_rgba(184,149,85,0.12)]'
          : 'bg-[#FFFFFF] border border-[rgba(40,35,25,0.12)] hover:border-[#B89555]/60 hover:shadow-sm'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5'}`}
      aria-pressed={isSelected}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3.5">
          <div
            className={`w-9 h-9 rounded flex items-center justify-center transition-colors duration-200 ${
              isSelected
                ? 'bg-[#B89555]/15 text-[#8F713D] border border-[#B89555]/40'
                : 'bg-[#F7F5F0] text-[#66635D] border border-[rgba(40,35,25,0.08)] group-hover:text-[#8F713D] group-hover:border-[#B89555]/30'
            }`}
          >
            <IconComponent className="w-4 h-4 stroke-[1.5]" />
          </div>

          <div>
            <div className="text-[14px] font-semibold tracking-wide text-[#171717] group-hover:text-black">
              {domain.fullName}
            </div>
            <div className="text-[11px] tracking-wider text-[#96928A] group-hover:text-[#66635D] mt-0.5">
              {domain.badge}
            </div>
          </div>
        </div>

        {/* Selected Indicator */}
        <div className="pt-1">
          {isSelected ? (
            <div className="w-4 h-4 rounded-full bg-[#B89555] flex items-center justify-center text-white shadow-sm">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
          ) : (
            <ChevronRight className="w-4 h-4 text-[#96928A] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />
          )}
        </div>
      </div>
    </button>
  );
};
