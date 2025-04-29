import { Controller, Get, Param } from '@nestjs/common';
import { RiskScoreService } from './risk-score.service';

@Controller('risk-score')
export class RiskScoreController {
  constructor(private readonly riskScoreService: RiskScoreService) {}
  @Get('wallet/:walletHash')
  getRiskScoreByWalletHash(@Param('walletHash') walletHash: any) {
    // Logic to retrieve a specific risk score by ID
    return this.riskScoreService.getRiskScoreByWalletHash(walletHash);
  }
}
