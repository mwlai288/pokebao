import React from "react"

const Image = () => {
  return (
    <section id="gallery">
      <div className="container">
          <div className="images">

        <h3 className="title">Image Gallery</h3>
        <div className="image__container">
          <img
            src="http://placekitten.com/200/300"
            alt="images"
            className="image"
          />
          <img
            src="http://placekitten.com/230/300"
            alt="images"
            className="image"
          />
          <img
            src="http://placekitten.com/200/360"
            alt="images"
            className="image"
          />
          <img
            src="http://placekitten.com/300/300"
            alt="images"
            className="image"
          />
          <img
            src="http://placekitten.com/200/200"
            alt="images"
            className="image"
          />
          <img
            src="http://placekitten.com/200/305"
            alt="images"
            className="image"
          />
          <img
            src="http://placekitten.com/202/302"
            alt="images"
            className="image"
          />
          <img
            src="http://placekitten.com/304/300"
            alt="images"
            className="image"
          />
        </div>
      </div>
          </div>
    </section>
  )
}

export default Image
