import React, { memo } from 'react';

import styles from './exchangeHistory.module.scss';

const ExchangeHistory = memo(() => {
  return (
    <div className={styles.exchangeHistory}>
      <h2>history</h2>
    </div>
  );
});
export default ExchangeHistory;
