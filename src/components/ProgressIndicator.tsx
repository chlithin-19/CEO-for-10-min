import React from 'react';
import { Check } from 'lucide-react';

export type StageStep = 1 | 2 | 3;

interface ProgressIndicatorProps {
  currentStep: StageStep;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  const steps = [
    { number: '01', title: 'PROBLEM' },
    { number: '02', title: 'CAPITAL' },
    { number: '03', title: 'CEO DECISION' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 mb-4 sm:mb-6">
      <div className="flex items-center justify-between relative">
        
        {/* Connecting Track */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#111111]/10 -translate-y-1/2 z-0" />
        
        {/* Active Track Overlay */}
        <div 
          className="absolute top-1/2 left-0 h-[2px] bg-[#B58A45] -translate-y-1/2 z-0 transition-all duration-500"
          style={{ 
            width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' 
          }}
        />

        {steps.map((s, idx) => {
          const stepNum = (idx + 1) as StageStep;
          const isCompleted = currentStep > stepNum;
          const isCurrent = currentStep === stepNum;

          return (
            <div key={s.number} className="relative z-10 flex flex-col items-center">
              <div 
                className={`flex items-center justify-center rounded-full transition-all duration-300 font-cinzel font-bold text-xs ${
                  isCompleted
                    ? 'w-8 h-8 bg-[#B58A45] text-white shadow-sm'
                    : isCurrent
                    ? 'w-9 h-9 bg-[#111111] text-[#B58A45] border-2 border-[#B58A45] shadow-md scale-105'
                    : 'w-8 h-8 bg-[#FFFFFF] text-[#7A766F] border border-[#111111]/20'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 stroke-[3]" />
                ) : (
                  <span>{s.number}</span>
                )}
              </div>

              <span 
                className={`mt-2 font-cinzel text-[11px] sm:text-xs tracking-[0.2em] font-bold uppercase ${
                  isCurrent 
                    ? 'text-[#111111]' 
                    : isCompleted 
                    ? 'text-[#B58A45]' 
                    : 'text-[#7A766F]'
                }`}
              >
                {s.title}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
};
