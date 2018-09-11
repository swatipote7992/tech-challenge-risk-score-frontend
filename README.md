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

* Using the transaction analyses and risk rules retrieved, implement logic to calculate a risk score for the submitted transaction.
* Display the calculated risk score on the frontend (can be as simple as appending it to the JSON, but bonus points for showing it in a more elaborate fashion!)

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

## The Risk Score App

### Starting

The app runs on Node v10, it may work against other versions but is untested.

Copy the `.env.example` file to `.env` and fill in the API url (will be provided to you).

Run `npm install` to install the dependencies, then `npm start` to start the app. This should open your browser and navigate to localhost:3000

### Structure

All relevant app code can be found in the `src` directory. Most of the UI code is in `App.js`, with some additional components in the `components` subdirectory. Redux store reducers and action creators are in their own folders, and the logic to call the transactions endpoint and handle the response is in the action creator `submitTransaction`. 

## API documentation

The provided API is a simplified version of the Elliptic platform. It exposes the following two endpoints:

**GET /transactions/{hash}**

The response payload takes the following shape:

| Key | Type | Description
|--- |--- |---
| entities | [entity objects] | the identified entities contributing funds for the tx

*Entity object*

| Key | Type | Description
|--- |--- |---
| cluster | object | the cluster that the entity is a part of
| cluster.id | int | the (Elliptic) id of the cluster
| cluster.candidate_address | string | One address from the cluster deemed the "representative" address
| cluster.satoshis_balance | float | the balance of the cluster
| cluster.address_count | int | the number of addresses contained in the cluster
| cluster.name | string | the name applied to the cluster
| cluster.category | string | the category assigned to the cluster
| satoshis_vol | int |
| pct_contribution | int | the percentage of the input funds to the transaction that this cluster has contributed
| path_statistics | object | the details of how this entity relates to the queried tx
| path_statistics.shortest_path_hops | int | the smallest number of hops linking the tx to this entity
| path_statistics.longest_path_hops | int | the largest number of hops linking the tx to this entity
| path_statistics.shortest_path_time_ms | int |
| path_statistics.longest_path_time_ms | int |
| path_statistics.path_count | int | the number of different paths linking the tx to this entity
| path_statistics.avg_path_time_ms | int |
| path_statistics.avg_path_hops | int | the average number of hops of paths linking the tx to this entity

**GET /rules**

Returns an array of risk rule objects, each taking the following form (? indicates optional):

| Key | Type | Description
|--- |--- |---
| id | string (uuid) | the risk rule id
| name | string | the name of the rule
| categories? | [strings] | the categories that should trigger this rule
| entities? | [strings] | the entities that should trigger this rule
| rule_criteria | object | the definition of how this rule should be evaluated
| rule_criteria.type | string | type of the rule
| rule_criteria.min_contribution_threshold | int | minimum contribution of funds which can trigger this rule 
| rule_criteria.max_contribution_threshold | int | contribution threshold over which the maximum score is applied
| rule_criteria.min_score | int | minimum applicable risk score when this rule is triggered
| rule_criteria.max_score | int | maximum applicable risk score when this rule is triggered
