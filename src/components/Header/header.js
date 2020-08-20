import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"

const Header = ({ siteTitle }) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleResize = () => setWidth(window.innerWidth > 768)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <header>
      <nav className="wrapper">
        <div className="container">
          {width ? (
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
