import React from 'react';
import { Domain, ProblemStatement } from '../data/domains';
import { BudgetItem } from '../data/budgets';
import { RotateCcw, Award } from 'lucide-react';
import { sound } from '../utils/audio';

interface FinalChallengeCardProps {
  domain: Domain;
  problem: ProblemStatement;
  budget: BudgetItem;
  onReset: () => void;
}

export const FinalChallengeCard: React.FC<FinalChallengeCardProps> = ({
  domain,
  problem,
  budget,
  onReset,
}) => {
  const handleReset = () => {
    sound.playButtonPress();
    onReset();
  };

  return (
    <section 
      className="w-full max-w-4xl mx-auto px-4 py-8 animate-fadeIn transition-all"
      aria-label="Final CEO Mandate"
    >
      <div className="relative rounded-lg bg-[#FFFFFF] border-4 border-[#111111] p-8 sm:p-14 md:p-16 shadow-[0_25px_70px_rgba(17,17,17,0.15)] text-left">
        
        {/* Top Gold & Black Double Accent Header */}
        <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#B58A45] rounded-t-sm" />

        {/* Mandate Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b-2 border-[#111111]/10 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-[#111111] flex items-center justify-center text-[#B58A45] shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-cinzel text-xs tracking-[0.25em] font-bold text-[#8F6B32] uppercase block">
                EXECUTIVE BRIEFING • STEP 03
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-black text-[#111111] uppercase tracking-[0.12em] mt-0.5">
                YOUR CEO CHALLENGE
              </h2>
            </div>
          </div>

          <div className="px-3.5 py-1 rounded bg-[#F5F1E8] border border-[#B58A45]/40 text-xs font-bold tracking-widest text-[#8F6B32] uppercase self-start sm:self-auto">
            MANDATE LOCKED
          </div>
        </div>

        {/* 3 Core Decision Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          
          {/* Domain */}
          <div className="p-5 rounded-md bg-[#FBF9F5] border border-[#B58A45]/25">
            <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#7A766F] uppercase block mb-1.5">
              DOMAIN
            </span>
            <div className="font-cinzel text-lg sm:text-xl font-bold text-[#111111] leading-tight">
              {domain.fullName}
            </div>
            <div className="text-xs text-[#8F6B32] font-semibold mt-1">
              {domain.badge}
            </div>
          </div>

          {/* Problem */}
          <div className="p-5 rounded-md bg-[#FBF9F5] border border-[#B58A45]/25 md:col-span-1">
            <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#7A766F] uppercase block mb-1.5">
              BUSINESS PROBLEM
            </span>
            <div className="font-cinzel text-lg sm:text-xl font-bold text-[#111111] leading-tight">
              {problem.title}
            </div>
            <div className="text-xs text-[#8F6B32] font-semibold mt-1">
              {problem.stakes}
            </div>
          </div>

          {/* Budget */}
          <div className="p-5 rounded-md bg-[#F5F1E8] border-2 border-[#B58A45]">
            <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#8F6B32] uppercase block mb-1.5">
              AVAILABLE CAPITAL
            </span>
            <div className="font-cinzel text-2xl sm:text-3xl font-black text-[#111111] leading-tight">
              {budget.display}
            </div>
            <div className="text-xs text-[#8F6B32] font-bold mt-1 uppercase">
              Strict Ceiling
            </div>
          </div>

        </div>

        {/* Full Problem Context */}
        <div className="mb-10 space-y-4">
          <h3 className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#8F6B32] uppercase">
            THE STRATEGIC DILEMMA
          </h3>
          <p className="text-lg sm:text-xl text-[#111111] leading-[1.7] pl-4 border-l-4 border-[#B58A45]">
            {problem.situation}
          </p>

          {/* Dedicated Operational Constraints Section */}
          <div className="p-6 rounded-lg bg-[#FAF8F4] border-2 border-[#B58A45]/40 shadow-sm">
            <h4 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8F6B32] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B58A45]"></span>
              OPERATIONAL CONSTRAINTS & RESOURCE LIMITS
            </h4>

            <div className="space-y-2.5 text-sm sm:text-base text-[#111111]">
              <div className="flex items-start space-x-2">
                <span className="font-bold text-[#8F6B32] shrink-0">•</span>
                <p>
                  <strong className="font-bold text-[#111111]">Capital Limit: </strong>
                  Budget is capped strictly at <span className="font-bold text-[#8F6B32]">{budget.display}</span>. The turnaround must be achieved within this capital allocation.
                </p>
              </div>

              {problem.constraint && (
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-[#8F6B32] shrink-0">•</span>
                  <p>
                    <strong className="font-bold text-[#111111]">Operating Reality: </strong>
                    {problem.constraint}
                  </p>
                </div>
              )}

              <div className="flex items-start space-x-2">
                <span className="font-bold text-[#8F6B32] shrink-0">•</span>
                <p>
                  <strong className="font-bold text-[#111111]">Execution Window: </strong>
                  Candidates have a 10-minute executive deliberation window to present their turnaround strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded bg-[#F5F1E8] border border-[#B58A45]/40 mt-4">
            <span className="font-cinzel text-xs font-bold tracking-[0.2em] text-[#8F6B32] uppercase block mb-2">
              CEO DECISION REQUIRED
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#111111] italic font-semibold">
              "{problem.ceoChallenge}"
            </p>
          </div>
        </div>

        {/* Bold Closing Declaration */}
        <div className="text-center py-8 my-6 border-y-2 border-[#111111]/10 bg-[#FAF8F4] rounded-md">
          <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-[#111111] tracking-[0.15em] uppercase mb-4">
            THE DECISION IS YOURS.
          </h3>
          <p className="font-cinzel text-sm sm:text-base md:text-lg font-bold text-[#4A4843] tracking-[0.12em] leading-relaxed max-w-lg mx-auto">
            You have limited time.<br />
            You have limited capital.<br />
            <span className="text-[#B58A45]">Make your call.</span>
          </p>
        </div>

        {/* Start Over Button (Secondary, not competing with primary actions) */}
        <div className="pt-4 flex justify-center">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center space-x-2 px-6 py-2.5 rounded border border-[#111111]/20 hover:border-[#B58A45] bg-[#FFFFFF] hover:bg-[#F5F3EE] text-[#7A766F] hover:text-[#111111] transition-all text-xs font-bold tracking-[0.2em] uppercase shadow-sm focus:outline-none focus:ring-1 focus:ring-[#B58A45]"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#B58A45]" />
            <span>START OVER</span>
          </button>
        </div>

      </div>
    </section>
  );
};
