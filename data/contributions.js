// The server only knows about the following txs: * c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457 * dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1 * efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174 * cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792

const contributions = {
    "a1": {
      "parameters": {
        "tx_hash": "c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457",
        "type": "deposit",
        "address": "37ijgvhMvAyGNd5y89N6vLdDHsAP7ZFcZd",
        "output_indices": [1],
        "max_hops": 5,
        "dilution_threshold": 0.0001,
        "timeout_ms": 5000,
        "minimum_pct_contribution": 0.1,
        "maximum_path_count": 10,
        "maximum_path_length": 50,
        "maximum_dag_edge_count": 2000
      },
      "summary": {
        "amount_analysed": 31978680,
        "was_truncated": false
      },
      "transaction": {
        "hash": "c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457",
        "block_height": 494725,
        "time": 1510892965000,
        "vin": [
          {
            "prev_tx_hash": "f98e1368543d70945c2e89c9504ba26d5cff1b0a6906e84ca363a3ed73ffef4e",
            "prev_index": 1,
            "base58": "33WoRAdhQ6jWKMyVuuagZveHj2xJdwwJ3v",
            "satoshis": 35986084,
            "cluster_id": 104739017
          }
        ],
        "vout": [
          {
            "index": 0,
            "base58": "1992ghJHFSydhY9MGh4L2KtchC1sbNp1hm",
            "satoshis": 3899693,
            "cluster_id": 123856055,
            "spent": true,
            "spending_tx_hash": "35a61063f99c179cd209fc96ac9a5886228529c00a0e2a9ea964bbf9535e8847"
          },
          {
            "index": 1,
            "base58": "37ijgvhMvAyGNd5y89N6vLdDHsAP7ZFcZd",
            "satoshis": 31978680,
            "cluster_id": 141497819,
            "spent": true,
            "spending_tx_hash": "c7ac78e7ce7ddf5982bcc976c46649d7249e938578c89d8ca3e64c5f92234283"
          }
        ],
        "satoshis_out": 35878373,
        "satoshis_in": 35986084,
        "fee": 107711
      },
      "clusters": [
        {
          "id": 392345233,
          "candidate_address": "15oF3ZkMgMPBCBwuQR3YafHAnmaDHvee1w",
          "risk_score": 10,
          "taint_d": 10,
          "pii_s": 0,
          "pii_d": 0,
          "satoshis_balance": 4316431277,
          "satoshis_in": 83454038924496,
          "satoshis_out": 83361569050941,
          "address_count": 2110557,
          "labels": [
            {
              "id": "38262d20-53f8-43c6-aa24-73c57d19af5b",
              "name": "Alphabay",
              "category": "Dark Market - Centralised",
              "confidence": 0.91675603,
              "info": {
                "country_hq": null,
                "url": "http://pwoah7foa6au2pul.onion",
                "lexis_nexis": null
              },
              "evidence_types": [
                "\u0003\u0003Forum Post",
                "\u0003\u0003Court Case Evidence",
                "\u0003\u0003User Post",
                "\u0003\u0003Elliptic Account",
                "\u0003\u0003Organisation Homepage"
              ]
            }
          ],
          "name": "Alphabay",
          "category": "Dark Market - Centralised",
          "primary_label_id": "38262d20-53f8-43c6-aa24-73c57d19af5b",
          "total_incoming_edges": 1740787,
          "total_outgoing_edges": 287858,
          "first_seen_block_height": 349229,
          "first_seen_time": 1427316147000,
          "last_seen_block_height": 539093,
          "last_seen_time": 1535577499000
        },
        {
          "id": 213382545,
          "candidate_address": "18kciao6KXJRpZ81WxRmcurhjrJy3PWXrQ",
          "risk_score": 10,
          "taint_d": 3.6199505,
          "pii_s": 0,
          "pii_d": 7843.5435,
          "satoshis_balance": 0,
          "satoshis_in": 40669213,
          "satoshis_out": 40473664,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 494006,
          "first_seen_time": 1510403678000,
          "last_seen_block_height": 494247,
          "last_seen_time": 1510612225000
        },
        {
          "id": 104739017,
          "candidate_address": "33WoRAdhQ6jWKMyVuuagZveHj2xJdwwJ3v",
          "risk_score": 10,
          "taint_d": 3.614252,
          "pii_s": 0,
          "pii_d": 7922.771,
          "satoshis_balance": 0,
          "satoshis_in": 35986084,
          "satoshis_out": 35878373,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 494247,
          "first_seen_time": 1510612225000,
          "last_seen_block_height": 494247,
          "last_seen_time": 1510612225000
        },
        {
          "id": 141497819,
          "candidate_address": "37ijgvhMvAyGNd5y89N6vLdDHsAP7ZFcZd",
          "risk_score": 10,
          "taint_d": 3.707111,
          "pii_s": 0,
          "pii_d": 7922.746,
          "satoshis_balance": 0,
          "satoshis_in": 31978680,
          "satoshis_out": 31944104,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 1,
          "first_seen_block_height": 494725,
          "first_seen_time": 1510892965000,
          "last_seen_block_height": 494725,
          "last_seen_time": 1510892965000
        },
        {
          "id": 123856055,
          "candidate_address": "16ot2nZwUFhTHfB96x4FaXAp6zq4ywynaJ",
          "risk_score": 4.8989506,
          "taint_d": 2.8637583,
          "pii_s": 8811.007,
          "pii_d": 8900.006,
          "satoshis_balance": 20606155,
          "satoshis_in": 3455012554,
          "satoshis_out": 3415523614,
          "address_count": 68,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 504,
          "total_outgoing_edges": 67,
          "first_seen_block_height": 477665,
          "first_seen_time": 1501080390000,
          "last_seen_block_height": 539159,
          "last_seen_time": 1535614070000
        }
      ],
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
          "path_statistics": {
            "shortest_path_hops": 3,
            "longest_path_hops": 3,
            "shortest_path_time_ms": 797964,
            "longest_path_time_ms": 797964,
            "path_count": 1,
            "avg_path_time_ms": 797964,
            "avg_path_hops": 3
          }
        }
      ]
    },
    "a2": {
      "parameters": {
        "tx_hash": "dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1",
        "type": "deposit",
        "address": "1BQEjCKoLq8YTJ7LDT9CeCSeVmhehsfJuC",
        "output_indices": [1],
        "max_hops": 5,
        "dilution_threshold": 0.0001,
        "timeout_ms": 5000,
        "minimum_pct_contribution": 0.1,
        "maximum_path_count": 10,
        "maximum_path_length": 50,
        "maximum_dag_edge_count": 2000
      },
      "summary": {
        "amount_analysed": 539000000,
        "was_truncated": false
      },
      "transaction": {
        "hash": "dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1",
        "block_height": 108188,
        "time": 1297753110000,
        "vin": [
          {
            "prev_tx_hash": "86b138f1e1a7a88b48cdd8d49dc4025e224677f97c8074861d8cbe82ab282868",
            "prev_index": 0,
            "base58": "1KD3nKcU48s5tvek58hPX7jCJ7j42LBQz2",
            "satoshis": 50000000,
            "cluster_id": 316258923
          },
          {
            "prev_tx_hash": "39c0a02fd51b8ecfb9d6691f016b0eb911df4639ab318da49e7820ee8fb0daa3",
            "prev_index": 0,
            "base58": "19vg7JyTSwuz6uxGnAi8aBxYAiZYMLn2dD",
            "satoshis": 166000000,
            "cluster_id": 316258923
          },
          {
            "prev_tx_hash": "9ae6f65e5a2df196f9a7fd56e5f85e2d39a801f87c88c733cad42be5495309a5",
            "prev_index": 1,
            "base58": "1DDibvRdYuK9BzguSrzqCF68kwyGknqvhZ",
            "satoshis": 265000000,
            "cluster_id": 316258923
          },
          {
            "prev_tx_hash": "bcdb90afedeb5036f2330ce554221ddae658cbc4737e199cc3195033c7d2c439",
            "prev_index": 1,
            "base58": "15V644uGfpA7N4An3FmVmizKkm8HdrSD9e",
            "satoshis": 107000000,
            "cluster_id": 316258923
          }
        ],
        "vout": [
          {
            "index": 0,
            "base58": "1Lca73Bd5ZxhHt4KMAL1LMzEeSfTv5JHKM",
            "satoshis": 49000000,
            "cluster_id": 316054245,
            "spent": true,
            "spending_tx_hash": "586b96a7533065ea356d223ba98283058b64a885d9a8c4024d0f88ee3ca14dc2"
          },
          {
            "index": 1,
            "base58": "1BQEjCKoLq8YTJ7LDT9CeCSeVmhehsfJuC",
            "satoshis": 539000000,
            "cluster_id": 282361908,
            "spent": true,
            "spending_tx_hash": "babc8081bfc2eb3a4beeeeabc10c7a2df8a313a0ed2bb5ae76f5e0eec1da6019"
          }
        ],
        "satoshis_out": 588000000,
        "satoshis_in": 588000000,
        "fee": 0
      },
      "clusters": [
        {
          "id": 313036810,
          "candidate_address": "17ZJzxisNPDGP6V2B2S9DPNFvrB7DjWQNE",
          "risk_score": 0.3164564,
          "taint_d": 2.6322474,
          "pii_s": 0,
          "pii_d": 0,
          "satoshis_balance": 1434278,
          "satoshis_in": 2600925517338,
          "satoshis_out": 2598919473933,
          "address_count": 525,
          "labels": [
            {
              "id": "e6d0cdfb-6419-4f6f-8b0b-08a478db4065",
              "name": "Gavin Andresen Faucet",
              "category": "Bitcoin Faucet",
              "confidence": 0.7027984,
              "info": {
                "country_hq": null,
                "url": null,
                "lexis_nexis": null
              },
              "evidence_types": ["\u0003\u0003Forum Post"]
            }
          ],
          "name": "Gavin Andresen Faucet",
          "category": "Bitcoin Faucet",
          "primary_label_id": "e6d0cdfb-6419-4f6f-8b0b-08a478db4065",
          "total_incoming_edges": 2878,
          "total_outgoing_edges": 39432,
          "first_seen_block_height": 60433,
          "first_seen_time": 1276276741000,
          "last_seen_block_height": 527000,
          "last_seen_time": 1528732622000
        },
        {
          "id": 316257778,
          "candidate_address": "1MyYYPVG7oEDQ8RodVLWtA71jA5VKnj7E9",
          "risk_score": 0.31678113,
          "taint_d": 2.8757803,
          "pii_s": 0,
          "pii_d": 7915.215,
          "satoshis_balance": 0,
          "satoshis_in": 9950000000,
          "satoshis_out": 9950000000,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 107140,
          "first_seen_time": 1297281897000,
          "last_seen_block_height": 107140,
          "last_seen_time": 1297281897000
        },
        {
          "id": 316260994,
          "candidate_address": "1NARHGkNbNqfkTQtvWBKtwmwEJspJp97c8",
          "risk_score": 0.31678113,
          "taint_d": 2.8903046,
          "pii_s": 0,
          "pii_d": 7995.1665,
          "satoshis_balance": 0,
          "satoshis_in": 9900000000,
          "satoshis_out": 9900000000,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 107141,
          "first_seen_time": 1297282367000,
          "last_seen_block_height": 107143,
          "last_seen_time": 1297284936000
        },
        {
          "id": 316258393,
          "candidate_address": "1QBE5s9TimpSMB43edPYKbjSrrzjpomBqm",
          "risk_score": 0.31623417,
          "taint_d": 2.886627,
          "pii_s": 0,
          "pii_d": 7843.7837,
          "satoshis_balance": 0,
          "satoshis_in": 9850000000,
          "satoshis_out": 9850000000,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 107143,
          "first_seen_time": 1297284936000,
          "last_seen_block_height": 107143,
          "last_seen_time": 1297284936000
        },
        {
          "id": 316258923,
          "candidate_address": "1KD3nKcU48s5tvek58hPX7jCJ7j42LBQz2",
          "risk_score": 0.22513776,
          "taint_d": 3.8959837,
          "pii_s": 6538.1772,
          "pii_d": 7922.66,
          "satoshis_balance": 0,
          "satoshis_in": 588000000,
          "satoshis_out": 588000000,
          "address_count": 4,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 4,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 107144,
          "first_seen_time": 1297285764000,
          "last_seen_block_height": 107692,
          "last_seen_time": 1297536039000
        },
        {
          "id": 282361908,
          "candidate_address": "1E5esXYrEgqrEKvwjp1fLjmXbdjsbJ6Xwb",
          "risk_score": 0.7091383,
          "taint_d": 3.8210473,
          "pii_s": 8900.001,
          "pii_d": 8900.03,
          "satoshis_balance": 0,
          "satoshis_in": 2114434743393,
          "satoshis_out": 2114428693393,
          "address_count": 234,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 545,
          "total_outgoing_edges": 167,
          "first_seen_block_height": 89647,
          "first_seen_time": 1288920557000,
          "last_seen_block_height": 302895,
          "last_seen_time": 1401218080000
        },
        {
          "id": 316054245,
          "candidate_address": "1CedBs4Hzn8njFi4CVGiAHHPoFz7YY8dwP",
          "risk_score": 0.21688752,
          "taint_d": 4.906033,
          "pii_s": 7343.1055,
          "pii_d": 8811,
          "satoshis_balance": 0,
          "satoshis_in": 1040705332301,
          "satoshis_out": 1040705282301,
          "address_count": 87,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 261,
          "total_outgoing_edges": 72,
          "first_seen_block_height": 104547,
          "first_seen_time": 1295986223000,
          "last_seen_block_height": 151192,
          "last_seen_time": 1320024467000
        }
      ],
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
          "path_statistics": {
            "shortest_path_hops": 5,
            "longest_path_hops": 5,
            "shortest_path_time_ms": 471529,
            "longest_path_time_ms": 471529,
            "path_count": 1,
            "avg_path_time_ms": 471529,
            "avg_path_hops": 5
          }
        }
      ]
    },
    "a3": {
      "parameters": {
        "tx_hash": "efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174",
        "type": "deposit",
        "address": "1Dtn8vtRVFDdmGDcqa1uuAz4igsNNPvTeU",
        "output_indices": [1],
        "max_hops": 5,
        "dilution_threshold": 0.0001,
        "timeout_ms": 5000,
        "minimum_pct_contribution": 0.1,
        "maximum_path_count": 10,
        "maximum_path_length": 50,
        "maximum_dag_edge_count": 2000
      },
      "summary": {
        "amount_analysed": 10000000000,
        "was_truncated": false
      },
      "transaction": {
        "hash": "efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174",
        "block_height": 371946,
        "time": 1440788937000,
        "vin": [
          {
            "prev_tx_hash": "df540461e860e2a2320d469f57cab83b87a1bb7c0889665df7af83d4846c4f7d",
            "prev_index": 0,
            "base58": "1ECKZUEUCR86ihg3eeUEKDGDXFtJuEz17E",
            "satoshis": 99495275,
            "cluster_id": 412980427
          },
          {
            "prev_tx_hash": "48dd61c4253e9c9539e94b18cdd2909395351d0c0af382e49aa5b09ad800b6ca",
            "prev_index": 0,
            "base58": "1PRfTDaFjhYT2ZXjCdSTWPsNVaSu1Ki741",
            "satoshis": 10000000000,
            "cluster_id": 412980427
          }
        ],
        "vout": [
          {
            "index": 0,
            "base58": "1C9hnH9AxxkFkgp7bqbrkbgiueauqaq9mu",
            "satoshis": 99491279,
            "cluster_id": 205385668,
            "spent": true,
            "spending_tx_hash": "0656ba3ccbb8e047587e7893283e387c18a34c7289af0768c293ffe2914c6c25"
          },
          {
            "index": 1,
            "base58": "1Dtn8vtRVFDdmGDcqa1uuAz4igsNNPvTeU",
            "satoshis": 10000000000,
            "cluster_id": 262432261,
            "spent": true,
            "spending_tx_hash": "7a89e0e730b0987d386fbc0d9d22ad63994095a9b0abdcad9e613f52b6e26f9f"
          }
        ],
        "satoshis_out": 10099491279,
        "satoshis_in": 10099495275,
        "fee": 3996
      },
      "clusters": [
        {
          "id": 72777,
          "candidate_address": "18fk5dy13WzjpHDsonjH2nXf2H1ZHHg9yF",
          "risk_score": 10,
          "taint_d": 10,
          "pii_s": 0,
          "pii_d": 0,
          "satoshis_balance": 1381183890455,
          "satoshis_in": 72179642502287,
          "satoshis_out": 70794611212320,
          "address_count": 497540,
          "labels": [
            {
              "id": "141641e9-8bb0-4d30-852b-7961fecaea6c",
              "name": "Agora",
              "category": "Dark Market - Centralised",
              "confidence": 0.92303175,
              "info": {
                "country_hq": null,
                "url": "agorahooawayyfoe.onion",
                "lexis_nexis": null
              },
              "evidence_types": [
                "\u0003\u0003Elliptic Internal Analysis",
                "\u0003\u0003Forum Post",
                "\u0003\u0003Blog Post",
                "\u0003\u0003User Post",
                "\u0003\u0003Elliptic Account"
              ]
            }
          ],
          "name": "Agora",
          "category": "Dark Market - Centralised",
          "primary_label_id": "141641e9-8bb0-4d30-852b-7961fecaea6c",
          "total_incoming_edges": 897071,
          "total_outgoing_edges": 133614,
          "first_seen_block_height": 273098,
          "first_seen_time": 1386198135000,
          "last_seen_block_height": 538505,
          "last_seen_time": 1535263685000
        },
        {
          "id": 16570374,
          "candidate_address": "1EcmDsPjfueomAtZrDaYxYBaXWAypn3P26",
          "risk_score": 10,
          "taint_d": 10,
          "pii_s": 0,
          "pii_d": 0,
          "satoshis_balance": 505239781964,
          "satoshis_in": 27460263308224,
          "satoshis_out": 26940519089050,
          "address_count": 146589,
          "labels": [
            {
              "id": "faf4d9bd-8ba4-4b58-9eb1-a5c9ad5049f0",
              "name": "Nucleus Market",
              "category": "Dark Market - Centralised",
              "confidence": 0.928339,
              "info": {
                "country_hq": null,
                "url": "http://nucleuspf3izq7o6.onion",
                "lexis_nexis": null
              },
              "evidence_types": [
                "\u0003\u0003Elliptic Internal Analysis",
                "\u0003\u0003Elliptic Account"
              ]
            }
          ],
          "name": "Nucleus Market",
          "category": "Dark Market - Centralised",
          "primary_label_id": "faf4d9bd-8ba4-4b58-9eb1-a5c9ad5049f0",
          "total_incoming_edges": 304273,
          "total_outgoing_edges": 156216,
          "first_seen_block_height": 329891,
          "first_seen_time": 1415921142000,
          "last_seen_block_height": 488299,
          "last_seen_time": 1507135234000
        },
        {
          "id": 102709917,
          "candidate_address": "1EQm81MbCQjnU6EwPUaFycEjun1YSGwgeC",
          "risk_score": 9.780743,
          "taint_d": 4.327095,
          "pii_s": 8722.892,
          "pii_d": 8900.002,
          "satoshis_balance": 840710,
          "satoshis_in": 240671293529,
          "satoshis_out": 240669872819,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 24,
          "total_outgoing_edges": 11,
          "first_seen_block_height": 357392,
          "first_seen_time": 1432194821000,
          "last_seen_block_height": 390020,
          "last_seen_time": 1450998257000
        },
        {
          "id": 99197663,
          "candidate_address": "1af8WPJye7Ly67iMjs1JDaLgjMqSYBdUs",
          "risk_score": 6.994464,
          "taint_d": 3.630112,
          "pii_s": 8900.001,
          "pii_d": 8900.001,
          "satoshis_balance": 632317,
          "satoshis_in": 926345020202,
          "satoshis_out": 926343184932,
          "address_count": 13,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 72,
          "total_outgoing_edges": 20,
          "first_seen_block_height": 367351,
          "first_seen_time": 1438088170000,
          "last_seen_block_height": 378590,
          "last_seen_time": 1444669211000
        },
        {
          "id": 412980427,
          "candidate_address": "1ECKZUEUCR86ihg3eeUEKDGDXFtJuEz17E",
          "risk_score": 6.994598,
          "taint_d": 3.5715785,
          "pii_s": 7933.362,
          "pii_d": 8900.006,
          "satoshis_balance": 0,
          "satoshis_in": 10099495275,
          "satoshis_out": 10099491279,
          "address_count": 2,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 2,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 371897,
          "first_seen_time": 1440767663000,
          "last_seen_block_height": 371946,
          "last_seen_time": 1440788937000
        },
        {
          "id": 262432261,
          "candidate_address": "1DgbPfb6JEAg5JRhHchc9GKJUk4JbiQeVJ",
          "risk_score": 3.843599,
          "taint_d": 3.5786488,
          "pii_s": 10000,
          "pii_d": 10000,
          "satoshis_balance": 4842189323,
          "satoshis_in": 347607768177738,
          "satoshis_out": 347598951262445,
          "address_count": 98253,
          "labels": [
            {
              "id": "f67839d1-a071-42c9-852d-9f3443247bce",
              "name": "OKCoin",
              "category": "Exchange",
              "confidence": 0.93007654,
              "info": {
                "country_hq": "Hong Kong",
                "url": "https://www.okcoin.com/",
                "lexis_nexis": [
                  {
                    "name": "OKCoin China",
                    "worldcompliance_url": "https://members.worldcompliance.com/metawatch2.aspx?id=ec43170a-8e9c-4928-abe3-7efc75fd8264",
                    "risk_reason": "Adverse Media:Money Laundering"
                  }
                ]
              },
              "evidence_types": [
                "\u0003\u0003Forum Post",
                "\u0003\u0003Elliptic Account"
              ]
            }
          ],
          "name": "OKCoin",
          "category": "Exchange",
          "primary_label_id": "f67839d1-a071-42c9-852d-9f3443247bce",
          "total_incoming_edges": 166592,
          "total_outgoing_edges": 37782,
          "first_seen_block_height": 311364,
          "first_seen_time": 1405705717000,
          "last_seen_block_height": 539152,
          "last_seen_time": 1535608624000
        },
        {
          "id": 205385668,
          "candidate_address": "16gs3Yuu3hi8yFJm3DMcHyWoSpvri54A3z",
          "risk_score": 8.729379,
          "taint_d": 3.5736208,
          "pii_s": 7457.3604,
          "pii_d": 8900.006,
          "satoshis_balance": 0,
          "satoshis_in": 256986563,
          "satoshis_out": 256974184,
          "address_count": 2,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 2,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 371946,
          "first_seen_time": 1440788937000,
          "last_seen_block_height": 382311,
          "last_seen_time": 1446816199000
        }
      ],
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
          "path_statistics": {
            "shortest_path_hops": 5,
            "longest_path_hops": 5,
            "shortest_path_time_ms": 331530,
            "longest_path_time_ms": 7237887,
            "path_count": 290,
            "avg_path_time_ms": 1231534.175862069,
            "avg_path_hops": 5
          }
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
          "path_statistics": {
            "shortest_path_hops": 5,
            "longest_path_hops": 5,
            "shortest_path_time_ms": 634820,
            "longest_path_time_ms": 7197276,
            "path_count": 7,
            "avg_path_time_ms": 1611281.2857142857,
            "avg_path_hops": 5
          }
        }
      ]
    },
    "a4": {
      "parameters": {
        "tx_hash": "cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792",
        "type": "deposit",
        "address": "1JYshmPZR8jyuGCzTbt2ksjpJADbgmBHbJ",
        "output_indices": [0],
        "max_hops": 5,
        "dilution_threshold": 0.0001,
        "timeout_ms": 5000,
        "minimum_pct_contribution": 0.1,
        "maximum_path_count": 10,
        "maximum_path_length": 50,
        "maximum_dag_edge_count": 2000
      },
      "summary": {
        "amount_analysed": 16000000000,
        "was_truncated": false
      },
      "transaction": {
        "hash": "cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792",
        "block_height": 374097,
        "time": 1442007121000,
        "vin": [
          {
            "prev_tx_hash": "41388a5f1c679dc73111bec6241e4899977771dacff3dadd646d3463b4a4fd2b",
            "prev_index": 1,
            "base58": "1DpnmTsueS7uL7m9Mhzz2epFhkYmWnth45",
            "satoshis": 217083,
            "cluster_id": 99197663
          },
          {
            "prev_tx_hash": "398879c0c8c323bf58ad2e036c1d29a9fd0c60d896c1b458caf0d59464dd37a3",
            "prev_index": 1,
            "base58": "1DpnmTsueS7uL7m9Mhzz2epFhkYmWnth45",
            "satoshis": 229940000,
            "cluster_id": 99197663
          },
          {
            "prev_tx_hash": "289cdfab023ee266dcc070bc6be1b4e42f0649ed2682e45b391a55f514b808de",
            "prev_index": 0,
            "base58": "14d6RYyiuHjnhiA1FfuqqTq2UgTie1ahxH",
            "satoshis": 9274650000,
            "cluster_id": 99197663
          },
          {
            "prev_tx_hash": "b1184b89996ffdcf42c63c837de8e6c99b58947d679da2dd22d149a4727f8ba4",
            "prev_index": 2,
            "base58": "14d6RYyiuHjnhiA1FfuqqTq2UgTie1ahxH",
            "satoshis": 7051000000,
            "cluster_id": 99197663
          }
        ],
        "vout": [
          {
            "index": 0,
            "base58": "1JYshmPZR8jyuGCzTbt2ksjpJADbgmBHbJ",
            "satoshis": 16000000000,
            "cluster_id": 196708,
            "spent": true,
            "spending_tx_hash": "3358f9b01ba4db16640ee584f275999234331f490039d55ee6513a8ff74fe460"
          },
          {
            "index": 1,
            "base58": "1DpnmTsueS7uL7m9Mhzz2epFhkYmWnth45",
            "satoshis": 555797083,
            "cluster_id": 99197663,
            "spent": true,
            "spending_tx_hash": "b91d3c5106d25bba75d112ba6169ac718214e749ac9dedc0d2feaf911fec2142"
          }
        ],
        "satoshis_out": 16555797083,
        "satoshis_in": 16555807083,
        "fee": 10000
      },
      "clusters": [
        {
          "id": 196708,
          "candidate_address": "3LVtpv2QqF5nNor6fPmGdAN3oEE7C6FA93",
          "risk_score": 4.1910253,
          "taint_d": 3.6012292,
          "pii_s": 10000,
          "pii_d": 10000,
          "satoshis_balance": 12059316635514,
          "satoshis_in": 993808582945557,
          "satoshis_out": 981670997129877,
          "address_count": 881754,
          "labels": [
            {
              "id": "1a93efdd-6063-4118-9748-d0a18a35fb70",
              "name": "Kraken",
              "category": "Exchange",
              "confidence": 0.92054653,
              "info": {
                "country_hq": "United States of America",
                "url": "https://www.kraken.com/",
                "lexis_nexis": null
              },
              "evidence_types": [
                "\u0003\u0003Third Party Provider",
                "\u0003\u0003Elliptic Account",
                "\u0003\u0003Organisation Homepage"
              ]
            }
          ],
          "name": "Kraken",
          "category": "Exchange",
          "primary_label_id": "1a93efdd-6063-4118-9748-d0a18a35fb70",
          "total_incoming_edges": 999819,
          "total_outgoing_edges": 420349,
          "first_seen_block_height": 256893,
          "first_seen_time": 1378714584000,
          "last_seen_block_height": 539162,
          "last_seen_time": 1535615457000
        },
        {
          "id": 245276932,
          "candidate_address": "3N8UTnh3A5oGZHuDPgtCevy2AZhFvSZEnd",
          "risk_score": 4.2268763,
          "taint_d": 3.9719489,
          "pii_s": 10000,
          "pii_d": 10000,
          "satoshis_balance": 166490883829,
          "satoshis_in": 1633040143714800,
          "satoshis_out": 1632811532612577,
          "address_count": 503904,
          "labels": [
            {
              "id": "89a4d22a-a803-4783-9223-9169bfd8545c",
              "name": "Bitstamp",
              "category": "Exchange",
              "confidence": 0.9229765,
              "info": {
                "country_hq": "Luxembourg",
                "url": "https://www.bitstamp.net/",
                "lexis_nexis": null
              },
              "evidence_types": [
                "\u0003\u0003Third Party Provider",
                "\u0003\u0003Elliptic Internal Analysis",
                "\u0003\u0003Forum Post",
                "\u0003\u0003Elliptic Account"
              ]
            },
            {
              "id": "56b240c3-a79f-4627-a9c7-fce9d6f46a33",
              "name": "GetBits - 73, Surbiton Road, Kingston Upon Thames KT1 2HG.",
              "category": "ATM",
              "confidence": 0.9229765,
              "info": {
                "country_hq": "United Kingdom",
                "url": null,
                "lexis_nexis": null
              },
              "evidence_types": ["\u0003\u0003Third Party Provider"]
            },
            {
              "id": "6a598791-ca9f-45df-9a18-7b09c91abde5",
              "name": "Ahmia.fi",
              "category": "Data",
              "confidence": 0.9229765,
              "info": {
                "country_hq": null,
                "url": "http://msydqstlz2kzerdg.onion/",
                "lexis_nexis": null
              },
              "evidence_types": ["\u0003\u0003Organisation Homepage"]
            },
            {
              "id": "b9685a61-d3f5-4ab6-8b26-730dd55de786",
              "name": "Pirate Party of Italy",
              "category": "Political Campaign",
              "confidence": 0.9229765,
              "info": {
                "country_hq": "Italy",
                "url": "https://www.partito-pirata.it/",
                "lexis_nexis": null
              },
              "evidence_types": ["\u0003\u0003Organisation Homepage"]
            }
          ],
          "name": "Bitstamp",
          "category": "Exchange",
          "primary_label_id": "89a4d22a-a803-4783-9223-9169bfd8545c",
          "total_incoming_edges": 1073576,
          "total_outgoing_edges": 917650,
          "first_seen_block_height": 141342,
          "first_seen_time": 1313591500000,
          "last_seen_block_height": 539162,
          "last_seen_time": 1535615457000
        },
        {
          "id": 407992547,
          "candidate_address": "14K14dh2qb5qyFcjbP4AZ1wLKXzVaRgLCQ",
          "risk_score": 4.1876493,
          "taint_d": 3.6158082,
          "pii_s": 8900.001,
          "pii_d": 8900,
          "satoshis_balance": 0,
          "satoshis_in": 33037885629,
          "satoshis_out": 33037866829,
          "address_count": 2,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 371771,
          "first_seen_time": 1440690314000,
          "last_seen_block_height": 371771,
          "last_seen_time": 1440690314000
        },
        {
          "id": 420433057,
          "candidate_address": "17jCtyBAKRPYz6XvdaZxEtep1r63F27by5",
          "risk_score": 4.181757,
          "taint_d": 3.6111276,
          "pii_s": 8811.001,
          "pii_d": 8217.668,
          "satoshis_balance": 0,
          "satoshis_in": 32888011829,
          "satoshis_out": 32888000479,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 372640,
          "first_seen_time": 1441176515000,
          "last_seen_block_height": 373409,
          "last_seen_time": 1441625124000
        },
        {
          "id": 210341656,
          "candidate_address": "1KHkZxf7pgM97hUBwJQ1BAmg5bbx9uFxgS",
          "risk_score": 4.181757,
          "taint_d": 3.6008317,
          "pii_s": 8811,
          "pii_d": 8900.001,
          "satoshis_balance": 0,
          "satoshis_in": 40966316913,
          "satoshis_out": 40966290663,
          "address_count": 3,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 3,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 373409,
          "first_seen_time": 1441625124000,
          "last_seen_block_height": 373409,
          "last_seen_time": 1441625124000
        },
        {
          "id": 99197663,
          "candidate_address": "1af8WPJye7Ly67iMjs1JDaLgjMqSYBdUs",
          "risk_score": 6.994464,
          "taint_d": 3.630112,
          "pii_s": 8900.001,
          "pii_d": 8900.001,
          "satoshis_balance": 632317,
          "satoshis_in": 926345020202,
          "satoshis_out": 926343184932,
          "address_count": 13,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 72,
          "total_outgoing_edges": 20,
          "first_seen_block_height": 367351,
          "first_seen_time": 1438088170000,
          "last_seen_block_height": 378590,
          "last_seen_time": 1444669211000
        },
        {
          "id": 407977902,
          "candidate_address": "1LvUTW3SwnckYENsuj9iEAqwXhqbWZSSHn",
          "risk_score": 4.1876493,
          "taint_d": 3.5849795,
          "pii_s": 8900.001,
          "pii_d": 8135.491,
          "satoshis_balance": 0,
          "satoshis_in": 9171092434,
          "satoshis_out": 9171081084,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 371771,
          "first_seen_time": 1440690314000,
          "last_seen_block_height": 371771,
          "last_seen_time": 1440690314000
        },
        {
          "id": 420433107,
          "candidate_address": "18bcC5HNGEYgrJA2S59UKJAU2DPJYhpZU1",
          "risk_score": 4.181757,
          "taint_d": 3.6040764,
          "pii_s": 8811.001,
          "pii_d": 8217.668,
          "satoshis_balance": 0,
          "satoshis_in": 8199081084,
          "satoshis_out": 8199069734,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 372640,
          "first_seen_time": 1441176515000,
          "last_seen_block_height": 373409,
          "last_seen_time": 1441625124000
        },
        {
          "id": 420476522,
          "candidate_address": "14fknSdjjBPSeo5iCN4VM55NYgk7NaZdFn",
          "risk_score": 4.1921577,
          "taint_d": 3.611682,
          "pii_s": 8900.001,
          "pii_d": 8900,
          "satoshis_balance": 0,
          "satoshis_in": 1466761246,
          "satoshis_out": 1466749896,
          "address_count": 1,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 1,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 372551,
          "first_seen_time": 1441129749000,
          "last_seen_block_height": 373332,
          "last_seen_time": 1441569791000
        },
        {
          "id": 207743646,
          "candidate_address": "12xLghVEp3wbPKKu4HDtVmr95h5UcpgEgq",
          "risk_score": 4.1917567,
          "taint_d": 3.6118126,
          "pii_s": 8811.001,
          "pii_d": 8900.001,
          "satoshis_balance": 0,
          "satoshis_in": 5392938034,
          "satoshis_out": 5392911784,
          "address_count": 3,
          "labels": [],
          "name": null,
          "category": null,
          "primary_label_id": null,
          "total_incoming_edges": 3,
          "total_outgoing_edges": 2,
          "first_seen_block_height": 373332,
          "first_seen_time": 1441569791000,
          "last_seen_block_height": 373332,
          "last_seen_time": 1441569791000
        }
      ],
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
          "path_statistics": {
            "shortest_path_hops": 5,
            "longest_path_hops": 5,
            "shortest_path_time_ms": 1341679,
            "longest_path_time_ms": 1603760,
            "path_count": 9,
            "avg_path_time_ms": 1574639.888888889,
            "avg_path_hops": 5
          }
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
          "path_statistics": {
            "shortest_path_hops": 2,
            "longest_path_hops": 2,
            "shortest_path_time_ms": 10857,
            "longest_path_time_ms": 13606,
            "path_count": 10,
            "avg_path_time_ms": 12251.8,
            "avg_path_hops": 2
          }
        }
      ]
    }
  }
  