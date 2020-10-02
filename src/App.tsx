import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AppRouter from './router/AppRouter';

import {Actions} from './store/config/actions';
import {AppState} from './store';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.fetchOptionsAsync.request());
  }, [dispatch]);

  const isLoading = useSelector((state: AppState) => !state.options.items.length);

  return !isLoading ? <AppRouter /> : <h1>Loading...</h1>;
};

export default App;
