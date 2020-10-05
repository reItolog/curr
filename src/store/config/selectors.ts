import { createSelector } from 'reselect';
import { AppState } from '../index';

export const configState = (state: AppState) => state.config;

export const getOptions = createSelector(configState, (state) => state.items);

export const getOptionsLoading = createSelector(configState, (state) => state.loading);
