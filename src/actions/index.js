import axios from 'axios';
import { TRANSACTION_ANALYSIS_SUBMITTED, TRANSACTION_ANALYSIS_SUCCEEDED } from '../types';

const baseUrl = process.env.REACT_APP_API_URL;

export const submitTransaction = (hash) => (dispatch) => {
  // Let application know the search is in "loading" state
  dispatch({
    type: TRANSACTION_ANALYSIS_SUBMITTED,
  });

  // Request analysis and rules from the API
  // Calculate Risk - TODO
  // Dispatch Risk Calculation
  return Promise.all([
    axios.get(`${baseUrl}/transactions/${hash}`).then(({ data }) => data),
    axios.get(`${baseUrl}/rules`).then(({ data }) => data),
  ])
    .then(([txAnalysis, rules]) => calculateRisk(txAnalysis, rules))
    .then(risk => dispatch(
      {
        type: TRANSACTION_ANALYSIS_SUCCEEDED,
        payload: risk,
      }
    ));
};

const calculateRisk = (txAnalysis, rules) => {
  // TODO - use rules to calculate risk of each transaction
  return { txAnalysis, rules };
};
