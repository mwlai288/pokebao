import React from "react"

const DesktopNav = () => {
  return (
    <nav className="wrapper__links">
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
    </nav>
  )
}

export default DesktopNav
