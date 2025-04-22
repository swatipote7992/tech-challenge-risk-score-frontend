import { Test, TestingModule } from '@nestjs/testing';
import { RiskScoreService } from './risk-score.service';
import { WalletService } from '../wallet-service/wallet.service';
import { RiskRuleService } from '../risk-rule/risk-rule.service';

describe('RiskScoreService', () => {
  let riskScoreService: RiskScoreService;

  const mockedRiskRules = [];
  const mockedWallet = {};
  beforeEach(async () => {
    const mockWalletService = {
      getWalletContributions: jest
        .fn()
        .mockResolvedValue(mockedWallet),
    };

    const mockRiskRuleService = {
      getRiskRules: jest.fn().mockResolvedValue(mockedRiskRules),
    };

    const app: TestingModule = await Test.createTestingModule({
      providers: [
        RiskScoreService,
        { provide: WalletService, useValue: mockWalletService },
        { provide: RiskRuleService, useValue: mockRiskRuleService },
      ],
    }).compile();

    riskScoreService = app.get<RiskScoreService>(RiskScoreService);
  });

  describe('riskScore service', () => {
    it('', async () => {
      const score = await riskScoreService.getRiskScoreByWalletHash('')

      expect(score).toBe(0)
    });
  });
});
