import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiskScoreController } from './risk-score/risk-score.controller';
import { RiskScoreService } from './risk-score/risk-score.service';
import { RiskRuleService } from './risk-rule/risk-rule.service';
import { WalletService } from './wallet-service/wallet.service';

@Module({
  imports: [],
  controllers: [AppController, RiskScoreController],
  providers: [AppService, RiskScoreService, RiskRuleService, WalletService],
})
export class AppModule {}
