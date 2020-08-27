import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
const MapContainer = props => {
  const style = {
    width: "85%",
    height: "350px",
  }

  return (
    <section id="map">
      <Map
        google={props.google}
        zoom={20}
        style={style}
        initialCenter={{ lat: 28.243607, lng: -80.726559 }}
      >
        <Marker position={{ lat: 28.243607, lng: -80.726559 }} />
      </Map>
    </section>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer)
