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
          bootstrapURLKeys={{ key: "AIzaSyBS6_S2x-HYTRCnnsSj_wO-L-dV6-LL8fs" }}
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
