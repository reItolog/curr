import React, { memo } from 'react';

import TextField from '@material-ui/core/TextField';

import styles from './exchangeResult.module.scss';

const ExchangeResult = memo(() => {
  return (
    <div className={styles.exchangeResult}>
      <TextField label='---' variant='outlined' disabled={true} />
    </div>
  );
});

export default ExchangeResult;
