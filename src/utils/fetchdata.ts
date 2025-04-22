import Rule from 'src/types/rules';
import Wallet from 'src/types/wallet';
import rulesData from '../risk-rule/data';
import wallets from '../wallet-service/data';

// IMPORTANT:
// Please pretend this is calling a different API, and not returning hardcode data.
// You don't need to change this file to make all tests pass

type FetchDataParams =
  | { baseURL: 'rule'; id: undefined }
  | { baseURL: 'wallet'; id: string };

function fetchData(params: { baseURL: 'rule'; id: undefined }): Promise<Rule[]>;
function fetchData(params: { baseURL: 'wallet'; id: string }): Promise<Wallet>;

function fetchData(params: FetchDataParams) {
  const { baseURL, id } = params;
  if (baseURL === 'rule') {
    const rules: Rule[] = rulesData;
    return Promise.resolve<Rule[]>(rules);
  }

  const wallet: Wallet = wallets[id];
  return Promise.resolve<Wallet>(wallet);
}

export default fetchData;
