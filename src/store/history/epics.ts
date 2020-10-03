import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';

import { default as historyService } from './service';
import { Actions, ActionTypes } from './actions';

const getHistoryEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_HISTORY_REQUEST),
    switchMap(({ payload }) => {
      const base = state$.value.exchange.from;
      const symbols = state$.value.exchange.to;
      const historyPayload = {
        base,
        symbols,
        ...payload,
      };
      return historyService.getHistory(historyPayload).pipe(
        map((data) => {
          return Actions.fetchHistoryAsync.success(data);
        }),
      );
    }),
    catchError((error) => of(Actions.fetchHistoryAsync.failure(error.message))),
  );

export const epics = [getHistoryEpic];
