import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query SiteHeroQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <section>
      <div className="hero-container">
        <div className="headline">
          <div className="headline__container">
            <h3 className="headline__container--title">Welcome To</h3>
            <h1 className="headline__container--name">
              {data.site.siteMetadata.title}
            </h1>
            <p className="headline__container--options">Poké | Buns | Boba</p>
            <button>
              <a
                href="https://www.toasttab.com/pokebao-melbourne"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
