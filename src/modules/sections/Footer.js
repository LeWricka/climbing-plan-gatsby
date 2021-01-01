import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Divider from '@material-ui/core/Divider'

function Copyright() {
  return (
    <React.Fragment>
      <Link href="https://climbingplan.com">
        {'© Climbing Plan '}
        {new Date().getFullYear()}
      </Link>{' '}
    </React.Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  divider: {
    marginTop: theme.spacing(5),
    width: '100%',
    background: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
  },
  grid: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: '48px',
    height: '48px',
    marginRight: theme.spacing(1),
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <div>
      <Divider variant="fullWidth" className={classes.divider}/>
      <Typography component="footer" className={classes.root}>
          <Container className={classes.container}>
            <Grid container className={classes.grid}>
              <Grid item xs={6} sm={4} md={2}>
                <Typography variant="h6" marked="left" gutterBottom>
                  Legal
                </Typography>
                <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <Link href="/terms/">Terms</Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link href="/privacy/">Privacy</Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Grid
                  container
                  direction="column"
                  justify="flex-end"
                  className={classes.iconsWrapper}
                  spacing={2}
                >
                  <Grid item className={classes.icons}>
                    <a href="https://www.instagram.com/climbingplan/">
                      <img className={classes.icon} src="/climbingplan/instagram-logo.png" alt="Instagram" />
                    </a>
                  </Grid>
                  <Grid item>
                    <Copyright />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Typography>
      {/*</BackgroundImage>*/}
    </div>
  )
}
