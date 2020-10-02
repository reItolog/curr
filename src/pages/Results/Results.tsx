import React, { memo } from 'react';

import ExchangeForm from '../../components/Result/ExchangeForm/ExchangeForm'

import styles from './results.module.scss';

const Results = memo(() => {

  return (
    <main className='centred'>
      <section className={`flex-centred ${styles.resultsContainer}`}>
        <ExchangeForm/>
      </section>
    </main>
  );
});

export default Results;
