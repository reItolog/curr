import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { getExchangeAmount } from '../../../store/exchange/selectors';

import styles from './exchangeResult.module.scss';

const ExchangeResult = memo(() => {
  const amount = useSelector(getExchangeAmount);
  return (
    <div className={styles.exchangeResult}>
      <TextField value={amount || 0} label='---' variant='outlined' disabled={true} />
    </div>
  );
});

export default ExchangeResult;
