// import Link from 'next/link';
import styles from '../styles/hunt.module.css';
// import Header from '../components/header.js';
import React from 'react';

function Hunt() {

  return (
    <div>
      <div className={styles.container}>
          <div className={styles.hintContainer}>
              <p>"Hint here" : "Select a treasure to see more..."</p>
          </div>
          <div className={styles.mapContainer}>
              <p>Map component</p>
          </div>
          <a href="/#/leaderboard">
              <button className={styles.button}>Leaderboard</button>
          </a>
      </div>
    </div>
  );
}

export default Hunt;
