// CEO FOR 10 MINUTES - Executive Decision Challenge Data
// Extracted directly from official competition documentation

export interface ProblemStatement {
  id: string;
  number: number;
  wheelLabel: string;        // Concise segment label for wheel (e.g., 'PRICE WAR')
  title: string;             // Full problem title from official document
  situation: string;         // Full background case details
  constraint?: string;       // Operational / financial constraints
  ceoChallenge: string;      // The executive question requiring a strategic decision
  stakes: string;            // Strategic risk tag for executive card
}

export interface Domain {
  id: string;
  shortName: string;
  fullName: string;
  emoji: string;
  badge: string;
  icon: string;
  description: string;
  problems: ProblemStatement[];
}

export const DOMAINS: Domain[] = [
  {
    id: 'ecommerce',
    shortName: 'E-Commerce',
    fullName: 'E-Commerce & Retail',
    emoji: '🛒',
    badge: 'Retail • Commerce',
    icon: 'ShoppingBag',
    description: 'Executive decision-making arena for E-Commerce & Retail.',
    problems: [
      {
        id: 'ecommerce_p1',
        number: 1,
        wheelLabel: 'PRICE WAR',
        title: 'Price War',
        situation: 'Your biggest competitor has reduced prices by 30%, and your sales have started declining. Matching their prices would protect market share but could make several of your products unprofitable.',
        ceoChallenge: 'How will you defend market share without destroying your margins?',
        stakes: 'Margin & Positioning'
      },
      {
        id: 'ecommerce_p2',
        number: 2,
        wheelLabel: 'CUSTOMER RETENTION',
        title: 'Customer Retention Crisis',
        situation: 'Your customer retention has fallen by 25% in three months, while customer acquisition costs have increased significantly.',
        ceoChallenge: 'Will you focus resources on winning new customers or retaining existing ones—and what specific changes will you make?',
        stakes: 'Customer Churn & Unit Economics'
      },
      {
        id: 'ecommerce_p3',
        number: 3,
        wheelLabel: 'INVENTORY TRAP',
        title: 'Inventory Trap',
        situation: 'You have ₹2 crore worth of unsold seasonal inventory, and its market value is falling rapidly.',
        ceoChallenge: 'How will you convert the inventory into cash without heavily damaging your brand, pricing, or future sales?',
        stakes: 'Capital Allocation & Inventory Risk'
      },
      {
        id: 'ecommerce_p4',
        number: 4,
        wheelLabel: 'SUPPLIER SHOCK',
        title: 'Supplier Shock',
        situation: 'Your primary supplier has increased prices by 35%, directly affecting your margins.',
        constraint: 'Switching suppliers could take three months and may temporarily reduce product quality.',
        ceoChallenge: 'Will you renegotiate, switch suppliers, absorb the cost, increase prices, or redesign your supply chain?',
        stakes: 'Supply Chain & Operational Continuity'
      },
      {
        id: 'ecommerce_p5',
        number: 5,
        wheelLabel: 'EXPANSION VS DEFENCE',
        title: 'Expansion vs Defence',
        situation: 'Your company is growing rapidly in its current market, but a strong competitor has entered the new market you planned to expand into.',
        constraint: 'You do not have enough resources to aggressively defend the existing market and aggressively enter the new one simultaneously.',
        ceoChallenge: 'Where will you place your next major investment?',
        stakes: 'Market Expansion & Resource Allocation'
      },
      {
        id: 'ecommerce_p6',
        number: 6,
        wheelLabel: 'REPUTATION CRISIS',
        title: 'Reputation Crisis',
        situation: 'A viral social-media complaint claims your company delivered a poor-quality product. Customer trust and new orders have started falling.',
        constraint: 'The complaint is spreading faster than your investigation can determine whether the customer\'s claim is completely accurate.',
        ceoChallenge: 'How will you respond publicly while deciding what operational action to take?',
        stakes: 'Public Trust & Crisis Management'
      },
    ]
  },
  {
    id: 'food',
    shortName: 'Food',
    fullName: 'Food & Hospitality',
    emoji: '🍔',
    badge: 'Dining • Experience',
    icon: 'Utensils',
    description: 'Executive decision-making arena for Food & Hospitality.',
    problems: [
      {
        id: 'food_p1',
        number: 1,
        wheelLabel: 'RISING COSTS',
        title: 'Rising Costs',
        situation: 'Food and operating costs have increased by 25%, but a significant price increase could drive customers toward competitors.',
        ceoChallenge: 'How will you protect profitability without losing your customer base?',
        stakes: 'Margin & Positioning'
      },
      {
        id: 'food_p2',
        number: 2,
        wheelLabel: 'COMPETITOR ATTACK',
        title: 'Competitor Attack',
        situation: 'A major food chain has opened multiple outlets near your highest-performing locations.',
        constraint: 'The competitor has a significantly larger marketing budget and can afford aggressive introductory discounts.',
        ceoChallenge: 'How will you defend your locations without entering an unsustainable price war?',
        stakes: 'Customer Churn & Unit Economics'
      },
      {
        id: 'food_p3',
        number: 3,
        wheelLabel: 'CUSTOMER DECLINE',
        title: 'Customer Decline',
        situation: 'Monthly customers have fallen by 30%, even though your product quality and customer ratings remain relatively strong.',
        ceoChallenge: 'What do you believe is the root problem, and where will you invest first to recover demand?',
        stakes: 'Capital Allocation & Inventory Risk'
      },
      {
        id: 'food_p4',
        number: 4,
        wheelLabel: 'STAFF CRISIS',
        title: 'Staff Crisis',
        situation: 'Nearly 30% of your experienced employees have resigned within one month, putting pressure on service quality.',
        constraint: 'Hiring replacements quickly may bring inexperienced employees who require training.',
        ceoChallenge: 'How will you maintain service quality while rebuilding the workforce?',
        stakes: 'Supply Chain & Operational Continuity'
      },
      {
        id: 'food_p5',
        number: 5,
        wheelLabel: 'FAILED EXPANSION',
        title: 'Failed Expansion',
        situation: 'A newly opened outlet is consistently losing money and has achieved only 60% of its expected customer volume.',
        constraint: 'Closing immediately would create a significant financial loss, but continuing unchanged will increase losses.',
        ceoChallenge: 'Will you turn around, relocate, temporarily close, or permanently exit the outlet?',
        stakes: 'Market Expansion & Resource Allocation'
      },
      {
        id: 'food_p6',
        number: 6,
        wheelLabel: 'FOOD SAFETY CRISIS',
        title: 'Food Safety Reputation Crisis',
        situation: 'A customer posts a viral video claiming your company served poor-quality food, causing widespread negative attention.',
        constraint: 'An internal investigation has not yet confirmed whether the incident was isolated or part of a larger operational problem.',
        ceoChallenge: 'What will you do in the first 48 hours?',
        stakes: 'Public Trust & Crisis Management'
      },
    ]
  },
  {
    id: 'education',
    shortName: 'Education',
    fullName: 'Education & EdTech',
    emoji: '🎓',
    badge: 'Learning • Scale',
    icon: 'GraduationCap',
    description: 'Executive decision-making arena for Education & EdTech.',
    problems: [
      {
        id: 'education_p1',
        number: 1,
        wheelLabel: 'FREE COMPETITOR',
        title: 'Free Competitor',
        situation: 'A major competitor has started offering a similar learning platform completely free of charge.',
        constraint: 'Your current cost structure does not allow you to offer the same service for free.',
        ceoChallenge: 'How will you compete without simply copying the competitor?',
        stakes: 'Margin & Positioning'
      },
      {
        id: 'education_p2',
        number: 2,
        wheelLabel: 'STUDENT DROPOUT',
        title: 'Student Dropout',
        situation: 'Student subscription cancellations have increased by 40% in the last quarter.',
        constraint: 'New enrollments are still growing, meaning the company may be hiding the problem through aggressive acquisition.',
        ceoChallenge: 'Will you prioritize acquisition or retention, and what will you change?',
        stakes: 'Customer Churn & Unit Economics'
      },
      {
        id: 'education_p3',
        number: 3,
        wheelLabel: 'PRICING PRESSURE',
        title: 'Pricing Pressure',
        situation: 'Students are demanding lower prices while instructor and platform costs continue to increase.',
        constraint: 'A major price reduction would significantly reduce your ability to maintain course quality.',
        ceoChallenge: 'How will you redesign your pricing or business model?',
        stakes: 'Capital Allocation & Inventory Risk'
      },
      {
        id: 'education_p4',
        number: 4,
        wheelLabel: 'FACULTY CRISIS',
        title: 'Faculty Crisis',
        situation: 'Several of your highest-rated instructors have received offers from a competing platform and are preparing to leave.',
        constraint: 'Matching every competitor offer would significantly increase your operating costs.',
        ceoChallenge: 'Which talent do you retain, how do you retain them, and what happens to the remaining faculty?',
        stakes: 'Supply Chain & Operational Continuity'
      },
      {
        id: 'education_p5',
        number: 5,
        wheelLabel: 'ENGAGEMENT FAILURE',
        title: 'Engagement Failure',
        situation: 'Your new learning platform received strong initial interest, but 70% of new users stop using it after the first month.',
        constraint: 'Marketing has already generated strong awareness, so simply spending more on acquisition is unlikely to solve the core problem.',
        ceoChallenge: 'What will you change in the product or learning experience?',
        stakes: 'Market Expansion & Resource Allocation'
      },
      {
        id: 'education_p6',
        number: 6,
        wheelLabel: 'CAREER OUTCOME CRISIS',
        title: 'Career Outcome Crisis',
        situation: 'A viral review claims your courses are not delivering the career outcomes promised to students.',
        constraint: 'Some claims are exaggerated, but several genuine student complaints have also been identified.',
        ceoChallenge: 'How will you protect the brand while addressing the underlying problem?',
        stakes: 'Public Trust & Crisis Management'
      },
    ]
  },
  {
    id: 'entertainment',
    shortName: 'Entertainment',
    fullName: 'Entertainment & Media',
    emoji: '🎬',
    badge: 'Content • Audience',
    icon: 'Film',
    description: 'Executive decision-making arena for Entertainment & Media.',
    problems: [
      {
        id: 'entertainment_p1',
        number: 1,
        wheelLabel: 'SUBSCRIBER LOSS',
        title: 'Subscriber Loss',
        situation: 'Your subscription numbers have fallen by 30% after a competitor launched a significantly cheaper service.',
        constraint: 'Matching the competitor\'s price would make your current subscription model difficult to sustain.',
        ceoChallenge: 'How will you reduce churn without simply starting a price war?',
        stakes: 'Margin & Positioning'
      },
      {
        id: 'entertainment_p2',
        number: 2,
        wheelLabel: 'CONTENT FAILURE',
        title: 'Content Failure',
        situation: 'You invested heavily in a new show/content series, but it has received extremely poor audience ratings.',
        constraint: 'Significant production costs have already been spent, and additional episodes are contractually committed.',
        ceoChallenge: 'Do you continue, modify, cancel, or reposition the content?',
        stakes: 'Customer Churn & Unit Economics'
      },
      {
        id: 'entertainment_p3',
        number: 3,
        wheelLabel: 'CREATOR LOSS',
        title: 'Creator Loss',
        situation: 'Your most popular creator has received an exclusive offer from a competitor.',
        constraint: 'The creator contributes a major share of your platform\'s engagement, but matching the competitor\'s offer would be financially difficult.',
        ceoChallenge: 'Do you retain the creator at a high cost or reduce your dependence on them?',
        stakes: 'Capital Allocation & Inventory Risk'
      },
      {
        id: 'entertainment_p4',
        number: 4,
        wheelLabel: 'ADVERTISING DECLINE',
        title: 'Advertising Decline',
        situation: 'Advertising revenue has fallen by 35% as major advertisers move to competing platforms.',
        constraint: 'Increasing ad volume could reduce user experience and accelerate audience decline.',
        ceoChallenge: 'How will you rebuild advertising revenue without damaging the audience?',
        stakes: 'Supply Chain & Operational Continuity'
      },
      {
        id: 'entertainment_p5',
        number: 5,
        wheelLabel: 'PLATFORM SHIFT',
        title: 'Platform Shift',
        situation: 'Your audience is rapidly moving from your primary platform to a new social-media platform.',
        constraint: 'You have limited resources to maintain your existing platform while building a presence on the new one.',
        ceoChallenge: 'Where will you invest—and what will you deliberately stop doing?',
        stakes: 'Market Expansion & Resource Allocation'
      },
      {
        id: 'entertainment_p6',
        number: 6,
        wheelLabel: 'REPUTATION CRISIS',
        title: 'Reputation Crisis',
        situation: 'A controversial piece of content published by your company triggers significant public backlash.',
        constraint: 'Removing the content could satisfy critics but may anger another section of your audience and create questions about editorial independence.',
        ceoChallenge: 'Do you remove, modify, defend, or contextualize the content?',
        stakes: 'Public Trust & Crisis Management'
      },
    ]
  },
  {
    id: 'fitness',
    shortName: 'Fitness',
    fullName: 'Fitness & Wellness',
    emoji: '🏋️',
    badge: 'Health • Retention',
    icon: 'Dumbbell',
    description: 'Executive decision-making arena for Fitness & Wellness.',
    problems: [
      {
        id: 'fitness_p1',
        number: 1,
        wheelLabel: 'MEMBERSHIP DECLINE',
        title: 'Membership Decline',
        situation: 'Gym membership has fallen by 30% after a low-cost fitness chain opened nearby.',
        constraint: 'Matching the competitor\'s price would make your current gym model unprofitable.',
        ceoChallenge: 'How will you retain customers without entering a price war?',
        stakes: 'Margin & Positioning'
      },
      {
        id: 'fitness_p2',
        number: 2,
        wheelLabel: 'CUSTOMER RETENTION',
        title: 'Customer Retention',
        situation: 'Nearly 35% of new members cancel within their first three months.',
        constraint: 'Customer acquisition is still strong, so the company could continue growing despite poor retention—but at an increasingly high cost.',
        ceoChallenge: 'How will you fix the retention problem?',
        stakes: 'Customer Churn & Unit Economics'
      },
      {
        id: 'fitness_p3',
        number: 3,
        wheelLabel: 'EXPANSION RISK',
        title: 'Expansion Risk',
        situation: 'You have the opportunity to open five new locations, but several existing locations are struggling to remain profitable.',
        constraint: 'Expanding now could accelerate growth but would spread management and financial resources thinner.',
        ceoChallenge: 'Expand, delay, or use a phased strategy?',
        stakes: 'Capital Allocation & Inventory Risk'
      },
      {
        id: 'fitness_p4',
        number: 4,
        wheelLabel: 'TRAINER LOSS',
        title: 'Trainer Loss',
        situation: 'Several of your most popular trainers have joined a competing fitness company.',
        constraint: 'These trainers have strong personal relationships with members, and some members are considering following them.',
        ceoChallenge: 'How will you protect membership and rebuild your trainer team?',
        stakes: 'Supply Chain & Operational Continuity'
      },
      {
        id: 'fitness_p5',
        number: 5,
        wheelLabel: 'CHANGING BEHAVIOUR',
        title: 'Changing Consumer Behaviour',
        situation: 'Customers are increasingly choosing home workouts and fitness apps instead of physical gyms.',
        constraint: 'Your existing gym network carries significant fixed costs and cannot simply be shut down.',
        ceoChallenge: 'Will you defend the traditional gym model, build a digital offering, or combine both?',
        stakes: 'Market Expansion & Resource Allocation'
      },
      {
        id: 'fitness_p6',
        number: 6,
        wheelLabel: 'BRAND CRISIS',
        title: 'Brand Crisis',
        situation: 'A customer complaint about your services goes viral and begins damaging your brand.',
        constraint: 'The complaint is receiving attention before your investigation is complete.',
        ceoChallenge: 'How will you respond publicly while determining whether the complaint reveals a wider operational issue?',
        stakes: 'Public Trust & Crisis Management'
      },
    ]
  },
  {
    id: 'logistics',
    shortName: 'Logistics',
    fullName: 'Logistics & Delivery',
    emoji: '🚚',
    badge: 'Supply • Operations',
    icon: 'Truck',
    description: 'Executive decision-making arena for Logistics & Delivery.',
    problems: [
      {
        id: 'logistics_p1',
        number: 1,
        wheelLabel: 'FUEL SHOCK',
        title: 'Fuel Cost Shock',
        situation: 'Fuel and transportation costs have increased by 30%, significantly reducing your margins.',
        constraint: 'Many of your largest contracts have fixed prices and cannot immediately be renegotiated.',
        ceoChallenge: 'How will you protect profitability without losing major customers?',
        stakes: 'Margin & Positioning'
      },
      {
        id: 'logistics_p2',
        number: 2,
        wheelLabel: 'DELIVERY FAILURE',
        title: 'Delivery Failure',
        situation: 'Your on-time delivery rate has fallen from 95% to 72% in three months.',
        constraint: 'Increasing the delivery fleet immediately would be expensive, and the exact cause of the delays has not yet been fully identified.',
        ceoChallenge: 'What will you fix first?',
        stakes: 'Customer Churn & Unit Economics'
      },
      {
        id: 'logistics_p3',
        number: 3,
        wheelLabel: 'MAJOR CUSTOMER LOSS',
        title: 'Major Customer Loss',
        situation: 'Your largest client, responsible for a significant share of revenue, announces that it is moving its logistics operations to a competitor.',
        constraint: 'Winning the customer back may require lower pricing that could reduce already-thin margins.',
        ceoChallenge: 'Fight to retain the customer or diversify away from the account?',
        stakes: 'Capital Allocation & Inventory Risk'
      },
      {
        id: 'logistics_p4',
        number: 4,
        wheelLabel: 'WORKFORCE CRISIS',
        title: 'Workforce Crisis',
        situation: 'Driver turnover has increased sharply, causing delivery delays across your network.',
        constraint: 'Increasing driver salaries may improve retention but significantly increase operating costs.',
        ceoChallenge: 'How will you solve the workforce problem?',
        stakes: 'Supply Chain & Operational Continuity'
      },
      {
        id: 'logistics_p5',
        number: 5,
        wheelLabel: 'COMPETITOR TECHNOLOGY',
        title: 'Competitor Technology',
        situation: 'A competitor introduces an AI-powered delivery system that is significantly faster and cheaper.',
        constraint: 'Replacing your existing technology immediately would require major investment and operational disruption.',
        ceoChallenge: 'Invest, partner, upgrade gradually, or change your business model?',
        stakes: 'Market Expansion & Resource Allocation'
      },
      {
        id: 'logistics_p6',
        number: 6,
        wheelLabel: 'EXPANSION PROBLEM',
        title: 'Expansion Problem',
        situation: 'You have an opportunity to enter three new cities, but your current operations are already struggling to meet demand.',
        constraint: 'Delaying expansion could allow competitors to establish themselves first.',
        ceoChallenge: 'Do you expand, stabilize first, or enter selectively?',
        stakes: 'Public Trust & Crisis Management'
      },
    ]
  },
  {
    id: 'fashion',
    shortName: 'Fashion',
    fullName: 'Fashion & Lifestyle',
    emoji: '👗',
    badge: 'Apparel • Brand',
    icon: 'Shirt',
    description: 'Executive decision-making arena for Fashion & Lifestyle.',
    problems: [
      {
        id: 'fashion_p1',
        number: 1,
        wheelLabel: 'COMPETITOR PRICING',
        title: 'Competitor Pricing',
        situation: 'A major competitor launches a similar product line at 40% lower prices.',
        constraint: 'Matching their prices would severely damage your margins and premium positioning.',
        ceoChallenge: 'How will you defend your market position?',
        stakes: 'Margin & Positioning'
      },
      {
        id: 'fashion_p2',
        number: 2,
        wheelLabel: 'SEASONAL INVENTORY',
        title: 'Seasonal Inventory',
        situation: '60% of your seasonal inventory remains unsold with the next season approaching.',
        constraint: 'Heavy discounts could clear inventory quickly but may train customers to wait for sales and weaken your brand.',
        ceoChallenge: 'How will you clear the stock?',
        stakes: 'Customer Churn & Unit Economics'
      },
      {
        id: 'fashion_p3',
        number: 3,
        wheelLabel: 'BRAND RELEVANCE',
        title: 'Brand Relevance',
        situation: 'Sales among younger customers have dropped significantly over the last year.',
        constraint: 'Your existing customer base is older and highly profitable, so changing the brand too aggressively could alienate them.',
        ceoChallenge: 'How will you attract younger consumers without losing your existing customers?',
        stakes: 'Capital Allocation & Inventory Risk'
      },
      {
        id: 'fashion_p4',
        number: 4,
        wheelLabel: 'SUPPLIER CRISIS',
        title: 'Supplier Crisis',
        situation: 'Your primary manufacturing partner increases production costs by 30%.',
        constraint: 'Switching suppliers could reduce quality and delay the next collection.',
        ceoChallenge: 'Renegotiate, switch, absorb costs, increase prices, or redesign the collection?',
        stakes: 'Supply Chain & Operational Continuity'
      },
      {
        id: 'fashion_p5',
        number: 5,
        wheelLabel: 'CELEBRITY PROBLEM',
        title: 'Celebrity Problem',
        situation: 'Your biggest brand ambassador publicly ends their partnership with your company.',
        constraint: 'Their exit has generated significant media attention and may influence customer perception.',
        ceoChallenge: 'How will you protect the brand and replace the ambassador\'s influence?',
        stakes: 'Market Expansion & Resource Allocation'
      },
      {
        id: 'fashion_p6',
        number: 6,
        wheelLabel: 'PHYSICAL EXPANSION',
        title: 'Online vs Physical Expansion',
        situation: 'Your online business is profitable, but opening physical stores requires a major investment with uncertain returns.',
        constraint: 'Competitors are rapidly expanding into physical retail locations.',
        ceoChallenge: 'Do you invest in stores, remain digital-first, test smaller locations, or partner with existing retailers?',
        stakes: 'Public Trust & Crisis Management'
      },
    ]
  },
  {
    id: 'consumer_tech',
    shortName: 'Consumer Tech',
    fullName: 'Consumer Technology',
    emoji: '📱',
    badge: 'Platforms • Growth',
    icon: 'Smartphone',
    description: 'Executive decision-making arena for Consumer Technology.',
    problems: [
      {
        id: 'consumer_tech_p1',
        number: 1,
        wheelLabel: 'FREE COMPETITOR',
        title: 'Free Competitor',
        situation: 'A competitor launches a free version of your core product with almost identical features.',
        constraint: 'Your current business model depends heavily on paid subscriptions.',
        ceoChallenge: 'Do you lower prices, introduce a freemium model, differentiate the product, or change your revenue model?',
        stakes: 'Margin & Positioning'
      },
      {
        id: 'consumer_tech_p2',
        number: 2,
        wheelLabel: 'USER DECLINE',
        title: 'User Decline',
        situation: 'Monthly active users have fallen by 35% over six months.',
        constraint: 'Your marketing team wants to increase acquisition spending, but user feedback suggests existing customers may be leaving because of product issues.',
        ceoChallenge: 'Do you prioritize acquisition or fix retention first?',
        stakes: 'Customer Churn & Unit Economics'
      },
      {
        id: 'consumer_tech_p3',
        number: 3,
        wheelLabel: 'PRODUCT FAILURE',
        title: 'Product Failure',
        situation: 'Your latest product launch received strong initial downloads but extremely poor user retention.',
        constraint: 'Marketing performance was successful, but the product itself appears unable to keep users engaged.',
        ceoChallenge: 'Do you redesign the product, pause marketing, pivot, or continue investing?',
        stakes: 'Capital Allocation & Inventory Risk'
      },
      {
        id: 'consumer_tech_p4',
        number: 4,
        wheelLabel: 'TALENT CRISIS',
        title: 'Talent Crisis',
        situation: 'Your most experienced engineering team has received competing offers, and several members are preparing to leave.',
        constraint: 'Matching every offer would significantly increase salary costs and create internal pay disparities.',
        ceoChallenge: 'Who do you retain, how do you retain them, and how will you protect ongoing projects?',
        stakes: 'Supply Chain & Operational Continuity'
      },
      {
        id: 'consumer_tech_p5',
        number: 5,
        wheelLabel: 'MONETIZATION',
        title: 'Monetization Problem',
        situation: 'Your product has millions of users but generates very little revenue.',
        constraint: 'Aggressive advertising or paid features could increase revenue but may damage user experience and reduce engagement.',
        ceoChallenge: 'How will you monetize the existing user base?',
        stakes: 'Market Expansion & Resource Allocation'
      },
      {
        id: 'consumer_tech_p6',
        number: 6,
        wheelLabel: 'DATA & TRUST CRISIS',
        title: 'Data & Trust Crisis',
        situation: 'A security incident raises concerns among users about how your company handles personal data. Domain',
        constraint: 'The investigation is still ongoing, and you do not yet know the full extent of the incident.',
        ceoChallenge: 'What will you disclose, what will you fix first, and how will you protect user trust?',
        stakes: 'Public Trust & Crisis Management'
      },
    ]
  },

];

export const getDomainById = (id: string): Domain | undefined => {
  return DOMAINS.find(d => d.id === id);
};
