import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { getHistoryRates } from '../../../../store/history/selectors';

import { HistoryRates } from '../../../../shared/interfaces/history';

import RatesList from './RatesList/RatesList';

const ExchangeHistoryResult = memo(() => {
  const ratesHistory: HistoryRates[] | Array<any> = useSelector(getHistoryRates);

  return <RatesList data={ratesHistory} />;
});

export default ExchangeHistoryResult;
