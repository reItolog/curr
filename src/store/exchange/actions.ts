import { createAsyncAction, ActionType } from 'typesafe-actions';

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
}

export const Actions = {
  fetchExchangeAsync: createAsyncAction(
    ActionTypes.FETCH_EXCHANGE_REQUEST,
    ActionTypes.FETCH_EXCHANGE_SUCCESS,
    ActionTypes.FETCH_EXCHANGE_FAILURE,
    ActionTypes.FETCH_EXCHANGE_CANCEL,
  )<ExchangePayload, IPaylod, string, string>(),
};

export type ExchangeActionType = ActionType<typeof Actions>;
