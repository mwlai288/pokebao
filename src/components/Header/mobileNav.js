import React, { useState } from "react"
import img from "../../images/PokeBoba.jpg"
import { useSpring, animated } from "react-spring"

const MobileNav = ({ title }) => {
  const [isToggled, setIsToggled] = useState(false)

  const navAnimation = useSpring({
    transform: isToggled ? `translate3d(0, 0, 0)` : `translate3d(0, -100%, 0)`,
  })

  return (
    <>
      <div className="mobile-navigation">
        <a href="/">
          <img src={img} alt={title} className="mobile-navigation__logo" />
        </a>

        <div
          className="mobile-navigation__burger"
          onClick={() => {
            setIsToggled(!isToggled)
          }}
        >
          <span></span>
        </div>
      </div>

      <animated.div className="nav-wrapper" style={navAnimation}>
        <nav className="nav-wrapper__container">
          <a href="#">Welcome</a>
          <a
            href="#about"
            onClick={() => {
              setIsToggled(!isToggled)
            }}
          >
            About Us
          </a>
          <a
            href="#menu"
            onClick={() => {
              setIsToggled(!isToggled)
            }}
          >
            Menu
          </a>
          <a
            href="#gallery"
            onClick={() => {
              setIsToggled(!isToggled)
            }}
          >
            Gallery
          </a>
          <a
            href="#findUs"
            onClick={() => {
              setIsToggled(!isToggled)
            }}
          >
            Find Us
          </a>
        </nav>
      </animated.div>
    </>
  )
}

export default MobileNav
