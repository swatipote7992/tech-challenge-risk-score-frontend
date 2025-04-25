import { Injectable } from '@nestjs/common';
import { RiskRuleService } from '../risk-rule/risk-rule.service';
import { WalletService } from '../wallet-service/wallet.service';

@Injectable()
export class RiskScoreService {
    constructor(private readonly riskRuleService: RiskRuleService, private readonly walletService: WalletService) {}

    async getRiskScoreByWalletHash(walletHash: any): Promise<number> {
        const riskRules = await this.riskRuleService.getRiskRules();
        const walletData = await this.walletService.getWalletContributions(walletHash);

        // Loop through the risk rules and calculate a risk score.
        return 0;
    }
}