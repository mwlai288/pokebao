import React, { useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import DesktopNav from "./desktopNav"
import MobileNav from "./mobileNav"
import { useWindowSize } from "../../hooks/Hooks"
const Header = ({ siteTitle }) => {
  // const [width, setWidth] = useState()

  // useLayoutEffect(() => {
  //   if (typeof window === "undefined") return
  //   const handleResize = () => setWidth(window.innerWidth > 768)
  //   window.addEventListener("resize", handleResize)
  //   return () => {
  //     window.removeEventListener("resize", handleResize)
  //   }
  // })

  const isDesktop = useWindowSize()
  console.log(isDesktop)
  return (
    <header>
      <nav className="wrapper">
        <div className="container">
          {isDesktop.width > 768 ? (
            <DesktopNav title={siteTitle} />
          ) : (
            <MobileNav title={siteTitle} />
          )}
        </div>
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
