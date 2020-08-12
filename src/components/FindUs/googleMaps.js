import React, { useState } from "react"
import GoogleMapReact from "google-map-react"
import Marker from "./Marker"

const GoogleMap = props => {
  const isClient = typeof window !== "undefined"
  const [center, setCenter] = useState({ lat: 28.243607, lng: -80.726559 })
  const [zoom, setZoom] = useState(18)
  return (
    <div className="find__map">
      {isClient && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={center.lat}
            lng={center.lng}
            text="Marker"
            color="blue"
          />
        </GoogleMapReact>
      )}
    </div>
  )
}

export default GoogleMap
