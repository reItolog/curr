import { ExchangeActionType, ActionTypes } from './actions';
import { ExchangeState } from './types';

const initialState: ExchangeState = {
  data: {
    base: '',
    date: '',
    rates: {},
  },
  error: '',
  loading: false,
};

export function reducer(state = initialState, action: ExchangeActionType): ExchangeState {
  switch (action.type) {
    case ActionTypes.FETCH_EXCHANGE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.FETCH_EXCHANGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case ActionTypes.FETCH_EXCHANGE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
