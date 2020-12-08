import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

function HeroImage() {
  const data = useStaticQuery(graphql`
        query {
          allContentfulAsset(filter: {title: {eq: "logo"}}) {
            edges {
              node {
                title
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      `)

  console.log(data)
  return (
      <BackgroundImage
        fluid={data.allContentfulAsset.edges[0].node.fluid}
        style={{
          height: `100vh`,
          width: `100vw`,
          backgroundColor: `transparent`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
          display: `flex`,
          alignItems: `center`,
        }}
      >
      </BackgroundImage>
  )
}

export default (HeroImage)
