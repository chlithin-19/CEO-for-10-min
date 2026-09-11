// CEO FOR 10 MINUTES - ROUND 2: LEADERSHIP CHALLENGE
// 6 Domains × 6 Cases = 36 Hard-Level Official Cases
// Enriched with realistic executive-level Market and Competitive Position context

export interface Round2Case {
  id: string;             // e.g. 'AI-01'
  title: string;          // e.g. 'The Enterprise AI Failure'
  wheelLabel: string;     // Concise wheel segment label (e.g. 'AI FAILURE')
  company: string;        // e.g. 'NeuralCore AI'
  market: string;         // Detailed executive market context
  size: string;           // e.g. '420 employees'
  revenue: string;        // e.g. '₹180 crore annually'
  position: string;       // Detailed competitive standing and vulnerability analysis
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
        market: "Operates in the high-stakes Indian enterprise AI automation and predictive analytics market, valued at ₹14,000 crore and expanding at a 32% CAGR. The company develops and deploys proprietary machine-learning inference engines and automated decision pipelines for Tier-1 scheduled commercial banks, non-banking financial companies (NBFCs), and large multi-brand retail conglomerates. Business operates primarily on multi-year enterprise SaaS licensing agreements characterized by strict 99.95% accuracy Service Level Agreements (SLAs) and rigorous regulatory oversight from financial authorities. In this sector, vendor switching costs are steep due to deep database integration, but client tolerance for algorithmic hallucinations or variance in financial forecasting is practically non-existent.",
        size: '420 employees',
        revenue: '₹180 crore annually',
        position: "Ranked #3 in India's enterprise AI market behind multinational hyperscalers Microsoft Azure AI and Google Cloud. Holds an estimated 14% domestic market share, powered by deep domain-specific fine-tuning on regional financial datasets and localized private cloud deployment options. Its primary competitive advantage has historically been institutional trust, low-latency execution, and an outstanding 94% gross revenue retention rate across 45 enterprise accounts. However, the company faces growing competitive pressure from aggressive Silicon Valley platforms. The current forecasting anomaly directly imperils ₹45 crore in annual recurring revenue across three anchor banking accounts, threatening to permanently shatter its reputation for enterprise-grade precision.",
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
        market: "Competes in the specialized DeepTech AI infrastructure and foundational accelerator software sector. The industry provides low-level compiler optimization, distributed GPU orchestration clusters, and tensor-processing runtimes essential for enterprises training large proprietary foundation models. Primary customers include multinational cloud providers, sovereign defense research institutes, and elite algorithmic trading firms. The market is marked by extreme scarcity of senior compiler engineers and systems architects capable of extracting 40%+ efficiency gains from high-end GPU clusters, making technical talent the primary determinant of enterprise contract wins.",
        size: '600 employees',
        revenue: '₹240 crore',
        position: "Recognized as India's premier indigenous AI systems infrastructure pioneer, operating as a fast-growing challenger to established Silicon Valley infrastructure firms. Backed by a world-class systems research lab that holds 12 core patents in distributed tensor-sharding algorithms, driving high margins and rapid top-line growth. However, the company is intensely vulnerable to global Big Tech engineering hubs in Bengaluru offering 2x–3x salary packages pegged to US dollar equity. With six senior principal architects—who represent 20% of senior engineering and lead the upcoming v3.0 core release—weighing competing offers, QuantumEdge risks crippling product delays and catastrophic IP leakage.",
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
        market: "Operates in the developer-facing generative AI API and enterprise model-hosting industry. The business provides high-throughput, low-latency REST and streaming APIs for text generation, code completion, and semantic search, serving over 8,500 software startups, SaaS providers, and mid-market product companies across South Asia. The market functions on a high-volume, usage-based consumption model (token pricing per million tokens), where developer switching costs between alternative API providers are notoriously low. Profitability in this market is fundamentally dictated by GPU cluster utilization rates, inference batching efficiency, and wholesale cloud compute contracts.",
        size: '300 employees',
        revenue: '₹120 crore',
        position: "Holds the #1 position as India's most popular independent GenAI API platform, widely acclaimed by the developer ecosystem for superior regional language latency and affordable entry pricing. Platform usage has surged 100% over the past six months to 45 billion tokens processed monthly. However, its financial foundation is in critical jeopardy: compute costs billed by third-party GPU cloud providers have skyrocketed by 180%, causing gross margins to compress from 52% down to an unsustainable 18%. Because developer sentiment is intensely price-sensitive, any abrupt price increase risks triggering an immediate mass migration to subsidized hyperscaler alternatives.",
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
        market: "Operates in industrial computer vision and automated defect inspection for discrete manufacturing, automotive assembly lines, and precision electronics plants. The company delivers integrated edge-computing sensor rigs and proprietary neural network inspection software that flags micron-level surface flaws at production speeds exceeding 1,200 parts per minute. Clients are industrial conglomerates and Tier-1 auto component makers requiring 99.98% defect capture rates to prevent catastrophic factory line halts. Business operates on upfront hardware integration fees combined with recurring enterprise software maintenance licenses averaging ₹1.25 crore per factory site.",
        size: '350 employees',
        revenue: '₹150 crore',
        position: "Maintains a dominant premium foothold with 120 premier manufacturing facilities deployed across India's primary industrial corridors, generating ₹150 crore in stable revenue with 68% gross margins. Historically, its primary moat was proprietary image-classification models trained on 8 years of factory floor defect data. However, the sudden global release of open-source vision-language foundation models that match 96% of VisionStack's accuracy has decimated its proprietary software moat. Industrial procurement heads are now demanding 35%–50% price cuts upon contract renewals, leaving VisionStack's high-margin software licensing model in severe peril unless it can pivot toward higher-value workflow integration.",
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
        market: "Operates in enterprise AI governance, algorithmic auditability, and automated decision-support software. The platform integrates into mission-critical corporate decision engines—including automated credit underwriting, algorithmic insurance claims processing, and healthcare triage—providing continuous bias detection, explainability logs, and compliance verification. Its primary buyers are Chief Risk Officers (CROs), General Counsels, and Chief Compliance Officers at Fortune 500 multinationals and regulated public enterprises. The regulatory landscape is undergoing massive disruption, with the EU AI Act, India's DPDP Act, and US FTC directives imposing severe fines (up to 7% of global turnover) for unexplainable automated decisions.",
        size: '700 employees',
        revenue: '₹320 crore',
        position: "Stands as the uncontested domestic market pioneer in regulated AI governance with ₹320 crore in annual recurring revenue and 700 highly skilled personnel. Its proprietary explainability engines have been certified across 40+ leading institutional customers, creating strong enterprise moats. However, newly finalized cross-border compliance mandates require mandatory human-in-the-loop oversight frameworks and architectural transparency audits that will require an estimated 9-month product refactoring. With the company simultaneously mid-stride in deploying ₹90 crore to launch sales subsidiaries in Germany, the UK, and Japan, management is caught in a perilous capital and engineering bottleneck between domestic compliance redesign and international market entry.",
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
        market: "Operates at the intersection of DeepTech hardware and edge AI, designing and fabricating MEMS-based (Micro-Electro-Mechanical Systems) intelligent acoustic and vibration sensors for heavy industrial predictive maintenance. The company serves power utilities, oil and gas refineries, mining operations, and chemical processing facilities where rotating machinery failure causes millions in hourly downtime. The market requires heavy upfront capital expenditure, cleanroom microfabrication partnerships, and grueling 18-to-24-month industrial validation cycles, making customer acquisition slow but creating massive multi-decade vendor lock-in once installed.",
        size: '900 employees',
        revenue: '₹400 crore',
        position: "Possesses peerless, patent-protected intellectual property in ultra-low-power edge AI microchips capable of running real-time vibration inference for 5 years on a single coin battery. Generates ₹400 crore in top-line revenue across 900 employees, but has accumulated heavy operational cash burn due to expensive silicon wafer fabrication runs and high field engineering overhead. Despite technological superiority, the company has burned through 75% of its cash runway and remains operating cash-flow negative (-₹42 crore). The board is deeply fractured: early-stage venture backers demand immediate retrenchment to service only 35 high-margin industrial accounts to reach cash break-even, while founder-led R&D factions argue that cutting advanced sensor R&D will permanently surrender the global market to emerging Chinese competitors.",
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
        market: "Operates in India's fast-evolving digital lending and point-of-sale merchant payments industry, an ecosystem subject to rigorous RBI capital adequacy norms and liquidity coverage mandates. The company originates small-ticket merchant working capital loans and consumer revolving credit lines through app-based underwriting. The market environment has grown significantly stricter as central regulators seek to curb systemic contagion from non-bank fintech balance sheets. Financial institutions survive on institutional credit ratings, wholesale debt syndication, and investor capital reserves.",
        size: '1,000 employees',
        revenue: '₹500 crore',
        position: "Ranked #4 among digital lending platforms in India with ₹500 crore in annual revenue and an active loan book of ₹2,800 crore. Highly respected for low customer acquisition costs through proprietary merchant QR networks. However, its major vulnerability is high balance-sheet leverage and an over-reliance on equity funding rounds to satisfy regulatory capital reserve buffers. With investors freezing emergency capital infusions ahead of an uncertain macro series E round, the new reserve mandate leaves PaySphere facing imminent regulatory suspension unless it can immediately release trapped liquidity.",
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
        market: "Operates in mission-critical digital payment aggregation, merchant checkout gateways, and UPI payment processing. Serves over 250,000 e-commerce merchants, digital marketplaces, and subscription apps across India, charging transaction discount rates (MDR) ranging from 0.8% to 1.9%. The payment gateway market is characterized by ultra-thin margins, immense transaction volume, and extreme sensitivity to checkout friction where every additional second of authorization latency directly increases cart abandonment by 7%–12%.",
        size: '1,400 employees',
        revenue: '₹750 crore',
        position: "One of India's fastest-growing digital payments platforms, processing over 45 million daily transactions with ₹750 crore annual revenue. Strong brand recognition among modern direct-to-consumer (D2C) brands and online platforms for rapid checkout completion. However, its automated risk-scoring algorithms were recently exploited by organized synthetic identity rings, causing fraud incidents to spike 300% in a single quarter. With card network chargeback fines mounting and regulatory inquiries initiated, introducing heavy verification barriers threatens to trigger massive merchant churn to rival gateways like Razorpay and PayU.",
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
        market: "Competes in retail neobanking, digital personal wealth management, and smart savings accounts designed specifically for urban professionals and salaried millennials. Operates on a co-branded banking model in partnership with a sponsor scheduled commercial bank, monetizing via debit card interchange fees, credit cross-selling, mutual fund distribution, and premium concierge subscriptions. The market is intensely crowded with digital-first youth brands competing for deposits and primary salary account status.",
        size: '800 employees',
        revenue: '₹280 crore',
        position: "A leading fintech challenger that captured 8 million registered users through sleek UX, automated financial analytics, and gamified rewards, achieving ₹280 crore in annual turnover. However, India's largest private sector bank has just launched a near-identical digital banking app featuring zero transaction fees and an aggressive 5% perpetual cashback campaign backed by an annual marketing budget five times FinNova's total revenue. FinNova faces immediate margin compression and accelerating account churn unless it can fortify non-monetary customer loyalty.",
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
        market: "Operates in the trusted mid-market digital banking and deposit servicing ecosystem. Acts as the primary digital interface for semi-urban salary accounts, digital fixed deposits, and everyday peer-to-peer payments for families and small shopkeepers. Customer relationships in this market are governed entirely by institutional safety perceptions, regulatory compliance assurances, and uncompromising core banking ledger integrity.",
        size: '1,200 employees',
        revenue: '₹600 crore',
        position: "A respected mid-market financial services brand with 3.2 million active deposit accounts and ₹600 crore revenue. Built its reputation on conservative reliability and regional branch partnerships. That sterling reputation is now on the precipice: a catastrophic database indexing glitch during a weekend cloud migration displayed incorrect zero or distorted account balances to 80,000 customers on mobile dashboards. Panic is spreading across social media channels and local branches, threatening an existential bank run despite zero actual capital loss.",
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
        market: "Operates in high-velocity unsecured digital consumer credit, personal installment loans, and Buy Now Pay Later (BNPL) financing for middle-income urban wage earners. The market thrives on instant credit risk appraisal algorithms that analyze device metadata, utility bills, and bank statements to disburse funds within 180 seconds. While consumer appetite for instant credit remains insatiable, macroeconomic inflationary pressures and over-leveraged borrowers make the portfolio highly sensitive to non-performing asset (NPA) shocks.",
        size: '1,800 employees',
        revenue: '₹900 crore',
        position: "A major digital consumer lender managing an active ₹4,200 crore loan book generating ₹900 crore in annual revenue. Strong brand visibility across Tier-1 and Tier-2 retail hubs. However, the aggressive growth strategy of the past two years has caught up with management: 90-day delinquency rates have surged from 2.1% to 6.8% in four months. Tightening credit score cutoffs will eliminate bad loans but cause immediate quarterly revenue to plummet by 25%, while aggressive competitors continue capturing market share by granting friction-free credit to the same demographic.",
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
        market: "Specializes in micro and small enterprise (SME) working capital loans, merchant invoice financing, and collateral-free credit lines for local retailers and distributors across semi-urban clusters. Business relies on feet-on-street merchant onboarding supported by digital repayment collections via automated UPI mandates. In this market, underwriting margins are healthy (16%–22% APR), but customer acquisition, local branch verification, and debt recovery costs create high operating expenditure hurdles.",
        size: '1,000 employees',
        revenue: '₹450 crore',
        position: "A rapidly rising SME lending champion commanding dominant market share across three industrial states, achieving an impressive 60% year-on-year customer growth trajectory with ₹450 crore revenue. Despite outstanding top-line expansion, high customer acquisition costs (CAC) and field servicing overhead have kept the company operating at an annual loss of ₹65 crore. With institutional lenders demanding positive unit economics before renewing debt lines, slowing customer expansion could hand regional market dominance to predatory local competitors.",
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
        market: "Operates in the mass-market electric passenger vehicle (4-wheeler) manufacturing industry in India. The sector is heavily subsidized under national clean mobility schemes (FAME) but faces stringent governmental safety testing and zero tolerance for thermal battery runaway incidents. Customers include urban families and corporate fleets prioritizing low total cost of ownership, long battery warranties, and public safety certifications. The industry operates under long automotive supply chain cycles with massive fixed manufacturing investments.",
        size: '3,500 employees',
        revenue: '₹2,200 crore',
        position: "#4 electric vehicle manufacturer in India with ₹2,200 crore annual turnover and 3,500 factory and engineering staff. Holds an 11% market share in the ₹12–18 lakh EV crossover category with strong consumer trust. That hard-earned goodwill is now under existential threat: three separate vehicle fires in hot-weather zones have traced back to a cell separator degradation flaw affecting approximately 8% of the 22,000 vehicles already on roads. A total hardware battery replacement would cost ₹380 crore (nearly wiping out annual profits), while doing nothing risks government impoundment and catastrophic brand destruction.",
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
        market: "Competes in India's mid-range electric passenger car segment (₹15–25 lakh bracket), targeting aspiring middle-class professionals transitioning from internal combustion vehicles. Market demand is driven by vehicle range, build quality, safety ratings, and purchase price parity with petrol/diesel alternatives. The market environment is becoming fiercely contested as domestic auto giants achieve massive economies of scale in localized cell assembly and battery pack manufacturing.",
        size: '4,000 employees',
        revenue: '₹3,000 crore',
        position: "Holds the #3 market ranking in mid-range electric sedans and compact SUVs, generating ₹3,000 crore revenue with 4,000 employees. Its flagship model, the Electra Pulse, accounts for 62% of company sales at a healthy 18% gross margin. Suddenly, the undisputed market leader—armed with massive balance sheet reserves and localized cell gigafactories—has slashed retail prices across comparable models by 20%. Matching the price cut will erase Electra's operating margins down to break-even, while refusing to match will see dealership footfalls evaporate overnight.",
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
        market: "Manufactures high-speed electric two-wheelers and lightweight commercial delivery scooters for last-mile logistics fleets (quick commerce and food delivery). Operates in an ultra-fast growth segment where customer delivery timelines, dealer inventory turn, and vehicle uptime determine market leadership. The industry relies heavily on imported lithium-ion NMC and LFP battery packs from specialized Tier-1 battery consortiums across East Asia.",
        size: '2,800 employees',
        revenue: '₹1,400 crore',
        position: "A high-velocity challenger brand with ₹1,400 crore in annual revenue, delivering 14,000 scooters monthly and commanding a 16% market share in Tier-1 and Tier-2 cities. Demand is currently outstripping production by 30%. However, its sole primary battery supplier has suffered a catastrophic factory fire and can supply only 60% of contracted battery modules for the next four months. With 18,000 pending customer bookings and pan-India dealership orders backed up, diverting scarce batteries between lucrative commercial fleet contracts and everyday retail buyers creates an agonizing operational bottleneck.",
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
        market: "Operates in the integrated electric vehicle manufacturing and proprietary charging ecosystem space. In addition to manufacturing premium electric commuter cars, the company provides high-voltage DC fast-charging plazas along national expressways and dense urban transit corridors. In the EV ecosystem, charging availability and highway charger reliability are the #1 deciding factor for consumers experiencing range anxiety when choosing between automotive brands.",
        size: '2,000 employees',
        revenue: '₹1,000 crore',
        position: "A highly acclaimed premium electric vehicle brand with ₹1,000 crore in annual sales, praised for vehicle styling and interior technology. However, its expansion has hit a brick wall: customer satisfaction scores have plunged 35% in six months due to chronic charger outages, long queues, and charging deserts in key metro markets. Building and deploying an independent national supercharging network would require ₹450 crore in heavy capital expenditure, transforming the OEM into an asset-heavy utility operator and diverting resources away from next-generation vehicle engineering.",
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
        market: "Operates in the luxury and premium electric SUV segment (₹40–60 lakh category) competing directly against German luxury imports (BMW, Mercedes-Benz, Audi) and high-end domestic electric flagships. The luxury EV market demands uncompromising brand prestige, ultra-luxurious interiors, high autonomous driving capabilities, and rapid technological innovation.",
        size: '5,000 employees',
        revenue: '₹4,500 crore',
        position: "An established premium automaker with ₹4,500 crore in annual revenue and 5,000 highly trained personnel. It invested ₹600 crore in research, tooling, and dedicated robotic assembly lines for its new flagship luxury SUV, the 'Apex EV'. Despite winning prestigious automotive design awards, actual consumer deliveries are running 50% below minimum plant breakeven volume due to polarizing styling and software bugs. With the factory floor tied to this model and fixed inventory carrying costs mounting at ₹18 crore monthly, the company must urgently salvage its investment without diluting its high-end brand equity.",
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
        market: "Operates in large-scale electric passenger vehicle manufacturing and commercial electric bus platforms. The global electric vehicle export market is undergoing massive structural shifts, with regional governments in Southeast Asia, the Middle East, and Latin America offering massive tariff incentives for affordable, durable electric transit platforms built in non-Western manufacturing hubs.",
        size: '7,000 employees',
        revenue: '₹6,000 crore',
        position: "A top-five Indian automotive powerhouse generating ₹6,000 crore in revenue with 7,000 employees and robust domestic operating cash flows. The company has received a time-sensitive invitation from an ASEAN consortium to enter a ₹25,000 crore developing EV market with preferential tax exemptions. However, local incumbent automakers possess entrenched dealer networks, deep government lobbying relationships, and low-cost component supply chains. Committing ₹800 crore in capital and senior executive bandwidth overseas risks starving the domestic Indian business right as multinational rivals intensify competition on home soil.",
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
        market: "Manufactures precision medical electronics, bedside multiparameter patient monitors, and ICU telemetry equipment for hospital networks. Sells directly to premier private hospital chains, corporate intensive care units, and government medical colleges through specialized biomedical procurement tenders. In this industry, life-critical accuracy, statutory CDSCO/FDA compliance certifications, and physician trust form the absolute bedrock of commercial viability.",
        size: '1,600 employees',
        revenue: '₹700 crore',
        position: "India's leading domestic biomedical hardware manufacturer, installed across 450+ major healthcare facilities with ₹700 crore in revenue. Commands a 24% national market share in ICU monitoring systems. However, its sterling safety record is under immediate threat: five premier tertiary-care hospitals have filed emergency adverse event reports indicating erratic oxygen saturation and cardiac telemetry readouts in its flagship monitor, coinciding with three critical patient complications. The root cause remains unconfirmed between sensor firmware drift and hospital staff miscalibration, creating an urgent dilemma between a voluntary nationwide freeze and patient safety.",
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
        market: "Operates in the cutting-edge AI-assisted diagnostic imaging and automated clinical pathology market. Develops deep-learning algorithms and accompanying optical sensor scanners that detect early-stage oncological abnormalities and diabetic retinopathy from routine scans in under 90 seconds. The market is strictly governed by rigorous clinical trial validation protocols, multi-phase central drug and medical device standards (CDSCO/FDA), and institutional ethics boards.",
        size: '1,200 employees',
        revenue: '₹500 crore',
        position: "A high-growth MedTech innovator with ₹500 crore in revenue, backed by top institutional healthcare funds. Anticipating prompt regulatory clearance for its revolutionary AI cancer detection platform, the company hired 250 specialized technicians, leased automated production facilities, and committed ₹85 crore to an international commercial rollout across Southeast Asia and the Middle East. Catastrophe strikes as the regulatory oversight committee issues a surprise technical audit inquiry, postponing final commercial approval by a minimum of six months while fixed operational burn runs at ₹14 crore monthly.",
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
        market: "Develops enterprise Hospital Information Systems (HIS), electronic medical records (EMR), and interconnected smart hospital infrastructure software. Sells enterprise-wide software licenses that coordinate outpatient appointments, patient billing, inpatient bed allocation, operation theater schedules, and laboratory pharmacy inventories across multi-location hospital conglomerates.",
        size: '2,000 employees',
        revenue: '₹900 crore',
        position: "The dominant domestic software provider to India's private hospital chains, commanding ₹900 crore in annual revenue across 2,000 engineering and support personnel. However, its financial stability suffers from severe revenue concentration: its single largest institutional customer, a premier corporate hospital chain with 32 tertiary facilities, accounts for 25% of total annual billings (₹225 crore). That anchor client has received an aggressive proposal from a global US enterprise health-tech giant and has informed MediConnect that it will defect unless MediConnect grants an immediate 35% fee reduction.",
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
        market: "Operates in cloud-hosted digital health infrastructure, telehealth consultations, and centralized patient health record repositories. Connects over 12 million patients with diagnostic labs, primary clinics, and digital pharmacies across 18 Indian states. The sector is subject to stringent data privacy legislation (DPDP Act) and medical confidentiality norms, where unauthorized exposure of patient medical histories, prescription data, and diagnostic lab reports triggers massive regulatory penalties and criminal liability.",
        size: '1,500 employees',
        revenue: '₹650 crore',
        position: "One of India's largest and most trusted cloud healthcare platforms, generating ₹650 crore in annual turnover with 1,500 employees. Holds data partnerships with leading hospital chains and medical insurance providers. The company's security operations center has just detected an unauthorized database intrusion targeting cloud diagnostic servers, with evidence suggesting that sensitive patient health records may have been exfiltrated to an overseas IP. With forensic investigations still underway and the exact volume of compromised patients unknown, management faces an excruciating crisis regarding public disclosure timelines.",
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
        market: "Manufactures advanced minimally invasive surgical staplers, biocompatible laparoscopic implants, and precision surgical instruments. Targets general surgery, oncology, and bariatric operating rooms in private corporate hospitals and public medical institutions. In hospital procurement, surgical consumables are purchased under intense cost scrutiny, where administrative procurement committees frequently overrule chief surgeons to preserve hospital margin targets.",
        size: '2,500 employees',
        revenue: '₹1,200 crore',
        position: "A premier clinical medical technology provider with ₹1,200 crore in annual revenue, renowned among top surgeons for unmatched clinical outcomes, including a proven 45% reduction in post-operative surgical leakages and shorter patient hospital stays. However, its advanced proprietary materials make its unit manufacturing cost 40% higher than the dominant imported legacy brand. Because hospital administrators prioritize quarterly department procurement budgets over long-term patient recovery savings, sales growth has stalled across 70% of target hospital networks.",
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
        market: "Manufactures critical-care medical equipment, portable respiratory ventilators, high-flow nasal oxygen systems, and modular ICU patient isolation units. Sells to national disaster relief ministries, state health departments, and international humanitarian organizations. The market is subject to sudden catastrophic demand shocks during health emergencies and regional respiratory epidemics, requiring rapid manufacturing surge capacity while maintaining 100% zero-defect clinical reliability.",
        size: '3,000 employees',
        revenue: '₹1,500 crore',
        position: "A robust domestic medical hardware manufacturer with ₹1,500 crore in revenue and 3,000 employees across two state-of-the-art facilities in Gujarat and Tamil Nadu. Following prominent international validation in leading global medical journals, international procurement orders from 14 countries have unexpectedly flooded the company, doubling total order book volume to ₹3,000 crore overnight. However, its current precision manufacturing plants are already operating at 92% capacity. Attempting to double output overnight through third-party contract manufacturers risks fatal quality defects in life-support equipment.",
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
        market: "Operates in the elite corporate and commercial legal advisory market, providing specialized transactional counsel in cross-border mergers and acquisitions (M&A), banking and debt syndication, private equity investments, and joint venture restructuring. Clients are blue-chip industrial conglomerates, infrastructure developers, and institutional private equity funds. Law firm revenue models in this space rely on a blend of high hourly billing rates for senior partners, structured transaction success fees, and recurring annual corporate general counsel retainers.",
        size: '250 lawyers',
        revenue: '₹300 crore',
        position: "A top-tier regional corporate law powerhouse with 250 fee-earners and ₹300 crore in annual revenue, celebrated for deep partner-led client access and impeccable transaction execution. However, the firm faces a critical structural vulnerability: a single domestic infrastructure conglomerate generates 25% of the firm's total annual billing (₹75 crore). That anchor client's newly appointed board has announced a global procurement tender, inviting elite multinational magic-circle law firms and demanding a mandatory 30% reduction in legal advisory fees as a condition for renewal.",
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
        market: "Operates in commercial contract drafting, corporate compliance audits, regulatory advisory, and routine legal research. Historically, the legal industry's pyramid business model has depended heavily on junior associates performing hundreds of billable hours of manual discovery, contract review, and statutory cross-referencing. The sector is undergoing seismic technological disruption as specialized enterprise legal AI tools automate comprehensive contract redlining and due diligence at 1/10th of traditional human cost.",
        size: '400 lawyers',
        revenue: '₹450 crore',
        position: "A major commercial legal services firm with 400 lawyers and ₹450 crore in annual revenue, highly profitable due to high associate-to-partner leverage ratios. However, corporate general counsels and institutional clients are now refusing to pay traditional hourly billing rates for routine contract review and legal research, pointing out that in-house teams can run open-source and legal foundation models. Over 40% of the firm's junior lawyer billable workload is under direct threat of immediate cancellation, threatening to collapse the talent development pipeline and firm profitability.",
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
        market: "Operates as an integrated full-service law firm spanning both corporate transactional advisory and high-stakes commercial courtroom litigation. Serves major domestic corporations, high-net-worth business promoters, and public sector undertakings across regulatory tribunals, high courts, and the Supreme Court of India. Law firm partnership dynamics require delicate alignment between equity partners regarding capital reinvestment, partner profit draws, and long-term practice specialization.",
        size: '300 lawyers',
        revenue: '₹380 crore',
        position: "A highly respected heritage firm with 300 advocates and ₹380 crore in annual billing, possessing deep judicial connections and high brand prestige. However, the partnership is paralyzed by a fierce internal civil war: the corporate advisory practice (contributing 55% of revenue from tech startups and venture funds) demands significant capital investment into tech tools and international marketing, while the traditional litigation faction (contributing high-profile courtroom victories and key institutional ties) demands prioritizing trial advocates and disputes expansion. With capital insufficient to fund both, key partners on both sides are threatening defection.",
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
        market: "Specializes in high-profile appellate litigation, corporate white-collar defense, constitutional law, and cross-border commercial arbitration. In the legal sector, institutional reputation, judicial credibility, and client confidentiality are everything. Corporate clients pay massive retainers specifically because the firm's name carries unmatched gravitas before judicial benches and regulatory enforcement agencies.",
        size: '500 lawyers',
        revenue: '₹600 crore',
        position: "One of the most recognized and influential law firms in the country, commanding ₹600 crore in annual revenue across 500 advocates. The firm's reputation has been rocked by national headlines: an investigative media report alleges that a junior litigation partner inadvertently missed a crucial statutory limitation filing deadline in a ₹4,000 crore corporate debt recovery dispute, resulting in a devastating default order against an anchor industrial client. As public commentary and Bar Council scrutiny intensify, the firm must navigate public communication without breaching client privilege or admitting fatal malpractice liability.",
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
        market: "Competes in high-growth technology law, intellectual property litigation, venture capital funding transactions, and FinTech regulatory licensing. The legal market for specialized tech lawyers in Bengaluru, Mumbai, and Delhi has turned hyper-competitive, with top international UK and US law firms establishing local capability centers and foreign law practice offices under newly relaxed Bar Council entry rules.",
        size: '650 lawyers',
        revenue: '₹800 crore',
        position: "India's premier technology-law specialist firm, boasting 650 lawyers, ₹800 crore in annual revenue, and advisory roles on 40% of all unicorn venture rounds over the past three years. However, an aggressive international law firm entering the Indian market has launched a coordinated raid on LegalFirst, extending formal compensation offers with 60%–80% pay increases and guaranteed overseas rotations to 15 key equity partners and 40 top senior associates. Matching all offers would permanently destroy the firm's profit margins, while losing them would gut its flagship tech and IP practice groups.",
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
        market: "Operates in premier full-service corporate, financial restructuring, tax advisory, and capital markets law. Large corporate clients increasingly demand seamless, pan-national legal coverage across primary financial, political, and industrial hubs—demanding boots-on-the-ground presence in Mumbai (finance), Delhi NCR (regulatory/courts), Bengaluru (tech), and Chennai/Hyderabad (manufacturing/pharma).",
        size: '700 lawyers',
        revenue: '₹1,000 crore',
        position: "The undisputed domestic market leader in corporate legal services, generating ₹1,000 crore in annual revenue with 700 lawyers, centralized primarily in Mumbai. The managing committee faces a historic decision: major corporate clients are demanding local full-service offices in Bengaluru, Hyderabad, and GIFT City to handle regional transactional volume. However, launching three full-fledged greenfield offices requires ₹120 crore in capital, dilutes the firm's tight-knit meritocratic culture, and risks partner over-extension right as regional boutique law firms consolidate their local client bases.",
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
        market: "Operates in enterprise cybersecurity, managed Security Operations Centers (SOC), incident response, and threat monitoring for critical Indian private and public institutions. Protects banking networks, defense manufacturing contractors, and telecommunications backbones. The cybersecurity market is governed by extreme zero-trust operational requirements, ISO 27001 / CERT-In compliance directives, and uncompromising reputational accountability where a single breach can result in catastrophic client liability and contractual cancellation.",
        size: '1,200 employees',
        revenue: '₹600 crore',
        position: "A premier domestic cybersecurity service provider guarding over 180 critical corporate networks with ₹600 crore in revenue and 1,200 security analysts. The unthinkable has occurred: SecureGrid's own internal domain controllers and secondary management telemetry systems have been infected by an advanced human-operated ransomware payload originating from an elite state-linked threat group. While client customer networks appear uncompromised so far, security engineers cannot confirm whether lateral movement has occurred through SecureGrid's remote management agents. Total shutdown will halt 180 enterprise monitoring operations, while continuing risks spreading the infection.",
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
        market: "Specializes in Cloud Security Posture Management (CSPM), automated Data Loss Prevention (DLP), and encrypted data vault infrastructure. Serves commercial banks, fintech unicorns, and multi-tenant SaaS providers handling the financial and personal identity records of over 60 million citizens. The market is subject to mandatory 6-hour CERT-In cyber incident reporting rules and severe statutory penalties under India's Digital Personal Data Protection (DPDP) Act for failing to safeguard sensitive personal data.",
        size: '1,500 employees',
        revenue: '₹800 crore',
        position: "A trusted cybersecurity guardian with ₹800 crore in revenue, recognized as the preferred security vendor for 4 of India's top 10 commercial banks. However, a dark-web intelligence feed has surfaced authentic customer database records—including masked account numbers and hashed credentials—traced back to an unsecured API gateway belonging to DataShield's multi-tenant cloud storage cluster. Forensic experts confirm an unauthorized actor accessed the cluster, but the full scope of exfiltration remains undetermined. Management must decide whether to issue an immediate public disclosure or delay until forensic verification is finalized.",
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
        market: "Operates in Identity and Access Management (IAM), biometric passwordless authentication, multi-factor verification (MFA), and Single Sign-On (SSO) infrastructure for enterprise workforces and consumer banking apps. In this space, product success depends on an intensely delicate equilibrium: maximum cryptographic resistance against credential stuffing, phishing, and session hijacking, balanced against near-zero friction for end-users logging into productivity apps hundreds of times a day.",
        size: '900 employees',
        revenue: '₹450 crore',
        position: "A fast-growing enterprise identity challenger powering authentication for 450 enterprise clients and 8 million daily end-users, generating ₹450 crore in annual recurring revenue. In response to a global wave of sophisticated token-theft and session-hijacking attacks, AuthSecure's security committee has engineered a mandatory hardware-bound biometric authentication protocol with frequent session re-challenges. However, pilot rollouts have ignited an open mutiny among corporate employees, with enterprise client CIOs reporting a 40% spike in IT helpdesk tickets and threatening contract termination due to severe workplace friction.",
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
        market: "Provides managed Extended Detection and Response (XDR), automated vulnerability assessment, and continuous threat exposure management for mid-market and enterprise corporate IT infrastructures. Sells client endpoint software agents installed across 800,000 corporate laptops and server nodes. Market trust is hyper-sensitive to security benchmark testing and industry vulnerability disclosures (CVEs).",
        size: '1,000 employees',
        revenue: '₹500 crore',
        position: "#2 domestic provider in managed endpoint security with ₹500 crore in annual turnover and 1,000 employees. An aggressive competitor preparing a rival enterprise sales push has published a provocative whitepaper and social media campaign alleging that CyberFort's core client agent possesses a severe unauthenticated remote-code execution vulnerability. CyberFort's internal red-team investigation confirms that while a theoretical privilege escalation flaw exists under rare configurations, there is zero evidence of active exploitation in the wild. Management must decide how aggressively and transparently to respond publicly.",
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
        market: "Operates in enterprise perimeter defense, hardware next-generation firewalls (NGFW), intrusion prevention appliances, and legacy cyber infrastructure management. Sells physical security hardware appliances and multi-year support maintenance contracts to traditional manufacturing plants, educational institutions, and government utility departments. The sector is battling margin compression as enterprise workloads migrate to cloud-native cybersecurity architectures.",
        size: '1,100 employees',
        revenue: '₹550 crore',
        position: "An established cybersecurity hardware and network protection vendor with ₹550 crore in annual revenue and 1,100 employees. Facing high debt servicing costs and macroeconomic margin pressure, the corporate board has mandated an immediate, across-the-board 25% cut in cybersecurity R&D and cloud threat-intelligence telemetry infrastructure. This drastic budget contraction coincides precisely with a dramatic 80% surge in state-sponsored polymorphic malware attacks targeting ShieldWorks' primary customer demographic, leaving executive leadership with impossible choices regarding which defenses to mothball.",
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
        market: "Operates in specialized Operational Technology (OT), Industrial Control Systems (ICS), and SCADA cybersecurity defense. The company safeguards the nation's most sensitive critical physical infrastructure: regional electrical power transmission grids, nuclear generation stations, interstate petroleum pipeline telemetry, and municipal water purification plants. In this domain, cyber defense failures translate directly into catastrophic real-world physical blackouts, equipment destruction, and threats to civilian human life.",
        size: '2,500 employees',
        revenue: '₹1,200 crore',
        position: "India's premier sovereign critical infrastructure cybersecurity guardian, generating ₹1,200 crore in annual revenue with 2,500 specialized cyber and industrial control engineers. Threat sensors have just detected an active, persistent Advanced Persistent Threat (APT) actor executing living-off-the-land commands deep inside the SCADA monitoring consoles of a power transmission grid serving 45 million citizens. The threat actor's exact payload depth is unknown. Shutting down the grid's digital systems to purge the attackers will trigger immediate rolling electrical blackouts costing an estimated ₹10 crore per hour in industrial economic paralysis.",
        situation: 'A sophisticated cyberattack targets one of your most important systems. You cannot determine whether attackers have gained deeper access.',
        constraint: 'Shutting the system down would cost approximately ₹10 crore per day in operational losses for your customers.',
        objective: 'Balance operational continuity, customer safety, and cyber containment.',
        ceoDecision: 'Do you shut down, isolate, continue operating, or create a controlled degradation strategy?'
      }
    ]
  }
];
