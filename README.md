# Risk Rules Tech Challenge

In `calculateRiskScore.ts` there is a skeleton of a function for calculating the risk score of a given bitcoin transaction.

Your task is to provide a correct implementation of the `calculateRiskScore` function. The function should take a bitcoin transaction hash, and return a numeric risk score.

Your implementation should use the risk rules from `rules.ts` and the transaction data provided in `transactions.ts`.

### Risk Score Calculation

Each rule is evaluated only if funds have been contributed from matching categories / entities.

All rules in this challenge are of type `linear_percentage_contribution` and should be calculated as follows:

- If the contribution of funds is less than the min threshold, then the rule is not triggered
- If the contribution of funds equals the min threshold, then the min score is applied
- If the contribution of funds is equal to or greater than the max threshold, then the max score is applied
- For any percentage in between, the score assigned is on a **linear scale** between the min and max

E.g., If a rule has the following properties:

- Min threshold: 20
- Min score: 1
- Max threshold: 80
- Max score: 7

And this rule is triggered with a contribution of 50, a score of 4 is assigned.

Some business logic around multiple entities / multiple matching rules is unspecified. Make assumptions where necessary and be prepared to discuss your decisions.

### Starting

The app runs on Node v18.15.0. It may work against other versions but is untested.

Run `npm install` to install the dependencies, then `npm test` to run the tests. You may also run `npm start` as another way of running your code.

### Submission

You should submit your code within one hour of starting the challenge.

- `npm pack` will output an archive `risk-rule-challenge-0.1.0.tgz`
- Reply to the email that sent you the link to this repo, with the zip file attached.
