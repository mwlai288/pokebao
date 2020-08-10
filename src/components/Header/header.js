import React, { useState } from "react"
import PropTypes from "prop-types"
import img from "../../images/PokeBoba.jpg"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"

const Header = ({ siteTitle }) => {
  let width = window.innerWidth
  return (
    <header>
      <nav className="wrapper">
        <a href="/" className="wrapper__home">
          <img src={img} alt={siteTitle} className="wrapper__home--logo" />
        </a>

        {width >= 768 ? <DesktopNav /> : <MobileNav />}
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isToggled: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
