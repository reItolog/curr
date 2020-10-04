import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './router/AppRouter';

import { Actions } from './store/config';

const App: React.FC = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.optionsActions.action());
  }, [dispatch]);

  return <AppRouter />;
});

export default App;
