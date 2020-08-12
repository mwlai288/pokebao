import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const MobileNav = () => {
  const [isToggled, setIsToggled] = useState(false)

  const navAnimation = useSpring({
    transform: isToggled ? `translate3d(0, 0, 0)` : `translate3d(0, -100%, 0)`,
  })
  return (
    <>
      <div
        className="wrapper__burger"
        onClick={() => {
          setIsToggled(!isToggled)
        }}
      >
        <span></span>
      </div>

      <animated.div className="nav-wrapper" style={navAnimation}>
        <nav>
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
            Find
          </a>
        </nav>
      </animated.div>
    </>
  )
}

export default MobileNav
