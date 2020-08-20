import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Image = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/example/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 450) {
                ...GatsbyImageSharpFluid
              }
              id
            }
          }
        }
      }
    }
  `)
  return (
    <section id="gallery">
      <div className="container">
        <div className="images">
          <h3 className="title">Instagram</h3>
          <div className="images__container">
            {data.allFile.edges.map(edge => {
              return (
                <React.Fragment key={edge.node.childImageSharp.id}>
                  <Img
                    fluid={edge.node.childImageSharp.fluid}
                    alt="images"
                    className="image"
                  />
                </React.Fragment>
              )
            })}
            {/* {data.allInstaNode.edges.map(edge => {
              return (
                <React.Fragment key={edge.node.id}>
                  <Img
                    fluid={edge.node.localFile.childImageSharp.fluid}
                    alt="images"
                    className="image"
                  />
                </React.Fragment>
              )
            })} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Image

// allInstaNode(limit: 12) {
//   edges {
//     node {
//       id
//       localFile {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// }
