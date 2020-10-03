import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

// Store
import { Actions } from '../../../store/history/actions';

import DatePicker from '../../../shared/components/DatePicker/DatePicker';

import styles from './exchangeHistory.module.scss';

const ExchangeHistory = memo(() => {
  const dispatch = useDispatch();

  const handleSetStartAt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;

    dispatch(Actions.setStartAt(value));
  };

  return (
    <div className={styles.exchangeHistory}>
      <h2>history</h2>
      <DatePicker label='start at' dateChange={handleSetStartAt} />
    </div>
  );
});
export default ExchangeHistory;
