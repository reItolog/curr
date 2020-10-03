import { createAsyncAction, ActionType, action } from 'typesafe-actions';

import { HistoryData } from './types';

export enum ActionTypes {
  FETCH_HISTORY_REQUEST = 'FETCH_HISTORY_REQUEST',
  FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS',
  FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE',
  FETCH_HISTORY_CANCEL = 'FETCH_HISTORY_CANCEL',

  SET_START_AT = 'SET_START_AT',
  SET_END_AT = 'SET_END_AT',
}

export const Actions = {
  fetchHistoryAsync: createAsyncAction(
    ActionTypes.FETCH_HISTORY_REQUEST,
    ActionTypes.FETCH_HISTORY_SUCCESS,
    ActionTypes.FETCH_HISTORY_FAILURE,
    ActionTypes.FETCH_HISTORY_CANCEL,
  )<undefined, HistoryData, string, string>(),

  setStartAt: (payload: string) => action(ActionTypes.SET_START_AT, payload),
  setEndAt: (payload: string) => action(ActionTypes.SET_END_AT, payload),
};

export type HistoryActionType = ActionType<typeof Actions>;
