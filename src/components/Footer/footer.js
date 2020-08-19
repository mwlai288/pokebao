import React from "react"

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <footer className="footer">
          <p>© {new Date().getFullYear()}, Built by Will Lai</p>

          {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    </section>
  )
}

export default Footer
