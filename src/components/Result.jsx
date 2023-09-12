import React from 'react';

import styles from './result.module.sass'
import data from "../data/scores.json";

function getAverage(data) {
  let total = 0
  for (const score of data) {
    total += score.value
  }
  return Math.floor(total / data.length)
}

function getPraise(value) {
  if (value < 50)
    return "Poor"
  if (value < 70)
    return "Okay"
  if (value < 80)
    return "Great"
  if (value < 90)
    return "Awesome"
  return "Excellent"
}

const scoreValue = getAverage(data)

const score = {
  value: scoreValue,
  praise: getPraise(scoreValue),
  desc: "You scored higher than 65% of the people who have taken the tests."
}

const Result = () => {
  return (
    <section className={styles['result']}>
      <h3 className={styles['title']}>Your Result</h3>
      <div className={styles['circle']}>
        <h1>{score.value}</h1>
        <p>of 100</p>
      </div>
      <b>{score.praise}</b>
      <p className={styles['info']}> {score.desc} </p>
    </section>
  );
};

export default Result;