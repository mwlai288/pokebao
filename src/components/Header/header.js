import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="wrapper">
      <a href="#!" className="wrapper__home">
        Poké Bao
      </a>
      <div className="wrapper__burger" />
      <div className="wrapper__links">
        <a href="#welcome" className="wrapper__links--welcome">
          Welcome
        </a>
        <a href="#about" className="wrapper__links--about">
          About Us
        </a>
        <a href="#menu" className="wrapper__links--menu">
          Menu
        </a>
        <a href="#gallery" className="wrapper__links--gallery">
          Gallery
        </a>
        <a href="#findUs" className="wrapper__links--findus">
          Find Us
        </a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
