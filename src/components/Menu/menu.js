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
    <section id="menu">
      <div className="container">
        <div className="menu">
          <h4 className="title">Menu</h4>
          {/* <input type="checkbox" id="zoomCheck" />
          <label htmlFor="zoomCheck"> */}
          <Img
            fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            className="img"
            role="presentation"
          />
          <Img
            fluid={data.allFile.edges[1].node.childImageSharp.fluid}
            className="img"
            role="presentation"
          />
          {/* </label> */}
          <section className="info">
            <div className="info__options">
              <h3 className="menu__heading">Poké</h3>
              <p>{data.site.siteMetadata.poke}</p>
            </div>
            <div className="info__options">
              <h3 className="menu__heading">Bao</h3>
              <p>{data.site.siteMetadata.bao}</p>
            </div>
            <div className="info__options">
              <h3 className="menu__heading">Boba</h3>
              <p>{data.site.siteMetadata.boba}</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Menu
