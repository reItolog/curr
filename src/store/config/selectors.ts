import { createSelector } from 'reselect';
import { AppState } from '../index';

export const configState = (state: AppState) => state.config;

export const getOptions = createSelector(configState, (state) => state.options.data);

export const getOptionsLoading = createSelector(configState, (state) => state.options.loading);
