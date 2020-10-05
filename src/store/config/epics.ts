import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';

import { default as optionsService } from './service';
import { Actions, ActionTypes } from './actions';

import { ActionTypes as ExchangeActionsType } from '../exchange/actions';

const fetchOptionsEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(
      ActionTypes.FETCH_OPTIONS_REQUEST
    ),
    mergeMap(() => {
      const base = state$.value.config.base;
      return optionsService.fetchOptions(base).pipe(
        map((result) => {
          return Actions.fetchOptionsAsync.success( result);
        }),
      );
    }),
    catchError((e) => of(Actions.fetchOptionsAsync.failure(e.message)))
  );


const setBaseEpic: Epic = (action$) =>
  action$.pipe(
    ofType(
      ExchangeActionsType.SET_FROM
    ),
    switchMap(({ payload }) => {
      return of(Actions.setBase(payload),Actions.fetchOptionsAsync.request());
    }),
  );
export const epics = [fetchOptionsEpic, setBaseEpic];