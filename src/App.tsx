import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Store
import { getOptionsLoading } from './store/config/selectors';

import AppRouter from './router/AppRouter';
import Loader from './shared/UI/Loader/Loader';

import { Actions } from './store/config';

const App: React.FC = memo(() => {
  const dispatch = useDispatch();
  const isOptionsLoading = useSelector(getOptionsLoading);

  useEffect(() => {
    dispatch(Actions.optionsActions.action());
  }, [dispatch]);

  if (isOptionsLoading) return <Loader />;

  return <AppRouter />;
});

export default App;
