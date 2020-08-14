import React from "react"
import img from "../../images/PokeBoba.jpg"

const DesktopNav = ({ title }) => {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <a href="/" className="">
          <img src={img} alt={title} className="" />
        </a>
      </div>
      <div className="navigation__links">
        <a href="#welcome" className="">
          Welcome
        </a>

        <a href="#about" className="">
          About Us
        </a>

        <a href="#menu" className="">
          Menu
        </a>

        <a href="#gallery" className="">
          Gallery
        </a>

        <a href="#findUs" className="">
          Find Us
        </a>
      </div>
    </nav>
  )
}

export default DesktopNav
