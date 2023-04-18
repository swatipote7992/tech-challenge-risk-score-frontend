Readme needs updating still..

# Risk Rules Tech Challenge

This application is a simple transaction analysis tool, that takes a bitcoin transaction hash, executes a GET request against a backend server and displays the returned analysis, detailing where the funds have come from.

Your task is to take this analysis, and use a given set of risk rules to compute and display a risk score for the given transaction hash.

The following hashes will give a response:

* c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457
* dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1
* efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174
* cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792

All others will get a 404.

## Tasks

* **Implement logic to calculate a risk score for the submitted transaction.** There is a provided skeleton function `actions/index.js:calculateRisk` taking transaction analysis and risk rules as arguments. Your main challenge is to implement this function.
* **Display the calculated risk score on the frontend**. This can be as simple as appending to the JSON, but bonus points for showing it in a more elaborate fashion!

### Risk Calculation

Each rule is evaluated only if funds have been contributed from matching categories / entities.

All rules in this challenge are of type `linear_percentage_contribution` and should be calculated as follows:
  
* If the contribution of funds is less than the min threshold, then the rule is not triggered
* If the contribution of funds equals the min threshold, then the min score is applied
* If the contribution of funds is equal to or greater than the max threshold, then the max score is applied
* For any percentage in between, the score assigned is on a **linear scale** between the min and max

E.g., If a rule has the following properties:

* Min threshold: 20
* Min score: 1
* Max threshold: 80
* Max score: 7

And this rule is triggered with a contribution of 50, a score of 4 is assigned. 

Some business logic around multiple entities / multiple matching rules is unspecified. Make assumptions where necessary and be prepared to discuss your decisions.

## Submission 

To submit your code:
 * `npm run zip` will output an archive `tech-challenge-risk-score-frontend.zip`
 * Upload to https://www.dropbox.com/request/5L09ACYzL0SjADfAotnb

## The Risk Score App

### Starting

The app runs on Node v12 LTS, it may work against other versions but is untested.

Run `npm install` to install the dependencies, then `npm start` to start the app. This should open your browser and navigate to `localhost:3000`

### Structure

All relevant app code can be found in the `src` directory. Most of the UI code is in `App.js`, with some additional components in the `components` subdirectory. Redux store reducers and action creators are in their own folders, and the logic to call the transactions endpoint and handle the response is in the action creator `submitTransaction`. 