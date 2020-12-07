import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '../../components/climbing_plan/HomeIcon'
import { Hidden, List, ListItem, ListItemText } from '@material-ui/core'
import SideDrawer from '../../components/climbing_plan/SideDrawer'
import Button from '../../components/Button'

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
    backgroundColor: 'rgb(179, 179, 179)',
  },
  button: {
    color: theme.palette.primary.light
  }
}))

const navLinks = [
  { title: `Home`, path: `/`},
  { title: `Assessment`, path: `/assesment` },
  { title: `Pricing`, path: `/pricing` },
  { title: `Blog`, path: `/blog` },
  { title: `Contact`, path: `/contact` },
  { title: `FAQ`, path: `/faq` }
];

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBarTransparent}>
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
