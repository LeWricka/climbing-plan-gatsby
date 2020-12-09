import React from 'react'
import Button from '../../components/Button'
import { makeStyles } from '@material-ui/core/styles'
import { graphql, useStaticQuery } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import BackgroundImage from 'gatsby-background-image'

const useStyles = makeStyles((theme) => ({
  background: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.primary.dark,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 30
  },
  button: {
    minWidth: 200,
    backgroundColor: theme.palette.secondary.light
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(1),
  },
}))

export default function HomeBanner() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
        query {
          allContentfulAsset(filter: {title: {eq: "home-hero"}}) {
            edges {
              node {
                title
                fluid (quality:100){
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      `)
  return (
    <div className={classes.root}>
      <BackgroundImage
        fluid={data.allContentfulAsset.edges[0].node.fluid}
        className={classes.background}
      >
        <Typography align="center" variant="h1" marked="center" >
          BEST
        </Typography>
        <Typography align="center" variant="h1" marked="center" >
          CLIMBING
        </Typography>
        <Typography align="center" variant="h1" marked="center" >
          TRAINING
        </Typography>
        <Typography align="center" variant="h1" marked="center" >
          PROGRAMS
        </Typography>
        <Typography align="center" variant="h5" className={classes.h5}>
          How to train for climbing
        </Typography>
        <Button
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/assessment"
        >
          Get started
        </Button>
      </BackgroundImage>
    </div>
  )
}