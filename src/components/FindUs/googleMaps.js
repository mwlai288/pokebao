import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const MapContainer = props => {
  const mapStyles = {
    width: "100%",
    height: "50%",
  }

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  }

  const markerClick = () => {
    console.log("i clicked the marker")
  }

  return (
    <>
      <Map
        google={props.google}
        zoom={20}
        style={mapStyles}
        // containerStyle={containerStyle}
        initialCenter={{ lat: 28.243607, lng: -80.726559 }}
        // visible={false}
      >
        <Marker
          position={{ lat: 28.243607, lng: -80.726559 }}
          onClick={markerClick}
        />
      </Map>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer)
