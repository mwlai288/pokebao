import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  FaFacebookF,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa"
// import ContactUs from "./contactUs"
import GoogleMaps from "./googleMaps"
import { useWindowSize } from "../../hooks/Hooks"

const FindUs = () => {
  const data = useStaticQuery(graphql`
    query SiteContactQuery {
      site {
        siteMetadata {
          phone
          address
          email
        }
      }
    }
  `)

  const isDesktop = useWindowSize()

  return (
    <section id="findUs">
      <div className="container">
        <div className="find-us">
          <div className="find-us__social">
            <span>
              <a
                href="https://www.facebook.com/pokebobaviera/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="facebook-icon" />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/pokebobaviera/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="instagram-icon" />
              </a>
            </span>
          </div>
        </div>
        <div className="find-us__contact">
          <h4>Contact Us</h4>
          <div>
            <FaPhone /> {data.site.siteMetadata.phone}
          </div>
          {/* <div>
            <FaMailBulk />
            <a
              href="mailto:{data.site.siteMetadata.email}"
              className="find-us__email"
            >
              Email Us
            </a>
          </div> */}
        </div>
        <div className="find-us__location">
          {isDesktop.width > 768 ? (
            <GoogleMaps />
          ) : (
            <>
              <FaMapMarkerAlt />
              <p className="find-us__address">
                {data.site.siteMetadata.address}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default FindUs
