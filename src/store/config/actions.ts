import { createAsyncAction, ActionType, action } from 'typesafe-actions';

export enum ActionTypes {
  FETCH_OPTIONS_REQUEST = 'FETCH_OPTIONS_REQUEST',
  FETCH_OPTIONS_SUCCESS = 'FETCH_OPTIONS_SUCCESS',
  FETCH_OPTIONS_FAILURE = 'FETCH_OPTIONS_FAILURE',
  FETCH_OPTIONS_CANCEL = 'FETCH_OPTIONS_CANCEL',

  SET_BASE = 'SET_BASE'
}

export const Actions = {
  fetchOptionsAsync: createAsyncAction(
    ActionTypes.FETCH_OPTIONS_REQUEST,
    ActionTypes.FETCH_OPTIONS_SUCCESS,
    ActionTypes.FETCH_OPTIONS_FAILURE,
    ActionTypes.FETCH_OPTIONS_CANCEL,
  )<undefined, string[], string, string>(),

  setBase: (payload: string) => action(ActionTypes.SET_BASE, payload)
};

export type FetchOptionsType = ActionType<typeof Actions>;