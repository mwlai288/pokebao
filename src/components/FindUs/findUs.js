import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import GoogleMap from "./googleMaps"
import {
  FaFacebookF,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa"
import ContactUs from "./contactUs"

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

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768)
  const updateMedia = () => {
    setDesktop(window.innerWidth > 768)
  }
  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  return (
    <section id="findUs">
      <div className="container">
        {isDesktop && <GoogleMap />}
        <div className="find-us">
          <div className="find-us__social">
            <h1>Follow us on Facebook & Instagram</h1>
            <div className="find-us__links">
              <a
                href="https://www.facebook.com/pokebobaviera/"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-icon"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/pokebobaviera/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="find-us__contact">
            <div>
              <FaPhone /> {data.site.siteMetadata.phone}
            </div>
            <div>
              <FaMailBulk /> {data.site.siteMetadata.email}
            </div>
          </div>

          <div className="find-us__location">
            {isDesktop ? (
              <GoogleMap />
            ) : (
              <>
                <FaMapMarkerAlt />
                <p className="find-us__email">
                  {data.site.siteMetadata.address}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindUs
