import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {Popup, GeolocateControl, Marker ,NavigationControl, FullscreenControl } from "react-map-gl";
import { React, useState, useContext } from 'react';
import geoJson from "./chicago-parks.json";

const renderMarkers = (_markers, setTitle, setDescription, setIsFound) => {
  return(_markers.map(marker=>{
    if(marker.properties.isFound=="True"){
      return(
        <Marker
          longitude={marker.geometry.coordinates[0]}
          latitude={marker.geometry.coordinates[1]}
          color={"#00FF00"}
          clickTolerance={true}
          onClick={() => {
            setTitle(marker.properties.title);
            setDescription(marker.properties.description);
            setIsFound(marker.properties.isFound);
            console.log("Click");
          }}
        >
    
        </Marker>)
      }
      else{return(
        <Marker
          longitude={marker.geometry.coordinates[0]}
          latitude={marker.geometry.coordinates[1]}
          color={"#FF0000"}
          clickTolerance={true}
          onClick={() => {
            setTitle(marker.properties.title);
            setDescription(marker.properties.description);
            setIsFound(marker.properties.isFound);
            console.log("Click");
          }}
          >
        </Marker>
      )
    }
  }))
}

function MapComponent() {
  const [lng, setLng] = useState(-87.637596);
  const [lat, setLat] =useState(41.940403);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFound, setIsFound] = useState(false);

  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1IjoicGF1bG9kaWF6IiwiYSI6ImNsOHo2aWdhZzAwNDEzbmwxdjhjcHQyZnoifQ.Gb-9D9534fspbPaPHqNSeA"
        style={{
          width: '400px',
          height: '50vh',
          borderRadius: "15px"
        }}
        initialViewState= {{
          longitude: lng,
          latitude: lat,
          zoom: 10
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        interactiveLayerIds={'click'}
      >
        {renderMarkers(geoJson.features, setTitle, setDescription, setIsFound)}

        <NavigationControl position="bottom-right"/>
        <FullscreenControl/>
        <GeolocateControl/>
      </Map>
      <div>
        <h1 className='text-center pt-3'>Select a treasure to see more</h1>
        <h4 className='text-center'>
          {title}
        </h4>
        <h4 className='text-center'>
          {description}
        </h4>
      </div>
    </>
  );
}

export default MapComponent;