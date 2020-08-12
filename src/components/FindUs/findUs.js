import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GoogleMap from "./googleMaps"
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"

const FindUs = () => {
  const data = useStaticQuery(graphql`
    query SiteContactQuery {
      site {
        siteMetadata {
          phone
          address
        }
      }
    }
  `)

  return (
    <section className="find">
      <div className="find__map-container">
        <GoogleMap />
      </div>
      <div className="find__links">
        <h1>Follow Us</h1>
        <span>
          <a
            href="https://www.facebook.com/pokebobaviera/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="facebook-icon" />
          </a>
          {/* <a
            href="http://instagram.com/poke_bao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a> */}
        </span>
      </div>
      <div className="find__contact">
        <p>
          <FaPhone /> {data.site.siteMetadata.phone}
        </p>
        <p>
          <FaMapMarkerAlt /> {data.site.siteMetadata.address}
        </p>
      </div>
      {/* Netlify Form */}
      <div className="find__forms">
        <p>Email</p>
        {/* Netlify Form */}
      </div>
    </section>
  )
}

export default FindUs
