// CEO FOR 10 MINUTES - ROUND 2: LEADERSHIP CHALLENGE
// 6 Domains × 6 Cases = 36 Hard-Level Official Cases

export interface Round2Case {
  id: string;             // e.g. 'AI-01'
  title: string;          // e.g. 'The Enterprise AI Failure'
  wheelLabel: string;     // Concise wheel segment label (e.g. 'AI FAILURE')
  company: string;        // e.g. 'NeuralCore AI'
  market: string;         // e.g. 'Enterprise AI / AI automation'
  size: string;           // e.g. '420 employees'
  revenue: string;        // e.g. '₹180 crore annually'
  position: string;       // e.g. "#3 in India's enterprise AI market; strong in banking and retail."
  situation: string;      // Full background case details
  constraint: string;     // Operational / business constraints
  objective: string;      // Strategic objective
  ceoDecision: string;    // Core executive dilemma requiring strategic resolution
}

export interface Round2Domain {
  id: string;
  name: string;
  badge: string;
  description: string;
  cases: Round2Case[];
}

export const ROUND2_DOMAINS: Round2Domain[] = [
  // =========================================================================
  // DOMAIN 1: AI & DEEPTECH
  // =========================================================================
  {
    id: 'ai-deeptech',
    name: 'AI & DeepTech',
    badge: 'ENTERPRISE TECH & AI INFRASTRUCTURE',
    description: 'Algorithmic failures, talent exoduses, compute cost explosions, open-source disruption, and compliance shocks.',
    cases: [
      {
        id: 'AI-01',
        title: 'The Enterprise AI Failure',
        wheelLabel: 'AI FAILURE',
        company: 'NeuralCore AI',
        market: 'Enterprise AI / AI automation',
        size: '420 employees',
        revenue: '₹180 crore annually',
        position: "#3 in India's enterprise AI market; strong in banking and retail.",
        situation: 'A major model update has increased performance for most customers but created serious accuracy problems in financial forecasting. Three large enterprise clients have reported incorrect outputs. One client has temporarily stopped using the system.',
        constraint: 'Rolling back the model will restore reliability but remove several new features that competitors already offer.',
        objective: 'Protect existing enterprise customers while maintaining technological competitiveness.',
        ceoDecision: 'Do you roll back, continue the deployment, or create a controlled hybrid solution? How will you allocate your available funding?'
      },
      {
        id: 'AI-02',
        title: 'The Talent Exodus',
        wheelLabel: 'TALENT EXODUS',
        company: 'QuantumEdge Technologies',
        market: 'AI infrastructure and DeepTech',
        size: '600 employees',
        revenue: '₹240 crore',
        position: 'Fast-growing challenger to two established AI infrastructure companies.',
        situation: 'Six senior researchers—including three architects of your core technology—receive offers from a global competitor. They represent nearly 20% of your senior technical capability.',
        constraint: 'Matching all salary offers would significantly increase costs and create internal compensation inequality.',
        objective: 'Protect intellectual property, retain critical talent, and keep the next product launch on schedule.',
        ceoDecision: 'Who do you retain, how do you retain them, and how do you reduce dependency on a small group of employees?'
      },
      {
        id: 'AI-03',
        title: 'The Compute Economics Crisis',
        wheelLabel: 'COMPUTE CRISIS',
        company: 'ModelForge AI',
        market: 'Generative AI APIs',
        size: '300 employees',
        revenue: '₹120 crore',
        position: 'Strong Indian developer/API provider with rapidly growing usage.',
        situation: 'API usage has doubled in six months, but compute costs have increased even faster. Revenue per customer is falling.',
        constraint: 'Customers expect the same response speed and model quality.',
        objective: 'Improve unit economics without damaging customer adoption.',
        ceoDecision: 'Do you raise prices, reduce model costs, limit usage, optimize infrastructure, or change the product architecture?'
      },
      {
        id: 'AI-04',
        title: 'Open-Source Disruption',
        wheelLabel: 'OPEN SOURCE',
        company: 'VisionStack AI',
        market: 'Computer vision for manufacturing',
        size: '350 employees',
        revenue: '₹150 crore',
        position: 'Premium provider used by 120 manufacturing companies.',
        situation: 'A powerful open-source model now performs almost as well as your proprietary system. Your biggest advantage—model accuracy—is rapidly disappearing.',
        constraint: 'Your customers are already questioning why they should continue paying premium prices.',
        objective: 'Create a defensible business model beyond the underlying AI model.',
        ceoDecision: 'Do you open-source part of your technology, specialize, reduce prices, bundle services, or move up the value chain?'
      },
      {
        id: 'AI-05',
        title: 'AI Regulation Shock',
        wheelLabel: 'REGULATION SHOCK',
        company: 'TrustLayer AI',
        market: 'AI decision-support systems',
        size: '700 employees',
        revenue: '₹320 crore',
        position: 'Market leader in AI-assisted business decision systems.',
        situation: 'New AI regulations require greater transparency, explainability, auditability, and human oversight. Compliance could require major product redesign.',
        constraint: 'You are simultaneously preparing to enter three international markets.',
        objective: 'Remain compliant while protecting growth and market leadership.',
        ceoDecision: 'Do you slow expansion to prioritize compliance, run both programs, or redesign the business around regulated AI?'
      },
      {
        id: 'AI-06',
        title: 'The DeepTech Cash Trap',
        wheelLabel: 'CASH TRAP',
        company: 'NanoSense Technologies',
        market: 'AI-powered industrial sensors',
        size: '900 employees',
        revenue: '₹400 crore',
        position: 'Strong technology but not yet profitable.',
        situation: 'Your technology has significant long-term potential, but manufacturing costs are high and commercial adoption is slower than expected. You have two strategic choices: A: Continue investing until the technology reaches scale. B: Focus only on profitable industrial customers and slow R&D.',
        constraint: 'You cannot aggressively pursue both strategies with your current resources.',
        objective: 'Reach financial sustainability without destroying long-term technological advantage.',
        ceoDecision: 'Growth first or profitability first—and why?'
      }
    ]
  },

  // =========================================================================
  // DOMAIN 2: FINTECH & BANKING
  // =========================================================================
  {
    id: 'fintech-banking',
    name: 'FinTech & Banking',
    badge: 'DIGITAL LENDING, PAYMENTS & BANKING',
    description: 'Capital requirement mandates, fraud explosions, banking giant invasions, ledger glitches, and credit traps.',
    cases: [
      {
        id: 'FT-01',
        title: 'The Capital Requirement Crisis',
        wheelLabel: 'CAPITAL CRISIS',
        company: 'PaySphere Financial',
        market: 'Digital lending and payments',
        size: '1,000 employees',
        revenue: '₹500 crore',
        position: '#4 digital lending platform in India.',
        situation: 'A new regulatory requirement forces the company to maintain significantly higher capital reserves.',
        constraint: 'Existing investors refuse emergency funding before the next funding round.',
        objective: 'Remain compliant without shutting down the lending business.',
        ceoDecision: 'What will you cut, restructure, sell, or redesign to free capital?'
      },
      {
        id: 'FT-02',
        title: 'The Fraud Explosion',
        wheelLabel: 'FRAUD EXPLOSION',
        company: 'SecurePay',
        market: 'Digital payments',
        size: '1,400 employees',
        revenue: '₹750 crore',
        position: "One of India's fastest-growing payment platforms.",
        situation: 'Fraudulent transactions increase by 300% in three months.',
        constraint: 'Aggressive fraud controls could reject legitimate transactions and seriously damage customer experience.',
        objective: 'Reduce fraud while preserving transaction volume.',
        ceoDecision: 'How much friction will you introduce, and where will you accept additional risk?'
      },
      {
        id: 'FT-03',
        title: 'Banking Giant Enters',
        wheelLabel: 'BANKING GIANT',
        company: 'FinNova',
        market: 'Digital banking for young professionals',
        size: '800 employees',
        revenue: '₹280 crore',
        position: 'Strong challenger with 8 million users.',
        situation: 'A major national bank launches a similar digital product with free transactions and aggressive cashback.',
        constraint: "You cannot match the bank's marketing budget or sustain unlimited cashback.",
        objective: 'Protect customer retention while moving toward profitability.',
        ceoDecision: 'What will make customers stay with you?'
      },
      {
        id: 'FT-04',
        title: 'The Trust Failure',
        wheelLabel: 'TRUST FAILURE',
        company: 'MoneyLink',
        market: 'Digital banking',
        size: '1,200 employees',
        revenue: '₹600 crore',
        position: 'Trusted mid-market digital banking provider.',
        situation: 'A technical failure temporarily displays incorrect balances to 80,000 customers. No money has been confirmed lost, but customers fear their accounts may be unsafe.',
        constraint: 'The technical investigation is incomplete.',
        objective: 'Restore trust while avoiding unnecessary panic.',
        ceoDecision: 'What do you tell customers, what do you compensate, and how do you fix the system?'
      },
      {
        id: 'FT-05',
        title: 'The Lending Risk Trap',
        wheelLabel: 'LENDING RISK',
        company: 'CreditFirst',
        market: 'Consumer lending',
        size: '1,800 employees',
        revenue: '₹900 crore',
        position: 'Major digital lender serving middle-income customers.',
        situation: 'Loan defaults have increased significantly. You can tighten lending standards and reduce risk—but revenue could fall 25%.',
        constraint: 'Competitors are continuing to offer easier credit.',
        objective: 'Protect the loan book without abandoning growth.',
        ceoDecision: 'How much risk are you willing to accept?'
      },
      {
        id: 'FT-06',
        title: 'The Profitability Dilemma',
        wheelLabel: 'PROFIT DILEMMA',
        company: 'MicroFund',
        market: 'SME financing',
        size: '1,000 employees',
        revenue: '₹450 crore',
        position: 'Rapidly growing SME lender with strong market share in three states.',
        situation: 'Customer growth is 60% year-on-year, but acquisition and servicing costs mean the company remains unprofitable.',
        constraint: 'Reducing growth may allow competitors to capture the market.',
        objective: 'Build a sustainable business without losing market leadership.',
        ceoDecision: 'Growth, profitability, or a hybrid strategy?'
      }
    ]
  },

  // =========================================================================
  // DOMAIN 3: EV & AUTOMOTIVE
  // =========================================================================
  {
    id: 'ev-automotive',
    name: 'EV & Automotive',
    badge: 'ELECTRIC VEHICLES & CLEAN MOBILITY',
    description: 'Battery recall crises, predatory price wars, supplier bottlenecks, charging network bets, and brand dilemmas.',
    cases: [
      {
        id: 'EV-01',
        title: 'Battery Safety Recall',
        wheelLabel: 'SAFETY RECALL',
        company: 'VoltDrive Motors',
        market: 'Electric passenger vehicles',
        size: '3,500 employees',
        revenue: '₹2,200 crore',
        position: '#4 EV manufacturer in India.',
        situation: 'A battery defect has been identified in approximately 8% of vehicles already sold. A complete recall would be extremely expensive.',
        constraint: 'The technical team cannot yet confirm whether the defect can be fixed through software or requires battery replacement.',
        objective: 'Protect customer safety without creating unnecessary financial damage.',
        ceoDecision: 'Full recall, targeted recall, software fix, or staged investigation?'
      },
      {
        id: 'EV-02',
        title: 'The EV Price War',
        wheelLabel: 'EV PRICE WAR',
        company: 'Electra Motors',
        market: 'Mid-range electric cars',
        size: '4,000 employees',
        revenue: '₹3,000 crore',
        position: '#3 in the ₹15–25 lakh EV segment.',
        situation: 'The market leader cuts prices by 20%.',
        constraint: 'Matching the price would turn your most popular model into a low-margin product.',
        objective: 'Protect market share without destroying profitability.',
        ceoDecision: 'Do you reduce price, improve value, focus on premium positioning, or redesign the product?'
      },
      {
        id: 'EV-03',
        title: 'Battery Supply Breakdown',
        wheelLabel: 'SUPPLY BREAKDOWN',
        company: 'EVolt India',
        market: 'Electric two-wheelers and compact EVs',
        size: '2,800 employees',
        revenue: '₹1,400 crore',
        position: 'Rapid-growth challenger with strong demand.',
        situation: 'Your primary battery supplier can provide only 60% of your required supply for four months.',
        constraint: 'Stopping production will disappoint customers and dealers; alternative suppliers are more expensive.',
        objective: 'Keep the business operational while protecting margins.',
        ceoDecision: 'Who gets the available batteries, and how do you redesign the supply chain?'
      },
      {
        id: 'EV-04',
        title: 'Charging Infrastructure Gamble',
        wheelLabel: 'CHARGING GAMBLE',
        company: 'ChargeX Mobility',
        market: 'EVs + charging ecosystem',
        size: '2,000 employees',
        revenue: '₹1,000 crore',
        position: 'Strong EV brand but weak charging infrastructure.',
        situation: 'Customer satisfaction is falling because charging availability is poor in several major cities.',
        constraint: 'Building your own national charging network requires huge capital.',
        objective: 'Improve charging availability without turning the company into an infrastructure business.',
        ceoDecision: 'Build, partner, acquire, or create a hybrid network?'
      },
      {
        id: 'EV-05',
        title: 'The Failed Model',
        wheelLabel: 'FAILED MODEL',
        company: 'UrbanVolt Motors',
        market: 'Premium electric SUVs',
        size: '5,000 employees',
        revenue: '₹4,500 crore',
        position: 'Established premium EV manufacturer.',
        situation: 'Your newest SUV received excellent media reviews but sales are 50% below expectations.',
        constraint: 'The factory has been configured specifically for this model.',
        objective: 'Recover value without destroying the premium brand.',
        ceoDecision: 'Reduce price, redesign, reposition, export, or discontinue?'
      },
      {
        id: 'EV-06',
        title: 'International Expansion',
        wheelLabel: 'INTL EXPANSION',
        company: 'BharatEV',
        market: 'Electric vehicles',
        size: '7,000 employees',
        revenue: '₹6,000 crore',
        position: 'Top-five Indian EV manufacturer.',
        situation: 'You have an opportunity to enter a large foreign EV market.',
        constraint: 'Local competitors have stronger brands, local supply chains, and better government relationships.',
        objective: 'Enter the market without risking the domestic business.',
        ceoDecision: 'Build locally, partner, acquire, pilot, or wait?'
      }
    ]
  },

  // =========================================================================
  // DOMAIN 4: HEALTHCARE & MEDTECH
  // =========================================================================
  {
    id: 'healthcare-medtech',
    name: 'Healthcare & MedTech',
    badge: 'MEDICAL EQUIPMENT, DIGITAL HEALTH & HOSPITALS',
    description: 'Medical device complications, clinical approval hold-ups, client concentration threats, data breaches, and scaling bounds.',
    cases: [
      {
        id: 'HC-01',
        title: 'Medical Device Safety Crisis',
        wheelLabel: 'DEVICE CRISIS',
        company: 'MedNova Devices',
        market: 'Hospital medical equipment',
        size: '1,600 employees',
        revenue: '₹700 crore',
        position: 'Leading Indian supplier of specialized monitoring devices.',
        situation: 'Several hospitals report unexpected complications involving your flagship device.',
        constraint: 'The exact cause has not yet been confirmed.',
        objective: 'Protect patients while preventing an unnecessary nationwide shutdown.',
        ceoDecision: 'Recall, investigate, suspend sales, or issue a targeted safety action?'
      },
      {
        id: 'HC-02',
        title: 'Regulatory Delay',
        wheelLabel: 'REGULATORY DELAY',
        company: 'HealthTech Labs',
        market: 'AI-assisted diagnostic technology',
        size: '1,200 employees',
        revenue: '₹500 crore',
        position: 'Fast-growing MedTech company preparing for international expansion.',
        situation: 'Regulatory approval for your flagship product is delayed by six months.',
        constraint: 'Manufacturing facilities and employees have already been allocated to the launch.',
        objective: 'Survive the delay without destroying cash flow or market position.',
        ceoDecision: 'What happens to manufacturing, employees, expansion, and investment?'
      },
      {
        id: 'HC-03',
        title: 'Hospital Concentration Risk',
        wheelLabel: 'HOSPITAL RISK',
        company: 'MediConnect',
        market: 'Hospital technology solutions',
        size: '2,000 employees',
        revenue: '₹900 crore',
        position: "Major provider to India's private hospital chains.",
        situation: 'Your largest customer contributes 25% of total revenue and is preparing to move to a competitor.',
        constraint: 'Retaining the customer may require a major price reduction.',
        objective: 'Protect short-term revenue while reducing dependence on one customer.',
        ceoDecision: 'Fight for the account or redirect resources toward diversification?'
      },
      {
        id: 'HC-04',
        title: 'Patient Data Crisis',
        wheelLabel: 'DATA CRISIS',
        company: 'CareCloud Health',
        market: 'Digital health / electronic health records',
        size: '1,500 employees',
        revenue: '₹650 crore',
        position: "One of India's largest cloud healthcare platforms.",
        situation: 'A cyber incident may have exposed sensitive patient data.',
        constraint: 'The investigation is incomplete, so you do not yet know the exact number of affected patients.',
        objective: 'Contain the breach while maintaining patient and hospital trust.',
        ceoDecision: 'What do you disclose, when do you disclose it, and how do you operate during the investigation?'
      },
      {
        id: 'HC-05',
        title: 'Better Product, Higher Price',
        wheelLabel: 'PRICING DILEMMA',
        company: 'PrecisionMed',
        market: 'Medical technology',
        size: '2,500 employees',
        revenue: '₹1,200 crore',
        position: 'Premium MedTech provider.',
        situation: 'Your product produces better clinical outcomes but costs 40% more than the leading alternative.',
        constraint: 'Hospitals operate under tight procurement budgets.',
        objective: 'Increase adoption without destroying margins.',
        ceoDecision: 'Reduce price, negotiate insurance coverage, target premium hospitals, or redesign the product?'
      },
      {
        id: 'HC-06',
        title: 'Demand Explosion',
        wheelLabel: 'DEMAND EXPLOSION',
        company: 'MediScale',
        market: 'Critical-care medical equipment',
        size: '3,000 employees',
        revenue: '₹1,500 crore',
        position: 'Strong domestic manufacturer.',
        situation: 'Demand unexpectedly doubles after your technology receives international attention.',
        constraint: 'Your production capacity cannot double immediately without risking quality.',
        objective: 'Scale production without compromising patient safety.',
        ceoDecision: 'Which customers get priority, how much do you outsource, and where do you invest?'
      }
    ]
  },

  // =========================================================================
  // DOMAIN 5: LAW FIRMS
  // =========================================================================
  {
    id: 'law-firms',
    name: 'Law Firms',
    badge: 'CORPORATE, LITIGATION & TECH LAW',
    description: 'Dominant client attrition, AI legal disruption, senior partner civil wars, public malpractice leaks, and expansion bets.',
    cases: [
      {
        id: 'LF-01',
        title: 'The 25% Client',
        wheelLabel: '25% CLIENT',
        company: 'LexCore Partners',
        market: 'Corporate and commercial law',
        size: '250 lawyers',
        revenue: '₹300 crore',
        position: 'Top-tier regional law firm.',
        situation: 'One corporate client generates 25% of annual revenue and announces plans to move to a global competitor.',
        constraint: 'Winning the client back could require substantially lower fees.',
        objective: 'Protect revenue while reducing client concentration.',
        ceoDecision: 'Fight for the client or redirect resources toward diversification?'
      },
      {
        id: 'LF-02',
        title: 'AI Legal Disruption',
        wheelLabel: 'AI DISRUPTION',
        company: 'JurisEdge',
        market: 'Corporate legal services',
        size: '400 lawyers',
        revenue: '₹450 crore',
        position: 'Strong in contracts, research, compliance and corporate advisory.',
        situation: 'AI tools now perform routine legal research and contract drafting at a fraction of your cost.',
        constraint: 'A large portion of your junior-lawyer workload depends on these services.',
        objective: "Use AI to remain competitive without destroying the firm's talent pipeline.",
        ceoDecision: 'Adopt AI aggressively, specialize, restructure staffing, or create an AI-assisted service model?'
      },
      {
        id: 'LF-03',
        title: 'Partner Conflict',
        wheelLabel: 'PARTNER CONFLICT',
        company: 'PrimeLegal',
        market: 'Corporate law and litigation',
        size: '300 lawyers',
        revenue: '₹380 crore',
        position: 'Highly respected but internally divided.',
        situation: 'Senior partners disagree over whether the firm should prioritize high-growth corporate advisory or litigation.',
        constraint: 'Resources are insufficient to pursue both aggressively.',
        objective: 'Create a unified strategic direction without losing key partners.',
        ceoDecision: 'Which practice gets priority, and how will you manage the losing side?'
      },
      {
        id: 'LF-04',
        title: 'Professional Reputation Crisis',
        wheelLabel: 'REPUTATION CRISIS',
        company: 'Justice & Co.',
        market: 'Litigation and corporate law',
        size: '500 lawyers',
        revenue: '₹600 crore',
        position: 'One of the most recognized law firms in its region.',
        situation: 'A high-profile case handled by your firm faces public criticism over an alleged professional error.',
        constraint: 'Facts are still being investigated.',
        objective: 'Protect client confidentiality, firm reputation, and professional integrity.',
        ceoDecision: 'What do you communicate publicly, what do you investigate internally, and who takes responsibility?'
      },
      {
        id: 'LF-05',
        title: 'Talent War',
        wheelLabel: 'TALENT WAR',
        company: 'LegalFirst',
        market: 'Corporate and technology law',
        size: '650 lawyers',
        revenue: '₹800 crore',
        position: 'Fast-growing technology-law specialist.',
        situation: 'A competitor offers significantly higher compensation to your top partners and lawyers.',
        constraint: 'Matching every offer would create a major cost increase.',
        objective: 'Retain critical talent while protecting profitability.',
        ceoDecision: 'Who do you retain, how do you redesign compensation, and what work can be reorganized?'
      },
      {
        id: 'LF-06',
        title: 'Geographic Expansion',
        wheelLabel: 'EXPANSION',
        company: 'Apex Counsel',
        market: 'Corporate, technology and financial law',
        size: '700 lawyers',
        revenue: '₹1,000 crore',
        position: 'Leading domestic specialist with strong profitability.',
        situation: 'You can open offices in three major cities.',
        constraint: 'Expansion would require significant investment and could dilute your specialist culture.',
        objective: 'Grow the firm without weakening its core competitive advantage.',
        ceoDecision: 'Expand geographically, deepen specialization, partner locally, or acquire a smaller firm?'
      }
    ]
  },

  // =========================================================================
  // DOMAIN 6: CYBERSECURITY
  // =========================================================================
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    badge: 'DEFENSE, CLOUD SECURITY & IDENTITY',
    description: 'Enterprise ransomware shutdowns, customer cloud leaks, auth friction dilemmas, public zero-day alerts, and budget reductions.',
    cases: [
      {
        id: 'CS-01',
        title: 'Ransomware Crisis',
        wheelLabel: 'RANSOMWARE CRISIS',
        company: 'SecureGrid',
        market: 'Enterprise cybersecurity',
        size: '1,200 employees',
        revenue: '₹600 crore',
        position: 'Major cybersecurity provider to Indian enterprises.',
        situation: 'A ransomware attack disrupts several internal systems.',
        constraint: 'Security experts cannot confirm whether attackers have deeper access.',
        objective: 'Restore critical operations while preventing further compromise.',
        ceoDecision: 'Shut down, isolate, continue operating, or use a hybrid approach?'
      },
      {
        id: 'CS-02',
        title: 'Customer Data Breach',
        wheelLabel: 'DATA BREACH',
        company: 'DataShield',
        market: 'Cloud cybersecurity and data protection',
        size: '1,500 employees',
        revenue: '₹800 crore',
        position: 'Trusted provider for banks and large enterprises.',
        situation: 'An unauthorized party may have accessed customer data.',
        constraint: 'The investigation cannot yet determine the full scope.',
        objective: 'Contain the incident while maintaining customer confidence.',
        ceoDecision: 'How much information do you disclose before the investigation is complete?'
      },
      {
        id: 'CS-03',
        title: 'Security vs User Experience',
        wheelLabel: 'SECURITY VS UX',
        company: 'AuthSecure',
        market: 'Identity and access management',
        size: '900 employees',
        revenue: '₹450 crore',
        position: 'Fast-growing enterprise authentication provider.',
        situation: 'Security experts recommend significantly stricter authentication.',
        constraint: 'The proposed system could increase customer friction and reduce product adoption.',
        objective: 'Improve security without destroying usability.',
        ceoDecision: 'Where do you draw the line between security and convenience?'
      },
      {
        id: 'CS-04',
        title: 'Competitor Vulnerability',
        wheelLabel: 'COMPETITOR CLAIM',
        company: 'CyberFort',
        market: 'Managed cybersecurity services',
        size: '1,000 employees',
        revenue: '₹500 crore',
        position: '#2 domestic provider.',
        situation: 'A competitor publicly claims your platform has security weaknesses.',
        constraint: 'Your investigation has found one genuine vulnerability but no evidence of exploitation.',
        objective: 'Protect reputation while responsibly fixing the vulnerability.',
        ceoDecision: 'How transparent should you be publicly?'
      },
      {
        id: 'CS-05',
        title: 'The 25% Budget Cut',
        wheelLabel: 'BUDGET CUT',
        company: 'ShieldWorks',
        market: 'Enterprise cybersecurity',
        size: '1,100 employees',
        revenue: '₹550 crore',
        position: 'Established security provider facing margin pressure.',
        situation: 'The board cuts cybersecurity R&D and infrastructure spending by 25% while attacks against customers are increasing.',
        constraint: 'You cannot maintain every existing security capability.',
        objective: 'Protect the most important systems while preserving business viability.',
        ceoDecision: 'What do you protect, outsource, automate, reduce, or eliminate?'
      },
      {
        id: 'CS-06',
        title: 'Critical Infrastructure Attack',
        wheelLabel: 'INFRA ATTACK',
        company: 'CyberCore Systems',
        market: 'Critical infrastructure cybersecurity',
        size: '2,500 employees',
        revenue: '₹1,200 crore',
        position: 'Major provider to energy, transportation and telecom companies.',
        situation: 'A sophisticated cyberattack targets one of your most important systems. You cannot determine whether attackers have gained deeper access.',
        constraint: 'Shutting the system down would cost approximately ₹10 crore per day in operational losses for your customers.',
        objective: 'Balance operational continuity, customer safety, and cyber containment.',
        ceoDecision: 'Do you shut down, isolate, continue operating, or create a controlled degradation strategy?'
      }
    ]
  }
];
