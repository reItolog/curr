import React, { useState, memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CurSelect from '../../../shared/components/CurSelect/CurSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Store
import { getOptions } from '../../../store/config/selectors';
import { getExchangeLoading } from '../../../store/exchange/selectors';
import { Actions } from '../../../store/exchange/actions';

import styles from './exchange.module.scss';

const ExchangeForm = memo(() => {
  const dispatch = useDispatch();
  const currencyOptions = useSelector(getOptions);
  const exchangeLoading = useSelector(getExchangeLoading);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState<number>(0);

  const handleFromChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setFrom(value);
  };

  const handleToChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setTo(value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAmount(value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const payload = {
      from,
      to,
      amount,
    };

    dispatch(Actions.fetchExchangeAsync.request(payload));
  };

  return (
    <form className={styles.exchangeForm} onSubmit={handleSubmit}>
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
      <Button variant='contained' color='primary' type='submit' disabled={exchangeLoading}>
        Primary
      </Button>
    </form>
  );
});

export default ExchangeForm;
