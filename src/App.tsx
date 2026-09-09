import React, { useState } from 'react';
import { DOMAINS, Domain, ProblemStatement } from './data/domains';
import { EventHeader } from './components/EventHeader';
import { DomainSelector } from './components/DomainSelector';
import { ProblemWheel } from './components/ProblemWheel';
import { SpinButton } from './components/SpinButton';
import { ResultReveal } from './components/ResultReveal';
import { ResetControls } from './components/ResetControls';

type ExperienceStage = 'SELECT_DOMAIN' | 'READY_TO_SPIN' | 'SPINNING' | 'DECISION_REVEALED';

export const App: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [stage, setStage] = useState<ExperienceStage>('SELECT_DOMAIN');
  const [selectedProblem, setSelectedProblem] = useState<ProblemStatement | null>(null);

  // When candidate selects a domain
  const handleDomainSelect = (domain: Domain) => {
    setSelectedDomain(domain);
    setSelectedProblem(null);
    setStage('READY_TO_SPIN');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When candidate triggers spin
  const handleStartSpin = () => {
    if (stage === 'SPINNING') return;
    setStage('SPINNING');
    setSelectedProblem(null);
  };

  // When wheel finishes mechanical deceleration
  const handleSpinComplete = (resultProblem: ProblemStatement) => {
    setSelectedProblem(resultProblem);
    setStage('DECISION_REVEALED');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Candidate chooses to re-spin
  const handleSpinAgain = () => {
    setSelectedProblem(null);
    setStage('READY_TO_SPIN');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Candidate chooses to change domain
  const handleChangeDomain = () => {
    setSelectedProblem(null);
    setSelectedDomain(null);
    setStage('SELECT_DOMAIN');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#171717] flex flex-col relative selection:bg-[#B89555]/20 selection:text-[#171717]">
      {/* Persistent Minimal Event Header */}
      <EventHeader roundTitle="ROUND 1 • EXECUTIVE SIMULATION" />

      {/* Main Interactive Stage with Generous Spacing */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-10 px-4 py-8 sm:py-12 md:py-16 max-w-7xl mx-auto w-full">
        
        {/* STAGE 1: DOMAIN SELECTION */}
        {stage === 'SELECT_DOMAIN' && (
          <div className="w-full animate-fadeIn transition-all">
            <DomainSelector
              domains={DOMAINS}
              selectedDomain={selectedDomain}
              onSelectDomain={handleDomainSelect}
            />
          </div>
        )}

        {/* STAGES 2, 3: WHEEL ARENA (READY TO SPIN & SPINNING) */}
        {selectedDomain && (stage === 'READY_TO_SPIN' || stage === 'SPINNING') && (
          <div className="w-full flex flex-col items-center max-w-4xl mx-auto transition-all duration-300 animate-fadeIn">
            
            {/* Prominent Hero Heading: 32-42px Desktop */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-[0.18em] text-[#171717] uppercase leading-tight">
                YOUR CHALLENGE AWAITS
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.2em] text-[#66635D] mt-2.5 font-normal uppercase">
                Spin the wheel. Accept the decision.
              </p>
              <div className="w-16 h-[1.5px] bg-[#B89555] mx-auto mt-4" />
            </div>

            {/* Large Executive Wheel: 500-560px on Desktop */}
            <div className="my-4 sm:my-6 transition-all duration-500">
              <ProblemWheel
                domain={selectedDomain}
                isSpinning={stage === 'SPINNING'}
                onSpinStart={handleStartSpin}
                onSpinComplete={handleSpinComplete}
                selectedProblem={selectedProblem}
                compact={false}
              />
            </div>

            {/* Prominent Spin Button: 56-64px height, 18-20px text */}
            <div className="flex flex-col items-center space-y-6 mt-6 sm:mt-8 w-full">
              <SpinButton
                isSpinning={stage === 'SPINNING'}
                onClick={handleStartSpin}
                disabled={stage === 'SPINNING'}
              />

              <ResetControls
                domain={selectedDomain}
                onChangeDomain={handleChangeDomain}
                disabled={stage === 'SPINNING'}
              />
            </div>
          </div>
        )}

        {/* STAGE 4: RESULT REVEAL - CONFIDENTIAL EXECUTIVE BRIEFING */}
        {selectedDomain && stage === 'DECISION_REVEALED' && selectedProblem && (
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 transition-all duration-500 animate-fadeIn">
            
            {/* Minimized Landed Wheel Indicator above the result */}
            <div className="flex items-center space-x-4 px-4 py-2 rounded-full border border-[rgba(40,35,25,0.1)] bg-[#FFFFFF] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B89555]"></span>
              <span className="text-xs tracking-[0.2em] text-[#66635D] uppercase font-medium">
                Arena: <strong className="text-[#171717] font-semibold">{selectedDomain.fullName}</strong>
              </span>
              <span className="text-[#96928A]">•</span>
              <span className="text-xs tracking-[0.18em] text-[#8F713D] uppercase font-semibold">
                Decision Locked
              </span>
            </div>

            {/* Confidential Executive Briefing Card */}
            <div className="w-full">
              <ResultReveal
                problem={selectedProblem}
                domain={selectedDomain}
                onSpinAgain={handleSpinAgain}
                onChangeDomain={handleChangeDomain}
              />
            </div>

          </div>
        )}

      </main>

      {/* Minimal Bottom Identity */}
      <footer className="w-full border-t border-[rgba(40,35,25,0.06)] py-4 text-center text-[11px] tracking-[0.22em] text-[#96928A] uppercase relative z-10 bg-[#FAF8F5]">
        <span>CEO FOR 10 MINUTES • EXECUTIVE BOARDROOM SIMULATION</span>
      </footer>
    </div>
  );
};

export default App;
