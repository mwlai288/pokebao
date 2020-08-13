import React from "react"
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
      <section id="menu">
        <div className="container">
          <div className="menu">
            <h4 className="title">Menu</h4>
            <img
              src="http://placekitten.com/400/300"
              alt="menu"
              className="menu__image"
            />
            <section className="info">
              <article>
                <h3 className="menu__heading">Poké</h3>
                <p>{data.site.siteMetadata.poke}</p>
              </article>
              <article >
                <h3 className="menu__heading">Bao</h3>
                <p>{data.site.siteMetadata.bao}</p>
              </article>
              <article >
                <h3 className="menu__heading">Boba</h3>
                <p>{data.site.siteMetadata.boba}</p>
              </article>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
