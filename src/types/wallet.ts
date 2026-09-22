type Wallet = {
  walletHash: string;
  analysed_at: string; // ISO timestamp string
  asset_tier: string;
  contributions: {
    source: Contribution[];
  };
};

export type Contribution = {
  contribution_percentage: number;
  contribution_value: {
    usd: number;
  };
  entity: Entity;
};

type Entity = {
  name: string;
  category: string;
  category_id: string;
  actor_id: number;
  entity_id: string;
  is_primary_entity: boolean;
  is_vasp: boolean;
  is_after_sanction_date: boolean;
};

export default Wallet;
