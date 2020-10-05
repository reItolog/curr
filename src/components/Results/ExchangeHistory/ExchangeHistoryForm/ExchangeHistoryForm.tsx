import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import HistoryIcon from '@material-ui/icons/History';
import Button from '@material-ui/core/Button';

// Store
import { Actions } from '../../../../store/history/actions';
import { getHistoryStartAt, getHistoryEndAt } from '../../../../store/history/selectors';

import DatePicker from '../../../../shared/components/DatePicker/DatePicker';

import styles from './exchangeHistoryForm.module.scss';

const ExchangeHistoryForm = memo(() => {
  const dispatch = useDispatch();
  const startAt = useSelector(getHistoryStartAt);
  const endAt = useSelector(getHistoryEndAt);

  const handleSetStartAt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;

    dispatch(Actions.setStartAt(value));
  };

  const handleSetEndAt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;

    dispatch(Actions.setEndAt(value));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(Actions.fetchHistoryAsync.request());
  };

  return (
    <form className={styles.exchangeHistoryForm} onSubmit={handleSubmit}>
      <div className={styles.exchangeHistoryFormFields}>
        <DatePicker value={startAt} label='start at' dateChange={handleSetStartAt} />
        <DatePicker value={endAt} label='end at' dateChange={handleSetEndAt} />
      </div>

      <Button variant='contained' color='primary' type='submit'>
        <HistoryIcon />
      </Button>
    </form>
  );
});

export default ExchangeHistoryForm;
