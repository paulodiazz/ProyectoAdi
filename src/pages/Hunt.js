import React from 'react';
import MapComponent from "../components/MapComponent";
import "../assets/styles/style.css";

function Hunt() {

  return (
    <div class="container no-padding">
      <img src={require("../assets/images/UI/Fondo.png").default} alt="Background" />
      <div className="centered">
        <img src={require("../assets/images/UI/HintHere.png").default} className="imf-fluid" alt="Hint here" />
        <p className='w-75 mx-auto my-0 text-white'>Select a treasure to see more</p>
        <img src={require("../assets/images/UI/iconos.png").default} className="imf-fluid" alt="Icons" />
        <MapComponent />
        <a href="/#/leaderboard">
          <img src={require("../assets/images/UI/Leaderboard.png").default} alt="Leaderboards" />
        </a>
      </div>
    </div>
    // <div>
    //   <div className={styles.container}>
    //       <div className={styles.hintContainer}>
    //           <p>"Hint here" : "Select a treasure to see more..."</p>
    //       </div>
    //       <div className={styles.mapContainer}>
    //           <p>Map component</p>
    //       </div>
    //       <a href="/#/leaderboard">
    //           <button className={styles.button}>Leaderboard</button>
    //       </a>
    //   </div>
    // </div>
  );
}

export default Hunt;
