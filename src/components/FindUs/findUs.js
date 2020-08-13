import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import GoogleMap from "./googleMaps"
import { FaFacebookF, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import ContactUs from "./contactUs"

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
          <ContactUs />
          {/* Netlify Form */}
        </div>
      </div>
    </section>
  )
}

export default FindUs
