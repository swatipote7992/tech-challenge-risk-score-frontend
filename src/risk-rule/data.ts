import Rule from '../types/rules';

const rules: Rule[] = [
  {
    id: '0199133c-4e96-4171-9890-42d7b48f75cb',
    name: 'Sanctioned, Terrorist Financing and CSAM',
    categories: ['OFAC Sanctioned Entity', 'Terrorist Financing', 'CSAM'],
    rule_criteria: {
      type: 'linear_percentage_contribution',
      max_contribution_threshold: 100,
      max_score: 10,
      min_contribution_threshold: 50,
      min_score: 8,
    },
  },
  {
    id: '4de6e8f3-cd16-4662-b7d7-06417f22473b',
    name: 'Obviscating',
    categories: ['Mixer', 'CoinSwaps', 'Gambling'],
    rule_criteria: {
      type: 'linear_percentage_contribution',
      max_contribution_threshold: 100,
      max_score: 10,
      min_contribution_threshold: 20,
      min_score: 2,
    },
  },
  {
    id: '4de6e8f3-cd16-4662-b7d7-06417f22473b',
    name: 'Whale watcher',
    entities: ['Satoshi Nakamoto', 'Mike Hearn', 'The Winklevoss twins'],
    rule_criteria: {
      type: 'linear_percentage_contribution',
      max_contribution_threshold: 100,
      max_score: 7,
      min_contribution_threshold: 20,
      min_score: 0,
    },
  },
];

export default rules;
