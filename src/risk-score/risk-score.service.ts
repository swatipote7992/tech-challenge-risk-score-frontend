import { Injectable } from '@nestjs/common';
import { RiskRuleService } from '../risk-rule/risk-rule.service';
import { WalletService } from '../wallet-service/wallet.service';
import Rule from '../types/rules';
import { Contribution } from '../types/wallet';

const MAX_RISK_SCORE = 10;
const MIN_RISK_SCORE = 0;
const SCORE_DECIMAL_PLACES = 1;

@Injectable()
export class RiskScoreService {
  constructor(
    private readonly riskRuleService: RiskRuleService,
    private readonly walletService: WalletService,
  ) {}

  async getRiskScoreByWalletHash(walletHash: string): Promise<number> {
    const riskRules = await this.riskRuleService.getRiskRules();
    const walletData =
      await this.walletService.getWalletContributions(walletHash);

    // Unknown wallets have no contributions to score.
    if (!walletData) {
      return MIN_RISK_SCORE;
    }

    // Loop through the risk rules and calculate a risk score.
    const totalScore = walletData.contributions.source.reduce(
      (runningTotal, contribution) => {
        const matchingRules = riskRules.filter((rule) =>
          this.doesRuleMatchContribution(rule, contribution),
        );
        const contributionScore = matchingRules.reduce(
          (sum, rule) =>
            sum +
            this.calculateScoreForRule(
              rule,
              contribution.contribution_percentage,
            ),
          0,
        );

        return runningTotal + contributionScore;
      },
      0,
    );

    // A wallet can trigger multiple rules, so the summed score is clamped to the 0-10 range.
    const clampedScore = Math.min(
      Math.max(totalScore, MIN_RISK_SCORE),
      MAX_RISK_SCORE,
    );

    return this.roundToDecimalPlaces(clampedScore, SCORE_DECIMAL_PLACES);
  }

  private doesRuleMatchContribution(
    rule: Rule,
    contribution: Contribution,
  ): boolean {
    if (rule.categories) {
      return rule.categories.includes(contribution.entity.category);
    }

    return rule.entities.includes(contribution.entity.name);
  }

  private calculateScoreForRule(
    rule: Rule,
    contributionPercentage: number,
  ): number {
    const {
      min_contribution_threshold,
      max_contribution_threshold,
      min_score,
      max_score,
    } = rule.rule_criteria;

    if (contributionPercentage >= max_contribution_threshold) {
      return max_score;
    }

    if (contributionPercentage < min_contribution_threshold) {
      return MIN_RISK_SCORE;
    }

    // Linearly interpolate the score between min_score and max_score, based on where the
    // contribution percentage sits between the min and max contribution thresholds.
    const thresholdRange =
      max_contribution_threshold - min_contribution_threshold;
    const scoreRange = max_score - min_score;
    const proportionOfRange =
      (contributionPercentage - min_contribution_threshold) / thresholdRange;

    return min_score + proportionOfRange * scoreRange;
  }

  private roundToDecimalPlaces(value: number, decimalPlaces: number): number {
    const factor = 10 ** decimalPlaces;
    return Math.round(value * factor) / factor;
  }
}
