import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { getSumExchangeAmount } from '../../../store/exchange/selectors';

import styles from './exchangeResult.module.scss';

const ExchangeResult = memo(() => {
  const amount = useSelector(getSumExchangeAmount);
  return (
    <div className={styles.exchangeResult}>
      <TextField value={amount} label='---' variant='outlined' disabled={true} />
    </div>
  );
});

export default ExchangeResult;
