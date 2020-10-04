import { combineReducers } from 'redux';

import { ActionType, StateType } from 'typesafe-actions';

import {
  reducer as optionsReducer,
  Actions as optionsActions,
  epic as optionsEpic,
  ActionTypes as optionsActionType,
} from './nested/options';

export const Actions = {
  optionsActions,
};

export const ActionTypes = {
  optionsActionType,
};

export const reducer = combineReducers({
  options: optionsReducer,
});

export type ActionTypeUnion = ActionType<typeof reducer>;

export const epics = [optionsEpic];

export type State = StateType<typeof reducer>;
