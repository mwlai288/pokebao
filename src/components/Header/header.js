import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="wrapper">
      <a href="#!" className="wrapper__home">
        Poké Bao
      </a>
      <div className="wrapper__burger">
        <span></span>
      </div>
      <div className="wrapper__links">
        <ul>
          <li>
            <a href="#welcome" className="wrapper__links--welcome">
              Welcome
            </a>
          </li>
          <li>
            <a href="#about" className="wrapper__links--about">
              About Us
            </a>
          </li>
          <li>
            <a href="#menu" className="wrapper__links--menu">
              Menu
            </a>
          </li>
          <li>
            <a href="#gallery" className="wrapper__links--gallery">
              Gallery
            </a>
          </li>
          <li>
            <a href="#findUs" className="wrapper__links--findus">
              Find Us
            </a>
          </li>
        </ul>
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
