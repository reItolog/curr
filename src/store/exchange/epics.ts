import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';

import { default as exchangeService } from './service';
import { Actions, ActionTypes } from './actions';

const getRatesEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionTypes.FETCH_EXCHANGE_REQUEST),
    switchMap(({ payload }) => {
      const ratesPayload = {
        base: payload.from,
        symbols: payload.to,
      };
      return exchangeService.getRates(ratesPayload).pipe(
        map((data) => {
          return Actions.fetchExchangeAsync.success({ data, amount: payload.amount });
        }),
      );
    }),
    catchError((error) => of(Actions.fetchExchangeAsync.failure(error.message))),
  );

export const epics = [getRatesEpic];
