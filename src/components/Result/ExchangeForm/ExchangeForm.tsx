import React, { memo , useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CurSelect from '../../../shared/components/CurSelect/CurSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Store
import { getOptions } from '../../../store/config/selectors';
import { getExchangeLoading, getFrom, getTo, getAmount } from '../../../store/exchange/selectors';
import { Actions } from '../../../store/exchange/actions';

import styles from './exchange.module.scss';

const ExchangeForm = memo(() => {
  const dispatch = useDispatch();
  const currencyOptions = useSelector(getOptions);
  const exchangeLoading = useSelector(getExchangeLoading);
  const from = useSelector(getFrom);
  const to = useSelector(getTo);
  const amount = useSelector(getAmount);

  const [exchangeError, setExchangeError] = useState('');

  const handleFromChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    dispatch(Actions.setFrom(value));
  };

  const handleToChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    dispatch(Actions.setTo(value));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch(Actions.setAmount(value));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const payload = {
      from,
      to,
      amount,
    };

    if(from === to) {
      setExchangeError('pick different currencies!!!');
      return;
    }

    dispatch(Actions.fetchExchangeAsync.request(payload));
    setExchangeError('');
  };

  return (
    <form className={styles.exchangeForm} onSubmit={handleSubmit}>
      <div className={styles.exchangeFormError}>{exchangeError}</div>
      <div className={styles.formContent}>
        <div className={styles.exchangeSelectContainer}>
          <CurSelect
            label={from}
            value={from}
            onChange={handleFromChange}
            currencyData={currencyOptions}
          />
        </div>
        <div className={styles.exchangeSelectContainer}>
          <CurSelect
            label={to}
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
        change
      </Button>
    </form>
  );
});

export default ExchangeForm;
