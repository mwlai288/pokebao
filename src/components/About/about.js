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
    <section id="about" className="about">
      <h3 className="about__title">About Us</h3>
      <article className="about__message">
        {data.site.siteMetadata.about}
      </article>
      <figure className="us">
        <figcaption className="us__text">
          <div className="us__text--header">What do you get when...</div>
          {data.site.siteMetadata.story}
        </figcaption>
        <img
          src={logo}
          alt={data.site.siteMetadata.title}
          className="us__image"
        />
      </figure>
    </section>
  )
}

About.propTypes = {
  about: PropTypes.object,
}

export default About
