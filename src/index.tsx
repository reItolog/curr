import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './shared/styles/root.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createStore from './store';

const { store, persistor } = createStore();

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>,
  document.getElementById('root'),
);

serviceWorker.unregister();
