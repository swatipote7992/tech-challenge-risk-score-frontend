import Transaction from '../types/transaction'

const transactionsMap: Record<string, Transaction> = {
    "c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457": {
        "hash": "c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457",
        "block_height": 494725,
        "time": 1510892965000,
        "satoshis_out": 35878373,
        "satoshis_in": 35986084,
        "fee": 107711,
        "entities": [
            {
              "cluster": {
                "id": 392345233,
                "candidate_address": "15oF3ZkMgMPBCBwuQR3YafHAnmaDHvee1w",
                "satoshis_balance": 4316431277,
                "address_count": 2110557,
                "name": "Alphabay",
                "category": "Dark Market"
              },
              "satoshis_vol": 31978680,
              "pct_contribution": 100,
            }
        ]
    },
    "dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1": {
      "hash": "dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1",
        "block_height": 108188,
        "time": 1297753110000,
        "satoshis_out": 588000000,
        "satoshis_in": 588000000,
        "fee": 0,
        "entities": [
          {
            "cluster": {
              "id": 313036810,
              "candidate_address": "17ZJzxisNPDGP6V2B2S9DPNFvrB7DjWQNE",
              "satoshis_balance": 1434278,
              "address_count": 525,
              "name": "Gavin Andresen Faucet",
              "category": "Bitcoin Faucet"
            },
            "satoshis_vol": 45833333,
            "pct_contribution": 8.503402,
          }
        ]
    },
    "efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174": {
        "hash": "efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174",
        "block_height": 371946,
        "time": 1440788937000,
        "satoshis_out": 10099491279,
        "satoshis_in": 10099495275,
        "fee": 3996,
        "entities": [
            {
              "cluster": {
                "id": 72777,
                "candidate_address": "18fk5dy13WzjpHDsonjH2nXf2H1ZHHg9yF",
                "satoshis_balance": 1381183890455,
                "address_count": 497540,
                "name": "Agora",
                "category": "Dark Market"
              },
              "satoshis_vol": 7739488052,
              "pct_contribution": 77.39488,
            },
            {
              "cluster": {
                "id": 16570374,
                "candidate_address": "1EcmDsPjfueomAtZrDaYxYBaXWAypn3P26",
                "satoshis_balance": 505239781964,
                "address_count": 146589,
                "name": "Nucleus Market",
                "category": "Dark Market"
              },
              "satoshis_vol": 1226382267,
              "pct_contribution": 12.263823,
            }
        ]
    },
    "cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792": {
        "hash": "cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792",
        "block_height": 374097,
        "time": 1442007121000,
        "satoshis_out": 16555797083,
        "satoshis_in": 16555807083,
        "fee": 10000,
        "entities": [
            {
              "cluster": {
                "id": 196708,
                "candidate_address": "3LVtpv2QqF5nNor6fPmGdAN3oEE7C6FA93",
                "satoshis_balance": 12059316635514,
                "address_count": 881754,
                "name": "Kraken",
                "category": "Exchange"
              },
              "satoshis_vol": 9023638190,
              "pct_contribution": 56.39774,
            },
            {
              "cluster": {
                "id": 245276932,
                "candidate_address": "3N8UTnh3A5oGZHuDPgtCevy2AZhFvSZEnd",
                "satoshis_balance": 166490883829,
                "address_count": 503904,
                "name": "Bitstamp",
                "category": "Exchange"
              },
              "satoshis_vol": 6814285732,
              "pct_contribution": 42.589287,
            }
          ]
    }
}
  
export default transactionsMap;