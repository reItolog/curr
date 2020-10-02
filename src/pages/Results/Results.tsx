import React, { memo } from 'react';

import ExchangeForm from '../../components/Result/ExchangeForm/ExchangeForm';
import ExchangeResult from '../../components/Result/ExchangeResult/ExchangeResult';

import styles from './results.module.scss';

const Results = memo(() => {
  return (
    <main className='centred'>
      <section className={`flex-centred ${styles.resultsContainer}`}>
        <ExchangeForm />
        <ExchangeResult />
      </section>
    </main>
  );
});

export default Results;
