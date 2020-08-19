import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
// import { useStaticQuery, graphql } from "gatsby"
const MapContainer = props => {
  // const data = useStaticQuery(graphql`
  //   query SiteLocationQuery {
  //     site {
  //       siteMetadata {
  //         lat
  //         lng
  //
  //     }
  //   }
  // `)

  const style = {
    width: "85%",
    height: "350px",
    // marginLeft: "60rem",
    // marginTop: "-25.8rem",
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
