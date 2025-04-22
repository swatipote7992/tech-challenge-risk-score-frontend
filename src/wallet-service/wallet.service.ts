import { Injectable } from '@nestjs/common';
import fetchData from '../utils/fetchdata';

@Injectable()
export class WalletService {
  getWalletContributions(walletHash: string) {
    // Call our blockchain data API to get on-chain wallet contributions
    return fetchData({
      baseURL: 'wallet',
      id: walletHash,
    });
  }
}
