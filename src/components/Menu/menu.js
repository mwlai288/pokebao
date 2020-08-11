import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query SiteMenuQuery {
      site {
        siteMetadata {
          poke
          bao
          boba
        }
      }
    }
  `)

  return (
    <>
      <section className="menu">
        <h4 className="menu__title">Our Menu</h4>
        <img
          src="http://placekitten.com/400/300"
          alt="menu"
          className="menu__image"
        />
      </section>
      <section className="info">
        <article className="info__poke">
          <h3>Poké</h3>
          <p>{data.site.siteMetadata.poke}</p>
        </article>
        <article className="info__bao">
          <h3>Bao</h3>
          <p>{data.site.siteMetadata.bao}</p>
        </article>
        <article className="info__boba">
          <h3>Boba</h3>
          <p>{data.site.siteMetadata.boba}</p>
        </article>
      </section>
    </>
  )
}

export default Menu
