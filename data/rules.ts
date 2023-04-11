import Rule from '../types/rule'

const rules: Rule[] = [
    {
        "id": "4e4e0e8c-5705-407e-9aa9-17822482260b",
        "name": "Gavin",
        "entities": [
            "Gavin Andresen Faucet"
        ],
        "rule_criteria": {
            "type": "linear_percentage_contribution",
            "min_contribution_threshold": 20,
            "max_contribution_threshold": 80,
            "min_score": 3,
            "max_score": 6
        }
    },
    {
        "id": "da8623ed-92ee-47e0-81ab-280e12ea8918",
        "name": "Agora",
        "entities": [
            "Agora"
        ],
        "rule_criteria": {
            "type": "linear_percentage_contribution",
            "min_contribution_threshold": 0,
            "max_contribution_threshold": 100,
            "min_score": 8,
            "max_score": 10
        }
    },
    {
        "id": "5a341097-814f-4b82-bd2a-59f358ed4c26",
        "name": "Dark Markets",
        "categories": [
            "Dark Market"
        ],
        "rule_criteria": {
            "type": "linear_percentage_contribution",
            "min_contribution_threshold": 0,
            "max_contribution_threshold": 60,
            "min_score": 5,
            "max_score": 9
        }
    },
    {
        "id": "5b85b190-bea9-42f9-b65a-9f7136cc9e65",
        "name": "Exchange",
        "categories": [
            "Exchange"
        ],
        "rule_criteria": {
            "type": "linear_percentage_contribution",
            "min_contribution_threshold": 20,
            "max_contribution_threshold": 100,
            "min_score": 2,
            "max_score": 6
        }
    }
]

export default rules;