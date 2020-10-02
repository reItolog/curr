import { FetchOptionsType, ActionTypes } from './actions';
import { OptionsState } from './types';

const initialState: OptionsState = {
 items: []
};

export function reducer(state = initialState, action: FetchOptionsType): OptionsState {
  switch (action.type) {
    case ActionTypes.FETCH_OPTIONS_SUCCESS: {
      return {
        ...state,
        items: action.payload
      };
    }
    default: {
      return state;
    }
  }
}