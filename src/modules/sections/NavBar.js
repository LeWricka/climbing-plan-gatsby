import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '../../components/climbing_plan/HomeIcon'
import { Hidden, List, ListItem, ListItemText, useScrollTrigger } from '@material-ui/core'
import SideDrawer from '../../components/climbing_plan/SideDrawer'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navDisplayFlex: {
    display: `flex`,
  },
  linkText: {
    textDecoration: `none`,
    color: `white`
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black',
    width: 80,
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },
  appBarTransparent: {
    backgroundColor: 'rgb(179, 179, 179, 0.0)',
    boxShadow: 'none',
  },
  appBarSolid: {
    backgroundColor: '#323232',
  },
  button: {
    color: theme.palette.primary.light
  }
}))

const navLinks = [
  { title: `Home`, path: `/`},
  { title: `Assessment`, path: `/assessment` },
  { title: `Pricing`, path: `/pricing` },
  { title: `Blog`, path: `/blog` },
  { title: `Contact`, path: `/contact` },
  { title: `FAQ`, path: `/faq` }
];

export default function NavBar({forceSolid=false, threshold=620}) {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold
  });
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={`${classes.appBarTransparent} ${
        (trigger === false && !forceSolid) ? '' : classes.appBarSolid
        }`}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Climbing plan
          </Typography>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>
          <Hidden smUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  showSolid: PropTypes.bool.isRequired,
  threshold: PropTypes.number.isRequired,
};
