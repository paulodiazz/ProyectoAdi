import React from 'react';
import styles from '../styles/challenge.module.css'
import { useParams } from "react-router-dom";

function Challenge() {
  const params = useParams();
  var challengeId = params.challengeId
  var accessToken = window.sessionStorage.getItem("lensAccessToken")

  return (
    <div className={styles.container}>
      <button className={styles.button}>solve challenge #{challengeId}!</button>
    
      <a href='/#/'>
        <button className={styles.button}>Go back home!</button>
      </a>
    
    </div>
  );
}

export default Challenge;
