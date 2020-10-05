import { FetchOptionsType, ActionTypes } from './actions';
import { OptionsState } from './types';

const initialState: OptionsState = {
  items: [],
  error: '',
  loading: false,
  base: 'EUR',
};

export function reducer(state = initialState, action: FetchOptionsType): OptionsState {
  switch (action.type) {
    case ActionTypes.FETCH_OPTIONS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionTypes.FETCH_OPTIONS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    }
    case ActionTypes.FETCH_OPTIONS_FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    case ActionTypes.SET_BASE: {
      return {
        ...state,
        base: action.payload
      };
    }
    default: {
      return state;
    }
  }
}