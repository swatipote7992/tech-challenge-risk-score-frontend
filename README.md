# Welcome

Hello, welcome to Elliptic's technical challenge. Today, you have 1 hour to make a start on an Elliptic Jira ticket. Calculating a risk score based on a Crypto wallet's on-chain activity is the heart of what Elliptic does. In the real world we have a service similar to the one you are writing today that calculates 100 risk scores for wallets every second.

This API takes "contributions" from a different service which represent where a wallet's funds came from as a percentage, and applies them to a defined set of Risk Rules. These risk rules define what Elliptic should highlight as risky and how contributions from different sources should be scored. They allow Elliptic to define that contributions from entities which are sanctioned are extremely high risk, and things from privacy services and CoinSwaps are still risky but lower risk than directly from a sanctioned source 


Please see below for instructions on how to run the code, and please don't worry if you don't have experience with Nestjs. We have set up this codebase, so the only file you _need_ to change is src/risk-score/risk-score.service.ts. Although there are also some test files with e2e.spec.ts and .spec.ts in their filename that you may wish to add to.

We give equal points for both functional correctness and for coding style and use of best practices. Also if you feel you are running out of time please feel free to leave psuedo code.

We also do not mark down for usage of modern developer tools like Copilot or other LLM based solutions

# JIRA TICKET: RISK-010

Given I am a customer of Elliptic,

When I call the new Risk-API at ${BASE_URL}/risk-score/wallet/:wallet_hash

Then I receive a number between 0-10 representing the risk of the wallet


### Acceptance criteria:
- The API returns a risk-score between 0-10
- Results should be rounded to 1 decimal place
- Risk Rules should be matched when either the category name or the entity name matches the category on the contribution
- When a risk rule matches a contribution, the score is calculated by: 
    - Taking the `max_score` when the contribution percentage is higher than the `max_contribution_threshold`
    - When the contribution is inbetween the `min_contribution_threshold` and the `max_contribution_threshold`, then it is scored between the `min_score` and the `max_score`. The score should be the same proportion between the thresholds as it is between the min and maximum score
    - When the contribution threshold is less than the `min_contribution_threshold` 0 should be returned


### Notes:

There are some examples that are already set up in the server as mocked data.

- 0xd8e749e457fcd1918c9a589bfaa87db9f8e154d6 - Should trigger the maximum score
- 0xeaa386b95dd9be76db27f6baef7550f067df5645 - This one is low and is less than the threshold so shouldn't trigger the rule
- bc1qr5f8fz8l2v6q06ng7sgk9g46hma620nt0d7vkr - Should trigger multiple risk rules (although we need to keep the score between 0-10!)
- 0x9449f92f36230f171b8d71810a62b1e76b70e2f5 - This one has contributions between the min and the max and should score 9.8
- 1JuEjh9znXwqsy5RrnKqgzqY4Ldg7rnj5n - matches on entities


---

# Risk API Readme

## Installation

`npm install`
(Should work on any version of node >= 18.15.0)

## Running the server

`npm start`
`npm run start:dev` (for watching code changes)
This runs the server at `http:localhost:3000`


## Testing
All tests can be run with:
`npm test`

(see package.json for some other useful test commands)


## Submission
You should submit your code within one hour of starting the challenge.

`npm run pack` will output an zip file called risk-api.zip

Reply to the email that sent you the link to this repo, with the .zip file attached. If you receive an email saying the attachment is blocked, please let us know and send us a link to the file in a cloud sharing site, such as GDrive/OneDrive.