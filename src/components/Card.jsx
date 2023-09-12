import React from 'react';
import Result from "./Result";
import Summary from "./Summary";

import styles from './card.module.sass'

const Card = () => {
  return (
    <div className={styles['card-container']}>
      <Result />
      <Summary/>
    </div>
  );
};

export default Card;