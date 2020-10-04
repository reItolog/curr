import { Epic } from 'redux-observable';

import { default as optionsService } from '../service';

import { asyncActionHandlerFactory } from '../../utils/async-action-helper';

const { effect, reducer, ActionTypes, Actions } = asyncActionHandlerFactory<
  undefined,
  string[],
  Error
>('FETCH_OPTIONS');

const epic: Epic = (actions$) => effect(actions$, () => optionsService.fetchOptions());

export { epic, reducer, Actions, ActionTypes };
