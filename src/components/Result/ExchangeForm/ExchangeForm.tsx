import React, { useState, memo } from 'react';

import { useSelector } from 'react-redux';

import CurSelect from '../../../shared/components/CurSelect/CurSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Store
import { getOptions } from '../../../store/config/selectors';

import styles from './exchange.module.scss';

const ExchangeForm = memo(() => {
  const currencyOptions = useSelector(getOptions);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState<string>('');

  const handleFromChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setFrom(value);
  };

  const handleToChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setTo(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
  };

  return (
    <form className={styles.exchangeForm}>
      <div className={styles.formContent}>
        <div className={styles.exchangeSelectContainer}>
          <CurSelect
            label='From'
            value={from}
            onChange={handleFromChange}
            currencyData={currencyOptions}
          />
        </div>
        <div className={styles.exchangeSelectContainer}>
          <CurSelect
            label='To'
            value={to}
            onChange={handleToChange}
            currencyData={currencyOptions}
          />
        </div>

        <div className={styles.amountInput}>
          <TextField
            value={amount}
            onChange={handleAmountChange}
            label='Amount'
            variant='outlined'
          />
        </div>
      </div>
      <Button variant='contained' color='primary'>
        Primary
      </Button>
    </form>
  );
});

export default ExchangeForm;
