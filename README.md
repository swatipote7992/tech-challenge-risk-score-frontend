# Risk rules tech challenge

This application is a simple transaction analysis tool, that takes a bitcoin transaction hash, executes a GET request
against a backend server and displays the returned analysis, detailing from where the funds have come from. Your task is to take this analysis, and use a given
set of risk rules to compute and display a risk score for the given transaction hash.

## API documentation

The provided API (URL will be given to you) is a simplified version of the Elliptic platform. It exposes the following two endpoints

**GET /transactions/{hash}**

Being a simplified risk API, it knows about the following transaction hashes:

* c490b06b3fe9ea6626b2aa955f5e98f58152875637405f8ebe58879602c72457
* dbecb11c20a9264f7d38050320f9352e7d9dd7cd48a2bc347ea25fb89988a4c1
* efc08a551c9cd52b682ed7dc092b2b0f252136d4120434994b94394c31d5d174
* cfa052bed0e8376ba4daf2cbaadf2cfe8104dc6fc56658dc8cba24e077263792

All other txs will get a 404.

The response payload takes the following shape:

| Key | Type | Description
|--- |--- |---
| transaction | object | The blockchain information about the tx
| transaction.hash | string | The tx hash 
| transaction.block_height | int | the height of the block the tx was confirmed in
| time | float | the time the block was added to the blockchain
| transaction.vin | [objects] | the inputs to the tx
| transaction.vout | [objects] | the outputs to the tx
| transaction.satoshis_out | int | the number of satoshis in the input of the tx
| transaction.satoshis_in | int | the number of satoshis in the output of the tx
| transaction.fee | int | the fee for the transaction
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
| rule_criteria.type | string | see below
| min_contribution_threshold | int | see below
| max_contribution_threshold | int | see below
| min_score | int | see below
| max_score | int | see below

Each rule is only evaluated if funds have been contributed from matching categories/entities.

*Linear percentage contribution type*
Rules using this type (which all in the exercise do), work as follows:
- If the contribution of funds from a matching entity/category is less than this amount, the rule is not triggered
- If the contribution of funds equals the min threshold, then the min score is applied
- If the contribution of funds equals the max threshold, then the max score is applied
- For any percentage in between, the score assigned is on a linear scale between the min and max

E.g., If a rule has the following properties:
- Min threshold: 20
- Min score: 1
- Max threshold: 80
- Max score: 7

And this rule is triggered with a contribution of 50, a score of 4 is assigned. 


## Frontend App

### Starting

Copy the `.env.example` file to `.env` and fill in the API url (will be provided to you)

Run `npm install` to install the dependencies, then `npm start` to start the app. This should open your browser and navigate to localhost:3000

### Structure

All relevant app code can be found in the `src` directory. Most of the UI code is in `App.js`, with some additional components in the `components` subdirectory. Redux store reducers and action creators are in their own folders, and the logic to call the transactions endpoint and handle the response is in the action creator `submitTransaction`.

## Tasks

* Implement a method of retrieving the risk rules from the API
* Using these rules, implement logic to calculate a risk score for a submitted transaction
* Display the calculated risk score on the frontend (can be as simple as appending it to the JSON, but bonus points for showing it in a more elaborate fashion!)