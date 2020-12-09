import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

function RemoteImage(props) {
  const { imageName } = props
  const data = useStaticQuery(graphql`
        query {
          allContentfulAsset {
            edges {
              node {
                title
                fluid (maxWidth: 80) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      `)

  const image = data.allContentfulAsset.edges.find(
    image => image.node.title === imageName
  )

  return (
    <Img fluid={image.node.fluid} key={image.node.title} alt={image.node.title} />
  )
}

RemoteImage.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default (RemoteImage)
