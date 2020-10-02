import { createSelector } from 'reselect';
import { AppState } from '../index';

export const configState = (state: AppState) => state.options;

export const getOptions = createSelector(configState, (state) => state.items);