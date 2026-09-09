import React from 'react';
import { ProblemStatement, Domain } from '../data/domains';
import { AlertCircle, CheckCircle2, ArrowDown } from 'lucide-react';
import { sound } from '../utils/audio';

interface ProblemCardProps {
  problem: ProblemStatement;
  domain: Domain;
  onProceedToBudget: () => void;
  isBudgetUnlocked: boolean;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({
  problem,
  domain,
  onProceedToBudget,
  isBudgetUnlocked,
}) => {
  const handleProceed = () => {
    sound.playButtonPress();
    onProceedToBudget();
  };

  return (
    <section 
      className="w-full max-w-4xl mx-auto px-4 py-6 animate-fadeIn transition-all"
      aria-label="Executive Problem Briefing"
    >
      <div className="relative rounded-lg bg-[#FFFFFF] border-2 border-[#B58A45] p-8 sm:p-12 md:p-14 shadow-executive-card">
        
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#B58A45] rounded-t-lg" />

        {/* Header Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#111111]/10 gap-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#111111] text-[#B58A45] font-cinzel text-xs font-bold tracking-[0.25em] uppercase">
            <span>PROBLEM SELECTED</span>
          </div>

          <div className="flex items-center space-x-3 text-xs tracking-wider text-[#4A4843]">
            <span className="font-bold text-[#111111] uppercase tracking-widest">{domain.fullName}</span>
            <span className="text-[#B58A45] font-bold">•</span>
            <span className="font-semibold text-[#8F6B32]">CHALLENGE #{problem.number}</span>
          </div>
        </div>

        {/* Problem Title & Stakes */}
        <div className="mb-8">
          <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] font-bold text-[#7A766F] uppercase block">
            YOUR CEO CHALLENGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] mt-2.5 tracking-tight leading-tight">
            {problem.title}
          </h2>
          <div className="inline-block mt-3 text-xs tracking-wider text-[#8F6B32] font-bold uppercase bg-[#F5F1E8] px-3.5 py-1.5 rounded border border-[#B58A45]/30">
            {problem.stakes}
          </div>
        </div>

        {/* The Situation (18-20px, high legibility) */}
        <div className="mb-8 space-y-3">
          <h3 className="text-xs font-bold tracking-[0.25em] text-[#8F6B32] uppercase flex items-center gap-2 font-cinzel">
            <span className="w-2 h-2 rounded-full bg-[#B58A45]"></span>
            THE SITUATION
          </h3>
          <p className="text-lg sm:text-xl md:text-[21px] text-[#111111] leading-[1.7] font-normal pl-4 border-l-4 border-[#B58A45]">
            {problem.situation}
          </p>
        </div>

        {/* Operational Constraints (if present) */}
        {problem.constraint && (
          <div className="mb-8 p-5 sm:p-6 rounded-md bg-[#FBF9F5] border border-[#B58A45]/30">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#8F6B32] uppercase flex items-center gap-2 mb-2 font-cinzel">
              <AlertCircle className="w-4 h-4 text-[#B58A45]" />
              OPERATIONAL CONSTRAINTS
            </h4>
            <p className="text-base sm:text-lg text-[#4A4843] leading-[1.65]">
              {problem.constraint}
            </p>
          </div>
        )}

        {/* CEO Decision Required */}
        <div className="mb-10 p-6 sm:p-8 rounded-md bg-[#F5F1E8] border-l-4 border-[#111111] border-y border-r border-[#B58A45]/30 shadow-sm">
          <h3 className="text-xs font-bold tracking-[0.25em] text-[#111111] uppercase flex items-center gap-2 mb-3 font-cinzel">
            <CheckCircle2 className="w-4 h-4 text-[#B58A45]" />
            CEO DECISION REQUIRED
          </h3>
          <p className="text-xl sm:text-2xl text-[#111111] font-serif italic leading-relaxed font-semibold">
            "{problem.ceoChallenge}"
          </p>
        </div>

        {/* Proceed to Step 02 CTA */}
        {!isBudgetUnlocked && (
          <div className="flex flex-col items-center pt-4 border-t border-[#111111]/10">
            <button
              type="button"
              onClick={handleProceed}
              className="h-14 sm:h-16 px-10 sm:px-14 rounded-md bg-[#111111] hover:bg-[#222222] border-2 border-[#B58A45] text-white hover:border-[#D4B376] transition-all duration-200 flex items-center justify-center space-x-3 shadow-button-command hover:-translate-y-0.5 active:translate-y-0.5"
            >
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.2em] uppercase">
                NOW, ALLOCATE YOUR CAPITAL
              </span>
              <ArrowDown className="w-5 h-5 text-[#B58A45] animate-bounce" />
            </button>
            <span className="text-xs tracking-[0.18em] text-[#7A766F] uppercase mt-2.5 font-medium">
              Step 02: Budget Wheel Awaits
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
