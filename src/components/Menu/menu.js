import React from "react"
import Img from "gatsby-image"
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
      allFile(filter: { relativePath: { regex: "/men/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="menu" tabIndex="0">
      <div className="container">
        <div className="menu">
          <h1 className="title">Menu</h1>
          {/* <input type="checkbox" id="zoomCheck" />
          <label htmlFor="zoomCheck"> */}
          <Img
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            className="img"
            role="presentation"
            alt="menu1"
          />
          <Img
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
            className="img"
            role="presentation"
            alt="menu2"
          />
          {/* </label> */}
          <section className="info" tabIndex="0">
            <div className="info__options">
              <h2 className="menu__heading">Poké</h2>
              <p>{data.site.siteMetadata.poke}</p>
            </div>
            <div className="info__options">
              <h2 className="menu__heading">Bao</h2>
              <p>{data.site.siteMetadata.bao}</p>
            </div>
            <div className="info__options">
              <h2 className="menu__heading">Boba</h2>
              <p>{data.site.siteMetadata.boba}</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Menu
