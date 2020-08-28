import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../../images/PokeBoba.png"

const About = () => {
  const data = useStaticQuery(graphql`
    query SiteAboutQuery {
      site {
        siteMetadata {
          title
          about
          story
        }
      }
    }
  `)

  return (
    <section id="about" tabIndex="0">
      <div className="container">
        <div className="about">
          <h1 className="title">About Us</h1>
          <article className="about__message">
            {data.site.siteMetadata.about}
          </article>
          <figure>
            <figcaption className="us">
              <h2 className="us__text--header">What do you get when </h2>
              <p className="us__text--body">{data.site.siteMetadata.story}</p>
            </figcaption>
            <img
              src={logo}
              alt={data.site.siteMetadata.title}
              className="us__image"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  about: PropTypes.object,
}

export default About
