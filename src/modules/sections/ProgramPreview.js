import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import Slider from '../../components/climbing_plan/Slider'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(30),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    width: '1000'
  }
}));

export default function ProgramPreview() {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography color="inherit" variant="h4" className={classes.title}>
          Preview a program
        </Typography>
        <Slider className={classes.slider}/>
      </Container>
    </section>
  );
}
