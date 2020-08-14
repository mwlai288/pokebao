import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"

const Header = ({ siteTitle }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768)
  const updateMedia = () => {
    setDesktop(window.innerWidth > 768)
  }
  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  return (
    <header>
      <nav className="wrapper">
        <div className="container">
          {isDesktop ? (
            <DesktopNav title={siteTitle} />
          ) : (
            <MobileNav title={siteTitle} />
          )}
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
