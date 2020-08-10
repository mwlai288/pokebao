import React from "react"

const DesktopNav = () => {
  return (
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
  )
}

export default DesktopNav
