import React from 'react';

import styles from './score.module.sass'

const Score = ({score}) => {
  return (
    <div className={styles['row']}>
      <div className={styles['badge']}>
        <img src={`assets/images/${score.icon}.svg`} alt="icon"/>
        <b>{score.category}</b>
      </div>
      <p><b>{score.value}</b> / 100</p>
    </div>
  );
};

export default Score;