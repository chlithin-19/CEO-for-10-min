import React, { useState, useEffect } from 'react';
import { Round2Case, Round2Domain } from '../../data/round2Domains';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  DollarSign, 
  AlertTriangle, 
  Target, 
  HelpCircle, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight,
  Briefcase,
  Compass,
  FileText
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface Round2CaseRevealProps {
  round2Case: Round2Case;
  domain: Round2Domain;
  ceo1: string;
  ceo2: string;
  teamId: string;
  onProceedToPresentation: () => void;
}

export const Round2CaseReveal: React.FC<Round2CaseRevealProps> = ({
  round2Case,
  domain,
  ceo1,
  ceo2,
  teamId,
  onProceedToPresentation,
}) => {
  // Configurable Challenge / Preparation Timer (Default 3 minutes = 180 seconds)
  const [prepDuration, setPrepDuration] = useState<number>(180);
  const [timeLeft, setTimeLeft] = useState<number>(180);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            sound.playDecisionLocked();
            // Automatically transition to Strategy Presentation when timer ends
            setTimeout(() => {
              onProceedToPresentation();
            }, 600);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft, onProceedToPresentation]);

  const handleStartTimer = () => {
    sound.playButtonPress();
    setIsTimerRunning(true);
  };

  const handlePauseTimer = () => {
    sound.playButtonPress();
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    sound.playButtonPress();
    setIsTimerRunning(false);
    setTimeLeft(prepDuration);
  };

  const handleChangeDuration = (seconds: number) => {
    sound.playButtonPress();
    setIsTimerRunning(false);
    setPrepDuration(seconds);
    setTimeLeft(seconds);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isTimeCritical = timeLeft > 0 && timeLeft <= 30;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-3 sm:py-6 transition-all animate-fadeIn">
      
      {/* ========================================================================= */}
      {/* HOST OVERVIEW BAR                                                         */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#FFFFFF] border-2 border-[#B58A45]/40 rounded-lg p-4 sm:p-5 shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Host Visible Metadata: Team ID, Teammates, Domain & Case */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            
            {/* Team ID */}
            <div className="border-r border-[#111111]/10 pr-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A766F] uppercase block font-cinzel">
                TEAM ID
              </span>
              <span className="font-cinzel text-sm sm:text-base font-black text-[#111111] uppercase tracking-wider">
                {teamId || 'TEAM-01'}
              </span>
            </div>

            {/* Teammates */}
            <div className="border-r border-[#111111]/10 pr-2 col-span-1 sm:col-span-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A766F] uppercase block font-cinzel">
                LEADERSHIP
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#111111] truncate block">
                {ceo1 || 'Member 1'} & {ceo2 || 'Member 2'}
              </span>
            </div>

            {/* Selected Domain */}
            <div className="border-r border-[#111111]/10 pr-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A766F] uppercase block font-cinzel">
                DOMAIN
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#B58A45] truncate block">
                {domain.name}
              </span>
            </div>

            {/* Selected Problem */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A766F] uppercase block font-cinzel">
                PROBLEM
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#111111] truncate block">
                {round2Case.id} • {round2Case.title}
              </span>
            </div>

          </div>

          {/* Integrated Challenge Timer Controls */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#111111]/10">
            
            {/* Timer Display */}
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#B58A45]" />
              <div 
                className={`font-mono text-2xl sm:text-3xl font-black tracking-wider px-3 py-1 rounded bg-[#111111] text-[#FFFFFF] shadow-inner ${
                  isTimeCritical ? 'animate-pulse text-[#E53935] border border-[#E53935]' : 'border border-[#B58A45]/40'
                }`}
              >
                {formatTime(timeLeft)}
              </div>
            </div>

            {/* Play/Pause & Reset Controls */}
            <div className="flex items-center space-x-1.5">
              {!isTimerRunning ? (
                <button
                  type="button"
                  onClick={handleStartTimer}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded bg-[#111111] text-[#FFFFFF] text-xs font-bold font-cinzel tracking-wider hover:bg-[#B58A45] hover:text-[#111111] transition-all shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>START</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePauseTimer}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded bg-[#8F6B32] text-white text-xs font-bold font-cinzel tracking-wider hover:bg-[#725424] transition-all shadow-sm"
                >
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>PAUSE</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleResetTimer}
                className="p-1.5 rounded border border-[#111111]/20 text-[#7A766F] hover:text-[#111111] hover:border-[#111111] transition-all"
                title="Reset Timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Presets */}
            <div className="hidden sm:flex items-center space-x-1 pl-1">
              {[120, 180, 300, 600].map((sec) => (
                <button
                  key={sec}
                  type="button"
                  onClick={() => handleChangeDuration(sec)}
                  className={`px-2 py-1 text-[10px] font-bold rounded font-mono transition-all ${
                    prepDuration === sec 
                      ? 'bg-[#B58A45] text-white' 
                      : 'bg-[#F5F3EE] text-[#7A766F] hover:text-[#111111]'
                  }`}
                >
                  {sec / 60}m
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* CASE DOSSIER CARD                                                         */}
      {/* ========================================================================= */}
      <div className="bg-[#FFFFFF] border border-[#B58A45]/30 rounded-lg p-6 sm:p-8 md:p-10 shadow-md relative overflow-hidden text-left">
        
        {/* Top Case Identity */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#111111]/10 gap-2">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-[#B58A45]" />
            <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-[#8F6B32] uppercase">
              CONFIDENTIAL CASE DOSSIER • #{round2Case.id}
            </span>
          </div>
          <span className="text-[11px] font-cinzel font-bold tracking-[0.2em] text-[#7A766F] uppercase">
            {domain.badge}
          </span>
        </div>

        {/* Case Title & Company Headline */}
        <div className="mb-6">
          <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#111111] uppercase leading-tight">
            {round2Case.title}
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-[#111111] text-[#FFFFFF] text-xs font-bold font-cinzel uppercase tracking-wider">
              {round2Case.company}
            </span>
            <span className="px-3 py-1 rounded bg-[#F5F3EE] border border-[#B58A45]/30 text-[#8F6B32] text-xs font-bold font-cinzel uppercase tracking-wider">
              {domain.name}
            </span>
          </div>
        </div>

        {/* Company Vitals Grid (Core Quantitative Baseline) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-md bg-[#FAF9F5] border border-[#B58A45]/20 mb-8">
          
          {/* Company */}
          <div className="flex flex-col border-r border-[#111111]/10 pr-2">
            <span className="text-[10px] font-cinzel font-bold text-[#7A766F] uppercase tracking-wider flex items-center gap-1">
              <Building2 className="w-3 h-3 text-[#B58A45]" /> COMPANY
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111111] mt-0.5">
              {round2Case.company}
            </span>
          </div>

          {/* Workforce / Size */}
          <div className="flex flex-col border-r sm:border-r border-[#111111]/10 pr-2">
            <span className="text-[10px] font-cinzel font-bold text-[#7A766F] uppercase tracking-wider flex items-center gap-1">
              <Users className="w-3 h-3 text-[#B58A45]" /> SIZE
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111111] mt-0.5">
              {round2Case.size}
            </span>
          </div>

          {/* Revenue */}
          <div className="flex flex-col border-r border-[#111111]/10 pr-2">
            <span className="text-[10px] font-cinzel font-bold text-[#7A766F] uppercase tracking-wider flex items-center gap-1">
              <DollarSign className="w-3 h-3 text-[#B58A45]" /> REVENUE
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111111] mt-0.5">
              {round2Case.revenue}
            </span>
          </div>

          {/* Sector */}
          <div className="flex flex-col">
            <span className="text-[10px] font-cinzel font-bold text-[#7A766F] uppercase tracking-wider flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#B58A45]" /> SECTOR
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#111111] mt-0.5">
              {domain.name}
            </span>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* EXPANDED MARKET & COMPETITIVE POSITION BRIEFS                             */}
        {/* ========================================================================= */}
        <div className="space-y-6 mb-8">
          
          {/* MARKET CONTEXT */}
          <div className="p-5 sm:p-6 rounded-md bg-[#FAF9F5] border-l-4 border-[#B58A45] border-t border-r border-b border-[#B58A45]/25">
            <div className="flex items-center space-x-2 text-xs font-cinzel font-bold tracking-[0.2em] text-[#8F6B32] uppercase mb-2.5">
              <Compass className="w-4 h-4 text-[#B58A45]" />
              <span>MARKET ENVIRONMENT & SEGMENT</span>
            </div>
            <p className="text-[#2C2A26] text-sm sm:text-[15px] leading-relaxed font-normal">
              {round2Case.market}
            </p>
          </div>

          {/* COMPETITIVE POSITION */}
          <div className="p-5 sm:p-6 rounded-md bg-[#FAF9F5] border-l-4 border-[#111111] border-t border-r border-b border-[#111111]/15">
            <div className="flex items-center space-x-2 text-xs font-cinzel font-bold tracking-[0.2em] text-[#111111] uppercase mb-2.5">
              <TrendingUp className="w-4 h-4 text-[#B58A45]" />
              <span>COMPETITIVE POSITION & VULNERABILITY</span>
            </div>
            <p className="text-[#2C2A26] text-sm sm:text-[15px] leading-relaxed font-normal">
              {round2Case.position}
            </p>
          </div>

        </div>

        {/* Section 1: Situation */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-xs font-cinzel font-bold tracking-[0.2em] text-[#111111] uppercase mb-2">
            <Briefcase className="w-4 h-4 text-[#B58A45]" />
            <span>THE SITUATION</span>
          </div>
          <div className="p-4 sm:p-5 rounded-md bg-[#FFFFFF] border border-[#111111]/15 text-[#2C2A26] text-sm sm:text-base leading-relaxed">
            {round2Case.situation}
          </div>
        </div>

        {/* Section 2: Constraint & Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
          {/* Constraint */}
          <div className="p-4 sm:p-5 rounded-md bg-[#FFFBF0] border border-[#B58A45]/30">
            <div className="flex items-center space-x-2 text-xs font-cinzel font-bold tracking-[0.2em] text-[#8F6B32] uppercase mb-2">
              <AlertTriangle className="w-4 h-4 text-[#B58A45]" />
              <span>THE CONSTRAINT</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-[#4A4843]">
              {round2Case.constraint}
            </p>
          </div>

          {/* Objective */}
          <div className="p-4 sm:p-5 rounded-md bg-[#F4F9F5] border border-[#2E7D32]/25">
            <div className="flex items-center space-x-2 text-xs font-cinzel font-bold tracking-[0.2em] text-[#2E7D32] uppercase mb-2">
              <Target className="w-4 h-4 text-[#2E7D32]" />
              <span>THE OBJECTIVE</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-[#2C2A26]">
              {round2Case.objective}
            </p>
          </div>

        </div>

        {/* Section 3: CEO Decision Required */}
        <div className="p-5 sm:p-6 rounded-md bg-[#111111] text-[#FFFFFF] border-2 border-[#B58A45] shadow-lg mb-8">
          <div className="flex items-center space-x-2 text-xs font-cinzel font-bold tracking-[0.25em] text-[#B58A45] uppercase mb-2.5">
            <HelpCircle className="w-4 h-4" />
            <span>CEO DECISION REQUIRED</span>
          </div>
          <p className="font-cinzel text-base sm:text-lg font-bold leading-relaxed tracking-wide text-white">
            "{round2Case.ceoDecision}"
          </p>
        </div>

        {/* Proceed Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#111111]/10">
          <p className="text-xs font-medium text-[#7A766F] font-cinzel tracking-wider uppercase">
            WHEN TIMER ENDS OR READY → TRANSITION TO STRATEGY PRESENTATION
          </p>

          <button
            type="button"
            onClick={() => {
              sound.playButtonPress();
              onProceedToPresentation();
            }}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded bg-[#111111] hover:bg-[#B58A45] text-white hover:text-[#111111] font-cinzel text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-md group"
          >
            <span>START STRATEGY PRESENTATION</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </div>
  );
};
