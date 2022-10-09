import React from 'react';
import { useParams } from "react-router-dom";

function Challenge() {
  const params = useParams();
  var challengeId = params.challengeId
  var accessToken = window.sessionStorage.getItem("lensAccessToken")

  return (
    <div class="container no-padding">
      <img src={require("../assets/images/UI/Confirmacion.png").default} alt="Background" />
    </div>
  );
}

export default Challenge;
