import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

function FaqHero() {
  const data = useStaticQuery(graphql`
        query {
          allContentfulAsset(filter: {title: {eq: "faq-hero"}}) {
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

  return (
    <section style={{ width: '100%' }}>
      <Img fluid={data.allContentfulAsset.edges[0].node.fluid} key={data.allContentfulAsset.edges[0].node.title} alt={data.allContentfulAsset.edges[0].node.title} />
    </section>
  )
}

export default (FaqHero)
