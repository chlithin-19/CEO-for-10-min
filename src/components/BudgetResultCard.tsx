import React from 'react';
import { BudgetItem } from '../data/budgets';
import { ProblemStatement, Domain } from '../data/domains';
import { Coins, AlertTriangle, ArrowDown, ShieldAlert } from 'lucide-react';
import { sound } from '../utils/audio';

interface BudgetResultCardProps {
  budget: BudgetItem;
  problem: ProblemStatement;
  domain: Domain;
  onProceedToFinal: () => void;
  isFinalUnlocked: boolean;
}

export const BudgetResultCard: React.FC<BudgetResultCardProps> = ({
  budget,
  problem,
  domain,
  onProceedToFinal,
  isFinalUnlocked,
}) => {
  const handleProceed = () => {
    sound.playButtonPress();
    onProceedToFinal();
  };

  return (
    <section 
      className="w-full max-w-4xl mx-auto px-4 py-6 animate-fadeIn transition-all"
      aria-label="Available Capital Briefing"
    >
      <div className="relative rounded-lg bg-[#FFFFFF] border-2 border-[#B58A45] p-8 sm:p-12 md:p-14 text-center shadow-executive-card">
        
        {/* Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#B58A45] rounded-t-lg" />

        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded bg-[#111111] text-[#B58A45] font-cinzel text-xs font-bold tracking-[0.25em] uppercase mb-4">
          <Coins className="w-3.5 h-3.5" />
          <span>CAPITAL ALLOCATED</span>
        </div>

        <h3 className="font-cinzel text-xs sm:text-sm tracking-[0.25em] font-bold text-[#7A766F] uppercase">
          YOUR AVAILABLE CAPITAL
        </h3>

        {/* HUGE AMOUNT AS VISUAL FOCAL POINT */}
        <div className="my-5 sm:my-7 py-6 sm:py-8 rounded-lg bg-[#F5F1E8] border border-[#B58A45]/40 shadow-inner">
          <div className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#111111] tracking-tight">
            {budget.display.toUpperCase()}
          </div>
          <div className="text-xs sm:text-sm tracking-[0.25em] text-[#8F6B32] font-bold uppercase mt-3">
            {budget.subtext}
          </div>
        </div>

        {/* THIS IS YOUR LIMIT */}
        <div className="space-y-1.5 mb-8">
          <div className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold tracking-[0.25em] text-[#B58A45] uppercase font-cinzel">
            <AlertTriangle className="w-4 h-4 text-[#B58A45]" />
            <span>THIS IS YOUR LIMIT.</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#111111] font-medium max-w-xl mx-auto leading-relaxed">
            You must build your CEO strategy within this available capital.
          </p>
        </div>

        {/* PROMINENT OPERATIONAL CONSTRAINTS SECTION */}
        <div className="mb-8 p-6 sm:p-7 rounded-lg bg-[#FAF8F4] border-2 border-[#B58A45]/40 text-left shadow-sm">
          <div className="flex items-center space-x-2.5 mb-3.5 border-b border-[#B58A45]/20 pb-2.5">
            <ShieldAlert className="w-5 h-5 text-[#8F6B32]" />
            <h4 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8F6B32] uppercase">
              OPERATIONAL & CAPITAL CONSTRAINTS
            </h4>
          </div>

          <div className="space-y-3 text-sm sm:text-base text-[#111111]">
            <div className="flex items-start space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#B58A45] mt-2 shrink-0"></span>
              <p className="leading-relaxed">
                <strong className="font-bold text-[#111111]">Capital Ceiling: </strong>
                Budget is locked strictly at <span className="font-bold text-[#8F6B32]">{budget.display}</span>. No supplemental debt, credit facilities, or equity dilution may be assumed.
              </p>
            </div>

            {problem.constraint && (
              <div className="flex items-start space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-[#B58A45] mt-2 shrink-0"></span>
                <p className="leading-relaxed">
                  <strong className="font-bold text-[#111111]">Operating Constraint: </strong>
                  {problem.constraint}
                </p>
              </div>
            )}

            <div className="flex items-start space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-[#B58A45] mt-2 shrink-0"></span>
              <p className="leading-relaxed">
                <strong className="font-bold text-[#111111]">Arena Scope: </strong>
                Strategy must address <span className="font-semibold">{domain.fullName}</span> with active stakes in <span className="font-semibold text-[#8F6B32]">{problem.stakes}</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Proceed to Final Challenge CTA */}
        {!isFinalUnlocked && (
          <div className="pt-2 border-t border-[#111111]/10">
            <button
              type="button"
              onClick={handleProceed}
              className="h-14 sm:h-16 px-10 sm:px-14 rounded-md bg-[#111111] hover:bg-[#222222] border-2 border-[#B58A45] text-white hover:border-[#D4B376] transition-all duration-200 flex items-center justify-center space-x-3 shadow-button-command hover:-translate-y-0.5 active:translate-y-0.5 mx-auto"
            >
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.2em] uppercase">
                LOCK STRATEGY & VIEW MANDATE
              </span>
              <ArrowDown className="w-5 h-5 text-[#B58A45] animate-bounce" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
