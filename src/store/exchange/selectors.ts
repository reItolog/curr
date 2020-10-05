import { createSelector } from 'reselect';
import { AppState } from '../index';

export const exchangeState = (state: AppState) => state.exchange;

export const getExchangeData = createSelector(exchangeState, (state) => state.data);

export const getSumExchangeAmount = createSelector(exchangeState, (state) => {
  if (state?.data?.rates[state.to]) {
    const amount = Number(state.amount);
    const rate = Number(state?.data?.rates[state.to]);

    return (amount * rate).toFixed(2);
  }
  return 0;
});

export const getExchangeLoading = createSelector(exchangeState, (state) => state.loading);

export const getFrom = createSelector(exchangeState, (state) => state.from);
export const getTo = createSelector(exchangeState, (state) => state.to);
export const getAmount = createSelector(exchangeState, (state) => state.amount);
