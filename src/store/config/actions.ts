import { createAsyncAction, ActionType } from 'typesafe-actions';

export enum ActionTypes {
  FETCH_OPTIONS_REQUEST = 'FETCH_OPTIONS_REQUEST',
  FETCH_OPTIONS_SUCCESS = 'FETCH_OPTIONS_SUCCESS',
  FETCH_OPTIONS_FAILURE = 'FETCH_OPTIONS_FAILURE',
  FETCH_OPTIONS_CANCEL = 'FETCH_OPTIONS_CANCEL',
}

export const Actions = {
  fetchOptionsAsync: createAsyncAction(
    ActionTypes.FETCH_OPTIONS_REQUEST,
    ActionTypes.FETCH_OPTIONS_SUCCESS,
    ActionTypes.FETCH_OPTIONS_FAILURE,
    ActionTypes.FETCH_OPTIONS_CANCEL,
  )<undefined, string[], Error, string>(),
};

export type FetchOptionsType = ActionType<typeof Actions>;