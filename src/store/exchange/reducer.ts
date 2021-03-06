import { ExchangeActionType, ActionTypes } from './actions';
import { ExchangeState } from './types';

const initialState: ExchangeState = {
  data: {
    base: '',
    date: '',
    rates: {},
  },
  amount: 0,
  from: 'EUR',
  to: 'USD',
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
        data: action.payload.data,
        amount: action.payload.amount,
      };
    }
    case ActionTypes.FETCH_EXCHANGE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.SET_FROM: {
      return {
        ...state,
        from: action.payload,
      };
    }
    case ActionTypes.SET_TO: {
      return {
        ...state,
        to: action.payload,
      };
    }
    case ActionTypes.SET_AMOUNT: {
      return {
        ...state,
        amount: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
