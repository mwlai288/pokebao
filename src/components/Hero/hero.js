import React from "react"

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="headline">
          <h3 className="title">Welcome To</h3>
          <h1 className="headline__container--title">Poké Bao</h1>
          <p className="headline__container--options">Poké | Buns | Boba</p>
          <button>
            <a href="#!">Order Now</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
