import { createAsyncAction, ActionType, action } from 'typesafe-actions';

import { HistoryData } from './types';

import { DateType } from '../../shared/interfaces/exchange';

export enum ActionTypes {
  FETCH_HISTORY_REQUEST = 'FETCH_HISTORY_REQUEST',
  FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS',
  FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE',
  FETCH_HISTORY_CANCEL = 'FETCH_HISTORY_CANCEL',

  SET_START_AT = 'SET_START_AT',
  SET_END_AT = 'SET_END_AT',
  RESET_HISTORY = 'RESET_HISTORY',
}

export const Actions = {
  fetchHistoryAsync: createAsyncAction(
    ActionTypes.FETCH_HISTORY_REQUEST,
    ActionTypes.FETCH_HISTORY_SUCCESS,
    ActionTypes.FETCH_HISTORY_FAILURE,
    ActionTypes.FETCH_HISTORY_CANCEL,
  )<undefined, HistoryData, string, string>(),

  setStartAt: (payload: DateType) => action(ActionTypes.SET_START_AT, payload),
  setEndAt: (payload: DateType) => action(ActionTypes.SET_END_AT, payload),
  resetHistory: () => action(ActionTypes.RESET_HISTORY),
};

export type HistoryActionType = ActionType<typeof Actions>;
