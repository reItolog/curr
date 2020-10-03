import React, { memo } from 'react';

import ExchangeForm from '../../components/Result/ExchangeForm/ExchangeForm';
import ExchangeResult from '../../components/Result/ExchangeResult/ExchangeResult';
import ExchangeHistory from '../../components/Result/ExchangeHistory/ExchangeHistory';

import styles from './results.module.scss';

const Results = memo(() => {
  return (
    <main className='centred'>
      <section className={`flex-centred ${styles.resultsContainer}`}>
        <div className={styles.resultsCurrencyContainer}>
          <ExchangeForm />
          <ExchangeResult />
        </div>

        <ExchangeHistory />
      </section>
    </main>
  );
});

export default Results;
