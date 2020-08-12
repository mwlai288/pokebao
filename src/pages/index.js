import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/hero"
import About from "../components/About/about"
import Menu from "../components/Menu/menu"
import Image from "../components/Gallery/image"
import FindUs from "../components/FindUs/findUs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Menu />
    <Image />
    <FindUs />
  </Layout>
)

export default IndexPage
