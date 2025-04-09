import { Injectable } from '@nestjs/common';
import { RiskRuleService } from 'src/risk-rule/risk-rule.service';
import { WalletService } from 'src/wallet-service/wallet.service';

@Injectable()
export class RiskScoreService {
    constructor(private readonly riskRuleService: RiskRuleService, private readonly walletService: WalletService) {}

    async getRiskScoreByWalletHash(walletHash: string): Promise<number> {
        const riskRules = await this.riskRuleService.getRiskRules();
        const walletData = await this.walletService.getWalletContributions(walletHash);

        // Loop through the risk rules and calculate a risk score.

        return 0;
    }
}