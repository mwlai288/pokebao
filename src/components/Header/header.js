import React, { useState } from "react"
import PropTypes from "prop-types"
import img from "../../images/PokeBoba.jpg"

const Header = ({ siteTitle }) => {
  const [isToggled, setIsToggled] = useState(false)
  const openClass = isToggled ? "open" : ""
  return (
    <header>
      <nav className="wrapper">
        <a href="/" className="wrapper__home">
          <img src={img} alt={siteTitle} className="wrapper__home--logo" />
        </a>
        <div onClick={() => setIsToggled(!isToggled)}>
          <div className={`wrapper__burger ${openClass}`}>
            <span></span>
          </div>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isToggled: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
