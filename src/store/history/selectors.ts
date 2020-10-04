import { createSelector } from 'reselect';
import { AppState } from '../index';

export const historyState = (state: AppState) => state.history;

export const getHistoryStartAt = createSelector(historyState, (state) => state.startAt);

export const getHistoryEndAt = createSelector(historyState, (state) => state.endAt);

export const getHistoryBase = createSelector(historyState, (state) => state.data.base);

export const getHistoryRates = createSelector(historyState, (state) => {
  return Object.keys(state.data.rates).map((item) => {
    const entry: any = state.data.rates[item];

    for (const [key, value] of Object.entries(entry)) {
      return {
        date: item,
        rate: {
          currency: key,
          value,
        },
      };
    }
  });
});
