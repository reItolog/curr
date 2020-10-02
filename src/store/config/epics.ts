import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import {   mergeMap, map } from 'rxjs/operators';

import {default as optionsService } from './service';
import { Actions, ActionTypes } from './actions';

const fetchFlightsEpic: Epic = (action$) =>
  action$.pipe(
    ofType(
      ActionTypes.FETCH_OPTIONS_REQUEST
    ),
    mergeMap(() => {

      return optionsService.fetchOptions().pipe(
        map((result) => {
          return Actions.fetchOptionsAsync.success(result);
        }),
      );
    }),

  );

export const epics = [fetchFlightsEpic];