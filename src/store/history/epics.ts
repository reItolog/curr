import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';

import { default as historyService } from './service';
import { Actions, ActionTypes } from './actions';
import { ActionTypes as ExchangeActionsType } from '../exchange/actions';

const getHistoryEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_HISTORY_REQUEST),
    switchMap(() => {
      const base = state$.value.exchange.from;
      const symbols = state$.value.exchange.to;
      const startAt = state$.value.history.startAt;
      const endAt = state$.value.history.endAt;

      const historyPayload = {
        start_at: startAt,
        end_at: endAt,
        base,
        symbols,
      };
      return historyService.getHistory(historyPayload).pipe(
        map((data) => {
          return Actions.fetchHistoryAsync.success(data);
        }),
      );
    }),
    catchError((error) => of(Actions.fetchHistoryAsync.failure(error.message))),
  );

const resetHistoryEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ExchangeActionsType.FETCH_EXCHANGE_SUCCESS),
    switchMap(() => of(Actions.resetHistory())),
  );

export const epics = [getHistoryEpic, resetHistoryEpic];
