type Transaction = {
  hash: string;
  block_height: number;
  time: number;
  satoshis_out: number;
  satoshis_in: number;
  fee: number;
  entities: {
    cluster: {
      id: number;
      candidate_address: string;
      satoshis_balance: number;
      address_count: number;
      name: string;
      category: string;
    };
    satoshis_vol: number;
    pct_contribution: number;
  }[];
};

export default Transaction;
