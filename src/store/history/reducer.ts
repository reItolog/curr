import { HistoryActionType, ActionTypes } from './actions';
import { HistoryState } from './types';

const initialState: HistoryState = {
  data: {
    base: '',
    end_at: '',
    start_at: '',
    rates: {},
  },
  error: '',
  endAt: '',
  startAt: '',
  loading: false,
};

export function reducer(state = initialState, action: HistoryActionType): HistoryState {
  switch (action.type) {
    case ActionTypes.FETCH_HISTORY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.FETCH_HISTORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case ActionTypes.FETCH_HISTORY_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.SET_START_AT: {
      return {
        ...state,
        startAt: action.payload,
      };
    }
    case ActionTypes.SET_END_AT: {
      return {
        ...state,
        endAt: action.payload,
      };
    }
    case ActionTypes.RESET_HISTORY: {
      return {
        ...state,
        startAt: '',
        endAt: '',
        data: {
          base: '',
          end_at: '',
          start_at: '',
          rates: {},
        },
      };
    }
    default: {
      return state;
    }
  }
}
