import React from 'react';
import { ProblemStatement, Domain } from '../data/domains';
import { AlertCircle, RotateCcw, ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

interface ResultRevealProps {
  problem: ProblemStatement;
  domain: Domain;
  onSpinAgain: () => void;
  onChangeDomain: () => void;
}

export const ResultReveal: React.FC<ResultRevealProps> = ({
  problem,
  domain,
  onSpinAgain,
  onChangeDomain,
}) => {
  const handleSpinAgain = () => {
    sound.playButtonPress();
    onSpinAgain();
  };

  const handleChangeDomain = () => {
    sound.playButtonPress();
    onChangeDomain();
  };

  return (
    <section 
      className="w-full max-w-4xl mx-auto px-4 py-8 animate-fadeIn transition-all"
      aria-label="Executive Briefing Result"
    >
      {/* Executive Briefing Document Card (White on Ivory) */}
      <div className="relative rounded-lg bg-[#FFFFFF] border border-[rgba(40,35,25,0.12)] p-8 sm:p-12 md:p-14 shadow-[0_10px_40px_-10px_rgba(40,35,25,0.08)]">
        
        {/* Top Champagne Gold Accent Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B89555] rounded-t-lg" />

        {/* Confidential Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[rgba(40,35,25,0.08)] gap-3">
          <div className="flex items-center space-x-2.5 text-[#8F713D]">
            <FileText className="w-4 h-4 stroke-[1.5]" />
            <span className="font-cinzel text-xs tracking-[0.25em] font-semibold uppercase">
              CONFIDENTIAL BRIEFING
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs tracking-wider text-[#66635D]">
            <span className="px-3 py-1 rounded border border-[#B89555]/30 bg-[#FAF8F5] font-medium text-[#8F713D]">
              {domain.fullName.toUpperCase()}
            </span>
            <span className="text-[#96928A]">•</span>
            <span>CHALLENGE #{problem.number}</span>
          </div>
        </div>

        {/* Header & Problem Title */}
        <div className="mb-8">
          <span className="font-cinzel text-xl sm:text-2xl md:text-[28px] font-semibold tracking-[0.2em] text-[#66635D] uppercase block">
            YOUR CEO CHALLENGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-[#171717] mt-3 tracking-tight leading-tight">
            {problem.title}
          </h2>
          <div className="inline-block mt-3 text-xs tracking-wider text-[#8F713D] font-medium uppercase bg-[#FAF6EE] px-3 py-1 rounded border border-[#B89555]/30">
            {problem.stakes}
          </div>
        </div>

        {/* The Situation (18-20px, line-height 1.7) */}
        <div className="mb-8 space-y-3">
          <h3 className="text-xs font-semibold tracking-[0.25em] text-[#8F713D] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89555]"></span>
            THE SITUATION
          </h3>
          <p className="text-lg sm:text-xl md:text-[20px] text-[#171717] leading-[1.7] font-normal pl-4 border-l-2 border-[#B89555]/40">
            {problem.situation}
          </p>
        </div>

        {/* Operational Constraints (if present) */}
        {problem.constraint && (
          <div className="mb-8 p-5 sm:p-6 rounded-md bg-[#FAF8F5] border border-[rgba(40,35,25,0.08)]">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#8F713D] uppercase flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-[#B89555]" />
              OPERATIONAL CONSTRAINTS
            </h4>
            <p className="text-base sm:text-lg text-[#66635D] leading-[1.65]">
              {problem.constraint}
            </p>
          </div>
        )}

        {/* CEO Decision Required */}
        <div className="mb-10 p-6 sm:p-8 rounded-md bg-[#FAF6EE] border-l-4 border-[#B89555] border-y border-r border-[rgba(40,35,25,0.06)]">
          <h3 className="text-xs font-semibold tracking-[0.25em] text-[#8F713D] uppercase flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-[#B89555]" />
            CEO DECISION REQUIRED
          </h3>
          <p className="text-xl sm:text-2xl text-[#171717] font-serif italic leading-relaxed">
            "{problem.ceoChallenge}"
          </p>
        </div>

        {/* Final Microcopy */}
        <div className="text-center pt-2 pb-8 border-t border-[rgba(40,35,25,0.08)]">
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#66635D] uppercase font-medium">
            Your decision. Your responsibility.
          </p>
        </div>

        {/* Executive Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={handleSpinAgain}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded bg-[#FFFFFF] border-2 border-[#B89555] hover:bg-[#FAF6EE] text-[#171717] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-150 hover:-translate-y-0.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#B89555]"
          >
            <RotateCcw className="w-4 h-4 text-[#8F713D]" />
            <span>SPIN AGAIN</span>
          </button>

          <button
            type="button"
            onClick={handleChangeDomain}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 rounded bg-transparent border border-[rgba(40,35,25,0.2)] hover:border-[#171717] text-[#66635D] hover:text-[#171717] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[#B89555]/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>CHANGE DOMAIN</span>
          </button>
        </div>

      </div>
    </section>
  );
};
