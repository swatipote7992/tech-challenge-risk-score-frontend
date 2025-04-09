import Rule from "src/types/rules";
import Wallet from "src/types/wallet";

// IMPORTANT:
// Please pretend this is calling a different API, and not returning hardcode data.
// You don't need to change this file to make all tests pass

function fetchData(baseURL: 'rule', id: undefined): Promise<Rule[]>;
function fetchData(baseURL: 'wallet', id: string): Promise<Wallet>;

async function fetchData (baseURL, id) {

    if (baseURL.includes('rule')) {
        const rules: Rule[] = [
        ]
        return rules;
    }

    const wallet: Wallet = wallets[id];
    return wallet;
}

export default fetchData;


const wallets: Record<string, Wallet> = {
    '0x9449f92f36230f171b8d71810a62b1e76b70e2f5': {
        "walletHash": "0x9449f92f36230f171b8d71810a62b1e76b70e2f5",
        "analysed_at": "2025-04-08T14:07:59.272Z",
        "asset_tier": "full",
        "contributions": {
            "source": [
                {
                    "contribution_percentage": 91.51529588243346,
                    "contribution_value": {
                        "usd": 5860112.721990341
                    },
                    "entity": {
                        "name": "DPRK Bybit Exploit - February 2025",
                        "category": "OFAC Sanctioned Entity",
                        "category_id": "8d39eacf-a5c0-4b38-a101-6b3120b84bf9",
                        "actor_id": 143666,
                        "entity_id": "cf1e1347-f29b-44d6-ad73-3b4ca5080f4a",
                        "is_primary_entity": true,
                        "is_vasp": false,
                        "is_after_sanction_date": true
                    }
                },
                {
                    "contribution_percentage": 8.484704117566594,
                    "contribution_value": {
                        "usd": 572434.8557233668
                    },
                    "entity": {
                        "name": "SKY (formerly MakerDAO)",
                        "category": "De-Fi",
                        "category_id": "6033e031-6c3a-4b1d-9389-e7f4d1986b9e",
                        "actor_id": 22997,
                        "entity_id": "5cf3bd7d-0830-4ed1-a90b-1bbf22d8a8ba",
                        "is_primary_entity": true,
                        "is_vasp": false,
                        "is_after_sanction_date": false
                    }
                }
            ]
        }
    }
}