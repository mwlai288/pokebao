// import React from "react"
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

// const MapContainer = props => {
//   const style = {
//     width: "85%",
//     height: "350px",
//   }

//   return (
//     <section id="map">
//       <Map
//         google={props.google}
//         zoom={20}
//         style={style}
//         initialCenter={{ lat: 28.243607, lng: -80.726559 }}
//       >
//         <Marker position={{ lat: 28.243607, lng: -80.726559 }} />
//       </Map>
//     </section>
//   )
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.GOOGLE_MAPS_API_KEY,
// })(MapContainer)
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GoogleMaps = () => {
  const data = useStaticQuery(graphql`
    query StaticMapQuery {
      staticMap {
        childFile {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Img fixed={data.staticMap.childFile.childImageSharp.fixed} />
    </>
  )
}

export default GoogleMaps
