import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import { PROGRAM_PREVIEW_1, PROGRAM_PREVIEW_2, PROGRAM_PREVIEW_3, PROGRAM_PREVIEW_4 } from '../../providers/constants'
import Img from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
  },
}))

export default function Slider() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
        query {
          allContentfulAsset(filter: {title: {regex: "/program\\-preview\\-/"}}) {
            edges {
              node {
                title
                fluid(quality:100) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      `)
  console.log('Program preview')
  console.log(data)
  const items = []
  let image = data.allContentfulAsset.edges.find(
    image => image.node.title === PROGRAM_PREVIEW_1
  )
  items.push(image)
  items.push(data.allContentfulAsset.edges.find(
    image => image.node.title === PROGRAM_PREVIEW_2
  ))
  items.push(data.allContentfulAsset.edges.find(
    image => image.node.title === PROGRAM_PREVIEW_3
  ))
  items.push(data.allContentfulAsset.edges.find(
    image => image.node.title === PROGRAM_PREVIEW_4
  ))

  console.log(items)

  return (
    <div style={{ marginTop: '50px', color: '#494949' }}>
      <Carousel
        className="Example"
        autoPlay="true"
        timer={500}
        animation="fade"
        indicators="fade"
        timeout={500}
        navButtonsAlwaysVisible="true"
        navButtonsAlwaysInvisible="true"
        next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
        prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
        onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
      >
        {
          items.map((item) => {
            return <Img className={classes.image} fluid={item.node.fluid} key={item.node.title} alt={item.node.title} />
          })
        }
      </Carousel>
    </div>
  )
}
