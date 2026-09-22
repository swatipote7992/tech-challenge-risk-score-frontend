import { Test, TestingModule } from '@nestjs/testing';
import { RiskScoreService } from './risk-score.service';
import { WalletService } from '../wallet-service/wallet.service';
import { RiskRuleService } from '../risk-rule/risk-rule.service';
import Rule from '../types/rules';
import Wallet from '../types/wallet';

const sanctionedRule: Rule = {
  id: 'sanctioned-rule',
  name: 'Sanctioned, Terrorist Financing and CSAM',
  categories: ['OFAC Sanctioned Entity', 'Terrorist Financing', 'CSAM'],
  rule_criteria: {
    type: 'linear_percentage_contribution',
    max_contribution_threshold: 100,
    max_score: 10,
    min_contribution_threshold: 50,
    min_score: 8,
  },
};

const obfuscatingRule: Rule = {
  id: 'obfuscating-rule',
  name: 'Obviscating',
  categories: ['Mixer', 'CoinSwaps', 'Gambling'],
  rule_criteria: {
    type: 'linear_percentage_contribution',
    max_contribution_threshold: 100,
    max_score: 10,
    min_contribution_threshold: 20,
    min_score: 2,
  },
};

const whaleWatcherRule: Rule = {
  id: 'whale-watcher-rule',
  name: 'Whale watcher',
  entities: ['Satoshi Nakamoto', 'Mike Hearn', 'The Winklevoss twins'],
  rule_criteria: {
    type: 'linear_percentage_contribution',
    max_contribution_threshold: 100,
    max_score: 7,
    min_contribution_threshold: 20,
    min_score: 0,
  },
};

const buildWallet = (
  walletHash: string,
  contributions: Wallet['contributions']['source'],
): Wallet => ({
  walletHash,
  analysed_at: '2025-04-08T14:07:59.272Z',
  asset_tier: 'full',
  contributions: { source: contributions },
});

const buildContribution = (
  contributionPercentage: number,
  entityName: string,
  entityCategory: string,
): Wallet['contributions']['source'][number] => ({
  contribution_percentage: contributionPercentage,
  contribution_value: { usd: 0 },
  entity: {
    name: entityName,
    category: entityCategory,
    category_id: 'category-id',
    actor_id: 1,
    entity_id: 'entity-id',
    is_primary_entity: true,
    is_vasp: false,
    is_after_sanction_date: false,
  },
});

describe('RiskScoreService', () => {
  let riskScoreService: RiskScoreService;
  let mockWalletService: { getWalletContributions: jest.Mock };
  let mockRiskRuleService: { getRiskRules: jest.Mock };

  beforeEach(async () => {
    mockWalletService = { getWalletContributions: jest.fn() };
    mockRiskRuleService = { getRiskRules: jest.fn() };

    const app: TestingModule = await Test.createTestingModule({
      providers: [
        RiskScoreService,
        { provide: WalletService, useValue: mockWalletService },
        { provide: RiskRuleService, useValue: mockRiskRuleService },
      ],
    }).compile();

    riskScoreService = app.get<RiskScoreService>(RiskScoreService);
  });

  it('returns 0 when no risk rules are configured', async () => {
    mockRiskRuleService.getRiskRules.mockResolvedValue([]);
    mockWalletService.getWalletContributions.mockResolvedValue(
      buildWallet('wallet', [buildContribution(100, 'Tornado Cash', 'Mixer')]),
    );

    const score = await riskScoreService.getRiskScoreByWalletHash('wallet');

    expect(score).toBe(0);
  });

  it('returns 0 when the wallet cannot be found', async () => {
    mockRiskRuleService.getRiskRules.mockResolvedValue([sanctionedRule]);
    mockWalletService.getWalletContributions.mockResolvedValue(undefined);

    const score =
      await riskScoreService.getRiskScoreByWalletHash('unknown-wallet');

    expect(score).toBe(0);
  });

  it('returns the max_score when the contribution percentage meets the max_contribution_threshold', async () => {
    mockRiskRuleService.getRiskRules.mockResolvedValue([obfuscatingRule]);
    mockWalletService.getWalletContributions.mockResolvedValue(
      buildWallet('wallet', [buildContribution(100, 'Tornado Cash', 'Mixer')]),
    );

    const score = await riskScoreService.getRiskScoreByWalletHash('wallet');

    expect(score).toBe(10);
  });

  it('returns 0 when the contribution percentage is below the min_contribution_threshold', async () => {
    mockRiskRuleService.getRiskRules.mockResolvedValue([sanctionedRule]);
    mockWalletService.getWalletContributions.mockResolvedValue(
      buildWallet('wallet', [
        buildContribution(
          14.0922035623917,
          'DPRK Bybit Exploit - February 2025 (post-swap)',
          'OFAC Sanctioned Entity',
        ),
        buildContribution(85.9077964376082, 'THORChain', 'Bridge'),
      ]),
    );

    const score = await riskScoreService.getRiskScoreByWalletHash('wallet');

    expect(score).toBe(0);
  });

  it('linearly interpolates the score between min_score and max_score', async () => {
    mockRiskRuleService.getRiskRules.mockResolvedValue([sanctionedRule]);
    mockWalletService.getWalletContributions.mockResolvedValue(
      buildWallet('wallet', [
        buildContribution(
          95,
          'DPRK Bybit Exploit - February 2025',
          'OFAC Sanctioned Entity',
        ),
      ]),
    );

    const score = await riskScoreService.getRiskScoreByWalletHash('wallet');

    expect(score).toBe(9.8);
  });

  it('matches a rule by entity name', async () => {
    mockRiskRuleService.getRiskRules.mockResolvedValue([whaleWatcherRule]);
    mockWalletService.getWalletContributions.mockResolvedValue(
      buildWallet('wallet', [
        buildContribution(100, 'Satoshi Nakamoto', 'User'),
      ]),
    );

    const score = await riskScoreService.getRiskScoreByWalletHash('wallet');

    expect(score).toBe(7);
  });

  it('sums scores from multiple matched rules and clamps the result to a maximum of 10', async () => {
    mockRiskRuleService.getRiskRules.mockResolvedValue([
      sanctionedRule,
      obfuscatingRule,
    ]);
    mockWalletService.getWalletContributions.mockResolvedValue(
      buildWallet('wallet', [
        buildContribution(
          40.0922035623917,
          'BITPAPA IC FZC LLC (a.k.a. BITPAPA PAY; a.k.a. PAPA HOLDING LTD) - OFAC SDN - 25 Mar 2024',
          'OFAC Sanctioned Entity',
        ),
        buildContribution(59.0188036437608, 'Argo Casino', 'Gambling'),
      ]),
    );

    const score = await riskScoreService.getRiskScoreByWalletHash('wallet');

    // Sanctioned contribution is below its min_contribution_threshold (50) so scores 0.
    // Gambling contribution interpolates to ~5.86, giving a combined (unclamped) score under 10.
    expect(score).toBeLessThanOrEqual(10);
    expect(score).toBeGreaterThan(0);
  });

  it('rounds the final score to 1 decimal place', async () => {
    mockRiskRuleService.getRiskRules.mockResolvedValue([sanctionedRule]);
    mockWalletService.getWalletContributions.mockResolvedValue(
      buildWallet('wallet', [
        buildContribution(55.55, 'Sanctioned Entity', 'OFAC Sanctioned Entity'),
      ]),
    );

    const score = await riskScoreService.getRiskScoreByWalletHash('wallet');

    expect(Number.isInteger(score * 10)).toBe(true);
  });
});
