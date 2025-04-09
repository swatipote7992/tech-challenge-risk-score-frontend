Hello, welcome to Elliptic's technical challenge. Today, you have 1 hour to make a start on a real world Elliptic Jira ticket. Calculating a risk score based on a Crypto wallet's on chain activity is the heart of what Elliptic does. In the real world we have a service similar to the one you are writing today that calculates 100 risk scores for wallets every second.

This API takes "contributions" from a different service which represent where a wallet's funds came from as a percentage, and applies them to a defined set of Risk Rules. These risk rules define what Elliptic should highlight as risky and how contributions from different sources should be scored.
They allow Elliptic to define that contributions from entities which are sanctioned are extremely high risk, and things from privacy services and CoinSwaps are still risky but 


Please see readme.md for details on how to run the code, and please don't worry if you don't have experience with Nestjs. We have set up this codebases, so the only file you _need_ to change is nestjs/risk-api/src/risk-score/risk-score.service.ts.

??Should I reference tests, or splitting code into utils??

### JIRA TICKET:


## RISK-010

Given I am a customer of Elliptic,
When I call the new Risk-API at ${BASE_URL}/risk-score/wallet/:wallet_hash
Then I receive a number between 0-10 representing the risk of the wallet


Acceptance criteria:
- The API returns a risk-score between 0-10
- The "contributions"









Tech challenge
- Implement a basic version of the risk engine

What are we scoring them on?
- Functional correctness
- Naming convention, error handling, code cleanliness, input validation, code modularity
- Do they add the tests?




Follow up Interview
Explain how the code works

Do a basic extension of the submission to also return "What rule triggered"
? Why not tests, how would you be sure this code works before putting it in production? ?



Final one.
Given the extended API response. How would you build the UI?

How do we weed out an okay frontend person vs an excellent frontend person