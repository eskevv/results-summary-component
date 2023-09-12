import React from 'react';
import Score from "./Score";

import styles from './summary.module.sass'
import scores from '../data/scores.json'

const Summary = () => {
  return (
    <section className={styles['summary']}>
      <h3 className={styles['title']}>Summary</h3>
      <div className={styles['rows']}>
        {scores.map((score) => (<Score score={score}/>))}
      </div>
      <button className={styles['btn']}>Continue</button>
    </section>
  );
};

export default Summary;
