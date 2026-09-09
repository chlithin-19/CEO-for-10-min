// Budget outcomes for STEP 02 - CAPITAL ALLOCATION
// Exactly the 8 values specified by official event rules

export interface BudgetItem {
  id: string;
  label: string;      // e.g. "₹10 LAKHS", "₹2 CRORE"
  display: string;    // e.g. "₹10 Lakhs", "₹2 Crore"
  amount: string;     // e.g. "10 Lakhs", "2 Crore"
  tier: 'Seed' | 'Growth' | 'Expansion' | 'Enterprise';
  subtext: string;
}

export const BUDGET_VALUES: BudgetItem[] = [
  { id: 'b1', label: '₹10 LAKHS', display: '₹10 Lakhs', amount: '10 Lakhs', tier: 'Seed', subtext: 'Lean Bootstrapped Run' },
  { id: 'b2', label: '₹25 LAKHS', display: '₹25 Lakhs', amount: '25 Lakhs', tier: 'Seed', subtext: 'Targeted Runway' },
  { id: 'b3', label: '₹50 LAKHS', display: '₹50 Lakhs', amount: '50 Lakhs', tier: 'Growth', subtext: 'Moderate Working Capital' },
  { id: 'b4', label: '₹1 CRORE', display: '₹1 Crore', amount: '1 Crore', tier: 'Growth', subtext: 'Series-A Level Warchest' },
  { id: 'b5', label: '₹2 CRORE', display: '₹2 Crore', amount: '2 Crore', tier: 'Expansion', subtext: 'Aggressive Scale Deployment' },
  { id: 'b6', label: '₹5 CRORE', display: '₹5 Crore', amount: '5 Crore', tier: 'Expansion', subtext: 'High-Stakes Expansion Fund' },
  { id: 'b7', label: '₹10 CRORE', display: '₹10 Crore', amount: '10 Crore', tier: 'Enterprise', subtext: 'Institutional Turnaround Capital' },
  { id: 'b8', label: '₹25 CRORE', display: '₹25 Crore', amount: '25 Crore', tier: 'Enterprise', subtext: 'Mega-Cap Strategic Reserve' },
];
