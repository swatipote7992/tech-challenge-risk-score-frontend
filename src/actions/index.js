import axios from 'axios';
import { TRANSACTION_ANALYSIS_SUBMITTED, TRANSACTION_ANALYSIS_SUCCEEDED } from '../types';

export const submitTransaction = (hash) => (dispatch) => {
  // Let application know the search is in "loading" state
  dispatch({
    type: TRANSACTION_ANALYSIS_SUBMITTED,
  });

  // Request the analysis and dispatch the result
  axios.get(`${process.env.REACT_APP_API_URL}/transactions/${hash}`).then(response => {
    dispatch({
      type: TRANSACTION_ANALYSIS_SUCCEEDED,
      payload: response.data
    });
  });
};