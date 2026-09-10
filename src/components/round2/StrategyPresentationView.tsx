import React from 'react';
import { Shield, UserPlus, RotateCcw, ArrowLeft } from 'lucide-react';
import { sound } from '../../utils/audio';

interface StrategyPresentationViewProps {
  teamId: string;
  ceo1: string;
  ceo2: string;
  onNextTeam: () => void;
  onBackToCase: () => void;
  onStartOver: () => void;
}

export const StrategyPresentationView: React.FC<StrategyPresentationViewProps> = ({
  teamId,
  ceo1,
  ceo2,
  onNextTeam,
  onBackToCase,
  onStartOver,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-16 transition-all animate-fadeIn flex flex-col items-center justify-center min-h-[550px]">
      
      {/* The Central Clean Presentation Card */}
      <div className="w-full bg-[#FFFFFF] border-2 border-[#B58A45] rounded-xl p-8 sm:p-14 md:p-16 shadow-xl text-center relative overflow-hidden flex flex-col items-center justify-center">
        
        {/* Subtle Luxury Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#B58A45]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#B58A45]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#B58A45]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#B58A45]" />

        {/* Executive Icon Emblem */}
        <div className="w-14 h-14 rounded-full bg-[#111111] border-2 border-[#B58A45] flex items-center justify-center text-[#B58A45] mb-6 shadow-md">
          <Shield className="w-7 h-7 stroke-[1.8]" />
        </div>

        {/* STRATEGY PRESENTATION TITLE */}
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[0.2em] text-[#111111] uppercase leading-tight">
          STRATEGY PRESENTATION
        </h1>

        {/* Thin Gold Separator */}
        <div className="w-24 h-[3px] bg-[#B58A45] mx-auto my-6" />

        {/* Team ID */}
        <div className="text-sm sm:text-base md:text-lg font-cinzel font-bold tracking-[0.25em] text-[#8F6B32] uppercase mb-4">
          Team ID: <span className="text-[#111111] font-black">{teamId || 'TEAM-01'}</span>
        </div>

        {/* Teammate 1 & Teammate 2 Names */}
        <div className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.12em] text-[#111111] mt-2 mb-2">
          {ceo1 || 'Teammate 1'} <span className="text-[#B58A45] font-light">&</span> {ceo2 || 'Teammate 2'}
        </div>

        {/* Executive Tagline */}
        <p className="text-xs sm:text-sm tracking-[0.3em] text-[#7A766F] font-cinzel uppercase mt-6 font-semibold">
          CEO FOR 10 MINUTES • THINK. DECIDE. LEAD.
        </p>

      </div>

      {/* Host Controls Bar (Discreet & Functional) */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full">
        
        {/* Next Team Button */}
        <button
          type="button"
          onClick={() => {
            sound.playButtonPress();
            onNextTeam();
          }}
          className="flex items-center space-x-2 px-6 py-3 rounded bg-[#111111] hover:bg-[#B58A45] text-white hover:text-[#111111] text-xs font-bold font-cinzel tracking-[0.2em] uppercase transition-all shadow-md"
        >
          <UserPlus className="w-4 h-4" />
          <span>NEXT TEAM</span>
        </button>

        {/* Start Over Button */}
        <button
          type="button"
          onClick={() => {
            sound.playButtonPress();
            onStartOver();
          }}
          className="flex items-center space-x-2 px-5 py-3 rounded bg-white border border-[#B58A45]/40 text-[#4A4843] hover:text-[#111111] hover:border-[#B58A45] text-xs font-bold font-cinzel tracking-[0.18em] uppercase transition-all shadow-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>START OVER</span>
        </button>

        {/* Back to Case Details Button */}
        <button
          type="button"
          onClick={() => {
            sound.playButtonPress();
            onBackToCase();
          }}
          className="flex items-center space-x-1.5 px-4 py-3 text-xs font-bold font-cinzel text-[#7A766F] hover:text-[#111111] tracking-wider uppercase transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RE-EXAMINE CASE</span>
        </button>

      </div>

    </div>
  );
};
