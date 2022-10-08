import React from 'react';
import styles from '../styles/home.module.css'
// import { useNetwork } from 'wagmi'

function Home() {
  // const { chain } = useNetwork()
  // var newPostBlock = ""
  // if (chain && chain.id) {
  //   newPostBlock = <div><NewPost /></div>
  // }
  return (
    <div className={styles.container}>
      <p>Welcome to Dhorado!</p>
      <div className={styles.introText}>
        <p>Step 1: Connect your Wallet and Lens profile</p>
        <p>Step 2: Get out and find some treasures!</p>
        <p>Step 3: Brag about it to your friends!</p>
      </div>
    
      <a href='/#/hunt'>
        <button className={styles.button}>Start hunting!</button>
      </a>
    
    </div>
  );
}

export default Home;
