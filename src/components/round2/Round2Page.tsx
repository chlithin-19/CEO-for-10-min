import React, { useState } from 'react';
import { ROUND2_DOMAINS, Round2Domain, Round2Case } from '../../data/round2Domains';
import { Round2ProgressIndicator, Round2Step } from './Round2ProgressIndicator';
import { Round2DomainSelector } from './Round2DomainSelector';
import { Round2ProblemWheel } from './Round2ProblemWheel';
import { Round2CaseReveal } from './Round2CaseReveal';
import { StrategyPresentationView } from './StrategyPresentationView';
import { SpinButton } from '../SpinButton';
import { sound } from '../../utils/audio';
import { ArrowLeft } from 'lucide-react';

type Round2Stage = 
  | 'SELECT_DOMAIN'
  | 'READY_TO_SPIN'
  | 'SPINNING'
  | 'CASE_REVEALED'
  | 'STRATEGY_PRESENTATION';

interface Round2PageProps {
  teamId?: string;
  ceo1?: string;
  ceo2?: string;
  onChangeTeamId?: (val: string) => void;
  onChangeCeo1?: (val: string) => void;
  onChangeCeo2?: (val: string) => void;
}

export const Round2Page: React.FC<Round2PageProps> = ({
  teamId: propTeamId,
  ceo1: propCeo1,
  ceo2: propCeo2,
  onChangeTeamId,
  onChangeCeo1,
  onChangeCeo2,
}) => {
  const [internalCeo1, setInternalCeo1] = useState<string>('');
  const [internalCeo2, setInternalCeo2] = useState<string>('');
  const [internalTeamId, setInternalTeamId] = useState<string>('');

  const ceo1 = propCeo1 !== undefined ? propCeo1 : internalCeo1;
  const ceo2 = propCeo2 !== undefined ? propCeo2 : internalCeo2;
  const teamId = propTeamId !== undefined ? propTeamId : internalTeamId;

  const handleSetCeo1 = (val: string) => {
    if (onChangeCeo1) onChangeCeo1(val);
    else setInternalCeo1(val);
  };

  const handleSetCeo2 = (val: string) => {
    if (onChangeCeo2) onChangeCeo2(val);
    else setInternalCeo2(val);
  };

  const handleSetTeamId = (val: string) => {
    if (onChangeTeamId) onChangeTeamId(val);
    else setInternalTeamId(val);
  };

  const [selectedDomain, setSelectedDomain] = useState<Round2Domain | null>(null);
  const [selectedCase, setSelectedCase] = useState<Round2Case | null>(null);
  const [stage, setStage] = useState<Round2Stage>('SELECT_DOMAIN');

  // Compute progress indicator step (1: DOMAIN, 2: CHALLENGE, 3: PRESENTATION)
  const getProgressStep = (): Round2Step => {
    switch (stage) {
      case 'SELECT_DOMAIN':
      case 'READY_TO_SPIN':
      case 'SPINNING':
        return 1;
      case 'CASE_REVEALED':
        return 2;
      case 'STRATEGY_PRESENTATION':
        return 3;
    }
  };

  // 1. Manual Domain Select
  const handleDomainSelect = (domain: Round2Domain) => {
    sound.playButtonPress();
    setSelectedDomain(domain);
  };

  const handleContinueToChallenge = () => {
    sound.playButtonPress();
    setSelectedCase(null);
    setStage('READY_TO_SPIN');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Wheel Spin
  const handleStartSpin = () => {
    if (stage === 'SPINNING') return;
    setStage('SPINNING');
  };

  const handleSpinComplete = (round2Case: Round2Case) => {
    setSelectedCase(round2Case);
    setStage('CASE_REVEALED');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 3. Move to Strategy Presentation (Called when timer ends or host clicks proceed)
  const handleProceedToPresentation = () => {
    setStage('STRATEGY_PRESENTATION');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 4. Host Action: Next Team (Resets everything)
  const handleNextTeam = () => {
    handleSetCeo1('');
    handleSetCeo2('');
    handleSetTeamId('');
    setSelectedDomain(null);
    setSelectedCase(null);
    setStage('SELECT_DOMAIN');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 5. Host Action: Start Over (Keeps team/domain, resets to problem wheel)
  const handleStartOver = () => {
    setSelectedCase(null);
    setStage('READY_TO_SPIN');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 6. Host Action: Back to Case Details
  const handleBackToCase = () => {
    setStage('CASE_REVEALED');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Change domain back to selection
  const handleChangeDomain = () => {
    sound.playButtonPress();
    setSelectedDomain(null);
    setSelectedCase(null);
    setStage('SELECT_DOMAIN');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Round 2 Progress Indicator */}
      <div className="pt-4 sm:pt-6 w-full">
        <Round2ProgressIndicator currentStep={getProgressStep()} />
      </div>

      {/* Main Interactive Stage */}
      <main className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-6">
        
        {/* ========================================================================= */}
        {/* STEP 1: DOMAIN SELECTION & TEAM SETUP                                     */}
        {/* ========================================================================= */}
        {stage === 'SELECT_DOMAIN' && (
          <Round2DomainSelector
            domains={ROUND2_DOMAINS}
            selectedDomain={selectedDomain}
            onSelectDomain={handleDomainSelect}
            ceo1={ceo1}
            ceo2={ceo2}
            teamId={teamId}
            onChangeCeo1={handleSetCeo1}
            onChangeCeo2={handleSetCeo2}
            onChangeTeamId={handleSetTeamId}
            onContinue={handleContinueToChallenge}
          />
        )}

        {/* ========================================================================= */}
        {/* STEP 2: PROBLEM WHEEL (ONLY PROBLEM WHEEL - NO BUDGET/FUNDING WHEEL)     */}
        {/* ========================================================================= */}
        {selectedDomain && (stage === 'READY_TO_SPIN' || stage === 'SPINNING') && (
          <div className="w-full flex flex-col items-center max-w-4xl mx-auto transition-all duration-300 animate-fadeIn">
            
            {/* Step Heading */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block px-3.5 py-1 mb-3 rounded bg-[#111111] text-[#B58A45] font-cinzel text-xs font-bold tracking-[0.25em] uppercase">
                STEP 02 • THE LEADERSHIP CHALLENGE
              </div>
              <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[44px] font-black tracking-[0.15em] text-[#111111] uppercase leading-tight">
                SPIN FOR YOUR CHALLENGE
              </h1>
              <p className="text-sm sm:text-base tracking-[0.1em] text-[#4A4843] mt-2.5 font-medium max-w-lg mx-auto">
                The crisis is chosen by the wheel. Your strategy is yours to lead.
              </p>
              <div className="w-20 h-[2.5px] bg-[#B58A45] mx-auto mt-4" />
            </div>

            {/* Active Arena Badge */}
            <div className="mb-4 px-4 py-1.5 rounded-full bg-white border border-[#B58A45]/40 text-xs font-cinzel font-bold text-[#8F6B32] uppercase tracking-wider shadow-sm flex items-center space-x-2">
              <span>ARENA:</span>
              <span className="text-[#111111]">{selectedDomain.name}</span>
            </div>

            {/* Large Problem Wheel with the 6 cases of the selected domain */}
            <div className="my-3 sm:my-5 transition-all duration-500">
              <Round2ProblemWheel
                domain={selectedDomain}
                isSpinning={stage === 'SPINNING'}
                onSpinStart={handleStartSpin}
                onSpinComplete={handleSpinComplete}
                selectedCase={selectedCase}
                compact={false}
              />
            </div>

            {/* Prominent Spin Button */}
            <div className="flex flex-col items-center space-y-5 mt-6 sm:mt-8 w-full">
              <SpinButton
                isSpinning={stage === 'SPINNING'}
                onClick={handleStartSpin}
                disabled={stage === 'SPINNING'}
                label="SPIN THE WHEEL"
                spinningLabel="SPINNING..."
              />

              {/* Change Domain Control */}
              <button
                type="button"
                onClick={handleChangeDomain}
                disabled={stage === 'SPINNING'}
                className="flex items-center space-x-1.5 text-xs text-[#7A766F] hover:text-[#111111] font-cinzel font-bold tracking-wider uppercase transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>CHANGE DOMAIN</span>
              </button>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 3: CASE REVEAL & CHALLENGE PREPARATION TIMER                         */}
        {/* ========================================================================= */}
        {selectedDomain && selectedCase && stage === 'CASE_REVEALED' && (
          <Round2CaseReveal
            round2Case={selectedCase}
            domain={selectedDomain}
            ceo1={ceo1}
            ceo2={ceo2}
            teamId={teamId}
            onProceedToPresentation={handleProceedToPresentation}
          />
        )}

        {/* ========================================================================= */}
        {/* STEP 4: STRATEGY PRESENTATION (CLEAN STATE)                               */}
        {/* ========================================================================= */}
        {stage === 'STRATEGY_PRESENTATION' && (
          <StrategyPresentationView
            teamId={teamId}
            ceo1={ceo1}
            ceo2={ceo2}
            onNextTeam={handleNextTeam}
            onBackToCase={handleBackToCase}
            onStartOver={handleStartOver}
          />
        )}

      </main>

    </div>
  );
};
