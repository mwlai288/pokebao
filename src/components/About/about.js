import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../../images/PokeBoba.jpg"

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
    <section id="about">
      <div className="container">
        <div className="about">
          <h3 className="title">About Us</h3>
          <article className="about__message">
            {data.site.siteMetadata.about}
          </article>
          <figure>
            <figcaption className="us">
              <h3 className="us__text--header">What do you get when </h3>
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
