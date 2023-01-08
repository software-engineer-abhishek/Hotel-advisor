import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const GoogleMaps = withScriptjs(
  withGoogleMap((props) => {


    const onMarkerDragEnd = (e) => {
      let newLet = e.latLng.lat()
      let newLng = e.latLng.lng()
      console.log({newLet})
    }

    return (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 28.6304, lng: 77.2177 }}>
        {props.isMarkerShown && (
          <Marker draggable 
          onDragEnd={onMarkerDragEnd} position={{ lat: 28.6304, lng: 77.2177 }}>
            <InfoWindow>
              <div>Hi Info window from Abhishek</div>
            </InfoWindow>
          </Marker>
        )}
      </GoogleMap>
    );
  })
);

export default GoogleMaps;
