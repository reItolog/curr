import { createAsyncAction, ActionType, action } from 'typesafe-actions';

import { RatesData } from './types';
import { ExchangePayload } from '../../shared/interfaces/exchange';

interface IPaylod {
  data: RatesData;
  amount: number;
}

export enum ActionTypes {
  FETCH_EXCHANGE_REQUEST = 'FETCH_EXCHANGE_REQUEST',
  FETCH_EXCHANGE_SUCCESS = 'FETCH_EXCHANGE_SUCCESS',
  FETCH_EXCHANGE_FAILURE = 'FETCH_EXCHANGE_FAILURE',
  FETCH_EXCHANGE_CANCEL = 'FETCH_EXCHANGE_CANCEL',

  SET_FROM = 'SET_FROM',
  SET_TO = 'SET_TO',
  SET_AMOUNT = 'SET_AMOUNT',
}

export const Actions = {
  fetchExchangeAsync: createAsyncAction(
    ActionTypes.FETCH_EXCHANGE_REQUEST,
    ActionTypes.FETCH_EXCHANGE_SUCCESS,
    ActionTypes.FETCH_EXCHANGE_FAILURE,
    ActionTypes.FETCH_EXCHANGE_CANCEL,
  )<ExchangePayload, IPaylod, string, string>(),

  setFrom: (payload: string) => action(ActionTypes.SET_FROM, payload),
  setTo: (payload: string) => action(ActionTypes.SET_TO, payload),
  setAmount: (payload: number) => action(ActionTypes.SET_AMOUNT, payload),
};

export type ExchangeActionType = ActionType<typeof Actions>;
