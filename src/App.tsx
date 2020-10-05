import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import AppRouter from './router/AppRouter';
import ErrorBoundary from './shared/components/ErrorBoundary/ErrorBoundary';

import { Actions } from './store/config/actions';

const App: React.FC = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.fetchOptionsAsync.request());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );

});

export default App;
