import { applyMiddleware, createStore, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { StateType } from 'typesafe-actions';

// OPTIONS FLOW
import {epics as confiEpics} from './config/epics';
import {reducer as config}  from './config/reducer';

// Exchange Flow
import { reducer as exchange } from './exchange/reducer';
import { epics as exchangeEpics } from './exchange/epics';

// History flow
import { reducer as history } from './history/reducer';
import { epics as historyEpics } from './history/epics';

const persistConfig = {
  key: 'root',
  storage,
};

const rootEpic = combineEpics(...confiEpics, ...exchangeEpics, ...historyEpics);

// Epics
const epicMiddleware = createEpicMiddleware();

// Reducers
const reducer = combineReducers({
  config,
  exchange,
  history,
});

const persistedReducer = persistReducer(persistConfig, reducer);

// export type RootActions = ActionType< >;

export type AppState = StateType<typeof reducer>;

export default (preloadedState = {}) => {
  const middlewares = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(persistedReducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  const persistor = persistStore(store);
  return { store, persistor };
};
