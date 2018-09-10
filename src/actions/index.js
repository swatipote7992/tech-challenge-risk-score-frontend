import axios from 'axios';
import { TRANSACTION_ANALYSIS_SUBMITTED, TRANSACTION_ANALYSIS_SUCCEEDED } from '../types';

const baseUrl = process.env.REACT_APP_API_URL;

export const submitTransaction = (hash) => (dispatch) => {
  // Let application know the search is in "loading" state
  dispatch({
    type: TRANSACTION_ANALYSIS_SUBMITTED,
  });

  // Request the analysis
  return axios.get(`${baseUrl}/transactions/${hash}`)
    .then(({ data }) => calculateRisk(data))
    .then(({ analysis, rules }) => dispatch(
      {
        type: TRANSACTION_ANALYSIS_SUCCEEDED,
        payload: { analysis, rules },
      }
    ));
};

const calculateRisk = (analysis) => {
  // Request the risk rules
  return axios.get(`${baseUrl}/rules`)
    .then(({ data }) => {
      // TODO - perform risk calculation
      return {
        analysis,
        rules: data
      }
    })
};
