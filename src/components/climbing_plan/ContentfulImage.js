import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

function ContentfulImage(props) {
  const { classes } = props
  const data = useStaticQuery(graphql`
        query {
          allContentfulAsset(filter: {description: {eq: "home_main_image"}}) {
            edges {
              node {
                title
                fluid (quality: 100) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      `)
  console.log(data)
  return (
    <Img fluid={data.allContentfulAsset.edges[0].node.fluid} key={data.allContentfulAsset.edges[0].node.title} alt={data.allContentfulAsset.edges[0].node.title} />
  )
}

export default (ContentfulImage)
