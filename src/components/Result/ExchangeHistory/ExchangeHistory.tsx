import React, { memo } from 'react';

import Paper from '@material-ui/core/Paper';
import ExchangeHistoryForm from './ExchangeHistoryForm/ExchangeHistoryForm';
import ExchangeHistoryResult from './ExchangeHistoryResult/ExchangeHistoryResult';

import styles from './exchangeHistory.module.scss';

const ExchangeHistory = memo(() => {
  return (
    <Paper className={styles.exchangeHistory}>
      <h2>history</h2>
      <ExchangeHistoryForm />

      <ExchangeHistoryResult />
    </Paper>
  );
});
export default ExchangeHistory;
