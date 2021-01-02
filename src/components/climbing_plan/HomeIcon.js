import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

function HomeIcon() {
  const data = useStaticQuery(graphql`
        query {
          allContentfulAsset(filter: {title: {eq: "logo"}}) {
            edges {
              node {
                title
                fluid(quality:100, maxWidth: 50) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      `)

  return (
    <section style={{ width: '100%' }}>
      <Img fluid={data.allContentfulAsset.edges[0].node.fluid} key={data.allContentfulAsset.edges[0].node.title} alt={data.allContentfulAsset.edges[0].node.title} />
    </section>
  )
}

export default (HomeIcon)
