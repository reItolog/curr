import { createSelector } from 'reselect';
import { AppState } from '../index';

export const exchangeState = (state: AppState) => state.exchange;

export const getExchangeData = createSelector(exchangeState, (state) => state.data);

export const getSumExchangeAmount = createSelector(exchangeState, (state) => {
  const amount = +(state.amount * Object.values(state.data.rates)[0]).toFixed(2);
  if (!isNaN(amount)) {
    return amount;
  } else {
    return 0;
  }
});

export const getExchangeLoading = createSelector(exchangeState, (state) => state.loading);

export const getFrom = createSelector(exchangeState, (state) => state.from);
export const getTo = createSelector(exchangeState, (state) => state.to);
export const getAmount = createSelector(exchangeState, (state) => state.amount);
