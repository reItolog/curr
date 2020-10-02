import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './router/AppRouter';

import { Actions } from './store/config';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.optionsActions.action());
  }, [dispatch]);

  return <AppRouter />;
};

export default App;
