import React from 'react';
import { ProblemStatement as ProblemType, Domain } from '../data/domains';
import { FileText, ShieldAlert, Target } from 'lucide-react';

interface ProblemStatementProps {
  problem: ProblemType;
  domain: Domain;
}

export const ProblemStatement: React.FC<ProblemStatementProps> = ({
  problem,
  domain,
}) => {
  return (
    <div className="w-full flex flex-col space-y-6 text-left">
      
      {/* Top Briefing Metadata */}
      <div className="flex items-center justify-between pb-3 border-b border-[#C9A96E]/20">
        <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#C9A96E] uppercase">
          <FileText className="w-3.5 h-3.5 stroke-[1.8]" />
          <span>CONFIDENTIAL EXECUTIVE BRIEFING</span>
        </div>
        <div className="text-[10px] sm:text-xs font-mono tracking-widest text-[#686762] uppercase">
          REF: #{domain.id.toUpperCase()}-{String(problem.number).padStart(2, '0')}
        </div>
      </div>

      {/* Main Problem Headline */}
      <div>
        <div className="text-xs tracking-[0.25em] text-[#A9A7A1] uppercase mb-1.5 font-medium">
          {domain.fullName}
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#F5F2EA] leading-tight">
          {problem.title}
        </h2>
      </div>

      {/* Section 1: The Situation */}
      <div className="bg-[#0D0F13] p-5 sm:p-6 rounded-sm border border-[#C9A96E]/15 relative">
        <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.2em] text-[#C9A96E] uppercase mb-2.5">
          <ShieldAlert className="w-3.5 h-3.5 text-[#C9A96E]" />
          <span>THE SITUATION</span>
        </div>
        <p className="text-[#F5F2EA] text-sm sm:text-base leading-relaxed tracking-normal font-light">
          {problem.situation}
        </p>
      </div>

      {/* Section 2: CEO Decision Required */}
      <div className="bg-[#14171E] p-5 sm:p-6 rounded-sm border border-[#C9A96E]/30 relative shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.2em] text-[#C9A96E] uppercase mb-2.5">
          <Target className="w-3.5 h-3.5 text-[#C9A96E]" />
          <span className="font-bold">CEO DECISION REQUIRED</span>
        </div>
        <p className="text-white text-base sm:text-lg font-medium leading-snug tracking-wide font-serif">
          {problem.ceoChallenge}
        </p>
      </div>

      {/* Confidential Footer Reminder */}
      <div className="pt-2 text-center">
        <p className="text-xs tracking-[0.25em] text-[#A9A7A1] font-mono uppercase">
          Your decision. Your responsibility.
        </p>
      </div>

    </div>
  );
};
