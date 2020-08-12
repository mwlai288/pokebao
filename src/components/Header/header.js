import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import img from "../../images/PokeBoba.jpg"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"

const Header = ({ siteTitle }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 768)
  const updateMedia = () => {
    setDesktop(window.innerWidth >= 768)
  }
  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  return (
    <header>
      <nav className="wrapper">
        <a href="/" className="wrapper__home">
          <img src={img} alt={siteTitle} className="wrapper__home--logo" />
        </a>

        {isDesktop ? <DesktopNav /> : <MobileNav />}
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
