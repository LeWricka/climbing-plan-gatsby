import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { ListItem, makeStyles } from '@material-ui/core'
import Button from '../../components/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
    marginTop: theme.spacing(10),
  },
  main_container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content_container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(10),
    maxWidth: 300,
    backgroundColor: theme.palette.secondary.light,
  }
}))

export default function ContactData() {
  const classes = useStyles()
  return (
    <section className={classes.root}>
      <Container className={classes.main_container}>
        <Typography color="inherit" variant="h4" className={classes.title}>
          Contact us
        </Typography>
        <Typography color="inherit" variant="h6">
          We are all ears
        </Typography>
        <Container className={classes.content_container}>
          <Typography color="inherit">
            <ListItem>
              Find us on:
              <a href="mailto:climbingprograms@gmail.com" target="_top">climbingprograms@gmail.com</a>
            </ListItem>
          </Typography>

          <Typography color="inherit">
            {'+ 200 exercises for beginners and experienced climbers'}
          </Typography>
        </Container>
        <Button
          align="center"
          size="large"
          variant="contained"
          className={classes.button}
          href="/assessment"
        >
          Get started
        </Button>
      </Container>
    </section>
  )
}