import React from 'react';
import MapComponent from "../components/MapComponent";
import "../assets/styles/style.css";
import Map, {Popup, GeolocateControl, Marker ,NavigationControl, FullscreenControl } from "react-map-gl";


function Hunt() {

  return (
    <div className='fondo'>
      <div className='row w-30 mx-auto pt-2'>
        <img src={require("../assets/images/UI/HintHere.png").default} className="img-fluid" alt="Hint here" />
      </div>
      <div className='row pt-2'>
        <div className='col-12'>
          <h3 className='text-center'>Your badges</h3>
        </div>
      </div>
      <div className='row w-60 mx-auto'>
        <img src={require("../assets/images/UI/iconos.png").default} className="img-fluid" alt="Iconos" />
      </div>
      <div className='row w-90 mx-auto'>
        <MapComponent />
      </div>
      <div className='row w-40 mx-auto pt-2'>
        <a href="/#/leaderboard">
          <img src={require("../assets/images/UI/Leaderboard.png").default} className="img-fluid" alt="Leaderboards" />
        </a>
      </div>
    </div>
  );
}

export default Hunt;
