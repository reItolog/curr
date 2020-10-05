import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { getHistoryRates, getHistoryError } from '../../../../store/history/selectors';

import { HistoryRates } from '../../../../shared/interfaces/history';

import RatesList from './RatesList/RatesList';

const ExchangeHistoryResult = memo(() => {
  const ratesHistory: HistoryRates[] | Array<any> = useSelector(getHistoryRates);
  const error = useSelector(getHistoryError);

  if (error) return <h1>{error}</h1>;

  return <RatesList data={ratesHistory} />;
});

export default ExchangeHistoryResult;
