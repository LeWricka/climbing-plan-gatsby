import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { graphql, useStaticQuery } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import {MOUNTAIN_1, MOUNTAIN_2, MOUNTAIN_3} from '../../providers/constants'
import Img from 'gatsby-image'
import Divider from '@material-ui/core/Divider'
import Button from '../../components/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    display: 'flex',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '90%'
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  button: {
    marginTop: theme.spacing(10),
    maxWidth: 300,
    backgroundColor: theme.palette.secondary.light
  },
  divider: {
    marginTop: theme.spacing(5),
    width: '100%',
    background: theme.palette.primary.light
  }
}));

export default function Services() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
        query {
          allContentfulAsset(filter: {title: {regex: "/mountain\\-part\\-/"}}) {
            edges {
              node {
                title
                fluid(quality:100, maxWidth: 400) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      `)

  const mountain1 = data.allContentfulAsset.edges.find(
    image => image.node.title === MOUNTAIN_1
  )
  const mountain2 = data.allContentfulAsset.edges.find(
    image => image.node.title === MOUNTAIN_2
  )
  const mountain3 = data.allContentfulAsset.edges.find(
    image => image.node.title === MOUNTAIN_3
  )

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography color="inherit" variant="h4" className={classes.title}>
          IMPROVE YOUR CLIMBING
        </Typography>
        <Grid className={classes.grid} container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Img className={classes.image} fluid={mountain1.node.fluid} key={mountain1.node.title} alt={mountain1.node.title} />
              <Typography color="inherit" variant="h5" className={classes.title}>
                Fully detailed workouts
              </Typography>
              <Typography align="center"  color="inherit">
                {'+ 200 exercises for beginners and experienced climbers'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Img className={classes.image} fluid={mountain2.node.fluid} key={mountain2.node.title} alt={mountain2.node.title} />
              <Typography color="inherit" variant="h5" className={classes.title}>
                Personalised to your goals
              </Typography>
              <Typography align="center" color="inherit">
                {'Power, power-endurance, endurance, conditioning and all-in'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Img className={classes.image} fluid={mountain3.node.fluid} key={mountain3.node.title} alt={mountain3.node.title} />
              <Typography color="inherit" variant="h5" className={classes.title}>
                Personalised to your goals
              </Typography>
              <Typography align="center" color="inherit">
                {'Power, power-endurance, endurance, conditioning and all-in'}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Button
          align="center"
          size="large"
          variant="contained"
          className={classes.button}
          href="/assessment"
        >
          Get started
        </Button>
        <Divider variant="fullWidth" className={classes.divider}/>
      </Container>
    </section>
  );
}