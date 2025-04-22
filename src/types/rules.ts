type BaseRule = {
  id: string;
  name: string;
  rule_criteria: {
    type: 'linear_percentage_contribution';
    min_contribution_threshold: number;
    max_contribution_threshold: number;
    min_score: number;
    max_score: number;
  };
};

type EntityRule = BaseRule & {
  entities: string[];
  categories?: never;
};

type CategoryRule = BaseRule & {
  categories: string[];
  entities?: never;
};

type Rule = EntityRule | CategoryRule;

export default Rule;
