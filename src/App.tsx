import React, { useState } from 'react';
import { DOMAINS, Domain, ProblemStatement } from './data/domains';
import { BudgetItem } from './data/budgets';
import { EventHeader } from './components/EventHeader';
import { ProgressIndicator, StageStep } from './components/ProgressIndicator';
import { DomainSelector } from './components/DomainSelector';
import { ProblemWheel } from './components/ProblemWheel';
import { BudgetWheel } from './components/BudgetWheel';
import { SpinButton } from './components/SpinButton';
import { ProblemCard } from './components/ProblemCard';
import { BudgetResultCard } from './components/BudgetResultCard';
import { FinalChallengeCard } from './components/FinalChallengeCard';
import { ResetControls } from './components/ResetControls';
import { Round2Page } from './components/round2/Round2Page';

type Stage = 
  | 'SELECT_DOMAIN'
  | 'READY_TO_SPIN_PROBLEM'
  | 'SPINNING_PROBLEM'
  | 'PROBLEM_REVEALED'
  | 'READY_TO_SPIN_BUDGET'
  | 'SPINNING_BUDGET'
  | 'BUDGET_REVEALED'
  | 'FINAL_CHALLENGE';

export const App: React.FC = () => {
  const [activeRound, setActiveRound] = useState<'round1' | 'round2'>('round1');
  const [teamId, setTeamId] = useState<string>('T01');
  const [member1, setMember1] = useState<string>('');
  const [member2, setMember2] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<ProblemStatement | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<BudgetItem | null>(null);
  const [stage, setStage] = useState<Stage>('SELECT_DOMAIN');

  // Compute current progress step
  const getProgressStep = (): StageStep => {
    if (stage === 'SELECT_DOMAIN' || stage === 'READY_TO_SPIN_PROBLEM' || stage === 'SPINNING_PROBLEM') {
      return 1;
    }
    if (stage === 'PROBLEM_REVEALED' || stage === 'READY_TO_SPIN_BUDGET' || stage === 'SPINNING_BUDGET') {
      return 2;
    }
    return 3;
  };

  // 1. Domain Selection
  const handleDomainSelect = (domain: Domain) => {
    setSelectedDomain(domain);
    setSelectedProblem(null);
    setSelectedBudget(null);
    setStage('READY_TO_SPIN_PROBLEM');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Problem Wheel Spin
  const handleStartSpinProblem = () => {
    if (stage === 'SPINNING_PROBLEM') return;
    setStage('SPINNING_PROBLEM');
  };

  const handleSpinProblemComplete = (problem: ProblemStatement) => {
    setSelectedProblem(problem);
    setStage('PROBLEM_REVEALED');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 3. Transition to Budget Wheel
  const handleProceedToBudget = () => {
    setStage('READY_TO_SPIN_BUDGET');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 4. Budget Wheel Spin
  const handleStartSpinBudget = () => {
    if (stage === 'SPINNING_BUDGET') return;
    setStage('SPINNING_BUDGET');
  };

  const handleSpinBudgetComplete = (budget: BudgetItem) => {
    setSelectedBudget(budget);
    setStage('BUDGET_REVEALED');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 5. Transition to Final Summary
  const handleProceedToFinal = () => {
    setStage('FINAL_CHALLENGE');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 6. Reset / Start Over
  const handleReset = () => {
    setSelectedDomain(null);
    setSelectedProblem(null);
    setSelectedBudget(null);
    setStage('SELECT_DOMAIN');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRound = (round: 'round1' | 'round2') => {
    setActiveRound(round);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#111111] flex flex-col relative selection:bg-[#B58A45]/25 selection:text-[#111111]">
      {/* Header with Round 1 and Round 2 Navigation */}
      <EventHeader 
        activeRound={activeRound} 
        onSelectRound={handleSelectRound}
        roundTitle={activeRound === 'round1' ? 'ROUND 1' : 'ROUND 2'} 
      />

      {/* ROUND 1 VIEW */}
      {activeRound === 'round1' && (
        <>
          {/* Progress Indicator */}
          <div className="pt-4 sm:pt-6">
            <ProgressIndicator currentStep={getProgressStep()} />
          </div>

          {/* Main Interactive Stage */}
          <main className="flex-1 flex flex-col justify-center items-center relative z-10 px-4 py-4 sm:py-8 md:py-10 max-w-7xl mx-auto w-full">
        
        {/* Persistent Two-Member Team Overview Strip throughout Round 1 */}
        {stage !== 'SELECT_DOMAIN' && (
          <div className="mb-4 sm:mb-6 px-4 py-2 rounded-full bg-white border border-[#B58A45]/40 shadow-sm flex items-center space-x-2.5 text-xs font-cinzel">
            <span className="font-bold text-[#8F6B32] uppercase tracking-wider">TEAM {teamId || 'T01'}:</span>
            <span className="font-bold text-[#111111]">{member1 || 'Member 1'} & {member2 || 'Member 2'}</span>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 1: DOMAIN SELECTION                                                 */}
        {/* ========================================================================= */}
        {stage === 'SELECT_DOMAIN' && (
          <div className="w-full animate-fadeIn transition-all">
            <DomainSelector
              domains={DOMAINS}
              selectedDomain={selectedDomain}
              onSelectDomain={handleDomainSelect}
              teamId={teamId}
              member1={member1}
              member2={member2}
              onChangeTeamId={setTeamId}
              onChangeMember1={setMember1}
              onChangeMember2={setMember2}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 2: STEP 01 - PROBLEM WHEEL (READY TO SPIN & SPINNING)               */}
        {/* ========================================================================= */}
        {selectedDomain && (stage === 'READY_TO_SPIN_PROBLEM' || stage === 'SPINNING_PROBLEM') && (
          <div className="w-full flex flex-col items-center max-w-4xl mx-auto transition-all duration-300 animate-fadeIn">
            
            {/* Bold Step & Heading */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block px-3.5 py-1 mb-3 rounded bg-[#111111] text-[#B58A45] font-cinzel text-xs font-bold tracking-[0.25em] uppercase">
                STEP 01 • THE BUSINESS PROBLEM
              </div>
              <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-black tracking-[0.15em] text-[#111111] uppercase leading-tight">
                SPIN FOR YOUR CHALLENGE
              </h1>
              <p className="text-sm sm:text-base tracking-[0.1em] text-[#4A4843] mt-2.5 font-medium max-w-lg mx-auto">
                The problem is decided by the wheel. Your strategy is yours to decide.
              </p>
              <div className="w-20 h-[2.5px] bg-[#B58A45] mx-auto mt-4" />
            </div>

            {/* Problem Wheel (560-650px) */}
            <div className="my-3 sm:my-5 transition-all duration-500">
              <ProblemWheel
                domain={selectedDomain}
                isSpinning={stage === 'SPINNING_PROBLEM'}
                onSpinStart={handleStartSpinProblem}
                onSpinComplete={handleSpinProblemComplete}
                selectedProblem={selectedProblem}
                compact={false}
              />
            </div>

            {/* Prominent Spin Button */}
            <div className="flex flex-col items-center space-y-6 mt-6 sm:mt-8 w-full">
              <SpinButton
                isSpinning={stage === 'SPINNING_PROBLEM'}
                onClick={handleStartSpinProblem}
                disabled={stage === 'SPINNING_PROBLEM'}
                label="SPIN THE WHEEL"
                spinningLabel="SPINNING..."
              />

              <ResetControls
                domain={selectedDomain}
                onChangeDomain={handleReset}
                disabled={stage === 'SPINNING_PROBLEM'}
              />
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 3: STEP 01 - PROBLEM REVEALED                                       */}
        {/* ========================================================================= */}
        {selectedDomain && selectedProblem && stage === 'PROBLEM_REVEALED' && (
          <div className="w-full flex flex-col items-center transition-all animate-fadeIn">
            <ProblemCard
              problem={selectedProblem}
              domain={selectedDomain}
              onProceedToBudget={handleProceedToBudget}
              isBudgetUnlocked={false}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 4: STEP 02 - BUDGET WHEEL (READY TO SPIN & SPINNING)                */}
        {/* ========================================================================= */}
        {selectedDomain && selectedProblem && (stage === 'READY_TO_SPIN_BUDGET' || stage === 'SPINNING_BUDGET') && (
          <div className="w-full flex flex-col items-center max-w-4xl mx-auto transition-all duration-300 animate-fadeIn">
            
            {/* Step 02 Heading */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block px-3.5 py-1 mb-3 rounded bg-[#111111] text-[#B58A45] font-cinzel text-xs font-bold tracking-[0.25em] uppercase">
                STEP 02 • YOUR AVAILABLE CAPITAL
              </div>
              <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-black tracking-[0.15em] text-[#111111] uppercase leading-tight">
                NOW, WHAT'S YOUR BUDGET?
              </h1>
              <p className="text-sm sm:text-base tracking-[0.1em] text-[#4A4843] mt-2.5 font-medium max-w-xl mx-auto">
                Every CEO has limited resources. Build your strategy within the capital you are given.
              </p>
              <div className="w-20 h-[2.5px] bg-[#B58A45] mx-auto mt-4" />
            </div>

            {/* Active Problem Summary Pill */}
            <div className="mb-6 px-5 py-2.5 rounded-md bg-[#FFFFFF] border border-[#B58A45]/40 flex items-center space-x-3 shadow-sm text-xs">
              <span className="font-bold text-[#8F6B32] uppercase tracking-wider">LOCKED PROBLEM:</span>
              <span className="font-semibold text-[#111111]">{selectedProblem.title}</span>
            </div>

            {/* Budget Wheel (500-600px) */}
            <div className="my-3 sm:my-5 transition-all duration-500">
              <BudgetWheel
                isSpinning={stage === 'SPINNING_BUDGET'}
                onSpinStart={handleStartSpinBudget}
                onSpinComplete={handleSpinBudgetComplete}
                selectedBudget={selectedBudget}
              />
            </div>

            {/* Spin Budget Button */}
            <div className="flex flex-col items-center space-y-6 mt-6 sm:mt-8 w-full">
              <SpinButton
                isSpinning={stage === 'SPINNING_BUDGET'}
                onClick={handleStartSpinBudget}
                disabled={stage === 'SPINNING_BUDGET'}
                label="SPIN BUDGET"
                spinningLabel="ALLOCATING..."
              />
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 5: STEP 02 - BUDGET REVEALED                                        */}
        {/* ========================================================================= */}
        {selectedBudget && selectedProblem && selectedDomain && stage === 'BUDGET_REVEALED' && (
          <div className="w-full flex flex-col items-center transition-all animate-fadeIn">
            <BudgetResultCard
              budget={selectedBudget}
              problem={selectedProblem}
              domain={selectedDomain}
              onProceedToFinal={handleProceedToFinal}
              isFinalUnlocked={false}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* STAGE 6: STEP 03 - FINAL CEO CHALLENGE CARD                               */}
        {/* ========================================================================= */}
        {selectedDomain && selectedProblem && selectedBudget && stage === 'FINAL_CHALLENGE' && (
          <div className="w-full flex flex-col items-center transition-all animate-fadeIn">
            <FinalChallengeCard
              domain={selectedDomain}
              problem={selectedProblem}
              budget={selectedBudget}
              onReset={handleReset}
            />
          </div>
        )}

      </main>
        </>
      )}

      {/* ROUND 2 VIEW */}
      {activeRound === 'round2' && (
        <Round2Page 
          teamId={teamId}
          ceo1={member1}
          ceo2={member2}
          onChangeTeamId={setTeamId}
          onChangeCeo1={setMember1}
          onChangeCeo2={setMember2}
        />
      )}

      {/* Footer */}
      <footer className="w-full border-t border-[#111111]/10 py-5 text-center text-xs tracking-[0.25em] text-[#7A766F] uppercase relative z-10 bg-[#FFFFFF]">
        <div className="flex items-center justify-center space-x-3">
          <span>CEO FOR 10 MINUTES</span>
          <span>•</span>
          <span className="text-[#B58A45] font-bold">THINK. DECIDE. LEAD.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
