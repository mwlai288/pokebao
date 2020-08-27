import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/hero"
import About from "../components/About/about"
import Menu from "../components/Menu/menu"
import Image from "../components/Gallery/image"
import FindUs from "../components/FindUs/findUs"
// import Footer from "../components/Footer/footer"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Poké Boba"
      description="Get delicious poké bowls made to order or create your own. Try our baos. Pair with boba tea"
    />
    <Hero />
    <About />
    <Menu />
    <Image />
    <FindUs />
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage
