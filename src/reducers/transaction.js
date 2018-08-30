import { TRANSACTION_ANALYSIS_SUBMITTED, TRANSACTION_ANALYSIS_SUCCEEDED } from '../types';

const initialState = {
  loading: false,
  result: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TRANSACTION_ANALYSIS_SUBMITTED:
      return {
        ...state,
        loading: true,
      };
    case TRANSACTION_ANALYSIS_SUCCEEDED:
      return {
        loading: false,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;